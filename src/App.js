import "./App.css";
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
