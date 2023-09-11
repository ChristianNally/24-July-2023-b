import {useEffect, useState} from 'react';

const SideEffects = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('document title updated');
    document.title = `the count is ${count}`;
  }, [count]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      console.log(`the count is currently ${count}`);
    }, 2000);

    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(intervalRef);
    };

    return cleanup;
  }, [count]);


  return (
    <div>
      <h2>Side Effects Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <label>Username</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SideEffects;
