# MetaScraper

MetaScraper is a RESTful service that scrapes an input URL and parse its metadata. On sending a post request to the server with a url as its payload, the server parses the webpage to get relevant details such as title, description, images etc. and the processed data is sent back to the client in a json string.

## Testing

```bash
npm test
```

## Local Run

```bash
npm install && npm start
```

## Operations:

#### Simple POST request to the server

```bash
curl -d '{
    "url": "https://www.amazon.in/OnePlus-Nord-Sierra-128GB-Storage/dp/B097RDVDL2"
}' 
-H "Content-Type: application/json" -X POST http://localhost:3000/scraper
```

#### In response we get - 
```bash
{
    "title": "OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage) : Amazon.in: Electronics",
    "description": "OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage) : Amazon.in: Electronics",
    "images": [
        "https://m.media-amazon.com/images/I/41+UAS6TLkL._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/41UfdTcwdIS._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/41qJxT0iJSS._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/41CUEp9AQWS._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/41JYPZD-GgL._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/51007i4GWSS._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/51iySfbhXfS._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/51GmlfgLITL._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/31KkM7l-BPL._AC_SR160,160_.jpg",
        "https://m.media-amazon.com/images/I/41MsEccoEzL._AC_SR160,160_.jpg"
    ]
}
```
