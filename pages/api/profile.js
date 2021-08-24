const user = require('../../models/user');

export default async function(req, res) {

    const username = 'shijir'


    if (req.method === 'GET') {

        const userProfile = await user.fetch(username)
        console.log(userProfile);
        return res.status(200).json( userProfile )
    } 
    if (req.method === 'POST') {
         
        const msg = await user.timeLog(username)
        return res.status(200).send({ msg })

    } if (req.method === 'PUT') {
        
        const { bankName , bankNumber , userName} = req.body;

        const message = await user.saveBank(userName, bankName, bankNumber);
        return res.status(200).send(message);

        
    }
}