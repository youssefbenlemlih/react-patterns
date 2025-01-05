import {
  useMutation,
  useMutationState,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  client,
  Contact,
  CreateContactRequest,
  GetContactsResponse,
} from "./client";

export const useContacts = <T = GetContactsResponse>(
  page: number,
  select?: (data: GetContactsResponse) => T
) =>
  useQuery({
    queryKey: ["contacts", "list", page],
    queryFn: () => client.getContacts(page),
    select,
  });
export const useContactsCount = () =>
  useContacts(1, (data) => data.totalContacts);

export const useContactDetails = (contactId: string | undefined) =>
  useQuery({
    queryKey: ["contacts", contactId],
    queryFn: () => client.getContact(contactId!),
    enabled: !!contactId,
  });
export const useCreateContact = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (contact: CreateContactRequest) =>
      client.createContact(contact),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
      onSuccess?.();
    },
  });
};
export const useEditContact = (
  contactId: string | undefined,
  onSuccess?: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-contact", contactId],
    mutationFn: (contact: Contact) => client.editContact(contact),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
      onSuccess?.();
    },
  });
};
export const useOptimisticContactName = (contactId: string) => {
  const mutations = useMutationState({
    filters: { mutationKey: ["edit-contact", contactId], status: "pending" },
  });
  const firstMutation = mutations[0];
  if (firstMutation) {
    {
      const contact = firstMutation.variables as Contact;
      return contact.firstName + " " + contact.lastName;
    }
  }
  return undefined;
};
