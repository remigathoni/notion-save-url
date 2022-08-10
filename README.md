# Save URL to Notion

An Express API that saves jobs and resource links to a Notion database. I created it to help me keep track of technical interview resources and job openings.

## Installation

Clone this repo and install it on your local machine

```bash
git clone https://github.com/gathoni-k/notion-save-url
```
## Use your own Notion Database
Get [NOTION API key and database ID](https://developers.notion.com/docs/getting-started#getting-started) and add them to the .env file.
```bash
NOTION_KEY= your-notion-api-key
NOTION_DATABASE_ID= your-notion-database-id
```

Then deploy your API. I used [Heroku](https://github.com/gathoni-k/notion-save-url).
Remember to [add the .env variables to Heroku](https://devcenter.heroku.com/articles/config-vars) too.

## Use My Notion Database

To add a URL and tag, use: ```POST https://notion-save-url.herokuapp.com/add-url```.

Send the link and tag in the request body.
```javascript
{
  link: url,
  tag: can either be job or resources
}
```

For example:
```javascript
fetch("https://notion-save-url.herokuapp.com/add-url", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        mode: "cors",
        body: JSON.stringify({link, tag})
    }).then(res => {
        return res.json()
    }).then(data => {
        return data
    }). catch ((error) => {
        return false
  })
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
