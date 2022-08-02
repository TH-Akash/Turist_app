import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthMiddleware = ({ layout:Layout, component: Page, isProtected, role, ...rest }) => {


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
            <Layout>
              <Page {...props} />
            </Layout>
          );
        }}
      />
      
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
