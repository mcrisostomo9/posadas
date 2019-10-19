const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@typeform/,
            loader: "null-loader",
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const gallery = await graphql(`
    query GalleryQuery {
      allPrismicWeddingGallery {
        edges {
          node {
            id
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `);

  gallery.data.allPrismicWeddingGallery.edges.forEach(
    ({ node: { id, data } }) => {
      createPage({
        path: `/wedding-gallery/${data.title.text.toLowerCase()}`,
        component: path.resolve("./src/templates/GalleryTemplate.js"),
        context: {
          id,
          data,
        },
      });
    }
  );
};
