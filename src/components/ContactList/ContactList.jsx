import Contact from "../Contact/Contact"


function ContactList({filteredData = [], searchStr, handleDelete}) {

          if (!filteredData.length && searchStr) {
		return <h2>Contact you searching doesn`t exist</h2>
	} else if (!filteredData.length) {
		return <h2>No available contacts...</h2>
	}
	return (
		<ul>
			<h2>Book list</h2>
			{filteredData.map(contact => (
                <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
			))}
		</ul>
	)
}

export default ContactList