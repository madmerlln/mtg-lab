import React, { createContext, useState, useContext } from "react";

const CollectionContext = createContext();

export default function CollectionProvider({children}){
    const [collection, setCollection] = useState([]);

    return (
        <CollectionContext.Provider value={{
            collection,
            setCollection,
        }}>
            {children}
        </CollectionContext.Provider>
    );
}

export function useCount(){
    const context = useContext(CollectionContext);
    const { collection, setCollection } = context;
    return { collection, setCollection };
}