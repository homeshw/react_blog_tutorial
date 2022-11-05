import Home from './Home';
import NavBar from './NavBar';

function App() {

  const title = 'Welcome to the blog'
  const likes = 50

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
