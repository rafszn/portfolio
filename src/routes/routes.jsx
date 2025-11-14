import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/works",
    element: <WorkPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];
