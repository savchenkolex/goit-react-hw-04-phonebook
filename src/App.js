import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import BaseForm from "./components/BaseForm/BaseForm";
import Section from "./utils/Section/Section";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import ListContacts from "./components/ListContacts/ListContacts";
import QuickSearch from "./components/QuickSearch/QuickSearch";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (data) => {
    const isExists = contacts.some(({ name }) => {
      return name === data.name;
    });
    if (isExists) {
      alert(`Looks like ${data.name} is already in contacts.`);

      return;
    }
    setContacts((pervContacts) => {
      return [...pervContacts, { id: nanoid(), ...data }];
    });
  };

  const inputHandler = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterFn = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContact = (id) => {
    setContacts((pervContacts) => {
      return pervContacts.filter((item) => {
        return item.id !== id;
      });
    });
  };

  useEffect(() => {
    const isContactsInLS = JSON.parse(localStorage.getItem("contacts"));

    if (isContactsInLS.length) {
      setContacts(() => {
        return [...isContactsInLS];
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <HeaderSection />
      <Section title="Add New Contact">
        <BaseForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <QuickSearch fnInput={inputHandler} />
        <ListContacts contacts={filterFn()} deleteContact={deleteContact} />
      </Section>
    </>
  );
}

export default App;
