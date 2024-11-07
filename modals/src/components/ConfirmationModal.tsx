import { Button, Flex, Modal, Text } from "@mantine/core";
import { IconAlertCircleFilled } from "@tabler/icons-react";
import { useConfirmation } from "../contexts/ConfirmationContext";

export const ConfirmationModal = () => {
  const { confirm, cancel, isModalOpen } = useConfirmation();
  return (
    <Modal
      title={
        <Flex align={"center"} gap="xs">
          <IconAlertCircleFilled color="var(--mantine-color-red-7)" />
          <Text>Confirmation</Text>
        </Flex>
      }
      onClose={cancel}
      opened={isModalOpen}
    >
      <Text>Are you sure? This action cannot be undone.</Text>
      <Flex gap="sm" pt="sm" justify={"center"}>
        <Button onClick={cancel} variant="transparent" c="red">
          Cancel
        </Button>
        <Button color="red" onClick={confirm}>
          Confirm
        </Button>
      </Flex>
    </Modal>
  );
};
