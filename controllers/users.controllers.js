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
                res.status(500).json({msg: error, users: []});
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
