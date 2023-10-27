import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

const Navbar = () => {
  return (
    <div className="p-2 flex justify-between items-center">
      <p>Navbar</p>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
