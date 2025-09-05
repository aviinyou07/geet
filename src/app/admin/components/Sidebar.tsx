"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const pages = ["dashboard", "blogs", "settings"] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [adminName, setAdminName] = useState<string>("Admin");

  useEffect(() => {
    async function fetchAdmin() {
      try {
        const res = await fetch("/api/admin/me", { method: "GET", credentials: "include" });
        if (!res.ok) throw new Error("Failed to fetch admin info");
        const data = await res.json();
        setAdminName(data.name || "Admin");
      } catch (err) {
        console.error(err);
        setAdminName("Admin");
      }
    }
    fetchAdmin();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <div className="text-xl font-semibold">Admin Panel</div>
        <div className="text-sm text-gray-600 mt-1">Welcome, {adminName}</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
        {pages.map((page) => {
          const href = `/admin/${page}`;
          const isActive = pathname === href;

          return (
            <Link
              key={page}
              href={href}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-6 py-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 rounded hover:bg-red-200 text-red-600 font-semibold"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
