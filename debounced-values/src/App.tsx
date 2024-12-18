import { ContactsSearch } from "./components/ContactsSearch";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout title={" Contacts"}>
      <ContactsSearch />
    </Layout>
  );
}

export default App;
