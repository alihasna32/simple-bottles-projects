import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/bottles";

const bottlesPromise = fetch("/bottles.json").then((res) => res.json());

function App() {
  return (
    <div>
      <h1>Buy Awesome Water Bottle</h1>

      <Suspense fallback={<h1>Bottles are loading...</h1>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </div>
  );
}

export default App;
