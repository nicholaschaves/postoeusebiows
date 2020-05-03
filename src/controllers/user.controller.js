const db = require("../config/database");

// ==> Método responsável por criar um novo 'User':

exports.createUser = async(req, res) => {
    const { username, userpassword, passwordhint, status, perfil } = req.body;
    const { rows } = await db.query(
        "INSERT INTO users (username, userpassword, passwordhint, status, perfil) VALUES ($1, $2, $3, $4, $5)", [username, userpassword, passwordhint, status, perfil]
    );

    res.status(201).send({
        user: { username, userpassword, passwordhint, status, perfil }
    });
};

// ==> Método responsável por consultar todos os users:

exports.listAllUsers = async(req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY username ASC');
    res.status(200).send(response.rows);
};

// ==> Método para validar login do usuário

exports.loginUser = async(req, res) => {
    const { username, userpassword } = req.body;
    const { rows } = await db.query(
        "SELECT * FROM users WHERE username = $1 AND userpassword = $2", [username, userpassword]
    );

    if (rows[0]) {
        res.status(201).send({
            usuarioLogado: {
                permitidoAcesso: true,
                username: rows[0].username,
                userpassword: rows[0].userpassword,
                passwordhint: rows[0].passwordhint,
                status: rows[0].status,
                perfil: rows[0].perfil
            }
        });
    } else if (!rows[0]) {
        res.status(400).send({
            usuarioLogado: null
        });
    }

};

// ==> Método para editar um user específico

exports.updateUser = async(req, res) => {
    const { username, userpassword, passwordhint, status, perfil, userid } = req.body;
    const { rows } = await db.query(
        "UPDATE users SET username = $1, userpassword = $2, passwordhint = $3, status = $4, perfil = $5 WHERE userid = $6", [username, userpassword, passwordhint, status, perfil, userid]
    );

    res.status(201).send({
        usuarioLogado: {
            permitidoAcesso: true,
            username: username,
            userpassword: userpassword,
            passwordhint: passwordhint,
            status: status,
            perfil: perfil
        }
    });

};