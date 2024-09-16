import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import { Attribute } from "./modules/attribute/components/Attribute";
import { Class } from "./modules/class/components/Class";
import { useState } from "react";
import { AppProvider } from "./modules/app/state/app.context";
import { AppSection } from "./modules/app/components/AppSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <AppProvider>
        <AppSection />
      </AppProvider>
    </div>
  );
}

export default App;
