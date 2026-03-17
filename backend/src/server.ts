import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Telangana AI Smart Tourism API' });
});
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
export default app;