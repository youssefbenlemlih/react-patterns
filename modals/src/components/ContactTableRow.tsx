import { useHover } from "@mantine/hooks";
import { ContactOverview } from "../api/client";
import { ActionIcon, Anchor, Flex, Table } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useOptimisticContactName } from "../api/hooks";
import { useConfirmation } from "../contexts/ConfirmationContext";

type ContactTableRowProps = {
  contact: ContactOverview;
  openContactDetailsDialog: (contactId: string) => void;
  openContactEditDialog: (contactId: string) => void;
};
export const ContactTableRow = ({
  contact,
  openContactDetailsDialog,
  openContactEditDialog,
}: ContactTableRowProps) => {
  const { hovered, ref } = useHover();
  const optimisticContactName = useOptimisticContactName(contact.id);
  const deleteContact = (id: string) => {
    // TODO
  };
  const { askUser } = useConfirmation();
  return (
    <Table.Tr ref={ref}>
      <Table.Td>
        <Anchor onClick={() => openContactDetailsDialog(contact.id)}>
          {optimisticContactName
            ? optimisticContactName
            : contact.firstName + " " + contact.lastName}
        </Anchor>
      </Table.Td>
      <Table.Td w="min-content">
        <Flex gap="sm">
          <ActionIcon
            variant="light"
            style={{ opacity: hovered ? 1 : 0 }}
            color="red"
            onClick={() => askUser(() => deleteContact(contact.id))}
          >
            <IconTrash size={14} />
          </ActionIcon>
          <ActionIcon
            variant="light"
            style={{ opacity: hovered ? 1 : 0 }}
            onClick={() => openContactEditDialog(contact.id)}
          >
            <IconEdit size={14} />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};
