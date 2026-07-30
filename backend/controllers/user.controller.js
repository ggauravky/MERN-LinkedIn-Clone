import User from '../models/user.model.js';

export const getSuggestConnections = async (req, res) => {
    try{
        const currentUser=await User.findById(req.user._id).select('connections');
        const suggestedUser=await User.find({
            _id:{$ne:req.user._id},
            _id:{$nin:currentUser.connections}
        }).select('name username profilePicture headline').limit(4);
        res.status(200).json(suggestedUser);
    }catch(error){
        console.error("Error fetching suggested connections:", error);
        res.status(500).json({ message: "Error fetching suggested connections" });
    }
}

export const getPublicProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching public profile:", error);
        res.status(500).json({ message: "Error fetching public profile" });
    }

    }