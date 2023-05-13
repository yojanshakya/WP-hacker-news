import { Button, ButtonTypes } from "../../../../components/Button/Button";
import { Card } from "../../../../components/Card/Card";
import { Label } from "../../../../components/Label/Label";
import { IListItem, IPaginationData } from "../../types";

interface IProps {
  news: Array<IListItem>;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onPaginationToggle: ()=>void;
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
  onPaginationToggle
}: IProps) {
  const startingIndex =
    (paginationData.currPage * paginationData.itemsPerPage) + 1;

  return (
    <div className="table">
      <div className="table__main">
      <div >
          <div className="input__container" style={{display: "flex"}}>
            <Button buttonType={isPagination ? ButtonTypes.danger : ButtonTypes.success} style={{marginLeft:"auto"}}
              onClick={onPaginationToggle }
            >{isPagination ? "Disable Pagination" : "Enable Pagination " }</Button>
          </div>
        </div>
        <div className="table__main__content">
          
          {news.map((item, index) => (
            <Card key={item.id} {...item} index={startingIndex + index} />
          ))}
        </div>
        
        {viewPagination && (
          <div className="table__main__pagination">
            <Button
              disabled={paginationData.currPage === 0 }
              onClick={() => onPreviousClick()}
              buttonType={ButtonTypes.plain}
            >
              Prev
            </Button>
            <span>{paginationData.currPage + 1}</span>
            <Button
              buttonType={ButtonTypes.plain}
              onClick={() => onNextClick()}
              disabled={
                paginationData.currPage === paginationData.noOfPages - 1
              }
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
