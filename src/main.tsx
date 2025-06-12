import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "@fontSource/roboto/300.css";
import "@fontSource/roboto/400.css";
import "@fontSource/roboto/500.css";
import "@fontSource/roboto/700.css";

createRoot(document.getElementById("root")!).render(<App />);
