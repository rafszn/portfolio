import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import "./index.scss";
import HollowCursor from "./components/HollowCursor";
import useSmoothScroll from "./lib/hooks/useSmoothScroll";
import PageWrapper from "./components/PageWrapper";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
  useSmoothScroll();
  return (
    <div className="relative">
      <HollowCursor />
      <PageWrapper>
        <Routes>
          <Route element={<DefaultLayout />}>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
        </Routes>
      </PageWrapper>
    </div>
  );
};
export default App;
