import { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import TextInput from "../../../../components/Input/Input";
import { Label } from "../../../../components/Label/Label";
import { ISortBy } from "../../types";

interface IProps {
  onSearch: () => void;

  searchBy: string;
  setSearchBy: React.Dispatch<React.SetStateAction<string>>;

  sortBy: ISortBy;
  setSortBy: React.Dispatch<React.SetStateAction<ISortBy>>;
}

export default function  Filter({
  onSearch,
  searchBy,
  setSearchBy,
  sortBy,
  setSortBy,
}: IProps) {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="filter">
        <h2 className="filter__title">Filter</h2>
        <div className="filter__content" style={{ display: "flex" }}>
          <div className="input__container" style={{ marginBottom: "1rem" }}>
            <Label htmlFor="search">Search</Label>
            <TextInput
              id="search"
              name="search"
              value={searchBy}
              onChange={(e) => {
                setSearchBy(e.target.value)}}
            />
          </div>
          <div className="input__container">
            <Label htmlFor="sort">Sort By</Label>
            <select
              name="sort"
              id="sort"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as ISortBy);
              }}
            >
              <option value="">----</option>
              <option value="popularity">Popularity</option>
              <option value="latest">Latest</option>
            </select>
          </div>
          
        </div>
        <Button>Submit</Button>
      </div>
    </form>
  );
}
