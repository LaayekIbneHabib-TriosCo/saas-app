// components
// auth
import PageNotFound from "../views/dashboard/404";
import SignUp from "../views/auth/admin/sign_up";
import SignIn from "../views/auth/admin/sign_in";
import ResetPassword from "../views/auth/admin/reset_password";
import ViewOnly from "../views/auth/client/sign_in";
// app
import AddClients from "../views/dashboard/add_clients";
import AddProjects from "../views/dashboard/add_projects";

const routes = [
  // auth
  {
    name: "Page Not Found",
    key: "page-not-found",
    route: "/404",
    component: <PageNotFound />,
  },
  {
    name: "Sign Up",
    key: "sign-up",
    route: "/admin/sign-up",
    component: <SignUp />,
  },
  {
    name: "Sign In",
    key: "sign-in",
    route: "/admin/sign-in",
    component: <SignIn />,
  },
  {
    name: "Reset Password",
    key: "reset-password",
    route: "/admin/reset-password",
    component: <ResetPassword />,
  },
  {
    name: "View Only",
    key: "view-only",
    route: "/client/view-only",
    component: <ViewOnly />,
  },
  // app
  {
    name: "Add Clients",
    key: "add-clients",
    route: "/admin/authenticated/add-clients",
    component: <AddClients />,
  },
  {
    name: "Add Projects",
    key: "add-projects",
    route: "/admin/authenticated/add-projects",
    component: <AddProjects />,
  },
];

export default routes;
