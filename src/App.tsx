import { Button } from "./components/button";
import { Counter } from "./components/couter";
import { Description } from "./components/descripton";
import { Profile } from "./components/profile";
import { Profiles } from "./components/profles";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Counter</h1>
      </header>
      <Counter />
    </div>
  );
}
