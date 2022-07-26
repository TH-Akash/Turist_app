import About from "../views/pages/About"
import Home from "../views/pages/Home"
import LogIn from "../views/pages/LogIn"
import Signup from "../views/pages/Signup"
import AdminLayout from "../views/layOut/AdminLayout"

export  const privateRoutes=[

    {

         path:"/home",
         name:"home",
         component:Home,
         role:["*"]
        
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

    },
    {

        path:"/Signup",
        name:"signup",
        component:Signup,
        role:[ "*"]

},

    {

        path:"/adminlayout",
        name:"adminlayout",
        component:AdminLayout,
        role:[ "*"]

}

]