import { actions } from "@/store/home.module";
import { FETCH_ARTICLES } from "@/store/actions.type";

jest.mock("vue", () => {
  return {
    axios: {
      get: jest.fn().mockImplementation(async (resources, params) => {
        if (resources === "articles" && params) {
          return {
            data: {
              articles: [
                {
                  author: {},
                  slug: "Lorem ipsum dolor sit amet",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nisl. Morbi pulvinar nisl urna, tincidunt mattis tortor sollicitudin eget. Nulla viverra justo quis.",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum efficitur justo, nec aliquam quam rutrum in. Pellentesque vulputate augue quis vulputate finibus. Phasellus auctor semper sapien sit amet interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat auctor metus. Integer blandit lacinia volutpat.",
                  tagList: ["lorem", "ipsum", "javascript", "vue"],
                  title: "123",
                  favorited: false,
                  favoritesCount: 0
                }
              ]
            }
          };
        }
        throw new Error("Article not existing");
      })
    }
  };
});

describe("Vuex Home Module", () => {
  it("should return the data", async () => {
    const commit = { commit: () => {} };
    const params = { type: "all", filters: {} };
    const actionCall = await actions[FETCH_ARTICLES](commit, params);
    expect(actionCall).toMatchSnapshot();
  });
});
