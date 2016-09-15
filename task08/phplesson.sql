-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-04 12:04:05
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `phplesson`
--

CREATE TABLE IF NOT EXISTS `phplesson` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newscontent` text CHARACTER SET utf8 NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='新闻表' AUTO_INCREMENT=54 ;

--
-- 转存表中的数据 `phplesson`
--

INSERT INTO `phplesson` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(25, '百度贴吧停止代运营合作：为用户 为更好', 'http://a.hiphotos.baidu.com/news/q%3D100/sign=a81822794934970a4173142fa5cbd1c0/7a899e510fb30f24426c0655c095d143ac4b03f5.jpg', '近日，百度贴吧发布官方微博，称为了让贴吧越来越好', '2016-08-04'),
(41, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-03'),
(42, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-03'),
(39, '朴宝剑拍辱华广告“万里长城”被丑化', 'http://t12.baidu.com/it/u=http://inews.gtimg.com/newsapp_match/0/461424110/0&fm=37', '腾讯娱乐讯 近日，微博曝光一段韩国明星朴宝剑拍摄的广告视频，广告中他和一个叫“万里长城”的人下棋，视频中不但丑化“万里长城”，还安排了女性抽“万里长城”的脸，引发众人大笑，最终“万里长城”输掉了比赛。', '2016-08-03'),
(40, '朴宝剑拍辱华广告“万里长城”被丑化', 'http://t12.baidu.com/it/u=http://inews.gtimg.com/newsapp_match/0/461424110/0&fm=37', '腾讯娱乐讯 近日，微博曝光一段韩国明星朴宝剑拍摄的广告视频，广告中他和一个叫“万里长城”的人下棋，视频中不但丑化“万里长城”，还安排了女性抽“万里长城”的脸，引发众人大笑，最终“万里长城”输掉了比赛。', '2016-08-03'),
(34, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-03'),
(35, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-03'),
(36, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-03'),
(37, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-03'),
(51, 'ROLA被曝与登坂广臣同居热恋', 'http://n.sinaimg.cn/ent/transform/20160804/rovO-fxutfpk4753010.jpg', '浪娱乐讯 据日本媒体报道，日本女星ROLA被曝光与三代目 J Soul Brothers主唱登坂广臣热恋，还去对方家中过夜，一个月被目击数次，据《女性SEVEN》杂志爆料称，他们从去年年底开始交往。', '2016-08-06'),
(52, 'ROLA被曝与登坂广臣同居热恋', 'http://n.sinaimg.cn/ent/transform/20160804/rovO-fxutfpk4753010.jpg', '浪娱乐讯 据日本媒体报道，日本女星ROLA被曝光与三代目 J Soul Brothers主唱登坂广臣热恋，还去对方家中过夜，一个月被目击数次，据《女性SEVEN》杂志爆料称，他们从去年年底开始交往。', '2016-08-06'),
(38, '女子抱女婴跳江：孩子沉入江中不知所踪', 'http://image.xinmin.cn/2016/08/04/f44d305ea4db190d369838.jpg', '昨日上午7时40分许，市区东江大桥上发生了让人叹息的一幕：一位年轻女子抱着女婴从桥上跳下轻生。刚好在附近工作的两名水上环卫工人合力把她救起，不幸的是小孩沉入江中不知所踪。', '2016-08-01'),
(49, '日女星插足师姐婚姻遭解雇', 'http://n.sinaimg.cn/ent/transform/20160804/VGoK-fxutfpk4752864.jpg', '新浪娱乐讯 据日本媒体报道，女星小仓优子目前正在二宝怀孕期，美容师丈夫菊地勋却被曝光与小仓优子所属事务所后辈模特马越幸子外遇，据8月3日发行的《周刊文春》报道称，马越幸子已经被事务所解雇，而小仓优子与丈夫也已经分居。', '2016-08-06'),
(50, '日女星插足师姐婚姻遭解雇', 'http://n.sinaimg.cn/ent/transform/20160804/VGoK-fxutfpk4752864.jpg', '新浪娱乐讯 据日本媒体报道，女星小仓优子目前正在二宝怀孕期，美容师丈夫菊地勋却被曝光与小仓优子所属事务所后辈模特马越幸子外遇，据8月3日发行的《周刊文春》报道称，马越幸子已经被事务所解雇，而小仓优子与丈夫也已经分居。', '2016-08-06'),
(43, '《W》韩孝周满身鲜血失声痛哭', 'http://n.sinaimg.cn/ent/transform/20160804/_dFo-fxutfpf1219637.jpg', '新浪娱乐讯 4日，韩国MBC电视台新剧《W-两个世界》公开第六集剧照，满身鲜血的韩孝周失声痛哭。', '2016-08-02'),
(44, '《W》韩孝周满身鲜血失声痛哭', 'http://n.sinaimg.cn/ent/transform/20160804/_dFo-fxutfpf1219637.jpg', '新浪娱乐讯 4日，韩国MBC电视台新剧《W-两个世界》公开第六集剧照，满身鲜血的韩孝周失声痛哭。', '2016-08-02'),
(28, '物流——电商的“供给侧”攻坚之役', 'http://t10.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C640%2C384%3Bw%3D638/sign=4a083f477a0e0cf3b4b814bb3776de2e/d4628535e5dde7114ab5d1a3afefce1b9d166104.jpg&fm=37', '创投圈人人自危，至少互联网创业者是如此感慨的。进入8月，许多互联网公司也纷纷发布了财报，与过去两年高歌猛进的形式不同，除了超级巨头，不少公司都是增长大幅度下降——如搜狐、如百度。', '2016-08-01'),
(23, '姜宏波《超少年密码》结局引泪奔 好妻母大局为重', 'http://t11.baidu.com/it/u=http://image14.m1905.cn/uploadfile/2016/0804/20160804020027495.jpg&fm=37', '凤凰娱乐讯 由TFBOYS主演、姜宏波实力加盟的科幻悬疑剧《超少年密码》一经推出，', '2016-08-02'),
(22, '重温习近平前7月京外调研12句话', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=f59e04123112b31bc16cc929b6183674/6c224f4a20a446238fe43d379022720e0cf3d7bd.jpg', '今年前7个月，习近平总书记共考察调研了6省，足迹遍及重庆、', '2016-08-01'),
(33, '北京18项便民措施:违法二胎可进京落户投靠父母', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '人户分离下的北京市民,想要申领、换领、补领身份证,可以直接前往就近', '2016-08-01'),
(30, '支付宝消费额被割肉，马云到底动了谁的蛋糕？', 'http://t11.baidu.com/it/u=http://e.hiphotos.baidu.com/news/w%3D638/sign=e016fbe4880a19d8cb0387060bfb82c9/b812c8fcc3cec3fdd0aa0520de88d43f869427ca.jpg&fm=37', '一直让大家极度重视的央行，近日既然打着防范支付风险，保护消费者合法权益旗帜，', '2016-08-03'),
(31, '支付宝消费额被割肉，马云到底动了谁的蛋糕？', 'http://t11.baidu.com/it/u=http://e.hiphotos.baidu.com/news/w%3D638/sign=e016fbe4880a19d8cb0387060bfb82c9/b812c8fcc3cec3fdd0aa0520de88d43f869427ca.jpg&fm=37', '一直让大家极度重视的央行，近日既然打着防范支付风险，保护消费者合法权益旗帜，', '2016-08-03'),
(32, '支付宝消费额被割肉，马云到底动了谁的蛋糕？', 'http://t11.baidu.com/it/u=http://e.hiphotos.baidu.com/news/w%3D638/sign=e016fbe4880a19d8cb0387060bfb82c9/b812c8fcc3cec3fdd0aa0520de88d43f869427ca.jpg&fm=37', '一直让大家极度重视的央行，近日既然打着防范支付风险，保护消费者合法权益旗帜，', '2016-08-03'),
(24, '发改委“降息降准”建议被删除 释放啥信号？', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/08/04/147027170851643284_720_1000.JPEG&fm=37', '“坚定不移降低各种企业成本。择机进一步实施降息、降准政策。', '2016-08-03'),
(45, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-11'),
(46, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-11'),
(47, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-11'),
(48, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-11'),
(29, 'HTC再度亏损，或是时候退出手机市场了', 'http://t10.baidu.com/it/u=http://f.hiphotos.baidu.com/news/w%3D638/sign=f66df147474a20a4311e3fc4a8539847/5ab5c9ea15ce36d360422a6532f33a87e950b125.jpg&fm=37', 'HTC发布了2016年第二季度财报，净亏损高达9800万美元，营收为5.975亿美元同比下滑42.7%，净亏损率为16.4%，早前有分析机构预计它今年的智能手机出货量为1300万，2015年出货量也只有1500万左右，或许它真的是时候退出智能手机市场了。', '2016-08-02'),
(26, '中国队升旗仪式在奥运村举行 雷声确认担任旗手', 'http://img1.dzwww.com:8080/tupian_pl/20160804/52/127770165999328416.jpg?width=500', '8月3日，中国体育代表团成员在参加中国代表团升旗仪式前合影留念。', '2016-08-05');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
