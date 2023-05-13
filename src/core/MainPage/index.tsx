import React, { useState } from "react";
import Filter from "./Components/Filter/Filter";
import { List } from "./Components/List/List";
import { IListItem, IPaginationData, ISortBy } from "./types";
import { fetchHackerNews } from "./Api";

export default function MainPage() {
  const [news, setNews] = useState<Array<IListItem>>([]);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<ISortBy>();
  const [isPagination, setIsPagination] = useState<boolean>(false);

  const [paginationData, setPaginationData] = useState<IPaginationData>({
    noOfPages: 0,
    currPage: 1,
    totalItems: 0,
    itemsPerPage: 0,
  });

  const onFetchData = async (type: "search" | "next" | "previous") => {
    let page: typeof paginationData.currPage;
    // let hitsPerPage = 20;

    if (type === "search") {
      page = isPagination ? 1 : paginationData.currPage;
    } else if (type === "next") {
      page = (paginationData.currPage || 0) + 1;
    } else {
      page =
        paginationData.currPage == 1
          ? paginationData.currPage
          : (paginationData.currPage || 0) - 1;
    }

    setPaginationData({
      ...paginationData,
      currPage: page,
    });

    const data = await fetchHackerNews({
      search,
      sortBy,
      page,
    });

    setNews(data.data);
    setPaginationData({
      currPage: data.page,
      totalItems: data.totalItems,
      noOfPages: data.noOfPage,
      itemsPerPage: data.itemsPerPage,
    });
  };

  React.useEffect(() => {
    onFetchData("search");
  }, []);

  return (
    <div className="wrapper container">
      <div className="header">
        <h1>Hacker News</h1>
      </div>

      <div className="main">
        <Filter
          searchBy={search}
          isPagination={isPagination}
          setIsPagination={setIsPagination}
          setSearchBy={setSearch}
          setSortBy={setSortBy}
          sortBy={sortBy}
          onSearch={() => onFetchData("search")}
        />
        <List
          onPreviousClick={() => onFetchData("previous")}
          onNextClick={() => onFetchData("next")}
          news={news}
          paginationData={paginationData}
          viewPagination={isPagination}
        />
      </div>
    </div>
  );
}
