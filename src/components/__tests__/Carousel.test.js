import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Carousel from "../Carousel/Carousel";
import state from "../../state";
import Theme from "../../css/Theme";
import userEvent from "@testing-library/user-event";

const renderComponent = (props = {}) => {
  render(
    <Theme>
      <Provider store={state}>
        <Carousel
          title="Mocked title"
          items={[]}
          highlightedItemIndex={0}
          onItemClick={() => {}}
          {...props}
        />
      </Provider>
    </Theme>
  );
};

describe("Carousel", () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 1200,
    });
  });

  it("renders title", () => {
    renderComponent({ title: "mocked awesome title" });

    expect(
      screen.getByRole("heading", { level: 2, name: "mocked awesome title" })
    ).toBeInTheDocument();
  });

  it("renders all provided items with their titles as the item image alt", () => {
    renderComponent({
      items: [
        {
          id: "mocked-item-1",
          title: "Mocked Item Title",
          image: { url: "" },
        },
        {
          id: "mocked-item-2",
          title: "Mocked Item Title 2",
          image: { url: "" },
        },
      ],
    });

    expect(
      screen.getByRole("img", { name: "Mocked Item Title" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Mocked Item Title 2" })
    ).toBeInTheDocument();
  });

  it("calls item click callback with item index when clicking on item", async () => {
    const mockedOnItemClick = jest.fn();

    renderComponent({
      items: [
        {
          id: "mocked-item-1",
          title: "Mocked Item Title",
          image: { url: "" },
        },
        {
          id: "mocked-item-2",
          title: "Mocked Item Title 2",
          image: { url: "" },
        },
      ],
      onItemClick: mockedOnItemClick,
    });

    expect(mockedOnItemClick).not.toHaveBeenCalled();
    userEvent.click(
      await screen.findByRole("img", { name: "Mocked Item Title 2" })
    );

    expect(mockedOnItemClick).toHaveBeenCalledTimes(1);
    expect(mockedOnItemClick).toHaveBeenCalledWith(1);
  });

  it("disables previous button when first item is being displayed", () => {
    renderComponent({
      items: [
        {
          id: "mocked-item-1",
          title: "Mocked Item Title",
          image: { url: "" },
        },
        {
          id: "mocked-item-2",
          title: "Mocked Item Title 2",
          image: { url: "" },
        },
      ],
    });

    expect(screen.getByTestId("left-button")).toBeDisabled();
  });

  it("disables next button when last item is being displayed", () => {
    renderComponent({
      items: [
        {
          id: "mocked-item-1",
          title: "Mocked Item Title",
          image: { url: "" },
        },
        {
          id: "mocked-item-2",
          title: "Mocked Item Title 2",
          image: { url: "" },
        },
      ],
    });

    expect(screen.getByTestId("right-button")).toBeDisabled();
  });
});
