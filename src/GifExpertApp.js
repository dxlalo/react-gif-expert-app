import React,{ useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch'])
/* 
    const handleAdd = () => {
        setCategories([...categories ,"HunterXHunter"]);
    } */

    return(
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
                <hr/>
                <ul>        
                {
                    categories.map( (category) => 
                        <GifGrid 
                        key={ category }
                        category={ category }/>
                    )
                }
                </ul>
            </>
        );
}

export default GifExpertApp;