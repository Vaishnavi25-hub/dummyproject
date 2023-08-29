import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import { v4 as uuid } from "uuid";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Switch} from 'react-router-dom'

function App() {

  // const contacts=
  // [
  //   {"id":1,
  //     "name":"Vaishnavi",
  //     "email":"vaishali@gmail.com"
  //   },
  //   {"id":2,
  //     "name":"Vaishali",
  //     "email":"vaishnavi@gmail.com"
  //   },
  //   {"id":3,
  //     "name":"Sam",
  //     "email":"sam@gmail.com"
  //   }
  // ]  //commenting for creation of hooks

  const [contacts, setContacts] =useState([]);
 const LOCAL_STORAGE_KEY="contacts";

  //get contact from add contact component define addContactHandler

  const addContactHandler = (contact) =>{
    console.log(contact)
    setContacts([...contacts,{id: uuid(), ...contact}])

  }

  const removeContactHandler= (id) =>{
    const newContactList= contacts.filter((contact) =>
    {
      return contact.id !==id;
    })
    setContacts(newContactList);
  }
    useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className='ui container'>
     
      <Header/>
      <Router>
        <Routes>
        <Route path="/" exact component={ContactList}></Route>
          <Route path="/add"component={AddContact}/>
          
        </Routes>
      </Router>
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
     
      
    </div>
    
    
  );
}

export default App;

