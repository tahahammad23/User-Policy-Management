import React, { useState } from "react";
import type User from "../types/user";
import Modal from "../components/Modal";

export default function Users() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@xyz.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@xyz.com", role: "User" },
    { id: 3, name: "Joshua Jones", email: "joshua.jones@xyz.com", role: "Admin" },
    { id: 4, name: "Frank Walker", email: "frank.walker@xyz.com", role: "Viewer" },
    { id: 5, name: "Virginia Johnson", email: "virginia.johnson@xyz.com", role: "Manager" },
    { id: 6, name: "Margaret Nguyen", email: "margaret.nguyen@xyz.com", role: "Editor" },
    { id: 7, name: "Steven Rivera", email: "steven.rivera@xyz.com", role: "Editor" },
    { id: 8, name: "Michelle Thomas", email: "michelle.thomas@xyz.com", role: "Admin" },
    { id: 9, name: "Deborah Allen", email: "deborah.allen@xyz.com", role: "Admin" },
    { id: 10, name: "Justin Thompson", email: "justin.thompson@xyz.com", role: "Editor" },
    { id: 11, name: "Nathan Miller", email: "nathan.miller@xyz.com", role: "Manager" },
    { id: 12, name: "Jerry Flores", email: "jerry.flores@xyz.com", role: "User" },
    { id: 13, name: "Kenneth Flores", email: "kenneth.flores@xyz.com", role: "Manager" },
    { id: 14, name: "Patrick Thompson", email: "patrick.thompson@xyz.com", role: "Admin" },
    { id: 15, name: "Joan Moore", email: "joan.moore@xyz.com", role: "Editor" },
    { id: 16, name: "Gregory Wright", email: "gregory.wright@xyz.com", role: "Editor" },
    { id: 17, name: "Lisa Roberts", email: "lisa.roberts@xyz.com", role: "Viewer" },
    { id: 18, name: "Sandra Jackson", email: "sandra.jackson@xyz.com", role: "Admin" },
    { id: 19, name: "Jerry Diaz", email: "jerry.diaz@xyz.com", role: "Admin" },
    { id: 20, name: "Michelle Martin", email: "michelle.martin@xyz.com", role: "Manager" },
    { id: 21, name: "Amanda Hernandez", email: "amanda.hernandez@xyz.com", role: "Admin" },
    { id: 22, name: "Christina Ramirez", email: "christina.ramirez@xyz.com", role: "User" },
    { id: 23, name: "Joshua Young", email: "joshua.young@xyz.com", role: "Viewer" },
    { id: 24, name: "Benjamin Gonzalez", email: "benjamin.gonzalez@xyz.com", role: "Manager" },
    { id: 25, name: "Anna Lopez", email: "anna.lopez@xyz.com", role: "User" },
    { id: 26, name: "Samantha Carter", email: "samantha.carter@xyz.com", role: "Viewer" },
    { id: 27, name: "Jack Jones", email: "jack.jones@xyz.com", role: "Editor" },
    { id: 28, name: "Debra Lewis", email: "debra.lewis@xyz.com", role: "Admin" },
    { id: 29, name: "Ronald Martinez", email: "ronald.martinez@xyz.com", role: "Viewer" },
    { id: 30, name: "Jonathan Murphy", email: "jonathan.murphy@xyz.com", role: "Manager" },
    { id: 31, name: "Emma Miller", email: "emma.miller@xyz.com", role: "Manager" },
    { id: 32, name: "Katherine Flores", email: "katherine.flores@xyz.com", role: "Admin" },
    { id: 33, name: "Jose Stewart", email: "jose.stewart@xyz.com", role: "User" },
    { id: 34, name: "Amanda Mitchell", email: "amanda.mitchell@xyz.com", role: "Admin" },
    { id: 35, name: "Christina Phillips", email: "christina.phillips@xyz.com", role: "Viewer" },
    { id: 36, name: "James Jones", email: "james.jones@xyz.com", role: "Editor" },
    { id: 37, name: "Emily Sanchez", email: "emily.sanchez@xyz.com", role: "Editor" },
    { id: 38, name: "Gary Johnson", email: "gary.johnson@xyz.com", role: "User" },
    { id: 39, name: "Frank Turner", email: "frank.turner@xyz.com", role: "Editor" },
    { id: 40, name: "George Phillips", email: "george.phillips@xyz.com", role: "Admin" },
    { id: 41, name: "Scott King", email: "scott.king@xyz.com", role: "User" },
    { id: 42, name: "Jeffrey White", email: "jeffrey.white@xyz.com", role: "Editor" },
    { id: 43, name: "Sharon Diaz", email: "sharon.diaz@xyz.com", role: "Manager" },
    { id: 44, name: "Matthew Hill", email: "matthew.hill@xyz.com", role: "Editor" },
    { id: 45, name: "Joan Walker", email: "joan.walker@xyz.com", role: "Editor" },
    { id: 46, name: "Maria Murphy", email: "maria.murphy@xyz.com", role: "Admin" },
    { id: 47, name: "Sarah Jones", email: "sarah.jones@xyz.com", role: "Viewer" },
    { id: 48, name: "Zachary Campbell", email: "zachary.campbell@xyz.com", role: "Editor" },
    { id: 49, name: "Dennis Lee", email: "dennis.lee@xyz.com", role: "Admin" },
    { id: 50, name: "Laura Gomez", email: "laura.gomez@xyz.com", role: "Manager" },
    { id: 51, name: "Stephanie Turner", email: "stephanie.turner@xyz.com", role: "User" },
    { id: 52, name: "Jonathan Allen", email: "jonathan.allen@xyz.com", role: "User" },
    { id: 53, name: "Andrew King", email: "andrew.king@xyz.com", role: "Admin" },
    { id: 54, name: "Catherine Scott", email: "catherine.scott@xyz.com", role: "Manager" },
    { id: 55, name: "Thomas Nguyen", email: "thomas.nguyen@xyz.com", role: "Admin" },
    { id: 56, name: "Heather Adams", email: "heather.adams@xyz.com", role: "Manager" },
    { id: 57, name: "Sandra Evans", email: "sandra.evans@xyz.com", role: "Editor" },
    { id: 58, name: "Kathleen Ramirez", email: "kathleen.ramirez@xyz.com", role: "Editor" },
    { id: 59, name: "Thomas King", email: "thomas.king@xyz.com", role: "Viewer" },
    { id: 60, name: "Richard Taylor", email: "richard.taylor@xyz.com", role: "Manager" },
    { id: 61, name: "Kathleen Gonzalez", email: "kathleen.gonzalez@xyz.com", role: "User" },
    { id: 62, name: "Thomas Moore", email: "thomas.moore@xyz.com", role: "Editor" },
    { id: 63, name: "Gary Reyes", email: "gary.reyes@xyz.com", role: "Viewer" },
    { id: 64, name: "Dorothy Walker", email: "dorothy.walker@xyz.com", role: "Editor" },
    { id: 65, name: "Brian Rodriguez", email: "brian.rodriguez@xyz.com", role: "User" },
    { id: 66, name: "Rebecca Garcia", email: "rebecca.garcia@xyz.com", role: "Admin" },
    { id: 67, name: "Scott Roberts", email: "scott.roberts@xyz.com", role: "Manager" },
    { id: 68, name: "Jeffrey Nelson", email: "jeffrey.nelson@xyz.com", role: "Viewer" },
    { id: 69, name: "Matthew Rivera", email: "matthew.rivera@xyz.com", role: "User" },
    { id: 70, name: "Samuel Young", email: "samuel.young@xyz.com", role: "User" },
    { id: 71, name: "Steven Torres", email: "steven.torres@xyz.com", role: "Admin" },
    { id: 72, name: "Donald Edwards", email: "donald.edwards@xyz.com", role: "Viewer" },
    { id: 73, name: "Larry Gonzalez", email: "larry.gonzalez@xyz.com", role: "Editor" },
    { id: 74, name: "Patrick Hill", email: "patrick.hill@xyz.com", role: "User" },
    { id: 75, name: "Timothy Smith", email: "timothy.smith@xyz.com", role: "Editor" },
    { id: 76, name: "Donna Williams", email: "donna.williams@xyz.com", role: "User" },
    { id: 77, name: "Brian Scott", email: "brian.scott@xyz.com", role: "Admin" },
    { id: 78, name: "Brenda Perez", email: "brenda.perez@xyz.com", role: "Viewer" },
    { id: 79, name: "Amanda Hill", email: "amanda.hill@xyz.com", role: "Admin" },
    { id: 80, name: "Zachary Carter", email: "zachary.carter@xyz.com", role: "User" },
    { id: 81, name: "Scott Anderson", email: "scott.anderson@xyz.com", role: "Admin" },
    { id: 82, name: "Justin Carter", email: "justin.carter@xyz.com", role: "Editor" },
    { id: 83, name: "Helen Davis", email: "helen.davis@xyz.com", role: "Viewer" },
    { id: 84, name: "Lauren Harris", email: "lauren.harris@xyz.com", role: "Viewer" },
    { id: 85, name: "Joan Wright", email: "joan.wright@xyz.com", role: "Viewer" },
    { id: 86, name: "Heather Lewis", email: "heather.lewis@xyz.com", role: "User" },
    { id: 87, name: "Debra Lewis", email: "debra.lewis@xyz.com", role: "Editor" },
    { id: 88, name: "Thomas Harris", email: "thomas.harris@xyz.com", role: "Admin" },
    { id: 89, name: "Patrick Young", email: "patrick.young@xyz.com", role: "Manager" },
    { id: 90, name: "Diane Turner", email: "diane.turner@xyz.com", role: "Editor" },
    { id: 91, name: "Melissa Wilson", email: "melissa.wilson@xyz.com", role: "Editor" },
    { id: 92, name: "Thomas Lopez", email: "thomas.lopez@xyz.com", role: "Admin" },
    { id: 93, name: "Victoria Martinez", email: "victoria.martinez@xyz.com", role: "User" },
    { id: 94, name: "Lauren Hill", email: "lauren.hill@xyz.com", role: "Viewer" },
    { id: 95, name: "Paul Parker", email: "paul.parker@xyz.com", role: "Viewer" },
    { id: 96, name: "Larry Garcia", email: "larry.garcia@xyz.com", role: "Admin" },
    { id: 97, name: "Justin Miller", email: "justin.miller@xyz.com", role: "Viewer" },
    { id: 98, name: "Sandra Gomez", email: "sandra.gomez@xyz.com", role: "Viewer" },
    { id: 99, name: "Maria Taylor", email: "maria.taylor@xyz.com", role: "Admin" },
    { id: 100, name: "Amy Hill", email: "amy.hill@xyz.com", role: "User" },
    { id: 101, name: "Nicole Carter", email: "nicole.carter@xyz.com", role: "User" },
    { id: 102, name: "Charles Miller", email: "charles.miller@xyz.com", role: "Admin" },
    { id: 103, name: "Rachel Baker", email: "rachel.baker@xyz.com", role: "Manager" },
    { id: 104, name: "Joshua Williams", email: "joshua.williams@xyz.com", role: "Admin" },
    { id: 105, name: "Henry Carter", email: "henry.carter@xyz.com", role: "Viewer" },
    { id: 106, name: "Dennis Hall", email: "dennis.hall@xyz.com", role: "Manager" },
    { id: 107, name: "Larry Sanchez", email: "larry.sanchez@xyz.com", role: "User" },
    { id: 108, name: "Pamela Lee", email: "pamela.lee@xyz.com", role: "Editor" },
    { id: 109, name: "Pamela Rivera", email: "pamela.rivera@xyz.com", role: "Editor" },
    { id: 110, name: "Michael Walker", email: "michael.walker@xyz.com", role: "Manager" },
    { id: 111, name: "Laura Roberts", email: "laura.roberts@xyz.com", role: "Admin" },
    { id: 112, name: "Matthew Hernandez", email: "matthew.hernandez@xyz.com", role: "Admin" },
    { id: 113, name: "Diane Roberts", email: "diane.roberts@xyz.com", role: "Admin" },
    { id: 114, name: "Adam Martinez", email: "adam.martinez@xyz.com", role: "Admin" },
    { id: 115, name: "Peter Walker", email: "peter.walker@xyz.com", role: "User" },
    { id: 116, name: "Nicholas Davis", email: "nicholas.davis@xyz.com", role: "User" },
    { id: 117, name: "Eric Cruz", email: "eric.cruz@xyz.com", role: "Editor" },
    { id: 118, name: "Joshua Williams", email: "joshua.williams@xyz.com", role: "Admin" },
    { id: 119, name: "Jonathan Phillips", email: "jonathan.phillips@xyz.com", role: "Viewer" },
    { id: 120, name: "Joan Campbell", email: "joan.campbell@xyz.com", role: "Editor" },
  ]);


  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  // Handle add/edit form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingUser) {
      // Update existing user
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...u, ...formData } : u))
      );
      setEditingUser(null);
    } else {
      // Add new user
      const newUser: User = {
        id: users.length + 1,
        ...formData,
      };
      setUsers((prev) => [...prev, newUser]);
    }
    setFormData({ name: "", email: "", role: "" });
    setShowModal(false);
  };

  // Handle delete
  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // Filter users
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-6 min-h-screen bg-gray-50 fixed top-40 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Users</h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg max-h-[600px] overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      setEditingUser(user);
                      setFormData({
                        name: user.name,
                        email: user.email,
                        role: user.role,
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
                      setDeletingUserId(user.id);
                    }}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  No users found.
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
          setEditingUser(null);
          setFormData({ name: "", email: "", role: "" });
        }}
        title={editingUser ? "Edit User" : "Add User"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <select
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.role}
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Manager">Manager</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                setEditingUser(null);
                setFormData({ name: "", email: "", role: "" });
              }}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              {editingUser ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal
        show={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeletingUserId(null);
        }}
        title="Confirm Deletion"
      >
        <div>
          <p>Are you sure you want to delete this user?</p>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => {
                setShowDeleteModal(false);
                setDeletingUserId(null);
              }}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (deletingUserId) {
                  handleDelete(deletingUserId);
                }
                setShowDeleteModal(false);
                setDeletingUserId(null);
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