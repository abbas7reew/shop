import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loadingUser } = useAuth();

  // أثناء قراءة المستخدم من LocalStorage — لا تفعل شيء
  if (loadingUser) return null;

  // لو لا يوجد مستخدم → ارجع للّوغين
  if (!user) return <Navigate to="/login" />;

  return children;
}

