import React from 'react'



// todo change this to reusable
interface IProps {
	likesCount: number,
	title: string,
	author: string,
	storyURL: string,
	noOfComments: number,
	time: string
}

export function Card(props: IProps) {
	

	return (
		// todo remove style
		<div style={{display: "flex"}}>
			<span>Likes: {props.likesCount}</span>
			<span>Title: {props.title}</span>
			<span>Author: {props.author}</span>
			<span>Website: {props.storyURL}</span>
			<span>Time: {props.time}</span>
			<span>Comments: {props.noOfComments}</span>
		</div>
	)
}
