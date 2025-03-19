const db = require('../db');

const insertUser = async (req, res) => {
    const { nombre, email, password } = req.body; 

    if (!nombre || !email || !password) {
        return res.status(400).json({ message: 'Nombre, email y contraseña son requeridos' });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
            [nombre, email, password]
        );

        res.status(201).json({ message: 'Usuario creado exitosamente', id: result.insertId });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body; 

    try {
        const [rows] = await db.execute(
            'SELECT * FROM usuarios WHERE email = ? AND password = ?',
            [email, password]
        );

        if (rows.length > 0) {
            res.status(200).json({ message: 'Inicio de sesión exitoso', success: true });
        } else {
            res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos', success: false });
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

module.exports = {
    insertUser,
    loginUser
};
