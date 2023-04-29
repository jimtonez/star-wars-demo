import axios from "axios";

// export default async (req, res) => {
//     switch (req.method) {
//         case "POST":
//             const response = await axios.get(`http://localhost:8000/api/users?user_email=${encodeURIComponent(req.body)}`)
//                 if (!response.status === 200) {
//                     res.status(404).json({data: response})
//                 } else {
//                     const user = response.data.find(u => u.user_email === req.body)
//                     res.status(200).json(user)
//                 }
//     }
// }



export default async (req, res) => {
    switch (req.method) {
        case "POST":
            const response = await axios.get(`http://localhost:8000/api/users?user_email=${encodeURIComponent(req.body)}`);
            const user = response.data.find(u => u.user_email === req.body)
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({})
            }
    }
}