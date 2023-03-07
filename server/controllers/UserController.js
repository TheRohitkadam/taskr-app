const User = require("../models/user");

exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find().skip(req.query.perPage * (req.query.page - 1)).limit(req.query.perPage).sort({ createdAt : -1 });

        const totalCount = await User.find().count();

        return res.status(200).json({ data, pagination: { totalCount } });

    } catch (err) {
        return res.status(400).json({ message: "Failed to add contract", error: err.message })
    }

}

exports.addUser = (req, res) => {
    User.create(req.body)
        .then((data) => res.status(200).json({ message: "User added successfully" }))
        .catch((err) => res.status(400).json({ message: "Failed to add new user", error: err.message }))
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.query.id, req.body)
        .then((data) => res.status(200).json({ message: "User updated successfully"}))
        .catch((err) => res.status(400).json({ message: "Failed to update user", error: err.message }))
}

exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.query.id)
        .then((data) => res.status(200).json({ message: "User deleted successfully" }))
        .catch((err) => res.status(400).json({ message: "User not found", error: err.message }))
}
exports.getUser = (req, res) => {
    User.findById(req.query.id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json({ message: "User not found", error: err.message }))
}