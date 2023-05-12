import React from 'react'


// 1. Post title
// 2. Points/upvotes
// 3. Author
// 4. Formatted timestamp
// 5. Number of comments (No need to implement comments page)
// 6. URL to the story if it exists.
interface IProps {
	likesCount: number,
	title: string,
	author: string,
	storyURL: string,
	noOfComments: number,
	time: Date
}

export function Card(props: IProps) {
	

	return (
		// todo remove style
		<div style={{display: "flex"}}>
			<span>Likes: {props.likesCount}</span>
			<span>Title: {props.title}</span>
			<span>Author: {props.author}</span>
			<span>Website: {props.storyURL}</span>
			<span>Time: {props.time.toISOString()}</span>
			<span>Comments: {props.noOfComments}</span>
		</div>
	)
}
