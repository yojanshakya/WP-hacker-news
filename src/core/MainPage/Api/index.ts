import axios from 'axios'
import { ISortBy } from '../types';

// todo
type IResponseType = any;

export const fetchHackerNews = async ({ page,sortBy,search}: {
	sortBy?: ISortBy,
	search?: string,
	page?: number,
}) => {

	// todo refactor
	const url: "search" | "search_by_date" = sortBy == "latest" ? "search_by_date" : 'search';

	const params: {
		tags: "front_page" | "story",
		page?: number,
		query?: string,
	} = {
		tags: search || sortBy == "latest" ? "story" : "front_page",
		page,
		query: search || undefined,
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
		return {
			data: response.data?.hits?.map((item: any) => ({
				likesCount: item.points,
				title: item.title,
				author: item.author,
				storyURL: item.story_url,
				noOfComments: item.num_comments,
				time: item.created_at,
				id: item.objectID
			})) || [],
			totalItems: response.data?.nbHits,
			page: response.data?.page,
			noOfPage: response.data?.nbPages,
			itemsPerPage: response.data?.hitsPerPage
		}

	})
}

