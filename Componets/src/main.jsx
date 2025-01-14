import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Theme
    accentColor="crimson"  // Sets the primary accent color
    grayColor="sand"       // Sets the grayscale tone
    radius="large"         // Applies large border radius throughout
    scaling="95%"         
  >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Theme>
);
