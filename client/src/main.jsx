// root
import React from "react";
import ReactDOM from "react-dom/client";
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// components
import App from "./App.jsx";
import Loading from "./components/loading/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RequiredAuthProvider
      authUrl={import.meta.env.VITE_AUTH_URL}
      displayWhileLoading={<Loading />}
      displayIfLoggedOut={<RedirectToLogin />}
    >
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </RequiredAuthProvider>
  </React.StrictMode>
);
