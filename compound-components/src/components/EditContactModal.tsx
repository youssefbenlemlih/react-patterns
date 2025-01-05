import {
  Modal
} from "@mantine/core";
import { EditContactCompound } from "./EditContactCompound";

type EditContactModalProps = {
  editContactId: undefined | string;
  close: () => void;
};

export const EditContactModal = ({
  editContactId,
  close,
}: EditContactModalProps) => {
  return (
    <EditContactCompound.Root editContactId={editContactId} close={close}>
      <Modal
        opened={!!editContactId}
        onClose={close}
        title={<EditContactCompound.Title />}
      >
        <EditContactCompound.FormInputs />
        <EditContactCompound.SubmitButtons />
      </Modal>
    </EditContactCompound.Root>
  );
};
