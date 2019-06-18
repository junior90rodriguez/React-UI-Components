import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>

      <div className="display">
        <Display buttonStyle="displayButton" text={0} />
      </div>
      
      <div className="rows">
        <ActionButton buttonStyle="action" text={`clear`} />
        
        <NumberButton buttonStyle="operation" text={`/`} />
      </div>
        
      <div className="rows">
        <NumberButton buttonStyle="number" text={7} />
        <NumberButton buttonStyle="number" text={8} />
        <NumberButton buttonStyle="number" text={9} />
        <NumberButton buttonStyle="operation" text={'X'} />
      </div>

      <div className="rows">
        <NumberButton buttonStyle="number" text={4} />
        <NumberButton buttonStyle="number" text={5} />
        <NumberButton buttonStyle="number" text={6} />
        <NumberButton buttonStyle="operation" text={'-'} />
      </div>

      <div className="rows">
        <NumberButton buttonStyle="number" text={1} />
        <NumberButton buttonStyle="number" text={2} />
        <NumberButton buttonStyle="number" text={3} />
        <NumberButton buttonStyle="operation" text={'+'} />
      </div>

      <div className="rows">
        <ActionButton buttonStyle="number" text={0} />
        <NumberButton buttonStyle="operation" text={'='} />
      </div>
    </div>
    
    
  );
};

export default App;
