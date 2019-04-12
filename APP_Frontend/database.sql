-- MySQL dump 10.13  Distrib 8.0.15, for Linux (x86_64)
--
-- Host: localhost    Database: ilo_database
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agency`
--

DROP TABLE IF EXISTS `agency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `agency` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `region` int(10) unsigned DEFAULT '1',
  `phone_number` varchar(45) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `license_no` varchar(45) DEFAULT NULL,
  `fax` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_agency_region_idx` (`region`),
  CONSTRAINT `fk_agency_region` FOREIGN KEY (`region`) REFERENCES `region` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agency`
--

LOCK TABLES `agency` WRITE;
/*!40000 ALTER TABLE `agency` DISABLE KEYS */;
INSERT INTO `agency` VALUES (1,'jajsjs',1,'4545','sdfsdfsfd','','2019-03-15 13:55:00','2019-03-15 13:55:00',NULL,''),(4,'asdasd',2,'92839283','sshshsh','','2019-03-15 14:28:41','2019-03-15 14:28:41',NULL,''),(7,'glslsls',1,'2930239','daksdjaskld','asdklasdjl@sadja.com','2019-03-17 12:44:27','2019-03-17 12:44:27',NULL,'shhsdshd'),(8,'agency locale',1,'920302930239','ajshajshajs','ssjdhsjdh@sdskdj.com','2019-03-17 12:46:23','2019-03-17 12:46:23',NULL,'1298382938'),(9,'ksjfhjksdfh',1,'348939489','','','2019-03-18 17:15:13','2019-03-18 17:15:13',NULL,''),(11,'jajajaj',1,'929292','aasasas','','2019-03-28 10:14:37','2019-03-28 10:14:37',NULL,''),(12,'surafel',3,'912883377','asas','asasd@gmail.com','2019-04-08 15:01:35','2019-04-08 15:01:35',NULL,'');
/*!40000 ALTER TABLE `agency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agency_locale`
--

DROP TABLE IF EXISTS `agency_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `agency_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `AGENCY_ID` int(10) unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `locale` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_agency_locale_agency_idx` (`AGENCY_ID`),
  KEY `fk_agency_locale_locale_idx` (`locale`),
  CONSTRAINT `fk_agency_locale_agency` FOREIGN KEY (`AGENCY_ID`) REFERENCES `agency` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_agency_locale_locale` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agency_locale`
--

LOCK TABLES `agency_locale` WRITE;
/*!40000 ALTER TABLE `agency_locale` DISABLE KEYS */;
INSERT INTO `agency_locale` VALUES (1,8,'sadklasjdlkas','asdkjaslkdj',1,'2019-03-17 12:46:23','2019-03-17 12:46:23'),(33,1,'jajjaja','asasas asasas',2,'2019-03-19 17:39:01','2019-03-19 17:39:01');
/*!40000 ALTER TABLE `agency_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `CATAGORY_ID` int(10) unsigned DEFAULT NULL,
  `header` varchar(45) NOT NULL,
  `content` text NOT NULL,
  `audio` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_upated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_catagory_detail_article_idx` (`CATAGORY_ID`),
  CONSTRAINT `fk_catagory_detail_article` FOREIGN KEY (`CATAGORY_ID`) REFERENCES `article_catagory` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,3,'sadkjsahd','asdhkjsdhkjasd',NULL,NULL,NULL,'2019-03-15 18:16:48','2019-03-15 18:16:48'),(2,1,'dsfsdf','dsfklsdjflksd sdfsdlfkjsdklfjsdf sdfklsdjflksdfjsdf sdfklsdjfslkdf',NULL,NULL,NULL,'2019-03-15 18:21:31','2019-03-15 18:21:31'),(4,4,'sadasd','asdasd',NULL,NULL,NULL,'2019-03-15 18:23:45','2019-03-15 18:23:45'),(5,3,'sdfsdf','sdfsdfsdf',NULL,NULL,NULL,'2019-03-15 18:24:34','2019-03-15 18:24:34'),(6,3,'sfdfsd','sdfsdgsdg',NULL,NULL,NULL,'2019-03-15 19:35:27','2019-03-15 19:35:27'),(7,NULL,'first news','asdasd','','','','2019-03-16 10:44:51','2019-03-16 10:44:51'),(10,9,'jssjjs','sakasjdlkasjdlkasdjl asdkjasldkjasd sdkjasdlkjasd asdklajsdlasd asdkjaskdljasd',NULL,NULL,NULL,'2019-03-17 14:24:30','2019-03-17 14:24:30'),(11,8,'asdksajd asdajsdlkas','asdlkajsd asdadhkjhas dasjdhjaksdhkjasd asjdhaksjd',NULL,NULL,NULL,'2019-03-17 14:27:00','2019-03-17 14:27:00'),(12,9,'asdklajsd','aslkdjlsakdjas sadkjasdk askdjalksdj',NULL,NULL,NULL,'2019-03-17 14:28:15','2019-03-17 14:28:15'),(33,9,'testing article with video','kksksksk sdksdsd',NULL,NULL,NULL,'2019-03-29 09:24:52','2019-03-29 09:24:52'),(34,9,'mamamamama','kskskskskdksksk',NULL,NULL,NULL,'2019-03-29 09:27:24','2019-03-29 09:27:24'),(35,9,'asasas','asasasaasas',NULL,NULL,NULL,'2019-03-29 09:28:59','2019-03-29 09:28:59'),(36,9,'jjjjjjjj','jjjjj jjjjjj jjjjj',NULL,NULL,NULL,'2019-03-29 09:33:22','2019-03-29 09:33:22'),(37,9,'hkjhkjhkjh','kjlhkjhkjhkjhkjh',NULL,NULL,NULL,'2019-03-29 09:34:52','2019-03-29 09:34:52'),(38,9,'asoaisoiaso','isisisiisdsdsd',NULL,NULL,NULL,'2019-03-29 09:36:25','2019-03-29 09:36:25'),(39,NULL,'news second','kkakaka akaka akaka','','','','2019-03-29 10:28:47','2019-03-29 10:28:47'),(40,NULL,'asasas','sASASAS','','','','2019-03-29 12:34:26','2019-03-29 12:34:26'),(41,NULL,'asasas','sASASASSDDSF','','','','2019-03-29 12:35:21','2019-03-29 12:35:21'),(42,NULL,'SDSD','SDSD','','','','2019-03-29 12:35:52','2019-03-29 12:35:52'),(43,NULL,'asas','asasas','','','','2019-03-29 12:38:43','2019-03-29 12:38:43'),(44,NULL,'sadsad','sdasdsd','','','','2019-03-29 13:23:29','2019-03-29 13:23:29'),(45,NULL,'zxzxzx','zxczxczxczxc','','','','2019-03-29 13:26:11','2019-03-29 13:26:11'),(46,NULL,'asasasffff','sdsdsd','','','','2019-03-30 09:25:41','2019-03-30 09:25:41'),(47,NULL,'news with image','A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.\n\nParagraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.','','','','2019-03-30 13:52:16','2019-03-30 13:52:16');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_catagory`
--

DROP TABLE IF EXISTS `article_catagory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_catagory` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `icon_file` varchar(45) DEFAULT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `country` varchar(45) NOT NULL DEFAULT 'Quatar',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_catagory`
--

LOCK TABLES `article_catagory` WRITE;
/*!40000 ALTER TABLE `article_catagory` DISABLE KEYS */;
INSERT INTO `article_catagory` VALUES (1,'asdkajsdl',NULL,'2019-03-15 09:40:11','2019-03-15 09:40:11','Quatar'),(3,'article tow',NULL,'2019-03-15 10:11:50','2019-04-05 16:29:19','Ethiopia'),(4,'sadasd',NULL,'2019-03-15 10:12:44','2019-03-15 10:12:44','Quatar'),(8,'HAHAHAHAHA',NULL,'2019-03-17 13:31:49','2019-04-05 16:29:20','Saudi Arabia'),(9,'HAHAHAHAHA',NULL,'2019-03-17 13:32:16','2019-04-05 16:29:20','Saudi Arabia');
/*!40000 ALTER TABLE `article_catagory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_catagory_locale`
--

DROP TABLE IF EXISTS `article_catagory_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_catagory_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `CATAGORY_ID` int(10) unsigned NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `locale` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_article_catagory_locale_catagory_idx` (`CATAGORY_ID`),
  KEY `fk_article_catagory_locale_locale_idx` (`locale`),
  CONSTRAINT `fk_article_catagory_locale_catagory` FOREIGN KEY (`CATAGORY_ID`) REFERENCES `article_catagory` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_catagory_locale_locale` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_catagory_locale`
--

LOCK TABLES `article_catagory_locale` WRITE;
/*!40000 ALTER TABLE `article_catagory_locale` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_catagory_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_locale`
--

DROP TABLE IF EXISTS `article_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ARTICLE_ID` int(10) unsigned NOT NULL,
  `header` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `locale` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_upated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_article_locale_article_idx` (`ARTICLE_ID`),
  KEY `fk_article_locale_idx` (`locale`),
  CONSTRAINT `fk_article_locale` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_locale_article` FOREIGN KEY (`ARTICLE_ID`) REFERENCES `article` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_locale`
--

LOCK TABLES `article_locale` WRITE;
/*!40000 ALTER TABLE `article_locale` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_subcatagory`
--

DROP TABLE IF EXISTS `article_subcatagory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_subcatagory` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ARTICLE_ID` int(10) unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_article_subcatagory_article_idx` (`ARTICLE_ID`),
  CONSTRAINT `fk_article_subcatagory_article` FOREIGN KEY (`ARTICLE_ID`) REFERENCES `article` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_subcatagory`
--

LOCK TABLES `article_subcatagory` WRITE;
/*!40000 ALTER TABLE `article_subcatagory` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_subcatagory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complain_type`
--

DROP TABLE IF EXISTS `complain_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `complain_type` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complain_type`
--

LOCK TABLES `complain_type` WRITE;
/*!40000 ALTER TABLE `complain_type` DISABLE KEYS */;
INSERT INTO `complain_type` VALUES (2,'others','2019-03-16 08:30:01','2019-03-16 08:30:01'),(3,'ASKLDJALKSDJ','2019-03-17 15:41:52','2019-03-17 15:41:52'),(4,'salksdj','2019-03-17 15:43:03','2019-03-17 15:43:03'),(5,'complain','2019-03-17 15:43:33','2019-03-17 15:43:33'),(6,'complain type locale','2019-03-17 15:43:53','2019-03-17 15:43:53');
/*!40000 ALTER TABLE `complain_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complain_type_locale`
--

DROP TABLE IF EXISTS `complain_type_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `complain_type_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TYPE_ID` int(10) unsigned NOT NULL,
  `type` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `locale` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_complain_type_locale__idx` (`TYPE_ID`),
  KEY `fk_complain_type_locale_language_idx` (`locale`),
  CONSTRAINT `fk_complain_type_locale_` FOREIGN KEY (`TYPE_ID`) REFERENCES `complain_type` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_complain_type_locale_language` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complain_type_locale`
--

LOCK TABLES `complain_type_locale` WRITE;
/*!40000 ALTER TABLE `complain_type_locale` DISABLE KEYS */;
INSERT INTO `complain_type_locale` VALUES (2,2,'asasas',2,'2019-03-20 09:01:40',NULL),(3,2,'asdasdasd sadasd',3,'2019-03-20 09:02:35',NULL),(4,6,'asas',2,'2019-03-20 09:20:03',NULL);
/*!40000 ALTER TABLE `complain_type_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complains`
--

DROP TABLE IF EXISTS `complains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `complains` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `barcode` varchar(45) NOT NULL,
  `passport_id` varchar(45) NOT NULL,
  `complain` text NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_update` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `COMPLAIN_TYPE` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_complains_type_idx` (`COMPLAIN_TYPE`),
  CONSTRAINT `fk_complains_type` FOREIGN KEY (`COMPLAIN_TYPE`) REFERENCES `complain_type` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complains`
--

LOCK TABLES `complains` WRITE;
/*!40000 ALTER TABLE `complains` DISABLE KEYS */;
INSERT INTO `complains` VALUES (1,'sjdjdjdjd','kdkdkdkd','kskskds sdksdsd','2019-04-08 10:09:09','2019-04-08 10:09:09',2),(2,'djd','kdkdkdkd','kskskds sdksdsd','2019-04-08 10:10:27','2019-04-08 10:10:27',2),(3,'token','kdkdkdkd','kskskds sdksdsd','2019-04-08 10:12:56','2019-04-08 10:12:56',2),(4,'token','kdkdkdkd','kskskds sdksdsd','2019-04-08 10:13:23','2019-04-08 10:13:23',2),(5,'token','kdkdkdkd','kskskds sdksdsd','2019-04-08 10:13:47','2019-04-08 10:13:47',2),(6,'Ggfcghh','Hhhfgg ','Gghhbb','2019-04-08 10:35:24','2019-04-08 10:35:24',2),(7,'From mobile','Mobile','Testing from mobile','2019-04-08 10:36:22','2019-04-08 10:36:22',2),(8,'Ffgc','Hfdg','Fhhvh jvxyv','2019-04-08 10:43:52','2019-04-08 10:43:52',2),(9,'Hshsgd','Jjhshhs','Dgsggs','2019-04-08 10:46:19','2019-04-08 10:46:19',2),(10,'Gdfh3','Ep00093','Ggg\ngg','2019-04-08 10:48:16','2019-04-08 10:48:16',2),(11,'Gdfh3','Ep00093','Ggg\ngg','2019-04-08 10:48:23','2019-04-08 10:48:23',2),(12,'Hsgsgs','Hsgsg','I have a complain i want to tell','2019-04-08 12:57:09','2019-04-08 12:57:09',3),(13,'Babsbsbs','Submi4 complain','I have another complain','2019-04-08 13:00:40','2019-04-08 13:00:40',4),(14,'Bzhzhvvx','Hzhzhs','Hshdhh dhdhhd','2019-04-08 13:01:56','2019-04-08 13:01:56',5),(15,'Ghhvghhvg','Ggggggh','Gghbh uh v hhbj','2019-04-08 13:03:13','2019-04-08 13:03:13',3),(16,'Bbbbsbdbd ','Hzhdhhhshd','Jzhhhsb dh dhhd dhhd','2019-04-08 13:04:19','2019-04-08 13:04:19',5),(17,'Tffgff','Hhhhh','Gggghggvv','2019-04-08 13:40:57','2019-04-08 13:40:57',3);
/*!40000 ALTER TABLE `complains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emergency_contact`
--

DROP TABLE IF EXISTS `emergency_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `emergency_contact` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `region` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_emergency_contact_1_idx` (`region`),
  CONSTRAINT `fk_emergency_contact_region` FOREIGN KEY (`region`) REFERENCES `region` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emergency_contact`
--

LOCK TABLES `emergency_contact` WRITE;
/*!40000 ALTER TABLE `emergency_contact` DISABLE KEYS */;
INSERT INTO `emergency_contact` VALUES (2,'red cross','234234','stadium, addis ababa, Ethiopia',1,'2019-03-13 14:20:55','2019-03-13 14:43:14'),(3,'skdjaskdjl','91210291029','ksajdlksd asdkljasdl',1,'2019-03-17 15:01:19','2019-03-17 15:01:19'),(4,'emergency locale','9129384374','addis ababa, Ethiopia',1,'2019-03-17 15:04:20','2019-03-17 15:04:20'),(5,'kskks','232323888','fghfhgfh',1,'2019-03-27 10:43:56','2019-03-27 10:43:56'),(6,'teting image','912121212','addis ababa, Ethiopia',1,'2019-03-28 09:15:40','2019-03-28 09:15:40'),(7,'image test 2','19838383838','sdsdsd',3,'2019-03-28 09:17:29','2019-03-28 09:17:29'),(8,'sadasd','232323','asas',2,'2019-03-28 09:20:12','2019-03-28 09:20:12'),(9,'asasas','232323','asasas',1,'2019-03-28 09:22:17','2019-03-28 09:22:17'),(10,'asas','232323','asasas',3,'2019-03-28 09:23:03','2019-03-28 09:23:03'),(11,'asas','121212','addis ababa, Ethiopia',2,'2019-03-28 09:24:57','2019-03-28 09:24:57'),(12,'asas','2323','addis ababa, Ethiopia',1,'2019-03-28 09:32:54','2019-03-28 09:32:54');
/*!40000 ALTER TABLE `emergency_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emergency_contact_locale`
--

DROP TABLE IF EXISTS `emergency_contact_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `emergency_contact_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `EMERGENCY_ID` int(10) unsigned NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `locale` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_emmergency_contacts_idx` (`EMERGENCY_ID`),
  CONSTRAINT `fk_emmergency_contact` FOREIGN KEY (`EMERGENCY_ID`) REFERENCES `emergency_contact` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emergency_contact_locale`
--

LOCK TABLES `emergency_contact_locale` WRITE;
/*!40000 ALTER TABLE `emergency_contact_locale` DISABLE KEYS */;
INSERT INTO `emergency_contact_locale` VALUES (1,3,'asldkaslkdj','askdljasdklj','1'),(2,4,'BBBB update 77','9238293','1');
/*!40000 ALTER TABLE `emergency_contact_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum`
--

DROP TABLE IF EXISTS `forum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `forum` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `locale` varchar(45) NOT NULL DEFAULT 'English',
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum`
--

LOCK TABLES `forum` WRITE;
/*!40000 ALTER TABLE `forum` DISABLE KEYS */;
INSERT INTO `forum` VALUES (43,'form topic','English','2019-03-18 09:43:26','2019-03-18 09:43:26'),(44,'asd','English','2019-03-21 09:47:10','2019-03-21 09:47:10');
/*!40000 ALTER TABLE `forum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_comments`
--

DROP TABLE IF EXISTS `forum_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `forum_comments` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `FORUM_ID` int(10) unsigned NOT NULL,
  `comment` text NOT NULL,
  `commented_by` varchar(45) DEFAULT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_forum_comments_forum_idx` (`FORUM_ID`),
  CONSTRAINT `fk_forum_comments_forum` FOREIGN KEY (`FORUM_ID`) REFERENCES `forum` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_comments`
--

LOCK TABLES `forum_comments` WRITE;
/*!40000 ALTER TABLE `forum_comments` DISABLE KEYS */;
INSERT INTO `forum_comments` VALUES (2,44,'jsjsj','sdsd','2019-03-22 16:28:59');
/*!40000 ALTER TABLE `forum_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_locale`
--

DROP TABLE IF EXISTS `forum_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `forum_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `FORUM_ID` int(10) unsigned NOT NULL,
  `title` varchar(100) NOT NULL,
  `locale` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_forum_locale_forum_idx` (`FORUM_ID`),
  CONSTRAINT `fk_forum_locale_forum` FOREIGN KEY (`FORUM_ID`) REFERENCES `forum` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_locale`
--

LOCK TABLES `forum_locale` WRITE;
/*!40000 ALTER TABLE `forum_locale` DISABLE KEYS */;
INSERT INTO `forum_locale` VALUES (20,43,'oromic topic','Affan Oromo'),(21,43,'asdkasdlksajd','Amharic'),(23,43,'asasas','Amharic'),(24,44,'sad','Amharic');
/*!40000 ALTER TABLE `forum_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospital` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `region` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'Addis Ababa',
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'bras hospital','912887733','addis ababa ethiopia','Addis Ababa','2019-03-12 20:32:21','2019-03-12 20:32:21'),(2,'hayat hospital','116616278','bole, addis ababa, ethiopia','Addis Ababa','2019-03-12 22:29:22','2019-03-12 22:29:22'),(3,'St. Gebriel Hospital','118928282','22 mazoria, addis ababa ethiopia','Addis Ababa','2019-03-13 12:53:21','2019-03-13 13:38:02'),(4,'ASDLKJSDKL','202390239','ASDKJASDLKJS','Addis Ababa','2019-03-17 13:05:44','2019-03-17 13:05:44'),(5,'hospital locale','29302932039','addis ababa, Ethiopia','Addis Ababa','2019-03-17 13:07:41','2019-03-17 13:07:41'),(6,'sadasd','324234','sadasd','Bishoftu','2019-03-21 10:37:36','2019-03-21 10:37:36'),(7,'sadasd','324234','sadasd','Bishoftu','2019-03-21 10:37:37','2019-03-21 10:37:37'),(8,'sadasd','23232323','addis ababa, Ethiopia','Addis Ababa','2019-03-25 09:30:19','2019-03-25 09:30:19'),(9,'mamam','1212','mamama','Dire dawa','2019-03-25 09:35:16','2019-03-25 09:35:16'),(10,'mamam','1212','mamama','Dire dawa','2019-03-25 09:35:23','2019-03-25 09:35:23'),(11,'with image','192984842','abababa','Addis Ababa','2019-03-25 09:37:38','2019-03-25 09:37:38'),(12,'jcole','121212','ksksks','Addis Ababa','2019-03-25 13:18:55','2019-03-25 13:18:55'),(13,'jcode','23232323','aaaaa','Dire dawa','2019-03-26 10:46:29','2019-03-26 10:46:29'),(14,'jajaja','23232323','addis ababa, Ethiopia','Addis Ababa','2019-03-27 09:21:06','2019-03-27 09:21:06'),(15,'kskdsdsd','2323','asas','Dire dawa','2019-03-27 09:23:00','2019-03-27 09:23:00'),(16,'asas','232323','ksdjskdjs','Addis Ababa','2019-03-27 09:28:22','2019-03-27 09:28:22'),(17,'sakdhasjkdh','1221212','1212','Dire dawa','2019-03-27 09:32:15','2019-03-27 09:32:15'),(18,'klsdfsldkf','2323232323','addis ababa, Ethiopia','Addis Ababa','2019-03-27 09:33:55','2019-03-27 09:33:55'),(19,'burau','9929292929','addis ababa, Ethiopia','Dire dawa','2019-03-27 09:34:51','2019-03-27 09:34:51'),(20,'kakaka','82828282','addis ababa, Ethiopia','Addis Ababa','2019-03-27 09:35:57','2019-03-27 09:35:57'),(21,'hahahah','1019292','kalala','Addis Ababa','2019-03-27 09:50:23','2019-03-27 09:50:23'),(22,'asas','23232323','addis ababa, Ethiopia','Dire dawa','2019-03-28 09:32:00','2019-03-28 09:32:00');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital_locale`
--

DROP TABLE IF EXISTS `hospital_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospital_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `HOSPITAL_ID` int(10) unsigned NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `locale` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_hospital_locale_hospital_idx` (`HOSPITAL_ID`),
  KEY `fk_hospital_locale_idx` (`locale`),
  CONSTRAINT `fk_hospital_locale` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_hospital_locale_hospital` FOREIGN KEY (`HOSPITAL_ID`) REFERENCES `hospital` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital_locale`
--

LOCK TABLES `hospital_locale` WRITE;
/*!40000 ALTER TABLE `hospital_locale` DISABLE KEYS */;
INSERT INTO `hospital_locale` VALUES (2,5,'ajjajaja','addis ababa, Ethiopia',1,'2019-03-17 13:07:41','2019-03-17 13:07:41'),(6,5,'hhhs','asasas',2,'2019-03-19 17:53:43','2019-03-19 17:53:43'),(10,5,'jajaja','asasas',1,'2019-03-19 18:04:01','2019-03-19 18:04:01');
/*!40000 ALTER TABLE `hospital_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `language` (
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES ('Affan Oromo','2019-03-13 10:14:15','2019-03-13 10:14:15',1),('Amharic','2019-03-13 10:14:15','2019-03-13 10:14:15',2),('English','2019-03-13 10:13:37','2019-03-13 10:13:37',3);
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson_type_locale`
--

DROP TABLE IF EXISTS `lesson_type_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `lesson_type_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_update` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `locale` int(10) unsigned NOT NULL,
  `LESSON_ID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_lesson_type_locale_lang_idx` (`locale`),
  KEY `fk_lesson_type_locale_lesson_idx` (`LESSON_ID`),
  CONSTRAINT `fk_lesson_type_locale_lang` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_lesson_type_locale_lesson` FOREIGN KEY (`LESSON_ID`) REFERENCES `lesson_types` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lesson_type_locale`
--

LOCK TABLES `lesson_type_locale` WRITE;
/*!40000 ALTER TABLE `lesson_type_locale` DISABLE KEYS */;
INSERT INTO `lesson_type_locale` VALUES (20,'Guard updated 3','2019-03-20 08:26:15','2019-03-20 08:29:02',1,6),(21,'Guard updated','2019-03-20 08:26:15','2019-03-20 08:26:15',1,6),(23,'guard added 1','2019-03-20 08:29:02','2019-03-20 08:29:02',1,6);
/*!40000 ALTER TABLE `lesson_type_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson_types`
--

DROP TABLE IF EXISTS `lesson_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `lesson_types` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lesson_types`
--

LOCK TABLES `lesson_types` WRITE;
/*!40000 ALTER TABLE `lesson_types` DISABLE KEYS */;
INSERT INTO `lesson_types` VALUES (1,'cleaning update','2019-03-16 14:47:07','2019-03-16 14:49:23'),(3,'lesson 2','2019-03-16 19:03:46','2019-03-16 19:03:46'),(5,'Guard','2019-03-17 12:14:26','2019-03-17 12:14:26'),(6,'Guardsaljdkajsdl','2019-03-17 12:16:06','2019-03-19 18:13:47');
/*!40000 ALTER TABLE `lesson_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rating` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `barcode` varchar(45) NOT NULL,
  `passport_id` varchar(45) NOT NULL,
  `rate` int(11) NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_update` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(45) DEFAULT NULL,
  `rated_service_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `unique_rating_inx` (`passport_id`,`rated_service_id`,`type`,`barcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `region` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`,`name`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Addis Ababa','2019-03-13 10:02:47','2019-03-13 10:02:47'),(2,'Harrar','2019-03-13 10:03:34','2019-03-13 10:03:34'),(3,'Oromia','2019-03-13 10:03:55','2019-03-13 10:03:55'),(4,'Afar','2019-03-13 10:04:08','2019-03-13 10:04:08'),(5,'Somalli','2019-03-13 10:04:24','2019-03-13 10:04:24'),(6,'Amara','2019-03-13 10:04:45','2019-03-13 10:04:45');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region_locale`
--

DROP TABLE IF EXISTS `region_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `region_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `locale` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region_locale`
--

LOCK TABLES `region_locale` WRITE;
/*!40000 ALTER TABLE `region_locale` DISABLE KEYS */;
/*!40000 ALTER TABLE `region_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `school` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `region` int(10) unsigned NOT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(45) DEFAULT NULL,
  `fax` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_school_region_idx` (`region`),
  CONSTRAINT `fk_school_region` FOREIGN KEY (`region`) REFERENCES `region` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES (13,'asd','asdasd','3948294',2,'2019-03-16 16:30:41','2019-03-16 16:30:41','asasd@gmail.com',''),(14,'Addis international','asdad','923994488',1,'2019-03-16 19:04:30','2019-03-16 19:04:30','asdasd@sdfdsf.com','asdasd'),(36,'bbbbbbb','sakdjsalkd','9218391283',2,'2019-03-17 08:48:15','2019-03-17 08:48:15','sadkjasdlk','askdjlsakd'),(37,'bbbababa','sdkfjslkdf','283783',1,'2019-03-17 08:50:11','2019-03-17 08:50:11','sdfksdflj','sdkfjslkdf'),(38,'kjsksksk','ksksks','929292929',1,'2019-03-28 10:21:31','2019-03-28 10:21:31','','');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_lessons`
--

DROP TABLE IF EXISTS `school_lessons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `school_lessons` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `SCHOOL_ID` int(10) unsigned NOT NULL,
  `LESSON_ID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_school_lessons_school_idx` (`SCHOOL_ID`),
  KEY `fk_school_lessons_lesson_idx` (`LESSON_ID`),
  CONSTRAINT `fk_school_lessons_lesson` FOREIGN KEY (`LESSON_ID`) REFERENCES `lesson_types` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_school_lessons_school` FOREIGN KEY (`SCHOOL_ID`) REFERENCES `school` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_lessons`
--

LOCK TABLES `school_lessons` WRITE;
/*!40000 ALTER TABLE `school_lessons` DISABLE KEYS */;
INSERT INTO `school_lessons` VALUES (11,36,1),(12,36,3),(13,37,1),(14,37,3),(15,37,1),(16,37,3),(17,37,1),(18,37,3),(19,37,1),(20,37,3),(21,37,1),(22,37,3),(23,37,1),(24,37,3),(25,37,1),(26,37,3),(27,37,1),(28,37,3),(29,37,1),(30,37,3),(31,37,1),(32,37,3),(33,37,1),(34,37,3),(35,37,1),(36,37,3),(37,37,1),(38,37,3),(39,37,1),(40,37,3),(41,37,1),(42,37,3),(43,37,1),(44,37,3),(45,37,1),(46,37,3),(47,37,1),(48,37,3),(49,37,1),(50,37,3),(51,37,1),(52,37,3),(53,37,1),(54,37,3),(55,37,1),(56,37,3),(57,37,1),(58,37,3),(59,37,1),(60,37,3),(61,37,1),(62,37,3),(63,37,1),(64,37,3),(65,37,1),(66,37,3),(67,37,1),(68,37,3),(69,37,1),(70,37,3),(71,37,1),(72,37,3),(73,37,1),(74,37,3),(75,37,1),(76,37,3),(77,37,1),(78,37,1),(79,37,3),(80,37,1),(81,38,3),(82,38,3);
/*!40000 ALTER TABLE `school_lessons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_locale`
--

DROP TABLE IF EXISTS `school_locale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `school_locale` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `SCHOOL_ID` int(11) unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `locale` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_school_locale_school_idx` (`SCHOOL_ID`),
  KEY `fk_school_locale__idx` (`locale`),
  CONSTRAINT `fk_school_locale_` FOREIGN KEY (`locale`) REFERENCES `language` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_school_locale_school` FOREIGN KEY (`SCHOOL_ID`) REFERENCES `school` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_locale`
--

LOCK TABLES `school_locale` WRITE;
/*!40000 ALTER TABLE `school_locale` DISABLE KEYS */;
INSERT INTO `school_locale` VALUES (2,37,'updated','sdjfhjkdsfh','2019-03-17 08:50:12','2019-03-20 08:36:47',2);
/*!40000 ALTER TABLE `school_locale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fullname` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Mikael Araya	','mikearaya','123','2019-03-11 12:38:28','2019-03-11 12:38:28'),(2,'sadam mesfin','mike','123','2019-03-20 13:59:38','2019-03-20 13:59:38'),(3,'sadam mesfin','mike','123','2019-03-20 14:01:00','2019-03-20 14:01:00'),(4,'abebe mulatu','abe','123','2019-03-21 09:17:25','2019-03-21 09:17:25');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-10  8:15:23
