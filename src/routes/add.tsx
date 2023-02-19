import { ActionFunctionArgs, Form, redirect } from "react-router-dom";

import { apiAddContact, ResourceContact } from "../api/contacts";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await requestAnimationFrame.formData();

  const contactFormData: ResourceContact = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
  };

  const newConatact = await apiAddContact(contactFormData);

  return redirect("/contacts/$newContact.id");
}

export function AddContactRoute() {
  return (
    <form method="post" className="max-w-lg">
      <div className="mb-2">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-teal-500 focus:ring-teal-500"
          placeholder="Firsl Last"
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-teal-500 focus:ring-teal-500"
          placeholder="Firsl Last"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full rouded bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal800 focus:outline-none focus:ring-4 focus:ring-teal-500"
        >
          Add Contact
        </button>
        <button
          type="reset"
          className="rounded border border-teal-700 bg-white py-2.5 px-5 text-sm font-medium tect-teal-900 hover:bg-teal50 hover:text-teal-700 focus:c-10 focus:outline-none focus:ring-teal-500"
        >
          Reset
        </button>
      </div>
      {/* ... */}
    </form>
  );
}
