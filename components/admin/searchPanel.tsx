"use client";
import { searchUserByEmail } from "@/actions/adminActions";
import { CircularProgress } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { UserResponse } from "./user";
import FilledButton from "../typography/filledButton";

const SearchPanel = ({
  setState,
  reset,
  state,
}: {
  setState: Dispatch<SetStateAction<UserResponse>>;
  reset: any;
  state: any;
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
      {state.status! === "success" && (
        <FilledButton color="bg-red-100" text="white" onClick={reset}>
          Cofnij wyszukanie
        </FilledButton>
      )}
      <form action={handleSearch} className="flex flex-col">
        <label htmlFor="search" className="text-large">
          Szukaj użytkownika
        </label>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Email"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <FilledButton type="submit">{searching ? "" : "Szukaj"}</FilledButton>
        </div>
      </form>
    </>
  );
};

export default SearchPanel;
