import React from "react";
import { Link } from "react-router-dom";

export default function SignupSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-lg bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-3">Account created!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Your account was created successfully. Please login to continue.</p>
        <Link to="/login" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">Go to Login</Link>
      </div>
    </div>
  );
}