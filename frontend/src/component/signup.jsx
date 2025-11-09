import React, { useState } from "react";

const Signup = ({ handleSignup, loading }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await handleSignup(name, email, password);
    } catch (err) {
      setError(err.message || "Signup failed.");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-blue-900">Signup</h2>

      {error && <p className="text-red-500 font-medium">{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 font-semibold disabled:opacity-50"
      >
        {loading ? "Signing up..." : "Signup"}
      </button>
    </form>
  );
};

export default Signup;
