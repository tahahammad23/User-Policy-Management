import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type Policy from "../types/policy";
import type User from "../types/user";
import Modal from "../components/Modal";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Policies({
  allPolicies,
  setPolicies,
  allUsers, 
}: {
  allPolicies: Policy[];
  setPolicies: React.Dispatch<React.SetStateAction<Policy[]>>;
  allUsers: User[];
}) {
  const [filterStatus, setFilterStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    plan: "",
    status: "",
    effectiveDate: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingPolicyId, setDeletingPolicyId] = useState<number | null>(null);

  const query = useQuery();
  const userId = query.get("userId");
  const userNameFromQS = query.get("userName") || "";

  // Resolve current user from live users (not static import)
  const currentUser = userId ? allUsers.find((u) => u.id === Number(userId)) : null;

  // Prefill when adding new policy for specific user
  useEffect(() => {
    if (showModal && !editingPolicy && (currentUser || userId)) {
      setFormData((prev) => ({
        ...prev,
        userId: userId ? String(userId) : "",
        userName: currentUser?.name || userNameFromQS || "",
      }));
    }
  }, [showModal, editingPolicy, currentUser, userId, userNameFromQS]);

  // Add/Edit 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const normalized = {
      userId: String(formData.userId),        
      userName: formData.userName.trim(),
      plan: formData.plan.trim(),
      status: formData.status,
      effectiveDate: formData.effectiveDate,
    };

    if (editingPolicy) {
      setPolicies((prev) =>
        prev.map((p) => (p.id === editingPolicy.id ? { ...p, ...normalized } : p))
      );
      setEditingPolicy(null);
    } else {
      const newPolicy: Policy = {
        id: allPolicies.length ? Math.max(...allPolicies.map((p) => p.id)) + 1 : 101,
        ...normalized, // userId is string here
      };
      setPolicies((prev) => [...prev, newPolicy]);
    }

    setFormData({
      userId: "",
      userName: "",
      plan: "",
      status: "",
      effectiveDate: "",
    });
    setShowModal(false);
  };

  // Deleteion
  const handleDelete = (id: number) => {
    setPolicies((prev) => prev.filter((p) => p.id !== id));
  };

  // Filter safely by userId 
  const filteredPolicies = allPolicies.filter((policy) => {
    const statusMatch = filterStatus === "All" || policy.status === filterStatus;
    const userMatch = !userId || String(policy.userId) === String(userId);
    return statusMatch && userMatch;
  });

  return (
    <main className="p-6 min-h-screen bg-gray-50 fixed top-40 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          {currentUser || userNameFromQS
            ? `Policies for ${currentUser?.name || userNameFromQS}`
            : "Policies"}
        </h1>

        <div className="flex gap-3">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Pending">Pending</option>
          </select>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Policy
          </button>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg max-h-[600px] overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Policy ID</th>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Plan</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Effective Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPolicies.map((policy) => (
              <tr key={policy.id} className="border-t hover:bg-gray-50 transition-all">
                <td className="p-3">{policy.id}</td>
                <td className="p-3">{policy.userName}</td>
                <td className="p-3">{policy.plan}</td>
                <td className={`p-3 font-semibold ${policy.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                  {policy.status}
                </td>
                <td className="p-3">{new Date(policy.effectiveDate).toLocaleDateString()}</td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      setEditingPolicy(policy);
                      setFormData({
                        userId: String(policy.userId), // string
                        userName: policy.userName,
                        plan: policy.plan,
                        status: policy.status,
                        effectiveDate: policy.effectiveDate,
                      });
                      setShowModal(true);
                    }}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setShowDeleteModal(true);
                      setDeletingPolicyId(policy.id);
                    }}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredPolicies.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">No policies found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingPolicy(null);
          setFormData({
            userId: "",
            userName: "",
            plan: "",
            status: "",
            effectiveDate: "",
          });
        }}
        title={editingPolicy ? "Edit Policy" : "Add Policy"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* USER PICKER */}
          {(currentUser || userId) ? (
            // When navigated from a specific user, keep fields locked
            <>
              <input
                type="text"
                placeholder="User Name"
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-100"
                value={formData.userName}
                disabled
                readOnly
              />
              <input
                type="text"
                placeholder="User ID"
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-100"
                value={formData.userId}
                disabled
                readOnly
              />
            </>
          ) : (
            // Dropdown option to select user
            <select
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.userId}
              onChange={(e) => {
                const selected = allUsers.find((u) => u.id === Number(e.target.value));
                setFormData({
                  ...formData,
                  userId: e.target.value,                 
                  userName: selected ? selected.name : "",
                });
              }}
            >
              <option value="">Select User</option>
              {allUsers.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.role})
                </option>
              ))}
            </select>
          )}

          <input
            type="text"
            placeholder="Plan Name"
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          />
          <select
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Pending">Pending</option>
          </select>
          <input
            type="date"
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.effectiveDate}
            onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                setEditingPolicy(null);
                setFormData({ userId: "", userName: "", plan: "", status: "", effectiveDate: "" });
              }}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              {editingPolicy ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal
        show={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeletingPolicyId(null);
        }}
        title="Confirm Deletion"
      >
        <div>
          <p>Are you sure you want to delete this policy?</p>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => {
                setShowDeleteModal(false);
                setDeletingPolicyId(null);
              }}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (deletingPolicyId) {
                  handleDelete(deletingPolicyId);
                }
                setShowDeleteModal(false);
                setDeletingPolicyId(null);
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
