import users from '../models/userModel.js';

// Get all users
export const getUsers = (req, res) => {
    res.json(users);
};

// Get single user
export const getUserById = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

// Create user
export const createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user
export const updateUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
};

// Delete user
export const deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(index, 1);
    res.status(204).send();
};