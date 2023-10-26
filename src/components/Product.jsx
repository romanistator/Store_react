import {Quantity} from "./Quantity.jsx"

export function Product(props){
    
    return (
        <div className="col-2 m-2 card">
            <img src={props.product.image}/>
            <h5>{props.product.nom}</h5>   
            <p>{props.product.prix}</p>
            <Quantity product={props.product}/>   
        </div>

    )

}