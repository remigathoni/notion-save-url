const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

async function addItem(title, link, tag) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { 
          title:[
            {
              "text": {
                "content": title
              }
            }
          ]
        },
        Url: {
          "type": "url",
          "url": link
        },
        "Tags": {
            "multi_select": [
              {"name": tag}
            ]
          }
      },
    })
    return true
  } catch (error) {
    console.error(error.body)
    return false
  }
}

module.exports = addItem