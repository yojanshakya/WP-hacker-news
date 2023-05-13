import { render, screen, within } from "@testing-library/react";
import { Card } from "./Card";
import { IListItem } from "../../core/MainPage/types";
import { TEST_ID_CARD } from "./testId";
import { timeDifference } from "../../utils/time";

const blogData: IListItem = {
	author: "John Cena",
	id: "you-can't-see-me",
	likesCount: 3,
	noOfComments: 4,
	time: new Date().toISOString(),
	title: "WWE",
	storyURL: "www.google.com",
};

describe("Card", () => {

  it("displays the passed data", () => {

    render(<Card {...blogData} index={1} />);

		const cardContents = screen.getByTestId(TEST_ID_CARD).textContent
    
		expect(cardContents).toContain(blogData.author)
    expect(cardContents).toContain(blogData.likesCount)
    expect(cardContents).toContain(blogData.noOfComments)
    expect(cardContents).toContain(timeDifference(Date.now(), (new Date(blogData.time)).getTime()))
    expect(cardContents).toContain(blogData.title)
    expect(cardContents).toContain(blogData.storyURL)
  });

	it("title links to the story url", ()=> {
    render(<Card {...blogData} index={1} />);

		expect(screen.getByRole('link')).toHaveAttribute("href", blogData.storyURL)
	})

	it("opens the story url link in new page", ()=>{
		render(<Card {...blogData} index={1} />);

		expect(screen.getByRole('link')).toHaveAttribute("href", blogData.storyURL)
	})
});
