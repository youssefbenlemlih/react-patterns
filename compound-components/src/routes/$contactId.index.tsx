import { createFileRoute } from '@tanstack/react-router'
import { ContactDetails } from '../components/ContactDetails'

export const Route = createFileRoute('/$contactId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { contactId } = Route.useParams()
  return <ContactDetails contactId={contactId} />
}
