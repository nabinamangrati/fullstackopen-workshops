import { createRoot } from "react-dom/client";
// import FormApp from "./FormApp";
import App from "./FormApp";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<FormApp />);
root.render(<App />);
