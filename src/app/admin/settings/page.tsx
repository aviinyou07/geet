"use client";

import { useState, useEffect } from "react";
import { Edit, Check, X } from "lucide-react";

interface AdminUser {
  name: string;
  email: string;
}

export default function SettingsPage() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Profile states
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [profilePassword, setProfilePassword] = useState("");

  // Password change states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI states
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  // Fetch admin data
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) throw new Error("Failed to fetch admin data");
        const data: AdminUser = await res.json();
        setUser(data);
        setNameInput(data.name);
        setEmailInput(data.email);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAdmin();
  }, []);

  // Auto-clear messages
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(""), 4000);
    return () => clearTimeout(timer);
  }, [message]);

  // Save profile
  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!validateEmail(emailInput)) return setErrors({ email: "Enter a valid email." });
    if (!profilePassword) return setErrors({ password: "Enter current password." });

    try {
      setLoading(true);
      const res = await fetch("/api/admin/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name: nameInput, email: emailInput, currentPassword: profilePassword }),
      });
      const data = await res.json();
      if (!res.ok) return setErrors({ password: data.message || "Failed to update profile." });

      setUser({ name: nameInput, email: emailInput });
      setIsEditing(false);
      setProfilePassword("");
      setMessage("Profile updated successfully!");
    } catch {
      setErrors({ password: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  // Change password
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!currentPassword) return setErrors({ password: "Enter current password." });
    if (!validatePassword(newPassword)) return setErrors({ password: "Password must be 8+ chars with uppercase, lowercase, and number." });
    if (newPassword !== confirmPassword) return setErrors({ password: "Passwords do not match." });

    try {
      setLoading(true);
      const res = await fetch("/api/admin/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) return setErrors({ password: data.message || "Failed to update password." });

      setMessage("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setErrors({ password: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="text-center mt-6">Loading admin data...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 -mb-px font-semibold ${activeTab === "profile" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 -mb-px font-semibold ${activeTab === "password" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600 hover:text-green-600"}`}
          onClick={() => setActiveTab("password")}
        >
          Password
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          {!isEditing ? (
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {user.name}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700" onClick={() => setIsEditing(true)}>
                <Edit size={16} /> Edit
              </button>
            </div>
          ) : (
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full border p-2 rounded" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Current Password</label>
                <input type="password" value={profilePassword} onChange={(e) => setProfilePassword(e.target.value)} className="w-full border p-2 rounded" placeholder="Enter current password to confirm changes" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div className="flex space-x-2">
                <button type="submit" disabled={loading} className={`bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}>
                  {loading ? "Saving..." : <><Check size={16} /> Save</>}
                </button>
                <button type="button" disabled={loading} className={`bg-gray-400 text-white px-4 py-2 rounded flex items-center gap-1 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"}`} onClick={() => { setIsEditing(false); setNameInput(user.name); setEmailInput(user.email); setErrors({}); }}>
                  <X size={16} /> Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Password Tab */}
      {activeTab === "password" && (
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Current Password</label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">New Password</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm New Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border p-2 rounded" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button type="submit" disabled={loading} className={`bg-green-600 text-white px-4 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"}`}>
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      )}

      {message && <p className="mt-4 text-center text-sm text-gray-700 font-medium">{message}</p>}
    </div>
  );
}
