import classNames from 'classnames';
import React, { Component } from 'react'

export class Color extends Component {
    constructor(props) {
        super();
        this.setColor = this.setColor.bind(this)
        this.props = props
    }

    state = {
        selectedColor: 'black'
    }

    setColor = (color) => {
        this.setState((state) => ({...state, selectedColor: color}));
        this.props.setColor(color)
    }




    colors = [
        'black',
        'red'
    ];
    render() {

        const staticClasses = 'flex justify-center w-14 cursor-pointer text-sm aspect-square flex-row items-center rounded-full border border-zinc-400 text-purple-600 font-semibold px-8';

        return (
            <div className='flex flex-col gap-1 py-3'>
                <h3 className='text-xl font-bold font-mont'>Color</h3>
                <div className="flex flex-row gap-2 justify-stretch">

                    {this.colors.map((c, index) => (
                        <div
                            className={classNames(staticClasses, { 'bg-zinc-200 text-black': this.state.selectedColor == c })}
                            key={index}
                            onClick={() => this.setColor(c)}
                        >
                           {c} 
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Color