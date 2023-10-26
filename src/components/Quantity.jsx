
function addArticle(product){
    let panier = document.querySelector(".panier")
    let newArticle = document.createElement("p")
    newArticle.innerHTML= product.nom
    panier.appendChild(newArticle)

}
export function Quantity(props){

    return (
        <>
            <button onClick={addArticle(props.product)}>+</button>
            <span className="nbrArticle"></span>
            <button>-</button>
        </>
    )
}