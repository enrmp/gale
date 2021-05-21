DROP TABLE IF EXISTS Valoracion;
DROP TABLE IF EXISTS Comentario;
DROP TABLE IF EXISTS photosCategoria;
DROP TABLE IF EXISTS Categoria;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Inapropiadas;

CREATE TABLE Inapropiadas (
	inapropiadasId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	palabra VARCHAR(64) UNIQUE NOT NULL
);

CREATE TABLE Users (
	userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(128) NOT NULL,
	lastName VARCHAR(128) NOT NULL,
	telephone VARCHAR(32) NOT NULL,
	email VARCHAR(128) NOT NULL,
	username VARCHAR(64) UNIQUE NOT NULL,
	password VARCHAR(256) NOT NULL,
	avatarUrl VARCHAR(512)
);

CREATE TABLE Photos (
	photoId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128) NOT NULL,
	description VARCHAR(512),
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	url VARCHAR(512) NOT NULL,
	visibility VARCHAR(16) NOT NULL,
	userId INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users (userId),
	CONSTRAINT ValidVisibility CHECK (visibility in ('Public', 'Private'))
);

CREATE TABLE Categoria (
	categoriaId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(64) UNIQUE NOT NULL
);

CREATE TABLE photosCategoria (
	photosCategoriaId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	photoId INT NOT NULL,
	categoriaId INT NOT NULL,
	FOREIGN KEY (photoId) REFERENCES Photos (photoId),
	FOREIGN KEY (categoriaId) REFERENCES Categoria (categoriaId)
);

CREATE TABLE Comentario (
	comentarioId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	texto VARCHAR(256) NOT NULL,
	userId INT NOT NULL,
	photoId INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users (userId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId)
);

CREATE TABLE Valoracion (
	valoracionId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
	valor INT NOT NULL,
	userId INT NOT NULL,
	photoId INT NOT NULL,
	UNIQUE (valor,photoId),
	FOREIGN KEY (userId) REFERENCES Users (userId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId),
	CONSTRAINT ValorValido CHECK (valor>=0 AND valor<=5)
);