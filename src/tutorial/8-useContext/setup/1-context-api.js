import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import PersonContext from "./personContext";
// more components
// fix - context api, redux (for more complex cases)

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{people: people, removePerson: removePerson}}>
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
    const context = useContext(PersonContext);
  return (
    <>
      {context.people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person}/>
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
    const {removePerson} = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
