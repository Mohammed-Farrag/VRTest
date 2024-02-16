import React, { Component } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import Rating from '../components/SingleProduct/Rating';
import Size from '../components/SingleProduct/Size';
import Color from '../components/SingleProduct/Color';
import { FiPlus, FiMinus } from "react-icons/fi";
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';

export class SingleProduct extends Component {

    state = {
        category: 'men',
        description: "Lorem ipsum, dolor sit amet  consectetur adipisicing elit Corrupti nesciunt commodi dolores voluptatem. Quibusdam necessitatibus assumenda animi reiciendis atque quod",
        imgs: [
            'src/images/p1.jpg',
            'src/images/p2.jpg',
            'src/images/p3.jpg'
        ],
        activeImg: 0,
        rating: 4.9,
        rates: 22,
        price: {
            new: 12522,
            old: 13000
        },
        discount: 30,
        size: 'medium',
        color: 'black',
        quantity: 1
    }


    setSize = (size) => {
        this.setState((state) => ({ ...state, size }))
    }
    setColor = (color) => {
        this.setState((state) => ({ ...state, color }))
    }
    Next() {
        this.setState((state) => ({
            ...state,
            activeImg: state.activeImg == (state.imgs.length - 1) ? 0 : ++state.activeImg
        }))
    }

    Prev() {
        this.setState((state) => ({
            ...state,
            activeImg: state.activeImg == 0 ? (state.imgs.length - 1) : --state.activeImg
        }))
    }
    makeActive(id) {
        this.setState((state) => ({
            ...state,
            activeImg: id
        }))
    }


    render() {
        return (
            <div className='single-product container font-mont'>
                <BreadCrumb />
                <div className="flex justify-between">
                    <div className="produnct-images left">
                        <img className='w-full aspect-square rounded-md border border-zinc-400 mb-2' src={this.state.imgs[this.state.activeImg]} alt="" />
                        <ul className='w-full p-0 flex justify-between items-center'>
                            <li className='cursor-pointer'><BsChevronLeft onClick={() => this.Prev()} /></li>

                            {this.state.imgs && this.state.imgs.map((im, index) => (
                                <li key={index}><img

                                    onClick={() => this.makeActive(index)}
                                    className='cusrsor-pointer aspect-square border-zinc-400 border w-72'
                                    src={im}
                                    alt=""
                                />
                                </li>
                            ))}

                            <li className='cursor-pointer'><BsChevronRight onClick={() => this.Next()} /></li>
                        </ul>
                    </div>

                    <div className="product-details right flex flex-col ps-10 ">
                        <img className='mb-2 w-10' src="src/images/adidas.svg" alt="" />
                        <p className='font-bold'> {this.state.description} </p>
                        <span className='font-bold text-zinc-400 uppercase'>{this.state.category}</span>

                        <Rating rating={this.state.rating} rates={this.state.rates} />

                        <div className="price text-purple-700 text-2xl border-b pb-4 font-bold mt-4">
                            {this.state.price.new.toLocaleString()}
                            <span className='text-thin'>LE</span>
                            <del className='text-zinc-500 mx-2'>{this.state.price.old.toLocaleString()} LE</del>
                            <span className='bg-[#FFF200] mx-10 py-2 px-4 rounded-md text-base text-black'>{this.state.discount} % off</span>
                        </div>


                        <Size setSize={this.setSize} />

                        <Color setColor={this.setColor} />

                        <div className="flex flex-col gap-1 justify-start">
                            <h3 className='text-xl font-bold font-mont'>Quantity</h3>


                            <div className="rounded-full p-1 border w-40 border-zinc-400 flex justify-between">
                                <div className="w-6 h-6 flex justify-center items-center rounded-full bg-default cursor-pointer text-black  font-bold"
                                    onClick={() => this.setState((state) => ({
                                        ...state,
                                        quantity: (state.quantity == 1) ? 1 : --state.quantity
                                    }))}
                                > <FiMinus /> </div>
                                <span>{this.state.quantity}</span>
                                <div className="w-6 h-6 flex justify-center items-center rounded-full bg-default cursor-pointer text-black font-bold"
                                    onClick={() => this.setState((state) => ({
                                        ...state,
                                        quantity: ++state.quantity
                                    }))}
                                > <FiPlus /> </div>
                            </div>
                        </div>


                        <div className="flex gap-2 font-semibold py-3">
                            <button className='p-3 py-2 rounded-full bg-default text-black text-center'>Add To Cart</button>
                            <button className='p-3 py-2 rounded-full bg-purple-700 text-white text-center'>Pick up from Store</button>
                        </div>
                    </div>

                </div>


                <SimilarProducts />
            </div>
        )
    }
}

export default SingleProduct