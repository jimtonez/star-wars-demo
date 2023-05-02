import axios from "axios";

async function createUser (req, res) {
    switch (req.method) {
        case "POST":
            const response = await axios.post(`${process.env.DJANGO_API_URL}/api/users/`, req.body, {headers: { 'X-Api-Key': `${process.env.DJANGO_API_KEY}`}});
            const user = response.data
            res.status(200).json(user)
    }
}
export default createUser