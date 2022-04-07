import Breadcrumb from 'components/Breadcrumb';
import Asidemenu from 'parts/AsideMenu';
import Productdetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React from 'react';

const Details = () => {
    return (
       <>
       <Header/>
       <Breadcrumb />
       <Productdetails />
       <Suggestion />
       <Asidemenu />
       <Footer />
       </>
    );
}

export default Details;
