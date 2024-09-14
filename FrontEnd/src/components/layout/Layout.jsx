import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function Layout() {
  return (
    <div className="bg-slate-50/10 overflow-hidden select-none min-h-screen flex flex-col">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
