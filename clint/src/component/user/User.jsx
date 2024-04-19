
import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function User({ toggle, setToggle}) {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        fname : "",
        lname : "",
        address : ""
    })

    const hendleUser = () => {
        if(user.fname ==="" && user.lname === "" && user.address === "") {
            alert("file the all fild")
        } else {
            alert(`${user.fname} ${user.lname} Your Order is Placed`)
            setUser("")
            navigate('/')
            setToggle(false)
        }
    }
  return (
    <div className={`user d-${!toggle ? "none" : "flex"} align-items-center justify-content-center`}>
        <div className="user_form col-4 p-5 border rounded" style={{boxShadow: '0px 0px 5px 1px #dfdfdf', backdropFilter: 'blur(3px)'}}>
            <form action="" className='d-flex flex-column gap-4 '>
                <div className="form-group">
                    <label htmlFor="firttName" className='mb-2 fw-semibold text-light' style={{fontStyle: "italic"}}> First name</label>
                    <input type="text" id='firttName' placeholder='First name' className=' form-control' required onInput={(e) => setUser((prev) => ({...prev, fname : e.target.value}))}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName" className='mb-2 fw-semibold text-light' style={{fontStyle: "italic"}}> Nser Name</label>
                    <input type="text" placeholder='Last name' id='lastName' className='form-control' required onInput={(e) => setUser((prev) => ({...prev, lname : e.target.value}))} />
                </div>

                <div className="form-group">
                    <label htmlFor="address" className='mb-2 fw-semibold text-light' style={{fontStyle: "italic"}}> Address</label>
                    <textarea  id="address" cols="20" rows="5" placeholder='Address' className='form-control' required onInput={(e) => setUser((prev) => ({...prev, address : e.target.value}))} ></textarea>
                </div>

                <div className="btns text-center">
                    <button className='btn btn-primary me-2 fw-semibold' type='button' onClick={hendleUser}>Order Place</button>
                    <button className='btn btn-light fw-semibold' type='button' onClick={() => setToggle(false)}>Cancle</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default User