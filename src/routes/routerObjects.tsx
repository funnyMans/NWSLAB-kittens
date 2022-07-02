import { RouteObject } from "react-router-dom";
import CatList from "../pages/CatList";
import HomePage from "../pages/HomePage";
import Kitten from "../pages/Kitten";
import Projects from "../pages/Projects";
import Team from "../pages/Team";

export const routesList: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/team',
        element: <Team />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/kitties/:id',
        element: <CatList />
    },
    {
        path: '/kitties/:id/:kittenId',
        element: <Kitten />
    }
]