import { useState } from "react";
import { Layout } from "./Layout";
import { CreateNewContactModal } from "./CreateNewContactModal";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ContactsTable } from "./ContactsTable";
import { useContactsCount } from "../api/hooks";

type ContactListProps = {
  selectContactToEdit: (id: string) => void;
};
export function ContactList({ selectContactToEdit }: ContactListProps) {
  const [isCreateNewContactModalOpen, setIsCreateNewContactModalOpen] =
    useState(false);
  const { data: count } = useContactsCount();
  return (
    <Layout
      title={count ? count + " Contacts" : "-"}
      rightSection={
        <Button
          onClick={() => setIsCreateNewContactModalOpen(true)}
          size="compact-md"
          leftSection={<IconPlus size={16} />}
        >
          Add Contact
        </Button>
      }
    >
      <ContactsTable openContactEditDialog={selectContactToEdit} />
      <CreateNewContactModal
        isOpen={isCreateNewContactModalOpen}
        close={() => setIsCreateNewContactModalOpen(false)}
      />
    </Layout>
  );
}
