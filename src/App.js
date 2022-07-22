
import './App.css';
import Home from './views/pages/Home';
import About from './views/pages/About';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes"
import AuthMiddleware from './routes';

function App() {

  let myRole="admin1"



  
console.log("app")



  return (
    <>

<Router>

      
<Switch>
        

        {
        privateRoutes.filter((value)=>{

           if( value.role.includes(myRole)){

             return true
           }else{

             return false
           }
        })
        .map((route,index)=>{

          return <AuthMiddleware  
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


