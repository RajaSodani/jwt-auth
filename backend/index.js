import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import authMiddleware from './middleware/authMiddleware.js';
import roleMiddleware from './middleware/roleMiddleware.js';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true  
}));


connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/api/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.send(`Admin Dashboard`);
});

app.get('/api/editor', authMiddleware, roleMiddleware('editor'), (req, res) => {
    res.send('Editor Dashboard');
});

app.get('/api/viewer', authMiddleware, roleMiddleware('viewer'), (req, res) => {
    res.send('Viewer Dashboard');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
