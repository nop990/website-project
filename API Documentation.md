# Chris Gardens API Documentation

Chris Gardens uses a REST API

## Resources (Lambda Functions)

### "PageLikes" and "ReadPageLikes"

At the bottom of the main page, an image of a thumbs up serves as a "like button" for people that enjoy the website. 

#### POST

Pressing the button calls the PageLikes function through the API gateway, which records a unique, random string ID to a DynamoDB table called "Likes".

***Sample Call***

**N/A**

***Sample Response***

```json
{
  "statusCode": 201,
  "body": "",
  "headers": {
    "Access-Control-Allow-Origin": "*"
  }
}
```

#### GET

When the website loads, it calls the ReadPageLikes function through the API gateway. This returns the "Count" value (the number of unique string IDs in the Likes table) above the like button.

***Sample Call***

**N/A**

***Sample Response***

```json
{
  "statusCode": 200,
  "body": {
    "Count": 601,
    "ScannedCount": 601
  },
  "headers": {
    "Access-Control-Allow-Origin": "*"
  }
}
```

### "RandomMessage"

At the bottom of the "Flowers" subpage, there is a button that can be clicked to display the name of a random flower.

#### GET

Pressing the button calls RandomMessage through the API gateway, which returns a random string from a preset array.

***Sample Call***

**N/A**

***Sample Response***

```json
{
  "statusCode": 200,
  "headers": {
    "Access-Control-Allow-Origin": "*"
  },
  "body": "\"Plumeria\""
}
```