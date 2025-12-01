import React, { useState } from "react";
import { Link } from "react-router-dom";
import type User from "../types/user";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/slices/userSlice";


export default function Users({allUsers}: { allUsers: User[]}) {

  const dispatch = useDispatch();


  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  // adding & editing user
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingUser) {
      dispatch(updateUser({ ...editingUser, ...formData }));
      setEditingUser(null);
    } else {
      const newUser: User = {
        id: Math.max(...allUsers.map(u => u.id)) + 1,
        ...formData,
      };
      dispatch(addUser(newUser));
    }
    setFormData({ name: "", email: "", role: "" });
    setShowModal(false);
  };

  // Deletion 
  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const filteredUsers = allUsers.filter(
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

      {/* table values*/}
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
                  <Link
                    to={`/policies?userId=${user.id}`}
                    className="text-green-600 hover:underline mr-3"
                  >
                    View Policies
                  </Link>
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