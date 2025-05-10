import { Navigate } from "react-router";

const Redirect404 = () => {
  return <Navigate to="/error/404" />;
};

export default Redirect404;
