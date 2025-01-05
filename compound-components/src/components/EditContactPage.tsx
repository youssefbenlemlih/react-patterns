import { EditContactCompound } from "./EditContactCompound";
import { Layout } from "./Layout";

type EditContactPageProps = {
  editContactId: string;
};

export const EditContactPage = ({ editContactId }: EditContactPageProps) => {
  return (
    <EditContactCompound.Root editContactId={editContactId} close={close}>
      <Layout
        title={<EditContactCompound.Title />}
        rightSection={<EditContactCompound.SubmitButtons compact />}
      >
        <EditContactCompound.FormInputs />
      </Layout>
    </EditContactCompound.Root>
  );
};
