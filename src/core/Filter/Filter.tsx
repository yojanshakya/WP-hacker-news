import { Button } from "../../components/Button/Button";
import TextInput from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";

interface IProps {
  searchText: string;
  sortBy: "pagination" | "latest";
}

export default function Filter(props: IProps) {
  return (
    <div>
      <div>
        <h2>Filter</h2>
        <div>
          <Label htmlFor="search">Search</Label>
          <TextInput id="search" />
        </div>
        <div>
          <Label htmlFor="sort">Sort By</Label>
          <select name="sort" id="sort">
            <option value="popularity">Popularity</option>
            <option value="latest">Latest</option>
          </select>
        </div>
				<Button>Submit</Button>
      </div>
    </div>
  );
}
