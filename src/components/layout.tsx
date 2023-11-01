import Navbar from "./navbar";
import SideBar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full flex relative dark:bg-zinc-800">
      <SideBar />
      <div className="md:pl-80 w-full h-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
