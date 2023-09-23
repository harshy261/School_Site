
import express, { application } from 'express'
// import express


import { homeController } from '../controllers/homeController.js';
// import homecontroller to use as callback logic 
import { contactController } from '../controllers/contactController.js';

const router=express.Router();
// create an instance of Router method 


router.get('/',homeController);
// routing path for root/ home page 

router.post('/',contactController);


export default router
// export router to use in app.js 