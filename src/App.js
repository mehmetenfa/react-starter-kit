import { createElement } from "react";

import "./style.scss";

function App() {

  const todos = ['todo1', 'todo2', 'todo3']
  // const h1 = createElement('h1', null, 'mehmetenfa.com')
  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  // return createElement('main', {
  //   className: 'test',
  //   id: 'main',
  // }, h1, ul)

  const name = 'Mehmet Enfa'

  return (
    <main>
      <h1 tabIndex='3' style={{color: 'red', backgroundColor: 'yellow'}}>mehmetenfa.com</h1>
      <label htmlFor="search" tabIndex='2' onClick={() => alert('merhaba')}>Arama</label>
      <input type='text' id='search' tabIndex='1' />
      <ul>
        {name} Vakitsayan
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
