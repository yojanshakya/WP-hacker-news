export type ISortBy = "latest" | "popular" | undefined;

export type IListItem = {
  likesCount: number;
  title: string;
  author: string;
  storyURL?: string;
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


export interface IGetHackerNewsResponse {
  hits: {
    created_at: string;
    title: string;
    url?: string;
    author: string;
    points: number;
    story_text?: string;
    comment_text?: string;
    num_comments: number;
    story_id?: string;
    story_title?: string;
    story_url?: string;
    parent_id?: string;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: {
      title: {
        value: string;
        matchLevel: string;
        fullyHighlighted: boolean;
        matchedWords: string[];
      };
      url?: {
        value: string;
        matchLevel: string;
        fullyHighlighted?: boolean;
        matchedWords: string[];
      };
      author: {
        value: string;
        matchLevel: string;
        fullyHighlighted?: boolean;
        matchedWords: string[];
      };
      story_text?: {
        value: string;
        matchLevel: string;
        fullyHighlighted?: boolean;
        matchedWords: string[];
      };
    };
    relevancy_score?: number;
  }[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive:  {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    afterFetch:  {
      scanning: number;
      total: number;
    };
    fetch:  {
      scanning: number;
      total: number;
    };
    request: {
      roundTrip: number;
    };
    total: number;
  }
  ;
  serverTimeMS: number;
}