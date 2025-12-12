import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/homepage/homepage/HomePage.jsx";
import Diagnosis from "./pages/diagnosis/Diagnosis.jsx";
import Solve from "./pages/solve/SDiagnosisPage.jsx";
import Faq from './pages/faq_feedback/Faq.jsx';
import { DarkModeProvider } from "./DarkModeContext.jsx";
import Layout from "./Layout.jsx";
import "./globals.css";
import Treatment from "./pages/treatment/Treatment.jsx";

// ✅ Analytics import
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/home",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },

  {
    path: "/diagnose",
    element: <Layout />,
    children: [{ path: "", element: <Diagnosis /> }],
  },

  {
    path: "/faq",
    element: <Layout />,
    children: [{ path: "", element: <Faq /> }],
  },

  {
    path: "/solve/:caseId",
    element: <Layout />,
    children: [{ path: "", element: <Solve /> }],
  },

  {
    path: "/treatment",
    element: <Layout />,
    children: [{ path: "", element: <Treatment /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
      {/* ✅ This enables Vercel Analytics */}
      <Analytics />
    </DarkModeProvider>
  </StrictMode>
);
