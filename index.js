var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");
var permalinks = require("metalsmith-permalinks");

Metalsmith(__dirname)
    .metadata({
        title: "Cool Site",
        description: "The best website you have ever seen"
    })
    .source("./src")
    .destination("./")
    .clean(true)

    .use(markdown())
    .use(permalinks({
        relative: false
    }))
    .use(layouts({
        engine: "handlebars"
    }))
    
    .build(function(err){
        if (err) throw err;
    });