import { pool } from '../DB/DB.js';

export const getUsers = (req, res) => {
    pool.query('SELECT * FROM usuario', (error, results) =>{
        if (error) {
            res.status(500).json({msg: error, users: []});
            return;
        }
        res.status(200).json({ msg: "Ok", users: results});
    });
}

export const getUser = (req, res) => {
    const id = req.params.id;
    pool.execute("Select * from usuario where idUsuario = ?", [id], (error, results) => {
        if (error) {
            res.status(500).json({msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "Ok", users: results});
    });
};

export const login = (req, res) => {
    const {email, password} = req.body;
    pool.execute(
        "SELECT * FROM usuario WHERE email = ? AND password = ?",
        [email, password],
        (error, results) => {
            if (error) {
                res.status(500).json({msg: error, credencialesIncorrectas: []});
                return;
            }
            res.status(200).json({msg: "Ok", users: results});
        }
    );
};

export const postUser = (req, res) => {
    const{Nombre, Apellidos, email, password, nombreOrganizacion} = req.body;
    pool.execute(
        "INSERT INTO usuario (Nombre, Apellidos, email, password, nombreOrganizacion, idResponsable) VALUES (?,?,?,?,?,?)",
        [ Nombre, Apellidos, email, password, nombreOrganizacion, null],
        (error, results) => {
            if (error) {
                res.status(500).json({msg: error, users: []});
                return;
            }

            pool.execute(
                "select * from usuario where email = ?",
                [email],
                (error, results) => {
                    if (error) {
                        res.status(500).json({msg: error, users: []});
                        return;
                    }
                        res.status(200).json({msg: "Usuario creado", users: results});
                }
            );
        }
    );
};

export const postinsert = (req, res) => {
    const {Nombre, Apellidos, email, password, nombreOrganizacion} = req.body;
    pool.execute(
        "INSERT INTO usuario (Nombre, Apellidos, email, password, nombreOrganizacion, idResponsable) VALUES(?,?,?,?,?,?)",
        [Nombre, Apellidos, email, password, nombreOrganizacion, null],
        (error, results) => {
            if (error) {
                return res.status(500).json({msg: error, users: []});
            }
            res.status(200).json({json: "Usuario creado", users: results});
        }
    );
};

export const postvc = (req, res) => {
    const {
        estadoTiempo,
        estacion,
        tipoRegistro,
        zona,
        pluviosidadMm,
        temperaturaMaxima,
        humedadMaxima,
        temperaturaMinima,
        nivelQuebradaMt,
        reporteIdLocal,
        fechaCapturaLocal,
        evidencias
    } = req.body;
    pool.execute(
        "INSERT INTO formularioinicial(estadoTiempo, estacion, tipoRegistro) VALUES(?,?,?)",
        [estadoTiempo, estacion, tipoRegistro],
        (error1, results1) => {
            if(error1){
                return res.status(500).json({msg: error1, error1: []});
            }
        const idFormInit = results1.insertId;

        pool.execute(
            "INSERT INTO variables_climaticas (idRegistro, zona, pluviosidadMm, temperaturaMaxima, humedadMaxima, temperaturaMinima, nivelQuebradaMt, reporteIdLocal, fechaCapturaLocal, evidencias) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [idFormInit, zona, pluviosidadMm, temperaturaMaxima, humedadMaxima, temperaturaMinima, nivelQuebradaMt, reporteIdLocal, fechaCapturaLocal, evidencias],
            (error2, results2) => {
                if (error2) {
                    return res.status(500).json({msg: error2.message, error2: []});
                }
                res.status(200).json({msg: "Formulario inicial creado", users: results2});
            }
        );
        }
    );
};