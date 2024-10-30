import { Box, Modal, SimpleGrid, Stack, Text } from "@mantine/core";
import { useContactDetails } from "../api/hooks";
import { Spinner } from "./Spinner";

type ContactDetailsModalProps = {
  selectedContactId: undefined | string;
  close: () => void;
};

export const ContactDetailsModal = ({
  selectedContactId,
  close,
}: ContactDetailsModalProps) => {
  const { data, isPending } = useContactDetails(selectedContactId);

  return (
    <Modal
      opened={!!selectedContactId}
      onClose={close}
      title="Details"
    >
      {isPending && <Spinner />}
      {data && (
        <Stack>
          <SimpleGrid cols={2}>
            <Box>
              <Text size="sm" c="dimmed">
                First name
              </Text>
              <Text inline>{data.firstName}</Text>
            </Box>
            <Box>
              <Text size="sm" c="dimmed">
                Last name
              </Text>
              <Text inline>{data.lastName}</Text>
            </Box>
          </SimpleGrid>
          <Box>
            <Text size="sm" c="dimmed">
              Phone number
            </Text>
            <Text inline>{data.phoneNumber}</Text>
          </Box>
          <Box>
            <Text size="sm" c="dimmed">
              Adress{" "}
            </Text>
            <Text inline>{data.address}</Text>
          </Box>
        </Stack>
      )}
    </Modal>
  );
};
