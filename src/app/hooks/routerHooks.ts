import { useRoutes } from "react-router-dom";
import { routesList } from "../../routes/routerObjects";

export const useAppRoutes = () => useRoutes(routesList);
