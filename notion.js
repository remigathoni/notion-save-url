const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function addItem(title, link, category, categoryId) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        link: {
          type: "url",
          url: link,
        },
        category: {
          multi_select: [
            {
              name: category,
            },
          ],
        },
      },
    });
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = addItem;
