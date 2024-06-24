import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

function App() {

  const initialContacts = [
      { id: "1", name: "Neil Bryan Apostol", number: "09218017781" },
      { id: "2", name: "Benjamina Apostol", number: "09218234241" },
      { id: "3", name: "Bryce Apostol", number: "0921822331"}
  ]

  const localContacts = localStorage.getItem('contacts')

  const [contacts, setContacts] = useState(localContacts !== null ? JSON.parse(localContacts) : initialContacts)
  
  const [filter, setFilter] = useState("")
  // state = {
  //   contacts: [
  //     { id: "1", name: "Neil Bryan Apostol", number: "09218017781" },
  //     { id: "2", name: "Benjamina Apostol", number: "09218234241" },
  //     { id: "3", name: "Bryce Apostol", number: "0921822331"}
  //   ],
  //   filter: ""
  // }
  console.log(contacts)
  // componentDidMount() {
  //   console.log("DidMount")
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (contacts !== null) { // if contacts is not empty, change its state from the data from local storage
  //     this.setState({ contacts: parsedContacts });
  //   } else {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts)); // if contacts is empty, set it
  //   }
  // }
  
  //   useEffect(() => {
  //   const storageContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storageContacts);

  //     if (storageContacts !== null) { //if contacts is not empty, change its state from the data from local storage
  //     setContacts(parsedContacts);
  //     } else {
  //       localStorage.setItem('contacts', JSON.stringify(contacts)) // if storage contacts is empty, set it
  //   }
  
  //   return () => {
  //   }
  // }, [])

  // componentDidUpdate(_prevProps, prevState) {
  //   console.log("didUpdate")
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) { //if contacts is not equal to the previous contacts info, then change its state to the new data 
  //     console.log('data changed')
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   } else {
  //     console.log("no changes")
  //   }
  // }
  
  //UPDATE LOCAL STORAGE EVERYTIME THE CONTACTS STATE CHANGES
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  
    return () => {
    }
  }, [contacts]) 
  
    
    const addInfo = (newInfo) => {
      setContacts(prevValue => {
        return [...prevValue, newInfo]
        // contacts: [...prevValue, newInfo]
      })
      
  }
  
  

  const deleteInfo = (id) => {
      console.log("deleteInfo")
      // implement delete functionality
      // setContacts(prevValue => ({
      //   contacts: prevValue.filter(contact => contact.id !== id)
      // }))
    setContacts(prevValue => {
      console.log(prevValue)
        return  prevValue.filter(contact => contact.id !== id)
      })
  }
  console.log(contacts)

  const updateFilter = (filterValue) => {
      console.log("updateFilter")
      // implement filter functionality
      
    setFilter(() => {
        return filterValue
      })
  }

  //       setFilter({ filter: filterValue })
  // }
  
  

    //get the array of the filtered data from filter
    const filterContact = () => {
      // const { contacts, filter } = this.state
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) //using includes returns the data every changes

      // return contacts.filter(contact => contact.name.toLowerCase() === filter.toLowerCase()) {using this method only returns the data if the info is complete}
  }
  

    return ( 
      <div>
        <ContactForm addInfo={addInfo} contacts={contacts} />
        <Filter filter={filter} updateFilter={updateFilter} />
        <ContactList deleteInfo={deleteInfo} filterContact={filterContact} />
      </div>
    )
  }


export default App;

