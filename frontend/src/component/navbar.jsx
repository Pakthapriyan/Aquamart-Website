// src/component/navbar.jsx
import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import Login from "./login";
import Signup from "./signup";

// Use env when you deploy; falls back to local backend in dev
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);       // mobile menu
  const [showLogin, setShowLogin] = useState(false); // login modal
  const [showSignup, setShowSignup] = useState(false); // signup modal
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // keep user on refresh
  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const parseResponse = async (res) => {
    // Some errors (404/500) might not send JSON. Try JSON, fall back to text.
    try {
      return await res.json();
    } catch {
      const text = await res.text();
      return { message: text || "Request failed" };
    }
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await parseResponse(res);
      if (!res.ok) throw new Error(data.message || "Login failed");

      // Save auth locally
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      setShowLogin(false);
      alert("Login successful!");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.message || "Something went wrong during login.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await parseResponse(res);
      if (!res.ok) throw new Error(data.message || "Signup failed");

      alert("Signup successful! Please login.");
      setShowSignup(false);
      setShowLogin(true);
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message || "Something went wrong during signup.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out.");
  };

  return (
    <>
      <nav className="w-full fixed top-4 left-0 z-50 flex justify-center">
        <div className="w-[90%] max-w-7xl bg-white shadow-md rounded-xl px-6 py-3 flex items-center justify-between">
          <div className="text-2xl font-extrabold text-blue-900">AQUAMART</div>

          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
            <li className="hover:text-blue-600 cursor-pointer">Supplies</li>
            <li className="hover:text-blue-600 cursor-pointer">Accessories</li>
            <li className="hover:text-blue-600 cursor-pointer">Guide</li>
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
          </ul>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />

            <div className="hidden md:flex gap-2">
              {user ? (
                <>
                  <span className="font-semibold text-blue-700">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    disabled={loading}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition font-semibold disabled:opacity-50"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowSignup(true)}
                    disabled={loading}
                    className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold disabled:opacity-50"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-[72px] w-[90%] max-w-7xl bg-white shadow-lg rounded-xl px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              <li className="hover:text-blue-600 cursor-pointer">Shop</li>
              <li className="hover:text-blue-600 cursor-pointer">Supplies</li>
              <li className="hover:text-blue-600 cursor-pointer">Accessories</li>
              <li className="hover:text-blue-600 cursor-pointer">Guide</li>
              <li className="hover:text-blue-600 cursor-pointer">About us</li>
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              {user ? (
                <>
                  <span className="font-semibold text-blue-700">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    disabled={loading}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg font-semibold disabled:opacity-50"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowSignup(true)}
                    disabled={loading}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold disabled:opacity-50"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>
            <Login handleLogin={handleLogin} loading={loading} />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setShowSignup(false)}
            >
              ×
            </button>
            <Signup handleSignup={handleSignup} loading={loading} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
