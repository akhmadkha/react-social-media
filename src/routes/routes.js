import Home from "../views/modules/home";
import Users from "../views/modules/users";
import UserDetail from "../views/modules/users/user_detail";

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
  },
  {
    name: "Users",
    path: "users/:idUser",
    exact: true,
    index: false,
    component: UserDetail
  }
]

export default routes