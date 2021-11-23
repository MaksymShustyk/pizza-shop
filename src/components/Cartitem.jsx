import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from '.';
// type, size,
function Cartitem({id, imageUrl, name,  totalPrice,totalCount, removeCartItem, onPlus, onMinus}) {
    const {items} = useSelector(({cart})=> cart)

    let currentPizzaInfo =[]
    items[id].items.map(obj=>currentPizzaInfo.push(obj.type+' '+'тесто'+', '+obj.size+' ' +'.см'))

    let countObj = currentPizzaInfo.reduce((acc, val) => (acc[val] = acc[val] ? acc[val] + 1 : 1, acc), {});

    let countArr = Object.keys(countObj).map(key => ''+ key+' '+ countObj[key]+'-'+'шт.');





    const handleRemoveClick = () => {
        removeCartItem(id);
    }

    const handelPlusItem = () => {
        onPlus(id);
    }
    const handelMinusItem = () => {
        onMinus(id);
    }
    return (
        <div className="cart-item">
            <div className="cart-item_img">
                <img src={imageUrl} alt="Hot pizza img" className="pizza-block_img"/>
            </div>
            <div className="cart-item_info">
                <h3>{name}</h3>
                {   countArr.map(obj=>
                    <p>
                    {obj}</p>
                )}
            </div>
            <div className="cart-item_count">
                <Button className="count-btn" onClick={handelMinusItem} circle>
                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
                        </svg>
                </Button>
                <b>{totalCount}</b>
                <Button className="count-btn" onClick={handelPlusItem} circle>
                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" ></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" ></path>
                        </svg>
                </Button>
            </div>
            <div className="cart-item_price"><b>{totalPrice} ₴</b></div>
            <div className="cart-item_remove">
                <Button className="remove-btn" onClick={handleRemoveClick} circle>
                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" ></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
                        </svg>
                        <span>
                            Удалить пиццу
                        </span>
                </Button>
            </div>
        </div>
    )
}

export default Cartitem
