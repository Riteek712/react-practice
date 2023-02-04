import './App.css';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
function App() {
  const handleNameChange = () => {
    const name  = ["rik", "dik", "pik"];
    const int = Math.floor(Math.random()*3);

    return name[int];
  }
  return (
    <div className="App">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
