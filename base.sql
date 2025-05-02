create database awaq;
use awaq;

create table usuario(
	`idUsuario` int not null auto_increment,
	`Nombre` varchar(30) not null,
	`Apellidos` varchar(30) not null,
	`email` varchar(30) not null,
	`password` varchar(30) not null,
	`nombreOrganizacion` varchar(30) not null,
	`idResponsable` int null,
	primary key(`idUsuario`),
	constraint `resp` foreign key (`idResponsable`) references `Usuario`(`idUsuario`)
);

create table `formularioinicial`(
	`idFormIn` int NOT NULL auto_increment,
	`estadoTiempo` varchar(20) not null,
	`estacion` varchar(20) not null,
	`tipoRegistro` varchar(20) not null,
	`idCreador` int not null,
	primary key (`idFormIn`),
	constraint `creador` foreign key (`idCreador`) references `usuario`(`idUsuario`)
);

create table `fauna_transecto`(
	`idRegistro` int not null,
	`numeroTransecto` varchar(100) not null,
	`tipoAnimal` varchar(15) not null,
	`nombreComun` varchar(20) not null,
	`nombreCientifico` varchar(50) null,
	`nroIndividuos` int not null,
	`tipoObservacion` varchar(100) not null,
	`evidencias` varchar(100) not null,
	`observaciones` varchar(100) null,
	primary key (`idRegistro`),
	constraint `fauna_ID` foreign key (`idRegistro`) references `formularioinicial` (`idFormIn`)
);

create table `fauna_punto_conteo`(
	`idRegistro` int not null,
	`zona` varchar(20) not null,
	`tipoAnimal` varchar(30) not null,
	`nombreComun` varchar(50) not null,
	`nombreCientifico` varchar(50) null,
	`numeroIndividuos` int not null,
	`tipoObservacion` varchar(100) not null,
	`alturaObservacion` varchar(30) not null,
	`evidencias` varchar(50) null,
	`observaciones` varchar(50) null,
	primary key(`idRegistro`),
	constraint `fpc_ID` foreign key (`idRegistro`) references `formularioinicial` (`idFormIn`)
);

create table `fauna_busqueda_libre`(
	`idRegistro` int not null,
	`zona` varchar(20) not null,
	`tipoAnimal` varchar(30) not null,
	`nombreComun` varchar(50) not null,
	`nombreCientifico` varchar(50) null,
	`numeroIndividuos` int not null,
	`tipoObservacion` varchar(100) not null,
	`alturaObservacion` varchar(30) not null,
	`evidencias` varchar(50) null,
	`observaciones` varchar(50) null,
	primary key(`idRegistro`),
	constraint `fbl_ID` foreign key (`idRegistro`) references `formularioinicial` (`idFormIn`)
);

create table `validacion_cobertura`(
	`idRegistro` int not null,
	`codigo` varchar(30) not null,
	`seguimiento` boolean not null,
	`cambio` boolean not null,
	`cobertura` varchar(10) not null,
	`tiposCultivo` varchar(40) null,
	`disturbio` varchar(30) not null,
	`evidencias` varchar(50) null,
	`observaciones` varchar(50) null,
	primary key(`idRegistro`),
	constraint `vc_ID` foreign key (`idRegistro`) references `formularioinicial` (`idFormIn`)
);

create table `parcela_vegetacion`(
	`idRegistro` int not null,
	`cuadrante` varchar(1) not null,
	`subcuadrante` int not null,
	`habitoCrecimiento` varchar(15) not null,
	`nombreComun` varchar(50) not null,
	`nombreCientifico` varchar(50) null,
	`placa` varchar(30) null,
	`circunferencia` int not null,
	`distanciaMt` int not null,
	`estaturaBiomonitorMt` int not null,
	`alturaMt` int not null,
	`evidencias` varchar(100) null,
	`observaciones` varchar(50) null,
	primary key(`idRegistro`),
	constraint `pv_ID` foreign key (`idRegistro`) references `formularioinicial`(`idFormIn`)
);

create table `camaras_trampa`(
	`idRegistro` int not null,
	`codigo` varchar(20) not null,
	`zona` varchar(20) not null,
	`nombreCamara` varchar(20) not null,
	`placaCamara` varchar(40) null,
	`placaGuaya` varchar(40) null,
	`anchoCaminoMt` int not null,
	`fechaInstalacion` date not null,
	`distanciObjetivoMt` int not null,
	`alturaLenteMt` int not null,
	`listaChequeo` varchar(60) null,
	`evidencias` varchar(70) null,
	`observaciones` varchar(50) null,
	primary key(`idRegistro`),
	constraint `ct_ID` foreign key(`idRegistro`) references `formularioinicial`(`idFormIn`)
);


create table `variables_climaticas`(
	`idRegistro` int not null,
	`zona` varchar(30) not null,
	`pluvosidadMm` int not null,
	`temperaturaMaxima` int not null,
	`humedadMaxima` int not null,
	`temperaturaMinima` int not null,
	`nivelQuebradaMt` int not null,
	primary key(`idRegistro`),
	constraint `vcl_ID` foreign key(`idRegistro`) references `formularioinicial`(`idFormIn`)
);

INSERT INTO awaq.usuario
(idUsuario, Nombre, Apellidos, email, password, nombreOrganizacion, idResponsable)
VALUES(1, 'Abel', 'Camacho', 'A01233745@tec.mx', 'mazapan', 'Tec de mty', null);
INSERT INTO awaq.usuario
(idUsuario, Nombre, Apellidos, email, password, nombreOrganizacion, idResponsable)
VALUES(2, 'Hermann', 'Pawells', 'A01234567@tec.mx', 'chicharron', 'Tec de mty', 1);
INSERT INTO awaq.usuario
( Nombre, Apellidos, email, password, nombreOrganizacion, idResponsable)
VALUES( 'Mildred', 'Ticantw', 'A01085543@tec.mx', 'camaron', 'Tec de mty', 1);



