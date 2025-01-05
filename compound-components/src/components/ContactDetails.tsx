import {
  Alert,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";
import { useContactDetails } from "../api/hooks";
import { Layout } from "./Layout";
import { Spinner } from "./Spinner";

type ContactDetailsProps = {
  contactId: string;
};

export const ContactDetails = ({ contactId }: ContactDetailsProps) => {
  const { data, isPending, error } = useContactDetails(contactId);

  const navigate = useNavigate();
  return (
    <Layout
      title={data?.firstName ?? ""}
      rightSection={
        <Button
          onClick={() =>
            navigate({
              to: "/$contactId/edit",
              params: { contactId: contactId },
            })
          }
        >
          Edit
        </Button>
      }
    >
      {error && <Alert>Cannot load contact</Alert>}
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
            <Flex gap={6} align={"center"}>
              <Text inline>{data.phoneNumber}</Text>
            </Flex>
          </Box>
          <Box>
            <Text size="sm" c="dimmed">
              Adress{" "}
            </Text>
            <Text inline>{data.address}</Text>
          </Box>
        </Stack>
      )}
    </Layout>
  );
};
