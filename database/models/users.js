const { dbConnection } = require('./../config');

const getAllUsers = (callback) => {
    dbConnection.query("SELECT * FROM users", callback);
}

const getUserById = (id, callback) => {
    dbConnection.query("SELECT * FROM users WHERE id = ?", [id], callback);
}

const createUser = (data, callback) => {
    dbConnection.query("INSERT INTO users SET ?", data, callback);
}

const updateUser = (data, id, callback) => {
    dbConnection.query("UPDATE users SET ? WHERE id = ?", [data, id], callback)
}

const deleteUser = (id, callback) => {
    dbConnection.query("UPDATE users SET active = 'I' WHERE id = ?", [id], callback)
}

const recoverUser = (id, callback) => {
    try {
        // Verificar si el usuario existe
        const [rows] = dbConnection.promise().query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length === 0) {
            return 'Usuario no encontrado';
        }

        // Actualizar el estado solo si está inactivo
        dbConnection.promise().query('UPDATE users SET active = \'A\' WHERE id = ? AND active = \'I\'', [id]);

        // Registrar el cambio
        console.log(`Se activó al usuario con ID: ${id}`);
        return 'Usuario activado correctamente';
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        return 'Error al procesar la solicitud';
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    recoverUser
}