create database SAGU;
use SAGU;

CREATE TABLE Aluno (
    nome varchar(30),
    email VARCHAR(30) PRIMARY KEY,
    senha varchar(30)
);

CREATE TABLE Professor (
    nomeProf varchar(30),
    emailProf varchar(30) PRIMARY KEY,
    senhaProf varchar(30)
);

CREATE TABLE Documento (
    nomeDoc varchar(30),
    descDoc varchar(100),
    cod INTEGER PRIMARY KEY,
    email varchar(30),
    foreign key (email)REFERENCES Aluno(email)
);

CREATE TABLE Portfolio (
    portDesc varchar(100),
    codPort INTEGER PRIMARY KEY,
    cod INTEGER,
    email varchar(30),
    FOREIGN KEY (cod) REFERENCES Documento(cod),
    FOREIGN KEY (email) REFERENCES Aluno(email)
);

CREATE TABLE Sala (
    tema varchar(30),
    nomeSala varchar(30),
    codSala INTEGER PRIMARY KEY,
    emailProf varchar(30) ,
    Foreign Key(emailProf)REFERENCES Professor(emailProf)
   
);

CREATE TABLE Participacao (
    codPart INTEGER PRIMARY KEY,
    codSala INTEGER,
    email varchar(30),
    FOREIGN KEY (codSala) REFERENCES Sala(codSala), 
	Foreign Key (email) References Aluno(email)
);

