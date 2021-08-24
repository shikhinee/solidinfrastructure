const UserRequest = require('../../models/userRequest');
import { hashPassword } from '../../utils/auth';

export default async function(req, res) {

    if (req.method === 'GET') {

        const Requests = await UserRequest.fetchAll()
        return res.status(200).json( Requests )
    } 
    if (req.method === 'POST') {
         
        const { userName, fullName, phoneNumber } = req.body;
        try {
            const myPass = await hashPassword(req.body.password);

            const myRequest = new UserRequest(
                userName, 
                fullName, 
                phoneNumber, 
                myPass
            );            
            const message = await myRequest.save().then(result => {
                return result;                
            })
            .catch(err => {
                return err.message;
            });
            return res.status(200).send({ message: message });
            
        } catch (error) {
            return res.status(200).send(error.message);
        }            
    } if (req.method === 'PUT') {
        
        const { approval , role , userName } = req.body;
        let msg = null;
        if (approval) {
            msg = await UserRequest.accept(userName , role).then(result => {
                return result;
            })
        } else {
            msg = await UserRequest.deny(userName).then(result => {
                return result;
            });
        }
        return res.status(200).send({ message: msg })
    }
}