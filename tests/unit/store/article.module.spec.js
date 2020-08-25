import { actions } from "@/store/article.module";
import { FETCH_ARTICLE } from "@/store/actions.type";

jest.mock("vue", () => {
  return {
    axios: {
      get: jest.fn().mockImplementation(async articleSlug => {
        if (articleSlug.includes("8371b051-cffc-4ff0-887c-2c477615a28e")) {
          return {
            data: {
              article: {
                author: {},
                title: "Lorem ipsum dolor sit amet",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nisl. Morbi pulvinar nisl urna, tincidunt mattis tortor sollicitudin eget. Nulla viverra justo quis.",
                body:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum efficitur justo, nec aliquam quam rutrum in. Pellentesque vulputate augue quis vulputate finibus. Phasellus auctor semper sapien sit amet interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat auctor metus. Integer blandit lacinia volutpat.",
                tagList: ["lorem", "ipsum", "javascript", "vue"]
              }
            }
          };
        }
        if (articleSlug.includes("f986b3d6-95c2-4c4f-a6b9-fbbf79d8cb0c")) {
          return {
            data: {
              comments: [
                {
                  id: 1,
                  createdAt: "2018-12-01T15:43:41.235Z",
                  updatedAt: "2018-12-01T15:43:41.235Z",
                  body: "Lorem ipsum dolor sit amet.",
                  author: {
                    username: "dccf649a-5e7b-4040-b8c3-ecf74598eba2",
                    bio: null,
                    image: "https://via.placeholder.com/350x150",
                    following: false
                  }
                },
                {
                  id: 2,
                  createdAt: "2018-12-01T15:43:39.077Z",
                  updatedAt: "2018-12-01T15:43:39.077Z",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet.",
                  author: {
                    username: "8568a50a-9656-4d55-a023-632029513a2d",
                    bio: null,
                    image: "https://via.placeholder.com/350x150",
                    following: false
                  }
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

describe("Vuex Article Module", () => {
  it("should return the data of the api call when calling the function", async () => {
    const context = { commit: () => {} };
    const articleSlug = "8371b051-cffc-4ff0-887c-2c477615a28e";
    const prevArticle = undefined;
    const actionCall = await actions[FETCH_ARTICLE](
      context,
      articleSlug,
      prevArticle
    );
    expect(actionCall).toMatchSnapshot();
  });
});
