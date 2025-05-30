import './styles/global.css';
import Header from './components/Header';
import Graph from './components/Graph';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="home-body">
      <Header></Header>
      <div className="content-title">JASON'S ANALYTICS</div>
      <Graph></Graph>
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
