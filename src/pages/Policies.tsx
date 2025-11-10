import React, { useState } from "react";
import type Policy from "../types/policy";
import Modal from "../components/Modal";

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
    {
      id: 103,
      userName: "Daniel Lewis",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2024-12-09",
    },
    {
      id: 104,
      userName: "Nancy Clark",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2024-12-22",
    },
    {
      id: 105,
      userName: "Stephanie Reed",
      plan: "Plan A",
      status: "Pending",
      effectiveDate: "2025-11-25",
    },
    {
      id: 106,
      userName: "Cynthia Richardson",
      plan: "Plan C",
      status: "Active",
      effectiveDate: "2025-07-22",
    },
    {
      id: 107,
      userName: "Laura Murphy",
      plan: "Plan E",
      status: "Pending",
      effectiveDate: "2025-12-25",
    },
    {
      id: 108,
      userName: "Daniel Lewis",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-05-24",
    },
    {
      id: 109,
      userName: "Ronald Cook",
      plan: "Plan C",
      status: "Active",
      effectiveDate: "2025-02-04",
    },
    {
      id: 110,
      userName: "Lisa Martin",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-05-31",
    },
    {
      id: 111,
      userName: "Timothy Bell",
      plan: "Plan C",
      status: "Expired",
      effectiveDate: "2024-08-04",
    },
    {
      id: 112,
      userName: "Stephanie Reed",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2026-01-31",
    },
    {
      id: 113,
      userName: "Lisa Martin",
      plan: "Plan A",
      status: "Expired",
      effectiveDate: "2024-01-19",
    },
    {
      id: 114,
      userName: "George Stewart",
      plan: "Plan C",
      status: "Active",
      effectiveDate: "2025-09-19",
    },
    {
      id: 115,
      userName: "Donald Hill",
      plan: "Plan E",
      status: "Expired",
      effectiveDate: "2024-12-12",
    },
    {
      id: 116,
      userName: "Cynthia Richardson",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-09-11",
    },
    {
      id: 117,
      userName: "Daniel Lewis",
      plan: "Plan B",
      status: "Pending",
      effectiveDate: "2025-12-13",
    },
    {
      id: 118,
      userName: "Kevin Parker",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-07-17",
    },
    {
      id: 119,
      userName: "Timothy Bell",
      plan: "Plan B",
      status: "Pending",
      effectiveDate: "2025-12-07",
    },
    {
      id: 120,
      userName: "Kevin Parker",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-06-23",
    },
    {
      id: 121,
      userName: "Donna Mitchell",
      plan: "Plan A",
      status: "Expired",
      effectiveDate: "2024-04-13",
    },
    {
      id: 122,
      userName: "Stephanie Reed",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-03-16",
    },
    {
      id: 123,
      userName: "Deborah Morris",
      plan: "Plan E",
      status: "Expired",
      effectiveDate: "2025-04-24",
    },
    {
      id: 124,
      userName: "Mark Wright",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-01-29",
    },
    {
      id: 125,
      userName: "Donna Mitchell",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-04-28",
    },
    {
      id: 126,
      userName: "Amanda Evans",
      plan: "Plan A",
      status: "Pending",
      effectiveDate: "2026-01-18",
    },
    {
      id: 127,
      userName: "Margaret Allen",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-03-10",
    },
    {
      id: 128,
      userName: "Richard Jackson",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2025-11-20",
    },
    {
      id: 129,
      userName: "Kathleen Howard",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-10-18",
    },
    {
      id: 130,
      userName: "David Williams",
      plan: "Plan D",
      status: "Expired",
      effectiveDate: "2024-10-14",
    },
    {
      id: 131,
      userName: "Kimberly Adams",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-07-04",
    },
    {
      id: 132,
      userName: "Deborah Morris",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-03-06",
    },
    {
      id: 133,
      userName: "Anthony Young",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-01-26",
    },
    {
      id: 134,
      userName: "Jason Bailey",
      plan: "Plan C",
      status: "Expired",
      effectiveDate: "2024-04-02",
    },
    {
      id: 135,
      userName: "Lisa Martin",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-01-30",
    },
    {
      id: 136,
      userName: "Kimberly Adams",
      plan: "Plan C",
      status: "Expired",
      effectiveDate: "2024-07-03",
    },
    {
      id: 137,
      userName: "Rebecca Morgan",
      plan: "Plan D",
      status: "Expired",
      effectiveDate: "2024-02-16",
    },
    {
      id: 138,
      userName: "Rebecca Morgan",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-10-30",
    },
    {
      id: 139,
      userName: "David Williams",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2024-11-10",
    },
    {
      id: 140,
      userName: "Ashley Lopez",
      plan: "Plan D",
      status: "Expired",
      effectiveDate: "2025-03-05",
    },
    {
      id: 141,
      userName: "Ashley Lopez",
      plan: "Plan D",
      status: "Pending",
      effectiveDate: "2025-12-19",
    },
    {
      id: 142,
      userName: "Steven Green",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-06-29",
    },
    {
      id: 143,
      userName: "Sharon Rivera",
      plan: "Plan B",
      status: "Expired",
      effectiveDate: "2024-08-11",
    },
    {
      id: 144,
      userName: "Michael Brown",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2025-11-18",
    },
    {
      id: 145,
      userName: "Matthew Hall",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2024-11-20",
    },
    {
      id: 146,
      userName: "Ryan Cox",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2025-11-27",
    },
    {
      id: 147,
      userName: "Cynthia Richardson",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-04-05",
    },
    {
      id: 148,
      userName: "Ronald Cook",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-09-18",
    },
    {
      id: 149,
      userName: "Daniel Lewis",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-02-09",
    },
    {
      id: 150,
      userName: "Timothy Bell",
      plan: "Plan B",
      status: "Pending",
      effectiveDate: "2025-12-29",
    },
    {
      id: 151,
      userName: "Robert Anderson",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-08-26",
    },
    {
      id: 152,
      userName: "Steven Green",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-01-25",
    },
    {
      id: 153,
      userName: "Thomas Lee",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-06-04",
    },
    {
      id: 154,
      userName: "Amy Torres",
      plan: "Plan A",
      status: "Expired",
      effectiveDate: "2024-05-14",
    },
    {
      id: 155,
      userName: "David Williams",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-04-21",
    },
    {
      id: 156,
      userName: "Mark Wright",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-05-18",
    },
    {
      id: 157,
      userName: "Amy Torres",
      plan: "Plan E",
      status: "Expired",
      effectiveDate: "2024-05-12",
    },
    {
      id: 158,
      userName: "William Taylor",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-07-02",
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingPolicyId, setDeletingPolicyId] = useState<number | null>(null);

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
    <main className="p-6 min-h-screen bg-gray-50 fixed top-40 w-full">
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
            <option value="Pending">Pending</option>

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
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No policies found.
                </td>
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
            userName: "",
            plan: "",
            status: "",
            effectiveDate: "",
          });
        }}
        title={editingPolicy ? "Edit Policy" : "Add Policy"}
      >
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
            <option value="Pending">Pending</option>
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