import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//import BrowserRouter dari react router
import { BrowserRouter } from "react-router-dom";

//import AuthProvider
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
