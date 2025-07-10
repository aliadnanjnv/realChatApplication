import Left from "./home/Left/Left";
import Right from "./home/right/Right";
import Logout from "./home/Left1/Logout";
import Signup from "./components/Signup";
import CreateAccountForm from "./components/Signup";
import LoginPage from "./components/LoginPage";
import {Routes,Route,Navigate} from "react-router-dom";
import {useAuth} from "./context/AuthProvider";

// import {useAuth} from "./context/AuthProvider";

function App() {
  
//  const [authUser,setAuthUser]=useAuth();
//  console.log(authUser);
   const {authUser,setAuthUser} = useAuth();
   console.log(authUser);
 
  return (
    <>
       <Routes>
          <Route path="/"
                 element={
                  authUser?(
                    <div className="flex h-screen">
                      <Logout></Logout>
                      <Left></Left>
                      <Right></Right>
                    </div>
                  ):(
                    <Navigate to={"/LoginPage"}/>
                  )
                 }
                 />
                 <Route 
                 path="/LoginPage" 
                 element = {authUser?<Navigate to = {"/"}/>:<LoginPage/>}/>

                 <Route 
                 path="/Signup" 
                 element = {authUser?<Navigate to = {"/"}/>:<Signup/>}/>
       </Routes>

      {/* <div className = "flex h-screen">
         <Logout></Logout>
        <Left></Left>
        <Right></Right>
      </div> */}
        {/* <CreateAccountForm></CreateAccountForm> */}

        {/* <LoginPage></LoginPage> */}
    </>
  )
}

export default App;
