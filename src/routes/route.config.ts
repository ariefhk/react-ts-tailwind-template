import React from "react";

interface RouteInterface {
  name: string;
  path: string;
  component: React.FC;
}

export interface RouteRootInterface extends RouteInterface {
  routes?: RouteRootInterface[];
}

const routeModules = import.meta.glob("./**/*.route.ts", { eager: true });

export const generatedRouteList = Object.values(routeModules).flatMap(
  (module) => (module as { default: RouteRootInterface }).default
);
