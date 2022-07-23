import React from 'react';
import Footer from './Footer';
import Header from './Header';

const PublicLayout = ({children}) => {




    return (
        <>

           <Header/>
            {children}
          <Footer/>
 
        </>
    );
};

export default PublicLayout;