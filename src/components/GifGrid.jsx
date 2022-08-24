
import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [respGifs, setRespGifs] = useState([])

    const mostrarResp = async () => {
        const resp = await getGif(category);
        setRespGifs(resp)
    }

    useEffect(() => {
        mostrarResp();
    }, [])


    return (
        <>
            <h3>{category}</h3>
            <ol>
                {respGifs.map(({ id, title, img }) => (
                    <li key={id}>
                        <p>{title}</p>
                        <img src={img} alt="imagen" width="100px" />
                    </li>

                ))}
            </ol>
        </>
    )
}

export default GifGrid