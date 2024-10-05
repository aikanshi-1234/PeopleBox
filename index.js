const express = require('express');
const { getRecommendations } = require('./routes/recommendationLogic');

const app = express();
app.use(express.json());

const userProfiles = {};

app.post('/user_profile', (req, res) => {
    const userData = req.body;
    userProfiles[userData.name] = userData;
    res.status(201).json({ message: "Profile added successfully!" });
});

app.post('/recommendations', (req, res) => {
    const userData = req.body;
    const recommendations = getRecommendations(userData);
    res.json(recommendations);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
