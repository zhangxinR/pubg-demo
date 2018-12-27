SET NAMES UTF8;
DROP DATABASE IF EXISTS pubg;
CREATE DATABASE pubg CHARSET=UTF8;
USE pubg;
CREATE TABLE gun_type(
	tid INT PRIMARY KEY AUTO_INCREMENT,
	tname VARCHAR(32)
);
CREATE TABLE gun_details(
	did INT PRIMARY KEY AUTO_INCREMENT,
	dname VARCHAR(32),
	ammo VARCHAR(32),
	cap TINYINT,
	power TINYINT,
	d_range TINYINT,
	stability TINYINT,
	rate TINYINT,
	bsd_lv0 VARCHAR(16),
	bsd_lv1 VARCHAR(16),
	bsd_lv2 VARCHAR(16),
	bsd_lv3 VARCHAR(16),
	hsd_lv0 VARCHAR(16),
	hsd_lv1 VARCHAR(16),
	hsd_lv2 VARCHAR(16),
	hsd_lv3 VARCHAR(16),
	d_describe VARCHAR(128),
	d_picture VARCHAR(128),
	type_id INT,
	FOREIGN KEY(type_id) REFERENCES gun_type(tid)
);