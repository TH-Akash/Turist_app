import About from "../views/pages/About"
import Home from "../views/pages/Home"
import LogIn from "../views/pages/LogIn"





export  const privateRoutes=[


    {

         path:"/home",
         name:"home",
         component:Home,
         role:["ad2", "superAdmin"]
        

    },
    {

         path:"/about",
         name:"about",
         component:About,
         role:[ "*"]
        

    }
]


export const  publicRoutes=[

    

        {

            path:"/log_in",
            name:"login",
            component:LogIn,
            role:[ "*"]
           
   
       


    }
]