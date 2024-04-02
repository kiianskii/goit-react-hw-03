

function Contact({contact}) {
  return (
      <li>
          <h3>Name: {contact.name}</h3> 
          <p>Tel: {contact.number}</p> 
          <button>Delete</button>
    </li>
  )
}

export default Contact