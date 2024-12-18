import { Alert, Button, Table } from "@mantine/core";
import { useContactSearch } from "../api/hooks";
import { Spinner } from "./Spinner";

type ContactsTableProps = {
  search: string;
};

export const ContactList = ({ search }: ContactsTableProps) => {
  const { data, isPending, isError, refetch } = useContactSearch(search);
  if (isPending) return <Spinner />;
  if (isError)
    return (
      <Alert variant="light" color="red" title="Error loading contacts">
        <Button color="red" onClick={() => refetch()}>
          Try Again
        </Button>
      </Alert>
    );
  return (
    <Table>
      <Table.Tbody>
        {data?.map((contact) => (
          <Table.Tr key={contact.id}>
            <Table.Td>{contact.firstName + " " + contact.lastName}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
