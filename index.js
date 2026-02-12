const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    const data = req.body;

    console.log("Data diterima:");
    console.log(data);

    res.json({
        fulfillmentText: `Jadwal diterima:
Hari: ${data.hari}
Waktu: ${data.waktu}
Mapel: ${data.mapel}`
    });
});

app.get("/", (req, res) => {
    res.send("Webhook aktif");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
