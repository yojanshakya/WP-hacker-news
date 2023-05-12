import axios from 'axios'
import {  ISortBy } from '../types';

// todo
type IResponseType = any;


export const fetchHackerNews = async ({ disablePagination = false,page,sortBy,search }: {
	// todo store this in a type
	sortBy?: ISortBy,
	search?: string,
	page?: number,
	disablePagination?: boolean,
}) => {

	// todo refactor
	const url: "search" | "search_by_date" = sortBy == "latest" ? "search_by_date" : 'search';

	const params: {
		tags: "front_page" | "story",
		page?: number,
		query?: string
	} = {
		tags: search || sortBy == "latest" ? "story" : "front_page",
		page,
		query: search || undefined
	}



	return axios<IResponseType>(
		{
			// todo store this in constant
			method: "GET",
			baseURL: import.meta.env.APP_BASE_URL,
			params,
			url
		}
	).then((response) => {
		return response.data?.hits?.map((item: any) => ({
			likesCount: item.points,
			title: item.title,
			author: item.author,
			storyURL: item.story_url,
			noOfComments: 300,
			time: item.created_at
		})) || []
	})
}

