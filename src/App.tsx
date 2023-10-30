import Layout from "@/components/layout";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Photos from "@/components/user-photo/photos";
import ModalProvider from "./components/providers/modal-provider";
import { ToasterProvider } from "./components/providers/toaster-provider";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="*"
          element={
            <>
              <SignedIn>
                <div className="h-full">
                  <Layout>
                    <ToasterProvider />
                    <ModalProvider />
                    <Routes>
                      <Route path="/" element={<Photos />} />
                      <Route path="/albums" element={<div>Album</div>} />
                      <Route path="/folders" element={<div>folder</div>} />
                    </Routes>
                  </Layout>
                </div>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
};

export default App;
