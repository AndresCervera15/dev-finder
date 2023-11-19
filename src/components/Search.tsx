import { SetStateAction, useState } from "react";
import { Icon } from "@iconify/react";

export const Search = ({ setSearch }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSearch(input);
  };
  const handleOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div
          style={{ display: "flex", alignContent: "end", minWidth: "600px" }}
        >
          <Icon
            icon="ri:search-line"
            color="#0079ff"
            width="32"
            style={{ marginRight: "16px" }}
          />
          <input
            value={input}
            onChange={handleOnChange}
            className="inputSearch"
            type="text"
            placeholder="Search Github username..."
            required
          />
        </div>
        <button className="searchButton">Search</button>
      </form>
    </>
  );
};
