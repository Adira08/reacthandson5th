import React from 'react';

const products = [
  {productName: 'Mobile', price: 10000},
  {productName: 'Laptop', price: 45000},
  {productName: 'IPhone', price: 900000},
  {productName: 'AirPods', price: 25000},
  {productName: 'EarPhones', price: 2000},
  {productName: 'IPad', price: 120000},
  {productName: 'MacBook', price: 230000},
  {productName: 'Desktop', price: 35000},
]

const withSearch = (WrappedComponent) => {
  class SearchFuctionality extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        search: ''
      }
    }

    updateSearch = (e) => {
      this.setState({search:e.target.value})
    }

    filterProducts = () => {
      return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
    }

    render() {
      const updatedProducts = this.filterProducts();
      return(
        <div>
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts}/>
        </div>
      )
    }
  }

  return SearchFuctionality;
}

export default withSearch;