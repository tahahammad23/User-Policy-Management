import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import type Policy from "../types/policy";
import Modal from "../components/Modal";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Policies() {
  const [policies, setPolicies] = useState<Policy[]>([
    {
      id: 101,
      userId: "1",
      userName: "John Doe",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-01-01",
    },
    {
      id: 102,
      userId: "2",
      userName: "Jane Smith",
      plan: "Plan B",
      status: "Expired",
      effectiveDate: "2024-06-01",
    },
    {
      id: 103,
      userId: "3",
      userName: "Daniel Lewis",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2024-12-09",
    },
    {
      id: 104,
      userId: "4",
      userName: "Nancy Clark",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2024-12-22",
    },
    {
      id: 105,
      userId: "5",
      userName: "Stephanie Reed",
      plan: "Plan A",
      status: "Pending",
      effectiveDate: "2025-11-25",
    },
    {
      id: 106,
      userId: "6",
      userName: "Cynthia Richardson",
      plan: "Plan C",
      status: "Active",
      effectiveDate: "2025-07-22",
    },
    {
      id: 107,
      userId: "7",
      userName: "Laura Murphy",
      plan: "Plan E",
      status: "Pending",
      effectiveDate: "2025-12-25",
    },
    {
      id: 108,
      userId: "8",
      userName: "Daniel Lewis",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-05-24",
    },
    {
      id: 109,
      userId: "9",
      userName: "Ronald Cook",
      plan: "Plan C",
      status: "Active",
      effectiveDate: "2025-02-04",
    },
    {
      id: 110,
      userId: "10",
      userName: "Lisa Martin",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-05-31",
    },
    {
      id: 111,
      userId: "11",
      userName: "Timothy Bell",
      plan: "Plan C",
      status: "Expired",
      effectiveDate: "2024-08-04",
    },
    {
      id: 112,
      userId: "12",
      userName: "Stephanie Reed",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2026-01-31",
    },
    {
      id: 113,
      userId: "13",
      userName: "Lisa Martin",
      plan: "Plan A",
      status: "Expired",
      effectiveDate: "2024-01-19",
    },
    {
      id: 114,
      userId: "14",
      userName: "George Stewart",
      plan: "Plan C",
      status: "Active",
      effectiveDate: "2025-09-19",
    },
    {
      id: 115,
      userId: "15",
      userName: "Donald Hill",
      plan: "Plan E",
      status: "Expired",
      effectiveDate: "2024-12-12",
    },
    {
      id: 116,
      userId: "16",
      userName: "Cynthia Richardson",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-09-11",
    },
    {
      id: 117,
      userId: "17",
      userName: "Daniel Lewis",
      plan: "Plan B",
      status: "Pending",
      effectiveDate: "2025-12-13",
    },
    {
      id: 118,
      userId: "18",
      userName: "Kevin Parker",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-07-17",
    },
    {
      id: 119,
      userId: "19",
      userName: "Timothy Bell",
      plan: "Plan B",
      status: "Pending",
      effectiveDate: "2025-12-07",
    },
    {
      id: 120,
      userId: "20",
      userName: "Kevin Parker",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-06-23",
    },
    {
      id: 121,
      userId: "21",
      userName: "Donna Mitchell",
      plan: "Plan A",
      status: "Expired",
      effectiveDate: "2024-04-13",
    },
    {
      id: 122,
      userId: "22",
      userName: "Stephanie Reed",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-03-16",
    },
    {
      id: 123,
      userId: "23",
      userName: "Deborah Morris",
      plan: "Plan E",
      status: "Expired",
      effectiveDate: "2025-04-24",
    },
    {
      id: 124,
      userId: "24",
      userName: "Mark Wright",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-01-29",
    },
    {
      id: 125,
      userId: "25",
      userName: "Donna Mitchell",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-04-28",
    },
    {
      id: 126,
      userId: "26",
      userName: "Amanda Evans",
      plan: "Plan A",
      status: "Pending",
      effectiveDate: "2026-01-18",
    },
    {
      id: 127,
      userId: "27",
      userName: "Margaret Allen",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-03-10",
    },
    {
      id: 128,
      userId: "28",
      userName: "Richard Jackson",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2025-11-20",
    },
    {
      id: 129,
      userId: "29",
      userName: "Kathleen Howard",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-10-18",
    },
    {
      id: 130,
      userId: "30",
      userName: "David Williams",
      plan: "Plan D",
      status: "Expired",
      effectiveDate: "2024-10-14",
    },
    {
      id: 131,
      userId: "31",
      userName: "Kimberly Adams",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-07-04",
    },
    {
      id: 132,
      userId: "32",
      userName: "Deborah Morris",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-03-06",
    },
    {
      id: 133,
      userId: "33",
      userName: "Anthony Young",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-01-26",
    },
    {
      id: 134,
      userId: "34",
      userName: "Jason Bailey",
      plan: "Plan C",
      status: "Expired",
      effectiveDate: "2024-04-02",
    },
    {
      id: 135,
      userId: "35",
      userName: "Lisa Martin",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-01-30",
    },
    {
      id: 136,
      userId: "36",
      userName: "Kimberly Adams",
      plan: "Plan C",
      status: "Expired",
      effectiveDate: "2024-07-03",
    },
    {
      id: 137,
      userId: "37",
      userName: "Rebecca Morgan",
      plan: "Plan D",
      status: "Expired",
      effectiveDate: "2024-02-16",
    },
    {
      id: 138,
      userId: "38",
      userName: "Rebecca Morgan",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-10-30",
    },
    {
      id: 139,
      userId: "39",
      userName: "David Williams",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2024-11-10",
    },
    {
      id: 140,
      userId: "40",
      userName: "Ashley Lopez",
      plan: "Plan D",
      status: "Expired",
      effectiveDate: "2025-03-05",
    },
    {
      id: 141,
      userId: "41",
      userName: "Ashley Lopez",
      plan: "Plan D",
      status: "Pending",
      effectiveDate: "2025-12-19",
    },
    {
      id: 142,
      userId: "42",
      userName: "Steven Green",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-06-29",
    },
    {
      id: 143,
      userId: "43",
      userName: "Sharon Rivera",
      plan: "Plan B",
      status: "Expired",
      effectiveDate: "2024-08-11",
    },
    {
      id: 144,
      userId: "44",
      userName: "Michael Brown",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2025-11-18",
    },
    {
      id: 145,
      userId: "45",
      userName: "Matthew Hall",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2024-11-20",
    },
    {
      id: 146,
      userId: "46",
      userName: "Ryan Cox",
      plan: "Plan C",
      status: "Pending",
      effectiveDate: "2025-11-27",
    },
    {
      id: 147,
      userId: "47",
      userName: "Cynthia Richardson",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-04-05",
    },
    {
      id: 148,
      userId: "48",
      userName: "Ronald Cook",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-09-18",
    },
    {
      id: 149,
      userId: "49",
      userName: "Daniel Lewis",
      plan: "Plan E",
      status: "Active",
      effectiveDate: "2025-02-09",
    },
    {
      id: 150,
      userId: "50",
      userName: "Timothy Bell",
      plan: "Plan B",
      status: "Pending",
      effectiveDate: "2025-12-29",
    },
    {
      id: 151,
      userId: "51",
      userName: "Robert Anderson",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-08-26",
    },
    {
      id: 152,
      userId: "52",
      userName: "Steven Green",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-01-25",
    },
    {
      id: 153,
      userId: "53",
      userName: "Thomas Lee",
      plan: "Plan B",
      status: "Active",
      effectiveDate: "2025-06-04",
    },
    {
      id: 154,
      userId: "54",
      userName: "Amy Torres",
      plan: "Plan A",
      status: "Expired",
      effectiveDate: "2024-05-14",
    },
    {
      id: 155,
      userId: "55",
      userName: "David Williams",
      plan: "Plan A",
      status: "Active",
      effectiveDate: "2025-04-21",
    },
    {
      id: 156,
      userId: "56",
      userName: "Mark Wright",
      plan: "Plan D",
      status: "Active",
      effectiveDate: "2025-05-18",
    },
    {
      id: 157,
      userId: "57",
      userName: "Amy Torres",
      plan: "Plan E",
      status: "Expired",
      effectiveDate: "2024-05-12",
    },
    {
      id: 158,
      userId: "58",
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

  // for Adding / Editing value in the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPolicy) {
      setPolicies((prev) =>
        prev.map((p) =>
          p.id === editingPolicy.id ? { ...p, ...formData } : p
        )
      );
      setEditingPolicy(null);
    } else {
      const newPolicy: Policy = {
        id: policies.length
          ? Math.max(...policies.map((p) => p.id)) + 1
          : 101,
        ...formData,
      };
      setPolicies((prev) => [...prev, newPolicy]);
    }
    setFormData({ userId: "", userName: "", plan: "", status: "", effectiveDate: "" });
    setShowModal(false);
  };

  //deleting policy 
  const handleDelete = (id: number) => {
    setPolicies((prev) => prev.filter((p) => p.id !== id));
  };

  //filter
  const filteredPolicies = policies.filter((policy) => {
    const statusMatch = filterStatus === "All" || policy.status === filterStatus;
    const userMatch = !userId || policy.userId === userId;
    return statusMatch && userMatch;
  });

  return (
    <main className="p-6 min-h-screen bg-gray-50 fixed top-40 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Policies
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

          {/* Add Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Policy
          </button>
        </div>
      </div>

      {/* table heading row */}
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
                        userId: String(policy.userId),
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
            placeholder="User ID"
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.userId}
            onChange={(e) =>
              setFormData({ ...formData, userId: e.target.value })
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
                  userId: "",
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