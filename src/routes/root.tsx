import { Outlet } from "react-router-dom";

import { apiGetContacts } from "../api/contacts";
import { HeaderNavigation } from "../components/header-navigation";

export async function loader() {
  const contacts = await apiGetContacts();
  return { contacts };
}

export function RootRoute() {
  return (
    <>
      <HeaderNavigation />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
