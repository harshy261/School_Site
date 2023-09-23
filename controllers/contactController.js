import { join } from 'path'
// import join so that we can use it while sending a html page from views
import User from '../models/userSchema.js'

const contactController = async (req, res) => {
    
    try{
        console.log("Inserted details");
        console.log(req.body);
        // const {name,email,phone,message}=req.body;
        const userData = new User(req.body);
        const result=userData.save();
        console.log(result);
        res.send("Submitted");
    }
    catch(error){
        console.log(error);
    }

    
    
    // try {
    //     // res.send(req.body);
    //     const userData = new User(req.body);
    //     await userData.bulkSave();
    //     console.log(userData);
    //     res.status(201).render("index")
    // } catch (err) {
    //     res.status(500).send(err);
    // }
}


export { contactController }
// export it so that it could be used 