import { useState } from 'react';
import "./App.css";

function Example() {
    const [fruit, setFruit] = useState("");

  return (
    <div>
        과일 :{" "}
        <input
            value = {fruit}
            onchange = {function (event) {
                setFruit(event.target.value);
            }}
            />
            <br /> <br />
            {fruit}
    </div>
  )
}

export default Example