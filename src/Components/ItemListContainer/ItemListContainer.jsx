import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/esm/Container"
import Itemlist from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function ItemListContainer () {
    const [items, setItems] = useState ([])

    const { ID } = useParams()

    useEffect(() => {
        if (ID) {
            fetch(`https://dummyjson.com/products/category/${ID}`)
                .then(res => res.json())
                .then(json => setItems(console.log(json)))
        }
        else {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(json => setItems(console.log(json)))
        }
    }, [ID])

    return (
        <Container fluid>
            <Row>
               <Itemlist productos={items} />
            </Row>
       </Container>
    )
}

export default ItemListContainer