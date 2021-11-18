import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'
import Button from '../Button'


function PizzasBlock({id, name, imageUrl, sizes, price, types, onClickAddPizza, addedCount}) {
    const typeNames = ['тонкое','традиционное']
    const sizeNames = [26,30,40]
    const [activeType, setActiveType] = React.useState(types[0])
// Виправити size на index.
    const [activeSize, setActiveSize] = React.useState(sizes[0])


    const onSelectType = (index)=>{
        setActiveType(index)
    }

    const onSelectSize = (size)=>{
        setActiveSize(size)
    }

    const onAddPizza = ()=>{
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: activeSize,
            type: typeNames[activeType],
        }
        onClickAddPizza(obj);
    };
    return (
        <div className="pizza-block">
                        <img src={imageUrl} alt="Hot pizza img" className="pizza-block_img"/>
                        <h4 className="pizza-block_title">{name}</h4>
                        <div className="pizza-block_selector">
                            <ul>
                                {
                                    typeNames.map((type, index)=>(
                                    <li key={type}
                                    onClick={()=>onSelectType(index)}
                                    className={
                                        classNames({
                                            'active': activeType===index,
                                            'disabled': !types.includes(index)

                                        })
                                    }>
                                    {type}
                                    </li>))
                                }
                            </ul>
                            <ul>
                                {
                                    sizeNames.map((size)=>

                                    <li key={size}
                                    onClick={()=>onSelectSize(size)}
                                    className={
                                        classNames({
                                            'active': activeSize===size,
                                            'disabled': !sizes.includes(size)
                                        })
                                    }>
                                        {size} см.
                                    </li>)
                                }
                            </ul>
                        </div>

                        <div className="pizza-block_bottom">
                            <div className="pizza-block_price">{price} ₴</div>
                            <Button onClick={onAddPizza}  className="pizza-block_bottom-btn" circle>
                                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"></path>
                                </svg>
                                <span>Добавить</span>
                                {/* {addedCount &&  */}
                                <i>{addedCount}</i>
                            </Button>

                        </div>
                    </div>
    )
}

PizzasBlock.propTypes = {
    name : PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    size: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
};

PizzasBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    size: [],
    addedCount:0,
}

export default PizzasBlock
