export function Profiles() {
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
    <ul>
      {dataProfiles.map((profile) => {
        return <ListItem key={profile._id} />;
      })}
    </ul>
  );
}

function ListItem() {
  return <li className="font-bold">Profil</li>;
}
