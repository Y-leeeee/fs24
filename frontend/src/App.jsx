import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`);
      });
  }, []);

  return (
    <>
      <div>Hello Youri </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
