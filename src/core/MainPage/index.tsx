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
    currPage: 0,
    totalItems: 0,
    itemsPerPage: 0,
  });

  const onFetchData = async (type: "search" | "next" | "previous" | "togglePagination") => {
    let page: number | undefined;

    if(type === "togglePagination"){
      page = isPagination ? undefined : 0;
      setIsPagination((prev)=>!prev)
    }else if (type === "search") {
      setIsPagination(false)
      page = undefined;
    } else if (type === "next") {
      page = (paginationData.currPage) + 1;
    } else {
      page =
        paginationData.currPage == 0
          ? paginationData.currPage
          : (paginationData.currPage) - 1;
    }

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

  const onPaginationToggle = ()=>{
    onFetchData("togglePagination");
  }

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
          setSearchBy={setSearch}
          setSortBy={setSortBy}
          sortBy={sortBy}
          onSearch={() => onFetchData("search")}
        />
        <List
          onPaginationToggle={onPaginationToggle}
          isPagination={isPagination}
          // todo move to top
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
