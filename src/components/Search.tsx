// import { SetStateAction,  useState } from 'react';
// import { Button } from '../Button/Button'
import { Icon } from "@iconify/react";
// import { UserCard } from '../UserCard/UserCard';

export const Search = () => {
  // const [input, setInput]=useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  /* const handleOnChange = (event: { target: { value: SetStateAction<string>; }; }) => {
  setInput(event.target.value)
} */

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignContent: "end" }}>
          <Icon
            icon="ri:search-line"
            color="#0079ff"
            width="32"
            style={{ marginRight: "8px" }}
          />
          <input
            className="inputSearch"
            type="text"
            placeholder="Search Github username..."
          />
        </div>
        <button className="searchButton">Search</button>
      </form>
      {/* <UserCard userInfo={userInfo} /> */}
    </>
  );
};
