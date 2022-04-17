import Home from "../views/modules/home";
import Users from "../views/modules/users";

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    index: true,
    component: Home
  },
  {
    name: "Users",
    path: "users",
    exact: true,
    index: false,
    component: Users
  }
]

export default routes