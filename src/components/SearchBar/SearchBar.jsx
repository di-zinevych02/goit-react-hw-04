import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [value, setValues] = useState("");

  const handleChange = (ev) => {
    setValues(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSearch(value);
    setValues("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchImage"
          value={value}
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.btnsearch}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
