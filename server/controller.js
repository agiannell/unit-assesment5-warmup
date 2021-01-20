const bcrypt = require('bcryptjs'),
    saltRounds = 10;

module.exports = {
    register: async(req, res) => {
        const { username, password, email, name } = req.body,
            db = req.app.get('db');
            
        const [user] = await db.get_username(username)
        if (user) return res.sendStatus(401)
        const salt = bcrypt.genSaltSync(saltRounds),
            hash = bcrypt.hashSync(password, salt);

        const [usernameId] = await db.add_username(username)
        console.log(usernameId)
        const [newUser] = await db.add_hash(usernameId.username_id, hash)
        req.session.user = {
            username: newUser.username,
            id: newUser.username_id
        }
        res.status(200).send(req.session.user)
    },
    login: (req, res) => {

    },
    getUserInfo: (req, res) => {

    },
    logout: (req, res) => {

    }
}