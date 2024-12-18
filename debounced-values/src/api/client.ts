import _ from "lodash";
import { initialContacts } from "./initialContacts";
export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));
export const client = {
  async searchContacts(input: string): Promise<Contact[]> {
    await sleep();
    return _.sortBy(initialContacts, "firstName", "lastName").filter(
      ({ firstName, lastName }) =>
        firstName.toLowerCase().includes(input) ||
        lastName.toLowerCase().includes(input)
    );
  },
};
