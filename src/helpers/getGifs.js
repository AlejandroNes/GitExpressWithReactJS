

export const getGif = async (category) => {
    const keyId = "hXkfck4ATF8wECoNw5E5Dp59CYcBg02Y&";
    const getUrl = `https://api.giphy.com/v1/gifs/search?api_key=${keyId}q=${category}&limit=6`
    const resp = await fetch(getUrl);
    const { data } = await resp.json();

    const datos = data.map(item => ({
        id: item.id,
        title: item.title,
        img: item.images.downsized_medium.url
    }))

    return datos
}
