
import './App.css';

function App() {
  const title = 'Welcome to new blog' ;
  const likes = 100;
  const link = "https://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h1>{title}</h1>
        <p>Liked {100} times</p>
        <a href= {link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
