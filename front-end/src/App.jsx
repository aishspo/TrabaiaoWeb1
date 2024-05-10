import "./App.css";
import AppRoutes from "./AppRoutes";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/data");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
