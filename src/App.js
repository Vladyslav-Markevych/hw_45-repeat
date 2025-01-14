import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { IdMeal } from "./pages/IdMeal";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/product/:idMeal' element={<IdMeal />} />
        <Route path=':dishId' element={<></>} />
      </Route>
    </>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
