import React, { Component } from 'react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export class TopNabvar extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className='top-navbar shadow-custom'>
                <div className="container flex gap-2 justify-start items-center py-2 ">

                    <div className="left flex gap-4 items-center">
                        <img src='images/Navbar/menu.svg' alt='' onClick={this.props.toggleCanvas} />
                        <img src='images/brand_logo_black.svg' />
                    </div>

                    <div className="middle hidden md:flex gap-2 justify-between items-center ms-auto">
                            <GoChevronLeft />
                            <p className='m-0'>
                                Valentine Day Offer! Buy Tow Get One Free <a href='#' className='font-bold text-black' >Shop Now</a>
                            </p>
                            <GoChevronRight />
                    </div>
                    
                    <div className="right ms-auto">
                            <ul className='flex gap-6 font-bold m-0 flex-col sm:flex-row'>
                                <li className='flex gap-2 cursor-pointer'>
                                    <img className='w-4' src="images/Navbar/phone.svg" alt="" />
                                    Contact Us
                                </li>
                                <li className='flex gap-2 cursor-pointer'>
                                    <img className='w-4' src="images/Navbar/track.svg" alt="" />
                                    Track Order
                                </li>
                                <li className='flex gap-2 cursor-pointer'>
                                    <img className='w-4' src="images/Navbar/location.svg" alt="" />
                                    Find A Store
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNabvar