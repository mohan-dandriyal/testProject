
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../store/CartSlice/CartSlice";
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

export const Header = () => {
    const naviget = useNavigate();
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.carts
    })


    const hendleSearchBar = (search) => {
        dispatch(searchItem(search))
    }
    return (
        <>
            <header className="position-sticky top-0" style={{}}>
                <div className="row w-100 mx-0 justify-content-center py-3 align-items-center">
                    <div className="col-sm-4 text-center">
                        <h4>
                            <Link> <span style={{ fontFamily: "cursive" }}>E</span>-Commerce</Link>
                        </h4>
                    </div>
                    <div className="col-sm-4 mx-auto text-center">
                        <div className="mb-3">
                            <input type="text"
                                className="form-control search mx-auto w-75"
                                name="" id=""
                                aria-describedby="helpId"
                                placeholder="Serch Item"
                                onInput={(e) => hendleSearchBar(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-4 text-center ">
                        <div className="items flex position-relative mx-auto" style={{ width: "fit-content" }}>
                            <MdShoppingCart className="fs-2" onClick={() => naviget('/add-cart')} />
                            <div className="card-items-number d-flex align-items-center justify-content-center pb-0 position-absolute rounded-circle ">{data.length}</div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}