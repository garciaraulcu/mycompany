import Body from "./components/TBody.vue";
import About from "./components/About.vue";
import Customers from "./components/Customers.vue";
import Services from "./components/Services.vue";

const routes = [
  {
    path: "/",
    component: Body,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/services",
    component: Services,
  },
];

export default routes;
