"use client";

import { useState } from "react";
import { api } from "@/lib/api-wrapper";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email });
      alert(`Logged in: ${res.token}`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 ml-2">
        Login
      </button>
    </div>
  );
}
