import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routeUrl from "./constants/routeUrl";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import HomePage from "./pages/Home";
import ModelProvider from "./context/providers/ModelProvider";
import NavProvider from "./context/providers/NavProvider";
import { HelmetProvider } from "react-helmet-async";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Details from "./pages/Details";
import ServicesProvider from "./context/providers/ServicesProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
import Contact from "./pages/Contact";
import AnimationsProvider from "./context/providers/AnimationContext";
import App2 from "./pages/App2";
function App() {
  //! State

  //! Function

  //! Render
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <ServicesProvider>
                <AnimationsProvider>
                  <HelmetProvider>
                    <Switch>
                      <Route path={routeUrl.HOME_PAGE} exact>
                        <HomePage />
                      </Route>
                      <Route path={routeUrl.ABOUT_PAGE}>
                        <About />
                      </Route>
                      <Route path={routeUrl.CONTACT_PAGE}>
                        <Contact />
                      </Route>
                      <Route path={routeUrl.DETAIL_PAGE} exact>
                        <Details />
                      </Route>
                      <Route path={routeUrl.SEARCH}>
                        <App2 />
                      </Route>
                      {/*  */}
                      <Route>
                        <PageNotFound />
                      </Route>
                    </Switch>
                  </HelmetProvider>
                </AnimationsProvider>
              </ServicesProvider>
            </DestinationsProvider>
          </GalleryProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
