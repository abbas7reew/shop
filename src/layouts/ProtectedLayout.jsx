import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}
