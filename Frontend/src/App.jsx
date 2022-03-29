import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Activities from "./components/activities/Activities";
import Camping from "./components/activities/specificpage/Camping";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hiking from "./components/activities/specificpage/Hiking";
import CliffJumping from "./components/activities/specificpage/CliffJumping";
import MountainBiking from "./components/activities/specificpage/MountainBiking";
import ZipLining from "./components/activities/specificpage/ZipLining";
import SkyDiving from "./components/activities/specificpage/SkyDiving";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        #activities,
        #testimonials
        `,
      {
        opacity: 0,
        interval: 300,
      },
    );
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/Activities" component={Activities}></Route>
        <Route path="/Camping" component={Camping}></Route>
        <Route path="/Hiking" component={Hiking}></Route>
        <Route path="/CliffJumping" component={CliffJumping}></Route>
        <Route path="/MountainBiking" component={MountainBiking}></Route>
        <Route path="/ZipLining" component={ZipLining}></Route>
        <Route path="/SkyDiving" component={SkyDiving}></Route>

        <Route path="/Testimonials" component={Testimonials}></Route>
      </Switch>
    </Router>
  );
}
