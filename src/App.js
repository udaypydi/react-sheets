import React from 'react';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
import './App.css';



function App() {

  const grid = [
    Array(100),
    [{value:  1}, {value:  3}],
    [{value:  2}, {value:  4}]
  ];

  return (
    <div className="App">
          <ReactDataSheet
            data={grid}
            valueRenderer={(cell) => cell.value}
          />
    </div>
  );
}

export default App;
