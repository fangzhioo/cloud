# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 49.234.214.14 (MySQL 5.7.29)
# Database: cloud_blog
# Generation Time: 2020-05-21 07:20:16 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table blog_article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_article`;

CREATE TABLE `blog_article` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `title` varchar(200) NOT NULL COMMENT '标题',
  `subtitle` varchar(300) DEFAULT NULL COMMENT '副标题',
  `cover` varchar(400) DEFAULT NULL COMMENT '封面',
  `cid` int(11) NOT NULL DEFAULT '999' COMMENT '类目 默认999',
  `content` text COMMENT '内容',
  `author_id` int(11) DEFAULT '0' COMMENT '作者',
  `author_avatar` text COMMENT '作者头像',
  `author_nickname` varchar(200) DEFAULT NULL COMMENT '作者昵称',
  `editor` varchar(20) NOT NULL DEFAULT 'md' COMMENT '所用编辑器 md\\rich',
  `editor_theme` varchar(50) DEFAULT 'blue|xcode' COMMENT '主题 md|code',
  `editor_content` text COMMENT '编辑器的内容',
  `user_like` int(11) NOT NULL DEFAULT '0' COMMENT '点赞数',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态 - 2草稿|1发布|0删除',
  `gmt_create` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table blog_article_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_article_category`;

CREATE TABLE `blog_article_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id 分类表',
  `title` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '父类别id',
  `desc` varchar(200) DEFAULT NULL COMMENT '描述',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `blog_article_category` WRITE;
/*!40000 ALTER TABLE `blog_article_category` DISABLE KEYS */;

INSERT INTO `blog_article_category` (`id`, `title`, `parent_id`, `desc`, `gmt_create`, `gmt_modified`)
VALUES
	(1,'家用电器',0,NULL,'2020-05-21 06:52:50','2020-05-21 06:53:20'),
	(2,'手机数码',0,NULL,'2020-05-21 06:53:27','2020-05-21 06:53:33'),
	(3,'电脑办公',0,NULL,'2020-05-21 06:53:42','2020-05-21 06:53:42'),
	(4,'电视',1,NULL,'2020-05-21 06:53:59','2020-05-21 06:54:13'),
	(5,'空调',1,NULL,'2020-05-21 06:54:04','2020-05-21 06:54:15'),
	(6,'洗衣机',1,NULL,'2020-05-21 06:54:10','2020-05-21 06:54:15'),
	(7,'智能手机',2,NULL,'2020-05-21 06:54:40','2020-05-21 06:54:48'),
	(8,'数码相机',2,NULL,'2020-05-21 06:54:45','2020-05-21 06:54:50'),
	(9,'电脑整机',3,NULL,'2020-05-21 06:54:58','2020-05-21 06:55:17'),
	(10,'CPU',3,NULL,'2020-05-21 06:55:07','2020-05-21 06:55:20'),
	(11,'显卡',3,NULL,'2020-05-21 06:55:13','2020-05-21 06:55:23'),
	(12,'苹果手机',7,NULL,'2020-05-21 06:56:19','2020-05-21 06:56:19'),
	(13,'小米手机',7,NULL,'2020-05-21 06:56:27','2020-05-21 06:56:27'),
	(14,'单反相机',8,NULL,'2020-05-21 06:56:47','2020-05-21 06:56:51'),
	(15,'微单相机',8,NULL,'2020-05-21 06:56:59','2020-05-21 06:56:59'),
	(999,'默认分类',0,NULL,'2020-05-21 07:07:07','2020-05-21 07:07:07');

/*!40000 ALTER TABLE `blog_article_category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table blog_article_tag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_article_tag`;

CREATE TABLE `blog_article_tag` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id 文章标签表',
  `title` varchar(50) DEFAULT NULL COMMENT '标签名称',
  `desc` varchar(200) DEFAULT NULL COMMENT '标签描述',
  `created_user` int(11) DEFAULT NULL COMMENT '创建者',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `blog_article_tag` WRITE;
/*!40000 ALTER TABLE `blog_article_tag` DISABLE KEYS */;

INSERT INTO `blog_article_tag` (`id`, `title`, `desc`, `created_user`, `gmt_create`, `gmt_modified`)
VALUES
	(1,'React.js',NULL,1,'2020-05-21 07:04:02','2020-05-21 07:04:06'),
	(2,'Node.js',NULL,1,'2020-05-21 07:04:33','2020-05-21 07:04:36');

/*!40000 ALTER TABLE `blog_article_tag` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table blog_article_tag_relationship
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_article_tag_relationship`;

CREATE TABLE `blog_article_tag_relationship` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id 文章-标签关系表',
  `tid` int(11) DEFAULT NULL COMMENT '标签id',
  `aid` int(11) DEFAULT NULL COMMENT '文章id',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table blog_comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_comment`;

CREATE TABLE `blog_comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id 评论表',
  `article_id` int(11) NOT NULL COMMENT '文章id',
  `author_id` int(11) NOT NULL COMMENT '评论人id',
  `author_nickname` varchar(200) DEFAULT '' COMMENT '评论人昵称',
  `author_avatar` text COMMENT '评论人头像',
  `content` text COMMENT '评论内容',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table blog_commment_reply
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_commment_reply`;

CREATE TABLE `blog_commment_reply` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id 评论的回复表',
  `comment_id` int(11) NOT NULL COMMENT '评论id',
  `article_id` int(11) NOT NULL COMMENT '文章id',
  `author_id` int(11) NOT NULL COMMENT '评论者id',
  `author_nickname` varchar(200) DEFAULT NULL COMMENT '评论者昵称',
  `author_avatar` text COMMENT '评论者头像',
  `content` text COMMENT '评论内容',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
