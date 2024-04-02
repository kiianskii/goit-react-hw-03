import { useState } from 'react' 
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import contactsBase from './assets/contacts.json'


function App() {

  const[contacts, setContacts] = useState(contactsBase)
  const[searchStr, setSearch] = useState("")

    const handleDelete = id => {
		setContacts(prev => prev.filter(item => item.id !== id))
	}
  const getFilteredData = () => {
		return contacts.filter(
			item =>
				item.name.toLowerCase().includes(searchStr.toLowerCase())
		)
	}
  const filteredData = getFilteredData();

  return (
    <div>
    <h1>Phonebook</h1>
   <ContactForm/>
      <SearchBox searchStr={searchStr} setSearch={setSearch} />
      <ContactList filteredData={filteredData} searchStr={searchStr} handleDelete={handleDelete} />
    </div>
  )
}

export default App
