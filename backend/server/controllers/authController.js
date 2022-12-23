const User = require('../models/UserModel');

// Register a new user
const register = async (req, res) => {
    // Get all the user details from the request Body
    const { fullname, username, gender, password, member, department, branch } = req.body; 

    // Check if username is already taken by another user
    const usernameExit = await User.findOne({ username });
    if (usernameExit) return res.status(400).send("username already taken");

    // Create a new user
    const user = new User({
        username,
        fullname,
        password,
        gender,
        member,
        department,
        branch
    });

    // Save the user to the database and check for any error
    try {
        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const login = async (req, res) => {
     // Get all the user details from the request Body
     const { username, password } = req.body; 

     if (!username || !password) return res.status(400).send("please fill all fields");

     try {
         // Check if username exit
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send("user not found");
        if (password != user.password) return res.status(400).send("Incorrect password");
        res.status(200).json(user);
     } catch (error) {
        res.status(500).json({error: error.message});
     }
}

module.exports = {
    register,
    login
}