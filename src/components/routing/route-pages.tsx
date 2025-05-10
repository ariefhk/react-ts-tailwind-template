import { Routes } from "react-router";
import { generatedRouteList, RouteRootInterface } from "@/routes/route.config";
import { Route } from "react-router";
import { FC, JSX } from "react";
import { REDIRECT_PATH_GLOBAL_NOT_FOUND } from "@/constants/redirect.constant";

const routes: RouteRootInterface[] = [...generatedRouteList, REDIRECT_PATH_GLOBAL_NOT_FOUND];

const renderRoute = (route: RouteRootInterface, index: number) => {
  const renderRoutes = (routes: RouteRootInterface[]) => {
    if (routes) {
      return routes.map((routeChild: RouteRootInterface, index) => renderRoute(routeChild, index));
    }
    return null;
  };
  const Component = route.component as unknown as () => JSX.Element;
  return (
    <Route path={route.path} key={`${index + 1}-${route.name}`} element={<Component />}>
      {route.routes && renderRoutes(route.routes)}
    </Route>
  );
};

const RoutePages: FC = () => {
  return <Routes>{routes.map(renderRoute)}</Routes>;
};

export default RoutePages;
