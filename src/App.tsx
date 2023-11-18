import "./App.css";
import mockData from "./assets/mockData.json";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
function App() {
  return (
    <div className="app">
      <header>
        <h1>devFinder</h1>
      </header>
      <main>
        <Search />
        <UserCard userInfo={mockData} />
      </main>
    </div>
  );
}

export default App;
