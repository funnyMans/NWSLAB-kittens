import React from "react";
import "./App.css";
import { useAppRoutes } from "./app/hooks/routerHooks";
import MainHeader from "./layouts/MainHeader";
import SideBar from "./layouts/SideBar";

function App() {
  const children = useAppRoutes();

  return (
    <div className="App">
      <MainHeader />
      <div className="flex justify-start align-between">
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default App;
