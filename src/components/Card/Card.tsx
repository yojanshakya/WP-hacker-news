import { timeDifference } from "../../utils/time";
import { IListItem } from "../../core/MainPage/types";

type IProps = IListItem & {
  index: number;
};

export function Card(props: IProps) {
  return (
    <div >
      <a className="item__title" target="_blank" href={props.storyURL || ""}>
        {props.index}. {props.title}
        {props.storyURL && (
          <span className="item__sub-title"> ({props.storyURL})</span>
        )}
      </a>
      <p className="item__sub-title">
        {props.likesCount} likes | By {props.author}{" "}
        {timeDifference(Date.now(), new Date(props.time).getTime())} |{" "}
        {props.noOfComments} comments
      </p>
    </div>
  );
}
