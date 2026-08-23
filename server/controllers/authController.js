import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const register = async (req, res) => { 
    try {
        const {username, email, password} = req.body;
        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json({msg:"User already exists"});
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
       
        const user = new User({username, email, password: hashedPassword});
        await user.save();
       
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        //Approved user created
        res.status(201).json({token, user: {id: user._id, username, email}});
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const google = async (req, res) => {
    try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const email = payload.email;
        const name = payload.name;
        
        res.json({ 
            success:true, 
            user: payload, 

        });
        } catch (error) {
        console.error(error);
        return res.status(400).json({ error: "Invalid token" });
    }
};
