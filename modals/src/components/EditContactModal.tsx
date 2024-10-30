import {
  Alert,
  Button,
  Flex,
  Modal,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { IconHome, IconPhone } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useContactDetails, useEditContact } from "../api/hooks";
import { Spinner } from "./Spinner";

type EditContactModalProps = {
  editContactId: undefined | string;
  close: () => void;
};

export const EditContactModal = ({
  editContactId,
  close,
}: EditContactModalProps) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });
  const { data: contact, isPending: isContactPending } =
    useContactDetails(editContactId);
  const { mutate, isPending, error, reset } = useEditContact(editContactId,() => close());
  useEffect(() => {
    if (contact) {
      reset();
      setFormState(contact);
    }
  }, [contact]);
  const onSaveClick = () => {
    mutate({ ...formState, id: editContactId! });
  };
  return (
    <Modal opened={!!editContactId} onClose={close} title="Edit  Contact">
      {isContactPending ? (
        <Spinner />
      ) : (
        <Stack mb="md">
          <SimpleGrid cols={2}>
            <TextInput
              withAsterisk
              value={formState.firstName}
              label="First name"
              placeholder="Enter first name"
              onChange={(e) =>
                setFormState({ ...formState, firstName: e.target.value })
              }
            />
            <TextInput
              withAsterisk
              value={formState.lastName}
              label="Last name"
              placeholder="Enter last name"
              onChange={(e) =>
                setFormState({ ...formState, lastName: e.target.value })
              }
            />
          </SimpleGrid>
          <TextInput
            withAsterisk
            value={formState.phoneNumber}
            leftSection={<IconPhone size={14} />}
            label="Phone number"
            placeholder="Enter first name"
            onChange={(e) =>
              setFormState({ ...formState, phoneNumber: e.target.value })
            }
          />
          <TextInput
            value={formState.address}
            leftSection={<IconHome size={14} />}
            label="Address"
            placeholder="Enter first name"
            onChange={(e) =>
              setFormState({ ...formState, address: e.target.value })
            }
          />
        </Stack>
      )}
      {error && (
        <Alert variant="light" color="red" title="Error creating contact">
          {error.message}
        </Alert>
      )}
      <Flex gap="sm" justify={"end"} mt="sm">
        <Button
          onClick={() => close()}
          variant="subtle"
          style={{ alignSelf: "center" }}
        >
          Cancel
        </Button>
        <Button onClick={onSaveClick} loading={isPending}>
          Save
        </Button>
      </Flex>
    </Modal>
  );
};
