import { useState } from 'react' 
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import contactsBase from './assets/contacts.json'


function App() {

  const[contacts, setContacts] = useState(contactsBase)


  return (
    <div>
    <h1>Phonebook</h1>
   <ContactForm/>
   <SearchBox/>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
