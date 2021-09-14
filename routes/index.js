var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


/* GET scraper. */
router.get('/scraper', function(req, res, next) {
  res.end("GET operation is not supported on /scraper")
});

router.post('/scraper', function(req, res, next) {
    // Setting the response headers to 'application/json'
    res.setHeader('Content-Type', 'application/json');
 
    //make a new request to the URL provided in the HTTP POST request
    request(req.body.url, function (error, resp, html) {
        var resObj = {};
        //Handling the errors, setting statuscode and returning the error response
        if (error) {
            res.statusCode = 404;
            res.end(JSON.stringify({error: 'There was an error processing the query'}));
            return;
        }

        $ = cheerio.load(html),
        //search for the meta elements
        $title = $('head title').text(),
        $description = $('meta[name="description"]').attr('content'),
        $images = $('img'); //An array containing the values of all the img tags.

        var responseObject = {}
        
        // Preparing the response data
        if ($title) {
            responseObject.title = $title;
        }
 
        if ($description) {
            responseObject.description = $description;
        }
 
        if ($images && $images.length){
            responseObject.images = [];
            
            //Using a for loop to find all the links from the img-tags and appending it to an array
            for (var i = 0; i < $images.length; i++) {
                responseObject.images.push($($images[i]).attr('src'));
            }
        }
 
        //send the response back to the client with statuscode as 200
        res.statusCode = 200;
        res.end(JSON.stringify(responseObject));
        
    });
});

router.all('/*', function(req, res, next) {
    res.statusCode = 400;
    res.end(req.method + " operation is not supported on /" + Object.values(req.params))
  });

module.exports = router;
