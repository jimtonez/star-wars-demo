import axios from "axios";

async function createUser (req, res) {
    switch (req.method) {
        case "POST":
            const check = JSON.parse(req.body)
            const response = await axios.put(`${process.env.DJANGO_API_URL}/api/users/${check.user_id}/`, check, {headers: { 'X-Api-Key': `${process.env.DJANGO_API_KEY}`}});
            const user = response.data
            res.status(200).json(user)
    }
}
export default createUser