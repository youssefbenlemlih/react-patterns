import { initialContacts } from "./initialContacts";

export type ContactOverview = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

export type CreateContactRequest = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

export type GetContactsResponse = {
  contacts: Contact[];
  totalPages: number;
  totalContacts: number;
};

export type Country = {
  name: string;
  dialCode: string;
  code: string;
};

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

export const client = {
  async getContacts(): Promise<GetContactsResponse> {
    await sleep();
    return { contacts: initialContacts, totalPages: 10, totalContacts: 100 };
  },
  async getContact(contactId: string) {
    await sleep();
    return initialContacts.find((c) => c.id === contactId);
  },
  async createContact(contact: CreateContactRequest) {
    await sleep();
    initialContacts.unshift({ id: crypto.randomUUID(), ...contact });
  },
  async editContact(contact: Contact) {
    await sleep();
    Object.assign(
      initialContacts.find(({ id }) => id === contact.id)!,
      contact
    );
  },
};
