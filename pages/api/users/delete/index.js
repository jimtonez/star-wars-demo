import axios from "axios";

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            const response = await axios.delete(`http://localhost:8000/api/users/${encodeURIComponent(req.body)}`);
            res.status(204).json(response)
    }
}