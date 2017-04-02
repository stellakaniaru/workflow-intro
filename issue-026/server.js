var express = require('express');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var app = express();


app.get('/crawl', function(req, res) {

	url =  'https://nodejs.org/en/docs/';

	request(url, function(error, response, body) {
		if(error) {return  console.error('There was an error! ' + error)}
		
		var $ = cheerio.load(body);
		var list = [],
			final_list;

		$('a').each(function() {
			var text = $(this).text();
			var link = $(this).attr('href');
			list = list.concat(link);
			final_list = Array.from(new Set(list));
		});

		for (var i = 0; i < final_list.length; i++) {
			fs.appendFile('links.txt', final_list[i] + '\n');
		}

		console.log('File successfully written! - Check your project directory for the links.txt file')
		res.send('Check your console!!');
	});
});

app.listen('8085');

console.log('The magic happens on port 8085');

exports = module.exports = app;
