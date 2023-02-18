import { Age } from "./components/age";
import { MyCheckbox } from "./components/checkbox";
import { Form } from "./components/two-variables";
import { Myinput } from "./components/type";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Counter</h1>
      </header>
      <Age />
      <Myinput />
      <MyCheckbox />
      <Form />
    </div>
  );
}
