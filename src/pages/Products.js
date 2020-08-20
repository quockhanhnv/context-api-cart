import  React, { Component } from 'react';
import {
    Container, Col, Row ,Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

import { CartContext } from '../contexts/Cart';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                "id": "bc49938e-8e76-45f3-8378-e34b16e8dcb0",
                "name": "Salmon Steak - Cohoe 8 Oz",
                "description": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "5ddf4344-185d-4a52-829a-ce86d0a36f49",
                "name": "Veal - Heart",
                "description": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "b4dc589f-54db-4fb8-9aa6-69160fe94c31",
                "name": "Appetizer - Mushroom Tart",
                "description": "in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "37df972c-464f-4349-8d51-b1c7c9cb7340",
                "name": "Bagel - Sesame Seed Presliced",
                "description": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "721e7aa3-0cfa-4999-91ec-01389e460623",
                "name": "Soup - Campbells",
                "description": "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
                "imageUri": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "8f9388e3-fb66-4f93-a228-bbed621d1c67",
                "name": "Crab Brie In Phyllo",
                "description": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "f01ccc42-b4e4-4b06-bae9-5e7d950c8fe7",
                "name": "Shrimp - 21/25, Peel And Deviened",
                "description": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "54be5c30-2d88-4ef0-9fbc-1ab60ebc26e4",
                "name": "Mushroom - Oyster, Fresh",
                "description": "in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "608070f5-1abd-4fe0-abce-910fa9d48557",
                "name": "Coke - Diet, 355 Ml",
                "description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
                "imageUri": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "cb3d195d-7133-4f2a-84b2-fbc3fcecfa6c",
                "name": "Pasta - Canelloni, Single Serve",
                "description": "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
                "imageUri": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "ce1ed76d-b7d9-41bf-9023-d8526fcb0d48",
                "name": "Hummus - Spread",
                "description": "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "344740c3-6928-435d-99ce-c6584ad31bee",
                "name": "Salmon Steak - Cohoe 6 Oz",
                "description": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "9651c301-c02a-4c0a-b749-83abeac8683b",
                "name": "Cheese - Perron Cheddar",
                "description": "neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "7d563ce8-c0f4-4585-9742-477424110022",
                "name": "Cocoa Powder - Dutched",
                "description": "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "c8715f41-ced4-4d39-8ed2-f7e88064859c",
                "name": "Tart - Lemon",
                "description": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "466b222e-8e62-422a-850c-434173125cb8",
                "name": "Chips - Potato Jalapeno",
                "description": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "f0abef6d-83e5-4d2f-a621-8f9003be1c8f",
                "name": "Soup Campbells Split Pea And Ham",
                "description": "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit",
                "imageUri": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "b0202bd2-5554-4e2b-bdf1-2a93f52837f9",
                "name": "Island Oasis - Strawberry",
                "description": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "44b87f4f-9174-443b-b5be-96f529cb0ff1",
                "name": "Gingerale - Diet - Schweppes",
                "description": "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede",
                "imageUri": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "b623be44-30a1-490d-9fe2-7babe2a1a243",
                "name": "Soup - Knorr, Ministrone",
                "description": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
                "imageUri": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }]
        }
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                    <h2>Products</h2>
                    <Row>
                        { products.map(product => (
                          <Col sm="4">
                              <Card>
                                <CardImg 
                                    top 
                                    width="100%" 
                                    src={ product.imageUri } 
                                />
                                <CardBody>
                                <CardTitle>{ product.name }</CardTitle>
                                <CardText>{ product.description }</CardText>
                                  <CartContext.Consumer>
                                    { ({ addToCart }) => <Button onClick={ () => addToCart(product) }>Add to cart</Button>}
                                    
                                  </CartContext.Consumer>
                                </CardBody>
                            </Card>
                          </Col>
                        ))}
                    </Row>
                </Container>
        )
            
    }
}

export default Products;