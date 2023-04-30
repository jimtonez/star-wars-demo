import axios from "axios";

async function getUser (req, res) {
    switch (req.method) {
        case "POST":
            const response = await axios.get(`${process.env.DJANGO_API_URL}/api/users?user_email=${encodeURIComponent(req.body)}`);
            const user = response.data.find(u => u.user_email === req.body)
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({})
            }
    }
}
export default getUser