import React, { useState } from "react";
import Filter from "./Components/Filter/Filter";
import { List } from "./Components/List/List";
import { IListItem, ISortBy } from "./types";
import { fetchHackerNews } from "./Api";

export default function MainPage() {
  const [news, setNews] = useState<Array<IListItem>>([]);

  const onSearch = async ({
    searchText,
    sortBy,
    isPagination,
  }: {
    searchText: string;
    sortBy?: ISortBy;
    isPagination: boolean;
  }) => {
    const data = await fetchHackerNews({
      search: searchText,
      sortBy,
      page: isPagination ? 1 : undefined,
    });

    setNews(data)

    console.log({data});
  };

  return (
    <div className="wrapper">
      <div>
        <h1>Hacker News</h1>
      </div>

      <div className="main-layout">
        <Filter searchText="Some" sortBy="latest" onSearch={onSearch} />
        <List  news={news}/>
      </div>
    </div>
  );
}
