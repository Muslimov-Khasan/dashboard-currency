import './App.css';
import { Header } from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Supporter from './components/Supporter/Supporter';
import Designation from './components/Designation/Designation';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Supporter/>
      <Navbar/>
      <Designation/>
      </main>
    </div>
  );
}

export default App;
