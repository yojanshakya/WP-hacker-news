import React, { PropsWithChildren, PropsWithoutRef } from 'react'
import { Card } from '../../../../components/Card/Card'

export function List() {
	
	// todo remove this
	const ListItems  = [
		{
			likesCount: 400,
			title: "some title",
			author: "author",
			storyURL: "www.helloworld.com",
			noOfComments: 300,
			time: new Date()
		},
		{
			likesCount: 400,
			title: "some title",
			author: "author",
			storyURL: "www.helloworld.com",
			noOfComments: 300,
			time: new Date()
		},
		{
			likesCount: 400,
			title: "some title",
			author: "author",
			storyURL: "www.helloworld.com",
			noOfComments: 300,
			time: new Date()
		},
	] 

	return (
		<div>
			{ListItems.map((item)=>(
				<Card {...item}/>
			))}
		</div>
	)
}
