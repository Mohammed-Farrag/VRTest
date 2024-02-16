import React, { Component } from 'react'

export class CatrgoriesNavbar extends Component {
    render() {
        return (
            <div className='bg-black text-white shadow-custom'>
                <div className="container flex justify-between items-center py-2 font-semibold">
                    <a className='text-white no-underline' href="#">Men</a>
                    <a className='text-white no-underline' href="#">Women</a>
                    <a className='text-white no-underline' href="#">UniSex</a>
                    <a className='text-white no-underline' href="#">Kids</a>
                    <a className='text-white no-underline' href="#">Best Sellers</a>
                    <a className='text-white no-underline' href="#">New Arrivals</a>
                    <a className='no-underline text-red-500' href="#" >Offers</a>
                </div>
            </div>
        )
    }
}

export default CatrgoriesNavbar