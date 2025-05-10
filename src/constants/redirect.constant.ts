import Redirect404 from "@/components/routing/redirect-404";

const REDIRECT_PATH = {
  NOT_FOUND: {
    name: "redirect-not-found",
    path: "",
    component: Redirect404,
  },
  GLOBAL_NOT_FOUND: {
    name: "redirect-global-not-found",
    path: "*",
    component: Redirect404,
  },
};

export const REDIRECT_PATH_NOT_FOUND = REDIRECT_PATH.NOT_FOUND;
export const REDIRECT_PATH_GLOBAL_NOT_FOUND = REDIRECT_PATH.GLOBAL_NOT_FOUND;
