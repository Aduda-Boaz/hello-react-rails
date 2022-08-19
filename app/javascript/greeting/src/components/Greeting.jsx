import React from 'react'

function Greeting(props) {
  return (
    <div>
      <h1>Receive greetings from the API</h1>
      {props.greetings.map((greeting) => {
        return (
          <div key={greeting.id}>
            <h2>{greeting.message}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Greeting;
