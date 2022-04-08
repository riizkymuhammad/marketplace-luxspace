import Breadcrumb from 'components/Breadcrumb';
import Asidemenu from 'parts/AsideMenu';
import Shoppingcart from 'parts/Cart/ShoppingCart';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React from 'react';

const Cart = () => {
    return (
       <>
       <Header />
       <Breadcrumb />
       <Shoppingcart />
       <Asidemenu />
       <Footer />
       </>
    );
}

export default Cart;
