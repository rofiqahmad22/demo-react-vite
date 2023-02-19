import { Link, useLoaderData } from "react-router-dom";

import { apiGetContacts } from "../api/contacts";

export async function loader() {
  const contacts = await apiGetContacts();
  return { contacts };
}

export function ContactsRoute() {
  const { contacts } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!contacts) {
    return <p>Contacts not found</p>;
  }

  return (
    <ul>
      {contacts.length <= 0 && <p>Contact are emprty</p>}
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Link
              to={String(contact.id)}
              className="block rounded bg-teal-100 p-2 hover:bg-teal200"
            >
              <h4 className="font-bold">{contact.name}</h4>
              <p>{contact.email}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
