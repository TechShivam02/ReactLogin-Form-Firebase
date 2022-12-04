import React, { useState } from "react"


import "./index.css"

const App = () => {  
  

    const [user,setUSer] = useState({
        name:"",
        email:"",
        password:"",
        adress:"",
        message:"",
    })


    let name,value = "";
    
    const onhandleChange = (event) => {

        name = event.target.name;
        value = event.target.value;

        setUSer({...user , [name]:value});
        
    }





    const postData = async (event) => {

        event.preventDefault();







    const { name,email,password,adress,message } = user;


    if(name && email && password && adress && message ){

   

const res = await fetch("https://reactthapaform-ee815-default-rtdb.firebaseio.com/shivamreactfirebase.json" ,
    
    {
        
        method:"POST",

        headers:{
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name,
            email,
            password,
            adress,
            message,
        })

    }

  );      // response
  
   
  if(res){

        setUSer({
            name:"",
            email:"",
            password:"",
            adress:"",
            message:"",
        })

        alert("Data Stored SuccessFully");


  }


}

else{
        alert("Please Fill The Data , Complete")
}


        
                    
}




  return(
    
    <>   
        
    <div className="main_div">
                    
            <div className="box">
        
                    <h1>Login Form</h1>
                        
                    <form  method="POST">
                    
                                <div className="input-box">
                                
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="off"
                                    required

                                    value={user.name}
                                    onChange={onhandleChange}
                                    />
                            
                            <label htmlFor="Username">Username</label>
                    
                            </div>


                            


                            <div className="input-box">
                                
                                    <input
                                    type="email"
                                    name="email"
                                    id="name"
                                    autoComplete="off"
                                    required

                                    
                                    value={user.email}
                                    onChange={onhandleChange}

                                    
                                    />
                            
                            <label htmlFor="Email">Email</label>
                            </div>


                            <div className="input-box">
                                    <input
                                    type="password"
                                    name="password"
                                    id="name"
                                    autoComplete="off"
                                    required

                                    
                                    value={user.password}
                                    onChange={onhandleChange}
                                    />
                                    <label htmlFor="Password">Password</label>
                            </div>



                            <div className="input-box">
                                
                                    <input
                                    type="text"
                                    name="adress"
                                    id="name"
                                    autoComplete="off"
                                    required

                                    
                                    value={user.adress}
                                    onChange={onhandleChange}
                                    />
                            
                            <label htmlFor="Adress">adress</label>
                            </div>




                            <div className="input-box">
                                
                                <input
                                type="text"
                                name="message"
                                id="name"
                                autoComplete="off"
                                required

                                
                                value={user.message}
                                onChange={onhandleChange}
                                />


                        
                        <label htmlFor="message">Message</label>
                        </div>



                    <button  id="submitbtn" onClick={postData}>Login</button>



                    </form>
            </div>


    </div>


    </>
    
  )
  

}

export default App;