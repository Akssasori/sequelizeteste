const User = require('../models/User');

module.exports = {
  
    async store(req, res) { //async
        const { name, email } = req.body;
        console.log(req.body);
    
        const user = await User.create({ name, email }); //await
        if(user){
          if(user.name&&user.email)
          return res.json(user);
          return res.json({error:"user.name"&&"user.email" == undefined});
        }

        // try {
        //   return res.json(user);
        // } catch (error) {
        //   return error
          
        // }
        
    
        // return res.json(user);
      }
      
    };