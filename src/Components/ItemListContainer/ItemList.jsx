import Item from "./Item"

function Itemlist ({ productos }) {
   
    return(
        <>
            {productos.map(producto => (
                <Item producto={producto} key={producto.id} />
            ))}
        </>

    )
}

export default Itemlist