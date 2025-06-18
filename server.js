import express from "express";
const app = express();
const PORT = 8000;

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
