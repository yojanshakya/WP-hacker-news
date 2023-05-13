export type ISortBy = "latest" | "popular" | undefined;

export type IListItem =  {
  likesCount: number;
  title: string;
  author: string;
  storyURL: string;
  noOfComments: number;
  time: string;
  id: string;
}

export interface IPaginationData {
  noOfPages: number;
  currPage: number;
  totalItems: number;
  itemsPerPage: number;
}

