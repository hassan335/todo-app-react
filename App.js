import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [list, setlist] = useState([]);
  let arR_input = [],
    arr = [];
  let current_value,
    num = 0;

  function Add(x = null) {
    debugger;

    arR_input = [...list];
    arR_input.push(inpValue);
    debugger;
    setlist(arR_input);
    setInpValue("");
  }

  function Edit(x, y) {
    debugger;
    setInpValue(y);
    debugger;
    var y = [];
    list.splice(x, 1);
    y = list;
    debugger;
    setlist(y);
  }

  function Delete(x) {
    debugger;
    // var y = [];
    list.splice(x, 1);
    // y = list;
    debugger;
    setlist(list);
    var li = document.getElementById("li");
    li.removeChild(li.childNodes[x]);
    // if (li.childNodes.length - 1 != x) {
    //   Add();
    // }
  }

  function DeleteAll() {
    document.getElementById("li").innerHTML = "";
  }

  return (
    <div className="App">
      {/* <h3>{inpValue}</h3> */}
      <input
        onChange={(e) => setInpValue(e.target.value)}
        placeholder="Enter Value"
        value={inpValue}
      />
      &nbsp;
      <button onClick={() => Add(inpValue)}>Add</button>
      &nbsp; &nbsp;
      <button onClick={DeleteAll}>Delete All </button>
      &nbsp; &nbsp;
      <ul id="li">
        {list.map((itemvalue, index) => {
          return (
            <li key={index}>
              {itemvalue}&nbsp;&nbsp;
              <button onClick={() => Edit(index, itemvalue)}>Edit</button>
              &nbsp;&nbsp;
              <button onClick={() => Delete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
