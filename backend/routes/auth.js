import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import dotenv from 'dotenv';
dotenv.config();

const appRouter = express.Router();
const secret = process.env.JWT_SECRET;

appRouter.post('/signup', async (req, res) => {
    
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        // Check if the user with the same username and role already exists
        let newUser = await User.findOne({ username });
        if (newUser) {
            return res.status(400).json({ message: 'UserName already taken' });
        }
        
        newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

appRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(user)
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).send('Invalid credentials');
    }
    const role = user.role
    const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn: '1h' }); 
    res.json({ "token" : token , "role" : role});
});

export default appRouter;
    