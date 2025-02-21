const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const user_id = "supusha_bharti_22bet10295"; 

app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        const numbers = data.filter(item => !isNaN(item)); // Extract numbers
        const alphabets = data.filter(item => /^[A-Za-z]$/.test(item)); // Extract single letters
        const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id,
            email: "22bet10295@cuchd.in",
            roll_number: "22BET10295",
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server Error" });
    }
});

// GET Endpoint
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
