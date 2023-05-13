import { Button } from "../../../../components/Button/Button";
import TextInput from "../../../../components/Input/TextInput";
import { Label } from "../../../../components/Label/Label";
import { Select } from "../../../../components/Select/Select";
import { ISortBy } from "../../types";

interface IProps {
  onSearch: () => void;

  searchBy: string;
  setSearchBy: React.Dispatch<React.SetStateAction<string>>;

  sortBy: ISortBy;
  setSortBy: React.Dispatch<React.SetStateAction<ISortBy>>;
}

export default function  Filter({
  searchBy,
  setSearchBy,
  onSearch,

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
        <div className="filter__content">
          <div className="input-container">
            <Label htmlFor="search">Search</Label>
            <TextInput
              id="search"
              name="search"
              value={searchBy}
              onChange={(e) => {
                setSearchBy(e.target.value)}}
            />
          </div>
          <div className="input-container">
            <Label htmlFor="sort">Sort By</Label>
            <Select
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
            </Select>
          </div>
          
        </div>
        <Button>Submit</Button>
      </div>
    </form>
  );
}
