import React, { Component } from 'react'

export class MainMenu extends Component {
    render() {
        return (
            <div className='container flex justify-between items-center py-4'>
                <div className="left flex gap-2 font-bold">
                    <img className='w-5' src="images/Navbar/search.svg" alt="" />
                    Search
                </div>
                <div className="middle ms-14">
                    <img src="images/Navbar/adidas.svg" alt="" />
                </div>
                <div className="right ">
                    <ul className='flex gap-6 font-bold'>
                        <li className='flex gap-2 relative'>
                            <img  src="images/Navbar/cart.svg" alt="" />
                            Cart

                            <span className='absolute top-0 rounded-full text-xs font-normal left-[30%] p-2  w-2 h-2 flex justify-center items-center bg-default'>0</span>
                        </li>
                        <li className='flex gap-2 '>
                            <img  src="images/Navbar/wish.svg" alt="" />
                            WishList
                        </li>
                        <li className='flex gap-2 '>
                            <img  src="images/Navbar/auth.svg" alt="" />
                            Login
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainMenu