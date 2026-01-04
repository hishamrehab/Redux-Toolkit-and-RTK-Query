import { configureStrore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import { productsApi }from "./service/dummyData"

export const store = configureStrore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },

})


setupListeners(store.dispatch);