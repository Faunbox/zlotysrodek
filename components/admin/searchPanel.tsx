"use client";
import { searchUserByEmail } from "@/actions/adminActions";
import { CircularProgress } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { UserResponse } from "./user";

const SearchPanel = ({
  setState,
  reset,
}: {
  setState: Dispatch<SetStateAction<UserResponse>>;
  reset: any;
}) => {
  const [searching, setSearching] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (formData: FormData) => {
    try {
      setSearching(true);
      const res = await searchUserByEmail(formData);
      setState(res?.response);
    } catch (error) {
      alert("Błąd podczas szukania użytkownika");
    } finally {
      setSearching(false);
    }
  };

  return (
    <>
      {inputValue !== "" && (
        <button onClick={reset}>Cofnij wyszukanie X</button>
      )}
      <form action={handleSearch} className="flex flex-col">
        <label htmlFor="search">Szukaj użytkownika</label>
        <div className="flex flex-row">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="email"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">
            {searching ? <CircularProgress /> : "Szukaj"}
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchPanel;
