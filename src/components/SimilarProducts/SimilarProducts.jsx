import React, { Component } from 'react'
import Rating from '../SingleProduct/Rating'

export class SimilarProducts extends Component {
    state = {
        products: [
            {
                thumbnail: 'src/images/similar.png',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                price: {
                    old: 2500,
                    new: 3000
                },
                discount: 50,
                trademark: 'src/images/adidas.png',
                rating: 4.6,
                pickFrom: 'Genena Mall',
                from:'UK',
                to: 'EGYPT',
                in:10
            },
            {
                thumbnail: 'src/images/similar.png',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                price: {
                    old: 2500,
                    new: 3000
                },
                discount: 50,
                trademark: 'src/images/adidas.png',
                rating: 4.6,
                pickFrom: 'Genena Mall',
                from:'UK',
                to: 'EGYPT',
                in:10
            },
            {
                thumbnail: 'src/images/similar.png',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                price: {
                    old: 2500,
                    new: 3000
                },
                discount: 50,
                trademark: 'src/images/adidas.png',
                rating: 4.6,
                pickFrom: 'Genena Mall',
                from:'UK',
                to: 'EGYPT',
                in:10
            },
            {
                thumbnail: 'src/images/similar.png',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                price: {
                    old: 2500,
                    new: 3000
                },
                discount: 50,
                trademark: 'src/images/adidas.png',
                rating: 2.6,
                pickFrom: 'Genena Mall',
                from:'UK',
                to: 'EGYPT',
                in:10
            },
        ]
    }
  render() {
    return (
      <div className='w-full'
      >
        <h2 className='text-purple-500'>SimilarProducts</h2>
        <div className="text-sm text-zinc-300" >You may like these products also</div>


        <div className="flex mt-3 gap-4">
            {this.state.products.map((prod, index) => (
                <div className="p-1 flex flex-col gap-1 shadow-sm shadow-slate-400"  key={index}>
                    <img src={prod.thumbnail} className='rounded-lg' alt="" />
                    <p className="font-bold w-full text-start">{prod.title}</p>
                    <span className='text-purple-800 text-2xl font-bold'>{prod.price.new} <em className='font-normal'>LE</em> </span>
                    <div className="flex justify-between items-center"> 
                        <del className='font-semibold text-zinc-500'>{ prod.price.old} LE</del> 
                        <span className='bg-default rounded-sm px-3 py-0 font-bold text-black text-center'>
                            {prod.discount} %
                        </span>
                        <img src={prod.trademark} alt="" />
                    </div>
                    <div className="">
                        <Rating rating={prod.rating} />
                    </div>
                    <div className="text-bold my-3">Pick up From: {prod.pickFrom}</div>
                </div>
            ))}
        </div>
    </div>
    )
  }
}

export default SimilarProducts