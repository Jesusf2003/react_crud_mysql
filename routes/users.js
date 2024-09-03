const { Router } = require("express");
const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    recoverUser
} = require("../database/controllers/users");

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUsersById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

// TODO: Aún por implementar
// router.put("/recover/:id", recoverUser)

module.exports = router;