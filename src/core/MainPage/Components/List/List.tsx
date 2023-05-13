import { Card } from "../../../../components/Card/Card";
import { IListItem, IPaginationData } from "../../types";

interface IProps {
  news: Array<IListItem>;
  onPreviousClick: () => void;
  onNextClick: () => void;
  paginationData: IPaginationData;
  viewPagination: boolean;
}
export function List({
  news,
  onPreviousClick,
  onNextClick,
  viewPagination,
  paginationData,
}: IProps) {
  const startingIndex =
    (paginationData.currPage - 1) * paginationData.itemsPerPage + 1;

  return (
    <div className="table">
      <div className="table__main">
        <div className="table__main__content">
          {news.map((item, index) => (
            <Card key={item.id} {...item} index={startingIndex + index} />
          ))}
        </div>
        {viewPagination && (
          <div className="table__main__pagination">
            <button
              disabled={paginationData.currPage == 1}
              onClick={() => onPreviousClick()}
            >
              Prev
            </button>
            <span>{paginationData.currPage}</span>
            <button
              onClick={() => onNextClick()}
              disabled={paginationData.currPage === paginationData.noOfPages -1 }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
