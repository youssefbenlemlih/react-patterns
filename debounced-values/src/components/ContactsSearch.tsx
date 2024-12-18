import { Card, rem, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { ContactList } from "./ContactList";

const useDebounceValue = <T,>(value: T, interval: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), interval);
    return () => clearTimeout(id);
  }, [value, interval]);
  return debouncedValue;
};
export const ContactsSearch = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounceValue(search, 1000);
  return (
    <>
      <TextInput
        radius={"md"}
        placeholder="Search..."
        rightSection={
          <IconSearch style={{ width: rem(24), height: rem(24) }} />
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="xl"
        my="md"
      />
      <Card withBorder radius={"md"} shadow="md">
        <ContactList search={debouncedSearch} />
      </Card>
    </>
  );
};
