import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactList } from "../components/ContactList";
import { EditContactModal } from "../components/EditContactModal";

const urlParamsSchema = z.object({
  editContactId: z.string().uuid().optional(),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: urlParamsSchema,
});

function RouteComponent() {
  const { editContactId } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <>
      <ContactList
        selectContactToEdit={(id) =>
          navigate({ search: { editContactId: id } })
        }
      />
      <EditContactModal
        editContactId={editContactId}
        close={() => navigate({ search: { editContactId: undefined } })}
      />
    </>
  );
}
