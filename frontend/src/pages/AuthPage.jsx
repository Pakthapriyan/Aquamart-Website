import React, { useState } from "react";
import Login from "../component/login";
import Signup from "../component/signup";


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Login
// Handle Login
const handleLogin = async (email, password) => {
  setLoading(true);
  setMessage("");

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    // Save token & user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setMessage("✅ Login successful!");
    console.log("User logged in:", data.user);

    // ✅ Redirect to landing page after login
    window.location.href = "/";
  } catch (err) {
    setMessage(err.message);
  } finally {
    setLoading(false);
  }
};


  // Handle Signup
  const handleSignup = async (name, email, password) => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      setMessage("✅ Signup successful! Please log in.");
      setIsLogin(true);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-cyan-100 p-4">
      <div className="w-full max-w-md">
        {message && (
          <p className="text-center mb-4 font-medium text-gray-700">{message}</p>
        )}
        {isLogin ? (
          <Login handleLogin={handleLogin} loading={loading} />
        ) : (
          <Signup handleSignup={handleSignup} loading={loading} />
        )}
        <div className="text-center mt-4">
          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Log in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
