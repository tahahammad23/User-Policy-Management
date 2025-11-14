// import React, { useState, useMemo } from "react";
// import { useLocation } from "react-router-dom";
// import type Policy from "../types/policy";
// import Modal from "../components/Modal";

// function useQuery() {
//   const { search } = useLocation();
//   return useMemo(() => new URLSearchParams(search), [search]);
// }

// export default function Policies({policyData}: {policyData?: Policy[]}) {
//   const [policies, setPolicies] = useState<Policy[]>(policyData || []);

//   const [filterStatus, setFilterStatus] = useState("All");
//   const [showModal, setShowModal] = useState(false);
//   const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
//   const [formData, setFormData] = useState({
//     userId: "",
//     userName: "",
//     plan: "",
//     status: "",
//     effectiveDate: "",
//   });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deletingPolicyId, setDeletingPolicyId] = useState<number | null>(null);
//   const query = useQuery();
//   const userId = query.get("userId");

//   // for Adding / Editing value in the form
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingPolicy) {
//       setPolicies((prev) =>
//         prev.map((p) =>
//           p.id === editingPolicy.id ? { ...p, ...formData } : p
//         )
//       );
//       setEditingPolicy(null);
//     } else {
//       const newPolicy: Policy = {
//         id: policies.length
//           ? Math.max(...policies.map((p) => p.id)) + 1
//           : 101,
//         ...formData,
//       };
//       setPolicies((prev) => [...prev, newPolicy]);
//     }
//     setFormData({ userId: "", userName: "", plan: "", status: "", effectiveDate: "" });
//     setShowModal(false);
//   };

//   //deleting policy 
//   const handleDelete = (id: number) => {
//     setPolicies((prev) => prev.filter((p) => p.id !== id));
//   };

//   //filter
//   const filteredPolicies = policies.filter((policy) => {
//     const statusMatch = filterStatus === "All" || policy.status === filterStatus;
//     const userMatch = !userId || policy.userId === userId;
//     return statusMatch && userMatch;
//   });

//   return (
//     <main className="p-6 min-h-screen bg-gray-50 fixed top-40 w-full">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
//           Policies
//         </h1>

//         <div className="flex gap-3">
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           >
//             <option value="All">All</option>
//             <option value="Active">Active</option>
//             <option value="Expired">Expired</option>
//             <option value="Pending">Pending</option>

//           </select>

//           {/* Add Button */}
//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           >
//             + Add Policy
//           </button>
//         </div>
//       </div>

//       {/* table heading row */}
//       <div className="overflow-x-auto bg-white shadow-md rounded-lg max-h-[600px] overflow-y-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="p-3 text-left">Policy ID</th>
//               <th className="p-3 text-left">User Name</th>
//               <th className="p-3 text-left">Plan</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Effective Date</th>
//               <th className="p-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy) => (
//               <tr
//                 key={policy.id}
//                 className="border-t hover:bg-gray-50 transition-all"
//               >
//                 <td className="p-3">{policy.id}</td>
//                 <td className="p-3">{policy.userName}</td>
//                 <td className="p-3">{policy.plan}</td>
//                 <td
//                   className={`p-3 font-semibold ${
//                     policy.status === "Active"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {policy.status}
//                 </td>
//                 <td className="p-3">
//                   {new Date(policy.effectiveDate).toLocaleDateString()}
//                 </td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => {
//                       setEditingPolicy(policy);
//                       setFormData({
//                         userId: String(policy.userId),
//                         userName: policy.userName,
//                         plan: policy.plan,
//                         status: policy.status,
//                         effectiveDate: policy.effectiveDate,
//                       });
//                       setShowModal(true);
//                     }}
//                     className="text-blue-600 hover:underline mr-3"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => {
//                       setShowDeleteModal(true);
//                       setDeletingPolicyId(policy.id);
//                     }}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {filteredPolicies.length === 0 && (
//               <tr>
//                 <td colSpan={6} className="text-center p-4 text-gray-500">
//                   No policies found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <Modal
//         show={showModal}
//         onClose={() => {
//           setShowModal(false);
//           setEditingPolicy(null);
//           setFormData({
//             userId: "",
//             userName: "",
//             plan: "",
//             status: "",
//             effectiveDate: "",
//           });
//         }}
//         title={editingPolicy ? "Edit Policy" : "Add Policy"}
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="User Name"
//             required
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             value={formData.userName}
//             onChange={(e) =>
//               setFormData({ ...formData, userName: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="User ID"
//             required
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             value={formData.userId}
//             onChange={(e) =>
//               setFormData({ ...formData, userId: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Plan Name"
//             required
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             value={formData.plan}
//             onChange={(e) =>
//               setFormData({ ...formData, plan: e.target.value })
//             }
//           />
//           <select
//             required
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             value={formData.status}
//             onChange={(e) =>
//               setFormData({ ...formData, status: e.target.value })
//             }
//           >
//             <option value="">Select Status</option>
//             <option value="Active">Active</option>
//             <option value="Expired">Expired</option>
//             <option value="Pending">Pending</option>
//           </select>
//           <input
//             type="date"
//             required
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             value={formData.effectiveDate}
//             onChange={(e) =>
//               setFormData({ ...formData, effectiveDate: e.target.value })
//             }
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="button"
//               onClick={() => {
//                 setShowModal(false);
//                 setEditingPolicy(null);
//                 setFormData({
//                   userId: "",
//                   userName: "",
//                   plan: "",
//                   status: "",
//                   effectiveDate: "",
//                 });
//               }}
//               className="px-4 py-2 rounded-lg border"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               {editingPolicy ? "Update" : "Add"}
//             </button>
//           </div>
//         </form>
//       </Modal>

//       <Modal
//         show={showDeleteModal}
//         onClose={() => {
//           setShowDeleteModal(false);
//           setDeletingPolicyId(null);
//         }}
//         title="Confirm Deletion"
//       >
//         <div>
//           <p>Are you sure you want to delete this policy?</p>
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="button"
//               onClick={() => {
//                 setShowDeleteModal(false);
//                 setDeletingPolicyId(null);
//               }}
//               className="px-4 py-2 rounded-lg border"
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 if (deletingPolicyId) {
//                   handleDelete(deletingPolicyId);
//                 }
//                 setShowDeleteModal(false);
//                 setDeletingPolicyId(null);
//               }}
//               className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </main>
//   );
// }
import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type Policy from "../types/policy";
import Modal from "../components/Modal";
import users from "../data/user"; // Import users data

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Policies({policyData}: {policyData?: Policy[]}) {
  const [policies, setPolicies] = useState<Policy[]>(policyData || []);

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

  // Find the current user if userId is in the URL
  const currentUser = userId ? users.find(u => u.id === parseInt(userId)) : null;

  // Pre-fill form data when opening modal for a specific user
  useEffect(() => {
    if (showModal && !editingPolicy && currentUser) {
      setFormData(prev => ({
        ...prev,
        userId: currentUser.id.toString(),
        userName: currentUser.name,
      }));
    }
  }, [showModal, editingPolicy, currentUser]);

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
          {currentUser ? `Policies for ${currentUser.name}` : 'Policies'}
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
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-100"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            disabled={!!currentUser && !editingPolicy}
            readOnly={!!currentUser && !editingPolicy}
          />
          <input
            type="text"
            placeholder="User ID"
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-100"
            value={formData.userId}
            onChange={(e) =>
              setFormData({ ...formData, userId: e.target.value })
            }
            disabled={!!currentUser && !editingPolicy}
            readOnly={!!currentUser && !editingPolicy}
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
