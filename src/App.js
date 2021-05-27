import './App.css';
import Calculator from './Calculator';
import CalculatorApi from './CalculatorApi';

function App() {
  return (
    <div>

      <Calculator calculatorApi = {new CalculatorApi('https://localhost:8080')}/>

    </div>
  );
}

export default App;
