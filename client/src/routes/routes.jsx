import AddClients from "../views/add_clients";
import AddProjects from "../views/add_projects";

const routes = [
  {
    name: "Add Clients",
    key: "add-clients",
    route: "/admin/add-clients",
    component: <AddClients />,
  },
  {
    name: "Add Projects",
    key: "add-projects",
    route: "/admin/add-projects",
    component: <AddProjects />,
  },
];

export default routes;
