const { request, response } = require("express")
const usersController = require('./../models/users')

const getAllUsers = async (req, res) => {
    usersController.getAllUsers((err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            data: result,
            message: "Listando todos los usuarios"
        });
    });
}

const getUsersById = async (req = request, res = response) => {
    usersController.getUserById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            data: result,
            message: "Listando usuario por id"
        });
    });
}

const createUser = async (req = request, res = response) => {
    const data = {
        names: req.body.names,
        lnames: req.body.lnames,
        email: req.body.email,
        pswrd: req.body.pswrd
    };
    usersController.createUser(data, (err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            message: "Usuario creado"
        });
    });
}

const updateUser = async (req = request, res = response) => {
    const data = {
        names: req.body.names,
        lnames: req.body.lnames,
        email: req.body.email,
        pswrd: req.body.pswrd
    };
    usersController.updateUser(data, req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            message: "Usuario actualizado"
        })
    });
}

const deleteUser = async (req = request, res = response) => {
    usersController.deleteUser(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            message: "Usuario eliminado"
        })
    });
}

const recoverUser = async (req = request, res = response) => {
    usersController.recoverUser(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            message: "Usuario recuperado"
        })
    })
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    recoverUser
}