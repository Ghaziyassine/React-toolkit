import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { findUsers, createUser } from './models/userModel.js';
import authentification from './routes/authentification.js';
const app = express();

// Middleware
app.use(json());
app.use(cors());

// Get all users
app.get('/api/users',authentification, async (req, res) => {
    try {
        const email=req.user;
        console.log(email)
        const users = await findUsers({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add user
app.post('/api/users', async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Connection to MongoDB
connect("mongodb://127.0.0.1:27017/users")
    .then(() => {
        console.log("You are connected to the database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed", error);
    });
