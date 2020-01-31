import React, { Component } from "react";

//  fetch req. to API end point to launch lambda method to interact with dynamo 

const  API_INVOKE_URL = "https://stnvyur8of.execute-api.us-east-1.amazonaws.com/prod";

class Home extends Component {
  constructor() {
    super();
  this.state = {
    apiCall: null
  };

  fetch(API_INVOKE_URL+'/products')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });
}

  render(){
    return(
      <div>
      <h1>Welcome</h1>
      </div>
    )
  }
}

export default Home;