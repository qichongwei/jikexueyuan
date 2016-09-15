var restify = require('restify');
var orm = require("orm");


var server = restify.createServer();
server.get('/1', respond);
server.get('/2', respond1);
server.get('/3', respond2);
server.get('/4', respond3);
server.get('/5', respond4);
server.get('/6', respond5);
server.listen(3900, function() {
  console.log('服务器启动成功');
});

function respond(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    orm.connect("mysql://root:@localhost/test", function (err, db) {
        if (err) throw err;

        var News = db.define("phplesson", {
            newsid :{
                type:'serial',
                key:true
            },
            newstitle: String,
            newsimg : String,
            newscontent: String,
            newstime:Date
        });
         News.find({}, function (err, phplesson) {
            // console.log(phplesson);
            res.charSet('utf-8');
            res.json(phplesson);
        });
    });
}
function respond1(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    orm.connect("mysql://root:@localhost/test", function (err, db) {
        if (err) throw err;

        var News = db.define("phplesson1", {
            newsid :{
                type:'serial',
                key:true
            },
            newstitle: String,
            newsimg : String,
            newscontent: String,
            newstime:Date
        });
        News.find({}, function (err, phplesson) {
            // console.log(phplesson);
            res.charSet('utf-8');
            res.json(phplesson);
        });
    });
}
function respond2(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    orm.connect("mysql://root:@localhost/test", function (err, db) {
        if (err) throw err;

        var News = db.define("node1", {
            newsid :{
                type:'serial',
                key:true
            },
            newstitle: String,
            newsimg : String,
            newscontent: String,
            newstime:Date
        });
        News.find({}, function (err, phplesson) {
            // console.log(phplesson);
            res.charSet('utf-8');
            res.json(phplesson);
        });
    });
}
function respond3(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    orm.connect("mysql://root:@localhost/test", function (err, db) {
        if (err) throw err;

        var News = db.define("node2", {
            newsid :{
                type:'serial',
                key:true
            },
            newstitle: String,
            newsimg : String,
            newscontent: String,
            newstime:Date
        });
        News.find({}, function (err, phplesson) {
            // console.log(phplesson);
            res.charSet('utf-8');
            res.json(phplesson);
        });
    });
}
function respond4(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    orm.connect("mysql://root:@localhost/test", function (err, db) {
        if (err) throw err;

        var News = db.define("node3", {
            newsid :{
                type:'serial',
                key:true
            },
            newstitle: String,
            newsimg : String,
            newscontent: String,
            newstime:Date
        });
        News.find({}, function (err, phplesson) {
            // console.log(phplesson);
            res.charSet('utf-8');
            res.json(phplesson);
        });
    });
}
function respond5(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    orm.connect("mysql://root:@localhost/test", function (err, db) {
        if (err) throw err;

        var News = db.define("node4", {
            newsid :{
                type:'serial',
                key:true
            },
            newstitle: String,
            newsimg : String,
            newscontent: String,
            newstime:Date
        });
        News.find({}, function (err, phplesson) {
            // console.log(phplesson);
            res.charSet('utf-8');
            res.json(phplesson);
        });
    });
}