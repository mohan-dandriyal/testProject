import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart, togglemodals } from "../../store/CartSlice/CartSlice"
// import { addtoCart } from "../store/CartSlice/CartSlice"

export const Product = (props) => {

    console.log(props);
    const addData = useDispatch()
    const navigete = useNavigate()

    const hendleaddtoCart = (payload) => {
        addData(addtoCart(payload))
    }

    const chackCard = () => {
        props.setToggle(true)
    }

    
    return (
        <>
            <div className="cart">
                <div className="product_img text-center">
                    <img src={props.img} height="100%" width="90%" alt="" />
                </div>
                <div className="card_body mt-3 text-center">
                    <h4>{props.category}</h4>
                    <p>Price: ${props.price}</p>
                    <button onClick={() => chackCard(true)} className="me-2">By Now</button>
                    <button
                        onClick={() => hendleaddtoCart({
                            image: props.img,
                            id: props.id,
                            category: props.category,
                            price: props.price,
                            title: props.title,
                            description: props.description
                        })}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}