import { createFileRoute } from "@tanstack/react-router";
import { EditContactPage } from "../components/EditContactPage";

export const Route = createFileRoute("/$contactId/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  const { contactId } = Route.useParams();
  return <EditContactPage editContactId={contactId} />;
}
