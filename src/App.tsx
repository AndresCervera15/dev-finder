import { useEffect, useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { Icon } from "@iconify/react";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [isFirstInput, setIsFirstInput] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);

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
        {isLightMode ? (
          <button
            className="themeButton"
            onClick={() => setIsLightMode(!isLightMode)}
          >
            DARK
            <Icon
              style={{
                marginLeft: "8px",
              }}
              icon="ic:baseline-dark-mode"
              color="#ffffff"
              width="32"
            />
          </button>
        ) : (
          <button
            className="themeButton"
            onClick={() => setIsLightMode(!isLightMode)}
          >
            LIGTH
            <Icon
              style={{
                marginLeft: "8px",
              }}
              icon="material-symbols-light:light-mode-rounded"
              color="white"
              width="32"
            />
          </button>
        )}
      </header>
      <main>
        <Search setSearch={setSearch} />
        <UserCard userInfo={data} isFirstInput={isFirstInput} />
      </main>
    </div>
  );
}

export default App;
