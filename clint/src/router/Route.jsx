import { Route, Routes } from 'react-router-dom'
// import { Product } from '../../product/Prodect';
import { Cart } from '../component/cart/Cart';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/CartSlice/CartSlice';
import User from '../component/user/User';
import { Product } from '../component/product/Prodect';
import AddProduct from '../component/addprodut/AddProduct';


export const Routers = () => {

  const [toggle, setToggle] = useState(false)

  const dispeatch = useDispatch()
  const state = useSelector((state) => {
    return state.search
  })
  const products = useSelector((state) => {
    return state.apiInt
  })


  useEffect(() => {
    dispeatch(getData())
  }, [])


  //=======> search bar ========> =========>
  //  =======> search bar ========> =========>

  const searchItem = products?.data && products.data?.data?.filter((item) => {
    if (state.search === "") {
      return item
    }
    else if (item.productName?.toLowerCase().includes(state.search?.toLowerCase())) {
      return item
    }
  })


  return (

    <>
      <User setToggle={setToggle} toggle={toggle} />
      <Routes >
        <Route path='/' element={
          searchItem ? searchItem?.map((item, index) =>
            <Product
              category={item.productName}
              img={item.productImage}
              id={item._id}
              price={item.productPrice}
              key={index}
              description={item.productDescription}
              setToggle={setToggle}
            />) : products.isLoading && '...Loading'
        } />
        <Route path='/add-cart' element={<Cart />} />
        <Route path='addproduct' element={<AddProduct /> } />

      </Routes>
    </>
  );
}


// 