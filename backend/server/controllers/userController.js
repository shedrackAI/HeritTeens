const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

// Update user
const update = async (req, res) => {
    // Get all the user details from the request Body
    let { userId, password, isAdmin } = req.body; 
    const { id } = req.params; 

    if(userId === id || isAdmin) {
        
        // If user try to update pasword
        if(password) {
            try {
                //Hashing the user password before updating it
                const salt = await bcrypt.genSalt(10)
                password = await bcrypt.hash(password, salt);
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(id,{$set: req.body});
            return res.status(200).json({message: "Account has been updated"});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    } else {
        res.status(403).json({message: "You can update only your account"});
    }
}


// Delete user
const deleteUser = async (req, res) => {
    // Get all the user details from the request Body
    let { userId, isAdmin } = req.body; 
    const { id } = req.params; 

    if(userId === id || isAdmin) {
        try {
            const user = await User.findByIdAndDelete(id);
            return res.status(200).json({message: "Account has been deleted successfully"});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } else {
        res.status(403).json({message: "You can delete only your account"});
    }
}

// Get a sigle user
const getUser = async (req, res) => {
    // Get id from the request req.params
    const { id } = req.params; 

    try {
        const user = await User.findById(id);
        const {password, updatedAt, ...other} = user._doc;
        return res.status(200).json(other);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

// Get all the users
const getAllUser  = async (req, res) => {
    User.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

// Add a user as friend
const sendFriendRequest = async (req, res) => {
   // Get all the user details from the request Body
   let { userId } = req.body; 
   const { id } = req.params; 

   // Checking if users try to send a request to them self
   if( userId !== id ) {

        // Sending a friend request to the user
       try {
            const user = await User.findById(id);
            const currentUser = await User.findById(userId);
            
            // Checking if the users are already friends 
            if (!user.friends.includes(userId)) {
                await user.updateOne({$push: {friends: userId}});
                await currentUser.updateOne({$push: {friends: userId}});
                res.status(200).json({message: "user has been added as friend"});
            } else {
                res.status(403).json({message: "You are already friends"});
            }
       } catch (error) { 
           return res.status(500).json(error.message);
       }
   } else {
       res.status(403).json({message: "You can't follow yourself"});
   }
}

module.exports = {
    update,
    deleteUser,
    getUser,
    sendFriendRequest,
    getAllUser
}