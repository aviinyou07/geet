"use client";

import { useEffect, useState } from "react";
import { FileText, Users, CheckCircle } from "lucide-react";

export default function DashboardPage() {
  const [adminName, setAdminName] = useState<string>("");
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalUsers: 0,
    publishedBlogs: 0,
  });

  useEffect(() => {
    async function fetchAdmin() {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) throw new Error("Failed to fetch admin info");
        const data = await res.json();
        setAdminName(data.name);

        // Example: Fetch stats from your API
        const statsRes = await fetch("/api/admin/stats");
        if (!statsRes.ok) throw new Error("Failed to fetch stats");
        const statsData = await statsRes.json();
        setStats({
          totalBlogs: statsData.totalBlogs,
          totalUsers: statsData.totalUsers,
          publishedBlogs: statsData.publishedBlogs,
        });
      } catch {
      }
    }
    fetchAdmin();
  }, []);

  const cardData = [
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      icon: <FileText size={24} className="text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <Users size={24} className="text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Published Blogs",
      value: stats.publishedBlogs,
      icon: <CheckCircle size={24} className="text-purple-500" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">Welcome, {adminName}!</h1>
        <p className="text-sm opacity-80">
          Here's a quick overview of your platform's activity.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div key={card.title} className={`flex items-center gap-4 p-6 rounded-lg shadow ${card.bgColor}`}>
            <div className="p-3 bg-white rounded-full">{card.icon}</div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions / Info */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Getting Started</h3>
        <p className="text-gray-600 text-sm">
          Use the sidebar to navigate through the admin panel. Click on any section to manage
          users, blogs, or platform settings.
        </p>
      </div>
    </div>
  );
}
