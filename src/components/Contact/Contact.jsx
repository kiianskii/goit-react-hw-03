

function Contact({contact, handleDelete}) {
  return (
      <li>
          <h3>Name: {contact.name}</h3> 
          <p>Tel: {contact.number}</p> 
         <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </li>
  )
}

export default Contact