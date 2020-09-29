import React from "react";

function App() {
  const [Time, getTime] = React.useState("Time");

  function whatTimeItIs() {
    let time = new Date().toLocaleTimeString();
    getTime(time);
  }

  setInterval(whatTimeItIs, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={whatTimeItIs}>
        <span role="img" aria-label="sheep">
          🕙
        </span>
      </button>
    </div>
  );
}

export default App;
