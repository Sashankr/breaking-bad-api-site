const path = require('path');

exports.createPages = async ({graphql,actions})=>{
  const {createPage} = actions;
  const characterTemplate = path.resolve('./src/templates/characterDetails.js');

  const pages = await graphql(`
  
    query charQuery{
      allCustomApi {
          edges {
             node {
              name
              occupation
              portrayed
              img
              char_id
              birthday
          }
        }
      }
    }
  
  `)
  console.log(pages);

  let characters = pages.data.allCustomApi.edges;

  characters.forEach(edge=>{
    createPage({
      path : `/characters/${edge.node.char_id}`, // generates unique paths for each character
      component : characterTemplate,
      context : {
        charDetails : edge.node
      }
    });
  })

}