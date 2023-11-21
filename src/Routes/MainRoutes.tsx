import { useRoutes } from "react-router-dom";
import Home from "../Components/Home";
import Dog from "../Components/dogs";
import Cat from "../Components/cats";
import Fish from "../Components/fishes";

export const MainRoute = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/dog", element: <Dog /> },
    { path: "/cat", element: <Cat /> },
    { path: "/fish", element: <Fish /> },
  ]);
};
