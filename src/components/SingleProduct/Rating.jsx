import React, { Component } from 'react'

export class Rating extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { rating , rates} = this.props; 
    const rest = 5 - Math.ceil(rating);

    
    return <div className='flex gap-1 mt-4 items-center'>

        {Array.from({length: Math.ceil(rating)}, () => <img className='w-8' src='images/Rating/star-filled.svg' /> )}  
        {Array.from({length:rest}, () => <img className='w-8' src='images/Rating/star-unfilled.svg' /> )}  
        <span className='text-black font-bold text-sm'>{rating + ' of 5'} </span>
        {rates && (
          <span className='font-bold text-zinc-500 '>{rates} Rates</span>
        )}
    
    </div>
    
  }
}

export default Rating