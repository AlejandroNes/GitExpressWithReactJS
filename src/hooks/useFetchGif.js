import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';

const useFetchGif = (category) => {

    const [respGifs, setRespGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const mostrarResp = async () => {
        const resp = await getGif(category);
        setRespGifs(resp)
        setIsLoading(false)
    }

    useEffect(() => {
        mostrarResp();
    }, [])


    return {
        respGifs,
        isLoading
    }
}

export default useFetchGif