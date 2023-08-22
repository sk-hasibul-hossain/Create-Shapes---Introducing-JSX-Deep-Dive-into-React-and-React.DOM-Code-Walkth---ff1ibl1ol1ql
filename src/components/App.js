import React from 'react'
import '../styles/App.css';
const App = () => {
  const [shape,setShape] = useState([]);
  let newShape = shape.length === 0 ? "square" : shape[shape.length-1];
  const onOptionChangeHandler = (event) => {
    newShape = event.target.value;
  }
  const addShape = () => {
    setShape([...shape,newShape]);
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={onOptionChangeHandler}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shape.map((s,index) => {
          return <div key={index} className={s}>{index}</div>;
        })}
      </div>
    </div>
  )
}


export default App;
