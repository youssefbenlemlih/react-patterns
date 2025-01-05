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
import { useCreateContact } from "../api/hooks";
import { useNavigate } from "@tanstack/react-router";

type CreateNewContactModalProps = {
  isOpen: boolean;
  close: () => void;
};

export const CreateNewContactModal = ({
  isOpen,
  close,
}: CreateNewContactModalProps) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });
  const { mutate, isPending, error, reset } = useCreateContact((contact) => {
    close();
    navigate({ to: `/$contactId`, params: { contactId: contact.id } });
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      reset();
      setFormState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
      });
    }
  }, [isOpen]);
  const onSaveClick = () => {
    mutate({ ...formState });
  };
  return (
    <Modal opened={isOpen} onClose={close} title="Create New Contact">
      <Stack>
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
          placeholder="Enter Adress"
          onChange={(e) =>
            setFormState({ ...formState, address: e.target.value })
          }
        />
        {error && (
          <Alert variant="light" color="red" title="Error creating contact">
            {error.message}
          </Alert>
        )}
        <Flex gap="sm" mx="auto">
          <Button
            onClick={() => close()}
            variant="light"
            style={{ alignSelf: "center" }}
          >
            Cancel
          </Button>
          <Button loading={isPending} onClick={onSaveClick}>
            Create
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
