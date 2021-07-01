function App() {
  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div>
      <h1>Simple React App</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <div>
        {list.map((el) => (
          <div key={el.objectID}>
            <span>{'Author: ' + el.author + ' '}</span>
            <span>{'Comments: ' + el.num_comments + ' '}</span>
            <span>{'Points ' + el.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
