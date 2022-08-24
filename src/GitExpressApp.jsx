import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpressApp = () => {

    const [categories, setCategories] = useState(["item1", "item2", "item3"]);

    const onCategories = (newValor) => {

        //permite no repetir las mismas categorias
        if (categories.includes(newValor)) return;

        //agrega el nuevo valor del input al arrreglo
        setCategories([newValor, ...categories])
    }

    return (
        <>
            <h1>GitExpressApp</h1>

            <AddCategory
                onCategories={onCategories}
            />

            {categories.map((category, index) => (
                <GifGrid key={index} category={category} />
            ))}


        </>
    )
}

export default GitExpressApp