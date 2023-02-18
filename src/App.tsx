import { Button } from "./components/button";
import { Description } from "./components/descripton";
import { Profile } from "./components/profile";
import { Profiles } from "./components/profles";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">My Profile</h1>
      </header>
      <Profile />
      <Description />
      <Button />
      <Profiles />
    </div>
  );
}
