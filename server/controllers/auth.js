import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if (existinguser) {
            return res.status(404).json({ message: "User already exist." })
        }
        const handlePassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: handlePassword })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: newUser, token })
    }
    catch (err) {
        return res.status(500).json("something went wrong.")

    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if (!existinguser) {
            return res.status(404).json({ message: "User not exist." })
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            return res.status(404).json({ message: "Invalid crendentials." })
        }
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: existinguser, token })

    }
    catch (err) {
        return res.status(500).json("something went wrong.")
    }

}