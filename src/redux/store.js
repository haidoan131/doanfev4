import {configureStore} from "@reduxjs/toolkit"

import productsapiSlice1 from './productapiSlice';
import cartSlice from './cartSlice';

const store=configureStore({
    reducer:{
        // products:productSlice,
    
        products:productsapiSlice1,
        carts:cartSlice
    }
})

export default store
