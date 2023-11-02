import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_CLERK_PUBLISHABLE_KEY": JSON.stringify(
        env.REACT_APP_CLERK_PUBLISHABLE_KEY
      ),
      "process.env.REACT_CLOUDINARY_CLOUDNAME": JSON.stringify(
        env.REACT_CLOUDINARY_CLOUDNAME
      ),
      "process.env.REACT_CLOUDINARY_API_KEY": JSON.stringify(
        env.REACT_CLOUDINARY_API_KEY
      ),
      "process.env.REACT_CLOUDINARY_UPLOAD_PRESET": JSON.stringify(
        env.REACT_CLOUDINARY_UPLOAD_PRESET
      ),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
