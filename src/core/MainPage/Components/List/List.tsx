import React, { PropsWithChildren, PropsWithoutRef } from 'react'
import { Card } from '../../../../components/Card/Card'
import { IListItem } from '../../types'

interface IProps {
	news: Array<IListItem>
}
export function List(props: IProps) {
	
	// todo remove this
	const ListItems  = [
		{
			likesCount: 400,
			title: "some title",
			author: "author",
			storyURL: "www.helloworld.com",
			noOfComments: 300,
			time: "new Date()"
		},
		{
			likesCount: 400,
			title: "some title",
			author: "author",
			storyURL: "www.helloworld.com",
			noOfComments: 300,
			time: "new Date()"
		},
		{
			likesCount: 400,
			title: "some title",
			author: "author",
			storyURL: "www.helloworld.com",
			noOfComments: 300,
			time: "new Date()"
		},
	] 

	return (
		<div>
			{props.news.map((item)=>(
				<Card {...item}/>
			))}
		</div>
	)
}
