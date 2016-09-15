-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-12 11:31:43
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
-- 表的结构 `node1`
--

CREATE TABLE IF NOT EXISTS `node1` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newscontent` text CHARACTER SET utf8 NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `node1`
--

INSERT INTO `node1` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(1, '北京18项便民措施:违法二胎可进京落户投靠父母', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '人户分离下的北京市民,想要申领、换领、补领身份证,可以直接前往就近', '2016-08-13'),
(2, '北京18项便民措施:违法二胎可进京落户投靠父母', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '人户分离下的北京市民,想要申领、换领、补领身份证,可以直接前往就近', '2016-08-13'),
(3, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-23'),
(4, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-18'),
(5, '北京:十余大妈强行逃票闯地铁闸机 根本拦不住', 'http://t12.baidu.com/it/u=http://news.qingdaonews.com/images/attachement/jpg/site1/20160804/201a065afbea190d3a0d16.jpg&fm=36', '网友曝光的大妈（右）闯卡逃票的画面', '2016-08-21');

-- --------------------------------------------------------

--
-- 表的结构 `node2`
--

CREATE TABLE IF NOT EXISTS `node2` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长',
  `newstitle` varchar(100) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newscontent` text CHARACTER SET utf8 NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `node2`
--

INSERT INTO `node2` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(1, '女子抱女婴跳江：孩子沉入江中不知所踪', 'http://image.xinmin.cn/2016/08/04/f44d305ea4db190d369838.jpg', '昨日上午7时40分许，市区东江大桥上发生了让人叹息的一幕：一位年轻女子抱着女婴从桥上跳下轻生。刚好在附近工作的两名水上环卫工人合力把她救起，不幸的是小孩沉入江中不知所踪', '2016-08-09'),
(2, '女子抱女婴跳江：孩子沉入江中不知所踪', 'http://image.xinmin.cn/2016/08/04/f44d305ea4db190d369838.jpg', '昨日上午7时40分许，市区东江大桥上发生了让人叹息的一幕：一位年轻女子抱着女婴从桥上跳下轻生。刚好在附近工作的两名水上环卫工人合力把她救起，不幸的是小孩沉入江中不知所踪', '0000-00-00'),
(3, '女子抱女婴跳江：孩子沉入江中不知所踪', 'http://image.xinmin.cn/2016/08/04/f44d305ea4db190d369838.jpg', '昨日上午7时40分许，市区东江大桥上发生了让人叹息的一幕：一位年轻女子抱着女婴从桥上跳下轻生。刚好在附近工作的两名水上环卫工人合力把她救起，不幸的是小孩沉入江中不知所踪', '0000-00-00'),
(4, '女子抱女婴跳江：孩子沉入江中不知所踪', 'http://image.xinmin.cn/2016/08/04/f44d305ea4db190d369838.jpg', '昨日上午7时40分许，市区东江大桥上发生了让人叹息的一幕：一位年轻女子抱着女婴从桥上跳下轻生。刚好在附近工作的两名水上环卫工人合力把她救起，不幸的是小孩沉入江中不知所踪', '0000-00-00'),
(5, '女子抱女婴跳江：孩子沉入江中不知所踪', 'http://image.xinmin.cn/2016/08/04/f44d305ea4db190d369838.jpg', '昨日上午7时40分许，市区东江大桥上发生了让人叹息的一幕：一位年轻女子抱着女婴从桥上跳下轻生。刚好在附近工作的两名水上环卫工人合力把她救起，不幸的是小孩沉入江中不知所踪', '0000-00-00');

-- --------------------------------------------------------

--
-- 表的结构 `node3`
--

CREATE TABLE IF NOT EXISTS `node3` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'zizeng',
  `newstitle` varchar(100) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newscontent` text CHARACTER SET utf8 NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `node3`
--

INSERT INTO `node3` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(1, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-17'),
(2, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-18'),
(3, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-19'),
(4, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-27'),
(5, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-30');

-- --------------------------------------------------------

--
-- 表的结构 `node4`
--

CREATE TABLE IF NOT EXISTS `node4` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'zizeng',
  `newstitle` varchar(100) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newscontent` text CHARACTER SET utf8 NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `node4`
--

INSERT INTO `node4` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(1, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-24'),
(2, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-09'),
(3, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-16'),
(4, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-22'),
(5, '《谎言西西里》特辑 李准基告白亲吻吓坏邢佳栋', 'http://t10.baidu.com/it/u=http://www.hinews.cn/pic/003/010/894/00301089423_e338ff99.jpg&fm=37', '[提要] 《谎言西西里》主创。关锦鹏、邢佳栋。邢佳栋现身合肥路演。网易娱乐8月4日报道 电影《谎言西西里》全国路演活动正如火如荼进行中，电影主创也是不辞辛苦，身赴各地为影片8月9日七夕上映宣传造势。', '2016-08-04');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='新闻表' AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `phplesson`
--

INSERT INTO `phplesson` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(1, '重温习近平前7月京外调研12句话', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=f59e04123112b31bc16cc929b6183674/6c224f4a20a446238fe43d379022720e0cf3d7bd.jpg', '今年前7个月，习近平总书记共考察调研了6省，足迹遍及重庆、', '2016-08-01'),
(2, '发改委“降息降准”建议被删除 释放啥信号？', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/08/04/147027170851643284_720_1000.JPEG&fm=37', '“坚定不移降低各种企业成本。择机进一步实施降息、降准政策。', '2016-08-03'),
(3, '中国队升旗仪式在奥运村举行 雷声确认担任旗手', 'http://img1.dzwww.com:8080/tupian_pl/20160804/52/127770165999328416.jpg?width=500', '8月3日，中国体育代表团成员在参加中国代表团升旗仪式前合影留念。', '2016-08-05'),
(4, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-26'),
(5, '张天爱晒高清未修大图求P 网友：美女太实在', 'http://t12.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/20160804/22/3331843321218962622.jpg&fm=37', '近日，张天爱发了一张在法国农庄拍摄的照片，她头顶草帽，身处花丛，', '2016-08-09');

-- --------------------------------------------------------

--
-- 表的结构 `phplesson1`
--

CREATE TABLE IF NOT EXISTS `phplesson1` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newscontent` text CHARACTER SET utf8 NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `phplesson1`
--

INSERT INTO `phplesson1` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(1, '姜宏波《超少年密码》结局引泪奔 好妻母大局为重', 'http://t11.baidu.com/it/u=http://image14.m1905.cn/uploadfile/2016/0804/20160804020027495.jpg&fm=37', '凤凰娱乐讯 由TFBOYS主演、姜宏波实力加盟的科幻悬疑剧《超少年密码》一经推出，', '2016-08-01'),
(2, '重温习近平前7月京外调研12句话', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=f59e04123112b31bc16cc929b6183674/6c224f4a20a446238fe43d379022720e0cf3d7bd.jpg', '今年前7个月，习近平总书记共考察调研了6省，足迹遍及重庆、', '2016-08-07'),
(3, '物流——电商的“供给侧”攻坚之役', 'http://t10.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C640%2C384%3Bw%3D638/sign=4a083f477a0e0cf3b4b814bb3776de2e/d4628535e5dde7114ab5d1a3afefce1b9d166104.jpg&fm=37', '创投圈人人自危，至少互联网创业者是如此感慨的。进入8月，许多互联网公司也纷纷发布了财报，与过去两年高歌猛进的形式不同，除了超级巨头，不少公司都是增长大幅度下降——如搜狐、如百度。', '2016-08-31'),
(4, 'HTC再度亏损，或是时候退出手机市场了', 'http://t10.baidu.com/it/u=http://f.hiphotos.baidu.com/news/w%3D638/sign=f66df147474a20a4311e3fc4a8539847/5ab5c9ea15ce36d360422a6532f33a87e950b125.jpg&fm=37', 'HTC发布了2016年第二季度财报，净亏损高达9800万美元，营收为5.975亿美元同比下滑42.7%，净亏损率为16.4%，早前有分析机构预计它今年的智能手机出货量为1300万，2015年出货量也只有1500万左右，或许它真的是时候退出智能手机市场了。', '2016-08-30'),
(5, '支付宝消费额被割肉，马云到底动了谁的蛋糕？', 'http://t11.baidu.com/it/u=http://e.hiphotos.baidu.com/news/w%3D638/sign=e016fbe4880a19d8cb0387060bfb82c9/b812c8fcc3cec3fdd0aa0520de88d43f869427ca.jpg&fm=37', '一直让大家极度重视的央行，近日既然打着防范支付风险，保护消费者合法权益旗帜，', '0000-00-00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
