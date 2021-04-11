import React, { useEffect, useState } from 'react';
import * as stateAbbr from "datasets-us-states-abbr";
import Chart from './Chart.js'

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

  console.log(stateData)

  return (
    <div style={{fontFamily: "monospace", width:"90vw", textAlign:"center", overflow: "hidden", margin: "40px", padding: "40px"}}>
      <h1> COVID_19 Test Tracker</h1>
      <p style={{textAlign: "right"}}>Inspired by Justin Juno</p>

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

      <Chart data={stateData} />
    </div>
  );
}

export default App;