import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item ({ producto }) {

    return(
        <Col lg={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.images[0]} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item