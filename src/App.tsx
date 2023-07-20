import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Container } from "./styles";
import { GlobalStyles } from "./styles/global";
import { AddNewContact } from "./pages/AddNewContact";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/new-contact",
    element: <AddNewContact />,
  },
]);

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </Container>
  );
};
