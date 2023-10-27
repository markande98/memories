import Navbar from "./navbar";
import SideBar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full flex relative">
      <SideBar />
      <div className="pl-80 w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;