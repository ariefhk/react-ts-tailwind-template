import AppLayout from "@/layouts/app-layout";
import { RouteRootInterface } from "./route.config";
import HomePage from "@/pages/app/home-page";
import { REDIRECT_PATH_NOT_FOUND } from "@/constants/redirect.constant";

const appRoutes: RouteRootInterface[] = [
  {
    name: "app-layout",
    path: "/",
    component: AppLayout,
    routes: [
      {
        name: "home-page",
        path: "/",
        component: HomePage,
      },

      // Redirect if the sub path is not found
      REDIRECT_PATH_NOT_FOUND,
    ],
  },
];
export default appRoutes;
