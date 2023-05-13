import { Button, ButtonTypes } from "../../../../components/Button/Button";
import { Card } from "../../../../components/Card/Card";
import { Label } from "../../../../components/Label/Label";
import { Pagination } from "../../../../components/Pagination/Pagination";
import { IListItem, IPaginationData } from "../../types";

interface IProps {
  news: Array<IListItem>;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onPaginationToggle: () => void;
  paginationData: IPaginationData;
  viewPagination: boolean;
  isPagination: boolean;
}
export function List({
  news,
  onPreviousClick,
  onNextClick,
  viewPagination,
  paginationData,

  isPagination,
  onPaginationToggle,
}: IProps) {
  const startingIndex =
    paginationData.currPage * paginationData.itemsPerPage + 1;

  return (
    <div className="item-list">
      <div className="item-list__main">
        <div>
          <div className="flex">
            <Button
              buttonType={
                isPagination ? ButtonTypes.danger : ButtonTypes.success
              }
              className="ml-auto"
              onClick={onPaginationToggle}
            >
              {isPagination ? "Disable Pagination" : "Enable Pagination "}
            </Button>
          </div>
        </div>
        <ul className="item-list__main__content">
          {news.map((item, index) => (
            <li key={item.id} className="item">
              <Card {...item} index={startingIndex + index} />
            </li>
          ))}
        </ul>

        {viewPagination && (
          <Pagination
            totalPages={paginationData.noOfPages}
            currPage={paginationData.currPage}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        )}
      </div>
    </div>
  );
}
