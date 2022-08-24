import useFetchGif from '../hooks/useFetchGif';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {

    //custom huck
    const { respGifs, isLoading } = useFetchGif(category)

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {isLoading && <h2>cargando...</h2>}
                {respGifs.map((item) => (
                    <GifItem key={item.id} {...item} />
                ))}
            </div>
        </>
    )
}

export default GifGrid