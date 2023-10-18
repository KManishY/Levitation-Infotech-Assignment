import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/tailwind.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
