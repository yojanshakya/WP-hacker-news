import { Button, ButtonTypes } from "../Button/Button";

interface IProps {
  currPage: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
  totalPages: number;
}

export function Pagination({
  currPage,
  totalPages,
  onPreviousClick,
  onNextClick,
}: IProps) {
  return (
    <div className="pagination">
      <Button
        disabled={currPage === 0}
        onClick={() => onPreviousClick()}
        buttonType={ButtonTypes.plain}
      >
        Prev
      </Button>
      <span>{currPage + 1}</span>
      <Button
        buttonType={ButtonTypes.plain}
        onClick={() => onNextClick()}
        disabled={currPage === totalPages - 1}
      >
        Next
      </Button>
    </div>
  );
}
