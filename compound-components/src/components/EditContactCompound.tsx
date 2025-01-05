import {
  Alert,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { IconHome, IconPhone } from "@tabler/icons-react";
import { ReactNode, useEffect, useState } from "react";
import { Contact } from "../api/client";
import { useContactDetails, useEditContact } from "../api/hooks";
import { createContext } from "../utils/createContext";
import { Spinner } from "./Spinner";

type FormContact = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};
type EditContactCompoundProps = {
  editContactId: undefined | string;
  close: () => void;
  children: ReactNode;
};
type EditContactCompoundContextType = {
  isContactPending: boolean;
  formState: FormContact;
  setFormState: (formState: FormContact) => void;
  contact: Contact | undefined;
  isPending: boolean;
  error: Error | null;
  onSaveClick: () => void;
};
const [EditContactContextProvider, useEditContactContext] =
  createContext<EditContactCompoundContextType>("EditContactCompound");

const Root = ({ editContactId, close, children }: EditContactCompoundProps) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });
  const { data: contact, isPending: isContactPending } =
    useContactDetails(editContactId);
  const { mutate, isPending, error, reset } = useEditContact(
    editContactId,
    () => close()
  );
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
    <EditContactContextProvider
      {...{
        isContactPending,
        formState,
        setFormState,
        contact,
        isPending,
        error,
        onSaveClick,
      }}
    >
      {children}
    </EditContactContextProvider>
  );
};
const SubmitButtons = ({ compact }: { compact?: boolean }) => {
  const { onSaveClick, isPending } = useEditContactContext("SubmitButtons");
  return (
    <Flex gap="sm" justify={"end"}>
      <Button
        size={compact ? "compact-md" : "md"}
        onClick={() => close()}
        variant="subtle"
        style={{ alignSelf: "center" }}
      >
        Cancel
      </Button>
      <Button
        size={compact ? "compact-md" : "md"}
        onClick={onSaveClick}
        loading={isPending}
      >
        Save
      </Button>
    </Flex>
  );
};
const FormInputs = () => {
  const { isContactPending, setFormState, formState, error } =
    useEditContactContext("SubmitButtons");
  return isContactPending ? (
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
      {error && (
        <Alert variant="light" color="red" title="Error creating contact">
          {error.message}
        </Alert>
      )}
    </Stack>
  );
};
const Title = () => {
  const { contact } = useEditContactContext("Title");
  return contact ? `${contact.firstName} ${contact.lastName}` : "-";
};

export const EditContactCompound = {
  Root,
  FormInputs,
  SubmitButtons,
  Title,
};
