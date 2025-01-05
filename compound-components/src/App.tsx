import { useState } from "react";
import { Layout } from "./components/Layout";
import { CreateNewContactModal } from "./components/CreateNewContactModal";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ContactDetailsModal } from "./components/ContactDetailsModal";
import { ContactsTable } from "./components/ContactsTable";
import { EditContactModal } from "./components/EditContactModal";
import { useContactsCount } from "./api/hooks";

function App() {
  const [isCreateNewContactModalOpen, setIsCreateNewContactModalOpen] =
    useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string>();
  const [editContactId, setEditContactId] = useState<string>();
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
      <ContactsTable
        openContactDetailsDialog={setSelectedContactId}
        openContactEditDialog={setEditContactId}
      />
      <CreateNewContactModal
        isOpen={isCreateNewContactModalOpen}
        close={() => setIsCreateNewContactModalOpen(false)}
      />
      <ContactDetailsModal
        selectedContactId={selectedContactId}
        close={() => setSelectedContactId(undefined)}
      />
      <EditContactModal
        editContactId={editContactId}
        close={() => setEditContactId(undefined)}
      />
    </Layout>
  );
}

export default App;
