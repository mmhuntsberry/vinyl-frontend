import { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vinyl-capstoner.vercel.app/vinyl")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  return (
    <>
      <Items data={data} />
    </>
  );
}

export default App;
