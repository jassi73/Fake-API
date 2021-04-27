import React, { Suspense, lazy } from "react";
// import User from "./User";
import "./App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const User = lazy(() => import("./User"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div> User Profile Is Loading</div>}>
        <User></User>
      </Suspense>
    </div>
  );
}

export default App;
