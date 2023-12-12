import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)){
            return
        }
        else{
        // Usando [...arrayOriginal, nuevo elemento] reconstruyo el array añadiendo el nuevo elemento al final
        setCategories([newCategory, ...categories])
        }
    }

  return (
    <>
    {/* Title */}
    <h1>GifExpertApp</h1>

    {/* Input => Component*/}
    <AddCategory onNewCategory={newCategory => onAddCategory(newCategory)} />

    {/* List => Component */}
        {categories.map( category => 
             <GifGrid key={category} category={category}/>
        )}
    </>
  )
}