import React from "react";
import { timeDifference } from "../../utils/time";

// todo change this to reusable
interface IProps {
  likesCount: number;
  title: string;
  author: string;
  storyURL: string;
  noOfComments: number;
  time: string;
  index: number;
}

export function Card(props: IProps) {
  return (
    // todo remove style
    <div className="card">
      <a className="card__title" target="_blank" href={props.storyURL || ""}>
        {props.index}. {props.title}
        <span className="card__sub-title"> ({props.storyURL})</span>
      </a>
      <p className="card__sub-title">
        {props.likesCount} likes | By {props.author}{" "}
        {timeDifference(Date.now(), new Date(props.time).getTime())} |{" "}
        {props.noOfComments} comments
      </p>
    </div>
  );
}
