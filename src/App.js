import logo from './logo.svg';
import './App.css';
import StateStr from './Componenta/StateStr';
import StateNum from './Componenta/StateNum';
import StateArr from './Componenta/StateArr';

function App() {
  return (
    <div >
<StateStr name="Yousra "/>
<StateNum/>
<StateArr Array={["Aiman","Yousra","Sumayya"]} />
    </div>
  );
}

export default App;
