import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Theme from "../../css/Theme";
import state from "../../state";

import { HighlightedItem } from "../MediaList/MediaList";

describe("MediaList", () => {
  it("renders title", () => {
    render(
      <Theme>
        <Provider store={state}>
          <BrowserRouter>
            <HighlightedItem
              item={{
                id: 1,
                title: "Mocked title",
                description: "Mocked description",
                year: 2020,
                titleType: "movie",
                rating: 6.4,
              }}
            />
          </BrowserRouter>
        </Provider>
      </Theme>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Mocked title" })
    ).toBeInTheDocument();
  });
});
