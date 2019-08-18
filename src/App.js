import React, { useState, useEffect } from 'react';
import { useFetch } from './hooks';

const App = () => {
  return (
    <div>
      <header>Welcome to this react app :)</header>
      <main>
        <Users />
      </main>
    </div>
  );
}

const Users = () => {
  const [data, loading] = useFetch('http://localhost:3000/users');

  return (
    <>
      { loading ? (
        'Loading...'
      ) : (
      <ul>
        { data.data.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
      )}
    </>
  );
}

const User = (props) => {
  return (
    <li>
      { props.name } - { props.age }
    </li>
  );
}

export default App;
