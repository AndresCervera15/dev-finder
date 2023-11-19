import { useEffect, useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [isFirstInput, setIsFirstInput] = useState(true);
  useEffect(() => {
    const fetchData = async (search: string) => {
      if (search) {
        const response = await fetch(`https://api.github.com/users/${search} `);
        const data = await response.json();
        setData(data?.message ? null : data);
        setIsFirstInput(false);
      }
    };
    fetchData(search);
  }, [search]);
  return (
    <div className="app">
      <header>
        <h1>devFinder</h1>
      </header>
      <main>
        <Search setSearch={setSearch} />
        <UserCard userInfo={data} isFirstInput={isFirstInput} />
      </main>
    </div>
  );
}

export default App;
