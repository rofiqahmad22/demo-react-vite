import { Age } from "./components/age";
import { Myinput } from "./components/type";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Counter</h1>
      </header>
      <Age />
      <Myinput />
    </div>
  );
}
