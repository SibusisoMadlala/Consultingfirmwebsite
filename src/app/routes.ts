import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { CareersPage } from "@/app/pages/CareersPage";
import { ContactPage } from "@/app/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "careers", Component: CareersPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
