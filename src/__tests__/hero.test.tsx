import "@testing-library/jest-dom/extend-expect";
import { screen, render, cleanup } from "@testing-library/react";
import Hero from "../components/Hero/Hero";
import { Provider } from "react-redux";
import store from "../store/index";
import { getSongs } from "../api/music";
import { setPlayingNow } from "../store/songs/actions";

afterEach(() => cleanup());

test("Hero renders", async () => {
  render(
    <Provider store={store}>
      <Hero />
    </Provider>
  );

  const heroElement = screen.getByTestId("app-hero-banner");
  expect(heroElement).toHaveTextContent("Your one stop music solution!");
});

test("Hero renders correct playing now song", async () => {
  render(
    <Provider store={store}>
      <Hero />
    </Provider>
  );
  const songs = await getSongs();
  const { name } = songs[0];
  store.dispatch(setPlayingNow(songs[0]));
  const heroElement = screen.getByTestId("app-hero-banner");
  expect(heroElement).toHaveTextContent(name);
});
