import React from 'react'
import withsearch from './HOC'

class ProductList extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.products.map((item,index) => {
                        return(
                            <p key = {index} > {item.productName} {item.price}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default withsearch(ProductList)