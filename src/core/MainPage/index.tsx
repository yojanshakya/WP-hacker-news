import React, { useState } from "react";
import Filter from "./Components/Filter/Filter";
import { List } from "./Components/List/List";
import { IListItem, IPaginationData, ISortBy } from "./types";
import { fetchHackerNews } from "./Api";

export default function MainPage() {
  const [news, setNews] = useState<Array<IListItem>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<ISortBy>();
  const [isPagination, setIsPagination] = useState<boolean>(false);

  // todo refactor
  const [paginationData, setPaginationData] = useState<IPaginationData>({
    noOfPages: 0,
    currPage: 0,
    totalItems: 0,
    itemsPerPage: 0,
  });

  const onFetchData = async (
    type: "search" | "next" | "previous" | "togglePagination"
  ) => {
    setLoading(true);
    setError("");

    let page: number | undefined;

    if (type === "togglePagination") {
      page = isPagination ? undefined : 0;
      setIsPagination((prev) => !prev);
    } else if (type === "search") {
      setIsPagination(false);
      page = undefined;
    } else if (type === "next") {
      page = paginationData.currPage + 1;
    } else {
      page =
        paginationData.currPage == 0
          ? paginationData.currPage
          : paginationData.currPage - 1;
    }

    try {
      const data = await fetchHackerNews({
        search,
        sortBy,
        page,
      });

      setLoading(false);

      setNews(data.data);
      setPaginationData({
        currPage: data.page,
        totalItems: data.totalItems,
        noOfPages: data.noOfPage,
        itemsPerPage: data.itemsPerPage,
      });
    } catch (e: any) {
      setError(e?.message || "There was some error");
    }
  };

  const onPaginationToggle = () => {
    onFetchData("togglePagination");
  };
  const onSearch = () => {
    onFetchData("search");
  };
  const onPreviousClick = () => onFetchData("previous");
  const onNextClick = () => onFetchData("next");

  React.useEffect(() => {
    onFetchData("search");
  }, []);

  return (
    <div className="main">
      {/* todo button loading  */}
      <Filter
        searchBy={search}
        setSearchBy={setSearch}
        setSortBy={setSortBy}
        sortBy={sortBy}
        onSearch={onSearch}
      />
      {loading ? (
        <div className="shadow-card flex-grow-1">Loading...</div>
      ) : error ? (
        <div className="shadow-card flex-grow-1">{error}</div>
      ) : (
        <List
          onPaginationToggle={onPaginationToggle}
          isPagination={isPagination}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
          news={news}
          paginationData={paginationData}
          viewPagination={isPagination}
        />
      )}
    </div>
  );
}
