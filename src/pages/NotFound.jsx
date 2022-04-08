import Asidemenu from 'parts/AsideMenu';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Pageerrormessage from 'parts/PageErrorMessage';
import React from 'react';

const Notfound = () => {
    return (
       <>
       <Header />
       <Pageerrormessage />
       <Asidemenu />
       <Footer />

       </>
    );
}

export default Notfound;
