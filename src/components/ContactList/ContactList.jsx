import Contact from "../Contact/Contact"


function ContactList({contacts}) {

    //       if (!contacts.length && searchStr) {
	// 	return <h2>Search query is not valid</h2>
	// } else if (!contacts.length) {
	// 	return <h2>No available books...</h2>
	// }
	return (
		<ul>
			<h2>Book list</h2>
			{contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
			))}
		</ul>
	)
}

export default ContactList