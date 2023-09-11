import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // fetch('/todos')
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   });

  //   axios.get('/todos')
  //     .then((response) => {
  //       console.log(response.data);
  //       setTodos(response.data);
  //     });
  // }, []);

  useEffect(() => {
    const todosPromise = axios.get('/todos');
    const usersPromise = axios.get('/users');

    const promises = [todosPromise, usersPromise];

    Promise.all(promises)
      .then((results) => {
        const todos = results[0].data;
        const users = results[1].data;

        console.log(todos);
        console.log(users);

        setTodos(todos);
        setUsers(users);
      });

  }, []);

  const mappedTodos = todos.map((todo) => {
    return <p key={todo.id}>{todo.task}</p>;
  });

  return (
    <div>
      <h2>Data Fetching!!</h2>

      { mappedTodos }
    </div>
  );
};

export default DataFetching;
