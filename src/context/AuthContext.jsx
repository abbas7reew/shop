import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoadingUser(false);
  }, []);

  const signup = async ({ email, password }) => {
    const registered = JSON.parse(localStorage.getItem("registeredUser"));
    if (registered && registered.email === email) {
      return { success: false, message: "This email is already registered." };
    }

    const newUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    return { success: true };
  };

  const login = async ({ email, password }) => {
    const registered = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registered || registered.email !== email || registered.password !== password) {
      return { success: false, message: "Invalid email or password." };
    }

    localStorage.setItem("user", JSON.stringify(registered));
    setUser(registered);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loadingUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
