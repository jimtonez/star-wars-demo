import axios from "axios";

async function deleteUser (req, res) {
    switch (req.method) {
        case "POST":
            const response = await axios.delete(`${process.env.DJANGO_API_URL}/api/users/${encodeURIComponent(req.body)}`, {headers: { 'X-Api-Key': `${process.env.DJANGO_API_KEY}`}});
            res.status(204).json(response)
    }
}

export default deleteUser