import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//DRY: don't repeat yourself
const numbers = [7,8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber}>
        </Button>
    )
    return numbers.map(renderButton)
}
const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
</section>
)

Numbers.propTypes= {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers