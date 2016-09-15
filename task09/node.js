var restify = require('restify');
var orm = require("orm");
var url = require('url');
var util = require('util');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.get('/1', respond);
server.get('/2', respond1);
server.get('/3', respond2);
server.get('/4', respond3);
server.listen(3910, function() {
    console.log( '后台启动成功');
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

        News.create([{
            newstitle:req.query.newstitle,
            newsimg :  req.query.newsimg,
            newscontent: req.query.newscontent,
            newstime:req.query.newstime
        }], function (err, items) {
            if(err)throw err;
        });
        res.charSet('utf-8');
        res.send('新闻上传成功');

    });
}
function respond2(req, res, next) {
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
        var id=req.query.newsid;
        News.get(id, function (err,qiwei) {
            if(err)throw  err;
            qiwei.newstitle=req.query.newstitle;
            qiwei. newsimg = req.query.newsimg;
            qiwei.newscontent= req.query.newscontent;
            qiwei.newstime=req.query.newstime;
            qiwei.save(function () {
                console.log('修改成功');
            });

        });
        res.charSet('utf-8');
        res.send('新闻修改成功');
        // News.get(
        //     newstitle:req.query.newstitle,
        //     newsimg :  req.query.newsimg,
        //     newscontent: req.query.newscontent,
        //     newstime:req.query.newstime
        // }], function (err, items) {
        //     if(err)throw err;
        // });
        // res.charSet('utf-8');
        // res.send('新闻上传成功');

    });
}
function respond1(req, res, next) {
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
        var id=req.query.newsid;
        News.get(id, function (err, qiwei) {
            qiwei.remove(function (err) {
                console.log("removed!");
            });
        });
        res.charSet('utf-8');
        res.send('新闻删除成功');

    });
}
function respond3(req, res, next) {
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
        var id=req.query.newsid;
        News.find({newsid:id}
        , function (err, items) {
                res.charSet('utf-8');
                res.json(items);
        });
        res.charSet('utf-8');
        // res.send('新闻上传成功');

    });
}
