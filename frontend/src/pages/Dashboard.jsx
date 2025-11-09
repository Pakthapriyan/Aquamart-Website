import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold">
        Welcome back, {user?.name || "User"} 👋
      </h1>
    </div>
  );
};

export default Dashboard;
