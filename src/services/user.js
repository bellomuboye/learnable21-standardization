const { errorMonitor } = require("stream");
const User = require("../models/user");

module.exports = class UserService {
    static async getAllUsers(){
        try {
            const allUsers = await User.find();
            return allUsers;
        } catch (error) {
            console.log(`Could not fetch articles ${error}`)
        }
    }
}