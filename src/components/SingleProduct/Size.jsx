import classNames from 'classnames';
import React, { Component } from 'react'

export class Size extends Component {

    constructor(props) {
        super();
        this.setSize = this.setSize.bind(this)
        this.props = props
    }

    state = {
        selectedSize: 'medium'
    }

    setSize = (size) => {
        this.setState((state) => ({...state, selectedSize: size}));
        this.props.setSize(size)
    }




    sizes = [
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge'
    ];
    render() {

        const staticClasses = 'flex justify-center w-14 cursor-pointer text-sm aspect-square flex-row items-center rounded-full border border-zinc-400 text-purple-600 font-semibold px-8';

        return (
            <div className='flex flex-col gap-1 py-3 border-b '>
                <h3 className='text-xl font-bold font-mont'>Size</h3>
                <div className="flex flex-row gap-2 justify-stretch">

                    {this.sizes.map((s, index) => (
                        <div
                            className={classNames(staticClasses, { 'bg-zinc-200 border-purple-600': this.state.selectedSize == s })}
                            key={index}
                            onClick={() => this.setSize(s)}
                        >
                            {s}
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Size