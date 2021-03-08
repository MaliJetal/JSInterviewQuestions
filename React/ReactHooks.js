import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  //useState
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);
  
  //useEffect
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
      // Update the document title using the browser API
      // this component sets the document title after React updates the DOM
      document.title = `You clicked ${count} times.`
    });
  
  //useEffect
    useEffect(() => {
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return() => {
        ChatAPI.unsubscribeToFriendStatus(props.friend.id,handleStatusChange);
      };
    });
  
  function handleStatusChange(status){
    setIsOnline(status.isOnline);
  };

  return(
    <div>
      <p>You Clicked {count} times.</p>
      <button
        onClick = {() => setCount(count+1) }
      >Click me</button>
      
      <p>
      { 
        if(isOnline === null){
          'Loading ...'
        }
        {isOnline} ? 'Online' : 'Offline'
      }
      </p>
    </div>
  );
}
