import { Button } from "./components/button";
import { Description } from "./components/descripton";
import { Profile } from "./components/profile";

export default function App() {
  const dataProfiles = [
    {
      _id: "0",
      name: "Rofiq Ahmad",
    },
    {
      _id: "1",
      name: "Rahmat Subarjo",
    },
  ];
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">My Profile</h1>
      </header>
      <Profile />
      <Description />
      <Button />
      <ul>
        {dataProfiles.map((profile) => {
          return <ListItem key={profile._id} />;
        })}
      </ul>
    </div>
  );

  function ListItem() {
    return <li className="font-bold">Profil</li>;
  }
}
