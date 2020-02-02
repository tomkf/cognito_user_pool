import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

const  API_INVOKE_URL = "https://stnvyur8of.execute-api.us-east-1.amazonaws.com/prod";

class Home extends Component {
  constructor() {
    super();
  this.state = {
    apiCall: null,
    render: false
  };

  fetch(API_INVOKE_URL+'/products')
  .then(response => response.json())
  .then(data => {
    this.setState({ apiCall: JSON.parse(data.body), render: true })
  });
}

 renderProducts(productArray){
  let products = productArray.map(product => (
     <Card style={{ width: '18rem'}} className="product-card" key={product.productKey}>
   <Card.Title>{product.make} {product.name}</Card.Title>
   <Card.Img variant="top" src={product.img} style={{width: '300px', height: '350px'}} />
      <Card.Body>
  </Card.Body>
 </Card>
  ))

 return (<div className="product-container"> {products} </div>)
}

  render(){
    return(
      <div>
      <h1>Welcome</h1>
      <div>
      {this.state.render && this.props.auth.isAuth ? this.renderProducts(this.state.apiCall) : ""}
      </div>
      </div>
    )
  }
}

export default Home;