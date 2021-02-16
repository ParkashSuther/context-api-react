import React,{ useState,createContext } from "react";

export const StoreContext = createContext();
export const StoreProvider =(props)=>{

    const [products,setProducts] = useState([
        {
            id:1,
            name:"product one",
            image:"url"
        },
        {
            id:2,
            name:"product one",
            image:"url"
        },
        {
            id:3,
            name:"product one",
            image:"url"
        }
    ])
    return <
        StoreContext.Provider value={[products,setProducts]}>
            {props.children}
        </StoreContext.Provider>
}
