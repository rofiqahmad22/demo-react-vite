export function Profile(props: { name: string }) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: 24 Years Old</p>
      <p>Gender: Male</p>
    </div>
  );
}
