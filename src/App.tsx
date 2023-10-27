import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface AppProps {
  children: React.ReactNode;
}
const App = ({ children }: AppProps) => {
  return (
    <div className="px-2 h-full flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default App;
