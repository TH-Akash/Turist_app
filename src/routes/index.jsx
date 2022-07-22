import React from "react";
import { Route, Redirect } from "react-router-dom";
import LayOut from "../views/layOut";

const AuthMiddleware = ({ component: Page, isProtected, role, ...rest }) => {


  let login = true;


  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (!login && isProtected) {
            return (
              <Redirect
                to={{ pathname: "/log_in", state: { from: props.location } }}
              />
            );
          }

       



          return (
            <LayOut>
              <Page {...props} />
            </LayOut>
          );
        }}
      />
      )
    </>
  );
};

export default AuthMiddleware;

//  const AuthMiddleware = ({
//   component: Component,
//   layout: Layout,
//   isAuthProtected,
//   ...rest
// }) => (
