import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/routes";

const useAuth = () => {
  const user = localStorage.getItem("authenticated");
  if (user) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const auth = useAuth();
  console.log("auth", auth);
  // const routeComponents = routes.map((r, i) => {
  //   let route;
  //   if (r.private) {
  //     route = <ProtectedRoute key={i} {...r} />;
  //   } else {
  //     route = <Route key={i} {...r} />;
  //   }
  //   console.log("route", route);
  //   return route;
  // });
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/home/:user"
          element={
            <ProtectedRoute redirectTo="/signin">
              <UserPage />
            </ProtectedRoute>
          }
        /> */}
        {routes &&
          routes.length > 0 &&
          routes.map((route, i) => {
            return (
              <Route
                element={route.component}
                path={route.path}
                exact={route.exact}
                private={route.private}
                key={i}
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
