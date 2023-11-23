import { useRoutes } from "react-router-dom";
import AnimalsFilter from "../Components/AnimalsComponents/AnimalsFilter";
import { NotFounded } from "../Components/RouteComponents/notFounded/notFounded";

export const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <AnimalsFilter
          animalsType=""
          animalsName="Animais"
          animalsImage="../../public/images/allanimals.jpg"
        />
      ),
    },
    {
      path: "/dog",
      element: (
        <AnimalsFilter
          animalsType="dog"
          animalsName="Cachorros"
          animalsImage="../../public/images/banner_dog.jpg"
        />
      ),
    },
    {
      path: "/cat",
      element: (
        <AnimalsFilter
          animalsType="cat"
          animalsName="Gatos"
          animalsImage="../../public/images/banner_cat.jpg"
        />
      ),
    },
    {
      path: "/fish",
      element: (
        <AnimalsFilter
          animalsType="fish"
          animalsName="Peixes"
          animalsImage="../../public/images/banner_fish.jpg"
        />
      ),
    },
    {
      path: "/*",
      element: <NotFounded />,
    },
  ]);
};
