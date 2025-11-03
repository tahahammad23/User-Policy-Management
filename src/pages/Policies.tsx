import React, { useState } from "react";
import type Policy from "../types/policy";

export default function Policies() {
  const [policies, setPolicies] = useState<Policy[]>([
    {
      id: 101,
      userName: "John Doe",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-01-01",
    },
    {
      id: 102,
      userName: "Jane Smith",
      plan: "Plan B",
      status: "Expired",
      effectiveDate: "2024-06-01",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
  const [formData, setFormData] = useState({
    userName: "",
    plan: "",
    status: "",
    effectiveDate: "",
  });

  // 🧩 Handle Add/Edit form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPolicy) {
      // Update existing policy
      setPolicies((prev) =>
        prev.map((p) =>
          p.id === editingPolicy.id ? { ...p, ...formData } : p
        )
      );
      setEditingPolicy(null);
    } else {
      // Add new policy
      const newPolicy: Policy = {
        id: policies.length
          ? Math.max(...policies.map((p) => p.id)) + 1
          : 101,
        ...formData,
      };
      setPolicies((prev) => [...prev, newPolicy]);
    }
    setFormData({ userName: "", plan: "", status: "", effectiveDate: "" });
    setShowModal(false);
  };

  // 🗑️ Delete a policy
  const handleDelete = (id: number) => {
    setPolicies((prev) => prev.filter((p) => p.id !== id));
  };

  // 🔍 Apply status filter
  const filteredPolicies =
    filterStatus === "All"
      ? policies
      : policies.filter((p) => p.status === filterStatus);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Policies
        </h1>

        <div className="flex gap-3">
          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
          </select>

          {/* Add Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Policy
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
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
              <tr
                key={policy.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="p-3">{policy.id}</td>
                <td className="p-3">{policy.userName}</td>
                <td className="p-3">{policy.plan}</td>
                <td
                  className={`p-3 font-semibold ${
                    policy.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {policy.status}
                </td>
                <td className="p-3">
                  {new Date(policy.effectiveDate).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      setEditingPolicy(policy);
                      setFormData({
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
                    onClick={() => handleDelete(policy.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredPolicies.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No policies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center  z-50 bg-gray-500/50 ">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingPolicy ? "Edit Policy" : "Add Policy"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="User Name"
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.userName}
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Plan Name"
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.plan}
                onChange={(e) =>
                  setFormData({ ...formData, plan: e.target.value })
                }
              />
              <select
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
              </select>
              <input
                type="date"
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.effectiveDate}
                onChange={(e) =>
                  setFormData({ ...formData, effectiveDate: e.target.value })
                }
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingPolicy(null);
                    setFormData({
                      userName: "",
                      plan: "",
                      status: "",
                      effectiveDate: "",
                    });
                  }}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  {editingPolicy ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}