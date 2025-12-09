import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    setLoading(true);
    const res = await login({ email, password });
    setLoading(false);

    if (res.success) navigate("/");
    else setError({ general: res.message });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-300">
          Login
        </h2>

        {error.general && <p className="text-red-500 mb-2 text-center">{error.general}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-500 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}




