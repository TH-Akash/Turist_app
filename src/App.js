
import './App.css';
import Home from './views/pages/Home';
import About from './views/pages/About';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes"
import AuthMiddleware from './routes';
import { useEffect } from 'react';
import AdminLayout from './views/layOut/AdminLayout';
import PublicLayout from './views/layOut/PublicLayout';
import { LOCAL_STORAGE_KEY } from './const/const';

function App() {

  let myRole="admin1"



//   filter((value)=>{

//     if( value.role.includes(myRole)){

//       return true
//     }else{

//       return false
//     }
//  })



// jhdnhf


const datas={
  name:"saimon the dev",
  age:"None"
}

useEffect(()=>{


  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(datas))
  //  localStorage.removeItem(LOCAL_STORAGE_KEY)

     
},[])






  return (
    <>

<Router>

      
     <Switch>
        

        {
        privateRoutes.map((route,index)=>{

          return <AuthMiddleware  
          layout={AdminLayout}
          key={index} 
          role={route.role}  
          path={route.path} 
          isProtected={true}
           component={route.component}    />
        })
        }
        {
        publicRoutes.map((route,index)=>{

          return <AuthMiddleware  

          layout={PublicLayout}
          isProtected={false}
          key={index} 
          role={route.role}  
          path={route.path} 
           component={route.component}    />
        })
        }
      
        <Route path="/*" component={About} /> 
           
          
            </Switch>
   
    </Router>



    

  
    </>
  );
}

export default App;

//    <Route path="/" element={<Home />} />


// chnages
// chnages
// chnages
// chnages
// chnages

