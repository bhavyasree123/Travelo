import React, { useEffect,useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Camping from "./components/adventures/specificpage/Camping";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hiking from "./components/adventures/specificpage/Hiking";
import CliffJumping from "./components/adventures/specificpage/CliffJumping";
import MountainBiking from "./components/adventures/specificpage/MountainBiking";
import ZipLining from "./components/adventures/specificpage/ZipLining";
import SkyDiving from "./components/adventures/specificpage/SkyDiving";
import Adventures from "./components/adventures/Adventures";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Activities from "./components/activities/Activities";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";
import MapPage from "./components/getLocation/MapPage";
import Cart from "./components/cart/Cart";

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
        #adventures,
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
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        {/* <Route path="/Testimonials" component={Testimonials}></Route> */}

        {/* Adventures Routing Start */}
        <Route path="/Adventures" component={Adventures}></Route>
        <Route path="/Camping" component={Camping}></Route>
        <Route path="/Hiking" component={Hiking}></Route>
        <Route path="/CliffJumping" component={CliffJumping}></Route>
        <Route path="/MountainBiking" component={MountainBiking}></Route>
        <Route path="/ZipLining" component={ZipLining}></Route>
        <Route path="/SkyDiving" component={SkyDiving}></Route>
        <Route path="/Testimonials" component={Testimonials}></Route>
        <Route path="/Activities" component={Activities}></Route>
        <Route path="/Events" component={Events}></Route>
        <Route path="/Gallery" component={Gallery}></Route>
        <Route path="/MapPage" component={MapPage}></Route>
        <Route path="/Cart" component={Cart}></Route>
        </Switch>
      {/* <SignIn /> */}
      <ScrollToTop />
    </Router>
  );
}
