import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpressApp = () => {

    const [categories, setCategories] = useState([]);

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

            {categories.length > 0 ? categories.map((category) => (
                <GifGrid key={category} category={category} />
            )) : <p className='text-center'>INGRESE UNA BUSQUEDA</p>}


        </>
    )
}

export default GitExpressApp