import User from "../models/user_models.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async(req,res)=>{
    try{
        const {name,email,password, confirmpassword} = req.body;
        if(password!== confirmpassword)
        {
            return res.status(400).json({
                message:"passwords do not match"
            });
        }
        const user = await User.findOne({email});

        if(user)
        {
            return res.status(400).json({
                message:"Email already exists"
            })
        }

        // hasing the password

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        if(newUser)
        {
            createTokenAndSaveCookie(newUser._id,res);
            res.status(201).json({message:"User registered successfully",newUser})
        }
        
        
    }catch(error){
      console.log(error);
    }   
        
}


export const login = async(req,res)=>{
    try{
       
       const {email , password} = req.body;
       const user = await User.findOne({email});
       console.log(user);

    //    console.log(user.name);
       const isMatch = await bcrypt.compare(password,user.password);


       if(!user||!isMatch)
       {
         return res.status(404).json({message:"invalid user or password"});
       }


       createTokenAndSaveCookie(user._id,res);

       res.status(201).json({
        message:"User logged in successfully",
        user:{

            _id:user._id,
            name:user.name,
            email:user.email,   
        },
       });


    }  
    catch(error){
        console.log(error);
        res.status(500).json({message:"server error"});
    }


}; 


// logic for logout we have to make the token clear only to get log out 

export const logout = async(req,res)=>{
    try{
          res.clearCookie('jwt');
          res.status(200).json({
            message:"User logged out successfully",
          });
    }
    catch(error){
         console.log(error);
         res.status(500).json({message:"Server error"});
    }
}


export const getUserProfile = async(req,res)=>{
    try{
        const loggedInUser = req.user._id;
        
        const filteredUsers = await User.find({

            // this syntax is for removing the id that is mentioned

            _id:{$ne:loggedInUser},
        }).select("-password");
        
        res.status(201).json({filteredUsers});
    }
    catch(error){
        console.log("Error in allUsers Controllers:"+ error);
        res.status(500).json({message:"Server error"});
    }
}



