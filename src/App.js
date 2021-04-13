import React, { useEffect, useState } from 'react';
import * as stateAbbr from "datasets-us-states-abbr";
import Chart from './Chart.js'
import comp_Chart from './Chart_Complete.js';

function App() {

  const [activeQuery, setActiveQuery] = useState('NY')
  const [stateData, setStateData] = useState({})

  useEffect(() => {
    async function getData(){
      const res = await fetch(
        `https://covidtracking.com/api/states?state=${activeQuery}`
      ); // covid api
      const data = await res.json();
      setStateData(data);
    }
    getData();
  }, [activeQuery]);

  const [activeQuery_1, setActiveQuery_1] = useState('NY')
  const [stateData_1, setStateData_1] = useState({})
  useEffect(() => {
    async function getData(){
      const res = await fetch(`https://covidtracking.com/api/states.json`);
      const data = await res.json();
      setStateData_1(data)
    }
    getData();
  }, [activeQuery_1]);

  return (
    <div style={{fontFamily: "monospace", textAlign:"center", overflow: "hidden", padding: '10px'}}>
      <h1> COVID_19 Test Tracker</h1>

      <form>
        <label>
          Choose a state: <t/>
          <select value={activeQuery} onChange={e => setActiveQuery(e.target.value)}>
            {Object.values(stateAbbr).map(abbr => {
              return (
                <option key={abbr} value={abbr}>
                  {abbr}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      
      <div>
        <Chart data={stateData} style={{ textAlign:"center", overflow: "hidden"}}/>
      </div>
      
      <hr/>
      <comp_Chart data = {stateData_1} />

      <p style={{textAlign: "right"}}>Inspired by Justin Juno</p>
    </div>
  );
}

export default App;