import jwt from "jsonwebtoken";
const JWT_TOKEN = "pgORBOpW7ubBqyyvZmtSZMdYEhgrRUriyXM52GXla0o="

const createTokenAndSaveCookie = (userId,res)=>{
    
    const token = jwt.sign({userId},JWT_TOKEN,{
        expiresIn:"5d",
    });
    
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
    });
}

export default createTokenAndSaveCookie;