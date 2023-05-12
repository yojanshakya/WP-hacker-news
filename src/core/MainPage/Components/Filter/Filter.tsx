import { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import TextInput from "../../../../components/Input/Input";
import { Label } from "../../../../components/Label/Label";
import { ISortBy } from "../../types";

interface IProps {
  searchText: string;
  sortBy: ISortBy;
  onSearch: (params: {
    searchText: string;
    sortBy?: ISortBy;
    isPagination: boolean;
  }) => void;
}

export default function Filter(props: IProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<ISortBy>();
  const [isPagination, setIsPagination] = useState<boolean>(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement>  = (e)=>{
    e.preventDefault();

    props.onSearch({
      searchText: search,
      sortBy,
      isPagination 
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Filter</h2>
        <div>
          <Label htmlFor="search">Search</Label>
          <TextInput
            id="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
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
        <div>
          {/* todo: create component */}
          <input type="checkbox" checked={isPagination} onChange={(e)=> setIsPagination(e.target.checked)}/>
        </div>
        <Button>Submit</Button>
      </div>
    </form>
  );
}
