import './App.css';
import { Header } from './components/header/header';
import Navbar from './components/Navbar/Navbar';
import Supporter from './components/Supporter/Supporter';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Supporter/>
      <Navbar/>
      </main>
    </div>
  );
}

export default App;
