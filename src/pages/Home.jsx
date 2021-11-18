import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Categories, SortPopup, PizzasBlock,  PizzasLoadingBlock} from '../components';

import {setCategory, setSortBy} from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import classNames from 'classnames';



const categoryNames = ['Мясные', 'Вегатерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
    {name:'популярности', type:'rating', order:'desc'},
    {name:'цене', type:'price', order:'desc'},
    {name:'алфавиту', type:'name', order:'asc'},
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas })=>pizzas.items);
    const cartItems = useSelector(({ cart })=>cart.items);
    const isLoaded = useSelector(({ pizzas })=>pizzas.isLoaded);
    const {category, sortBy} = useSelector(({ filters })=>filters);
    const [hamburgerActive, setHamburgerActive] = React.useState(false);

    React.useEffect(()=>{
         dispatch(fetchPizzas(sortBy, category));
      }, [category, sortBy, dispatch]);

    const onSelectCategory = React.useCallback(
        (index) => {
            dispatch(setCategory(index));
        }, [dispatch]);

    const onSelectSortType = React.useCallback(
        (type) => {
            dispatch(setSortBy(type));
        }, [dispatch]);

    const hendleAddPizzaToCart = (obj)=>{
        dispatch(addPizzaToCart(obj));
    }
    return (
        <div className="conteiner">
                <div className="content-top">
                <div onClick={()=>setHamburgerActive(!hamburgerActive)} className="hamburger"  >
                    <span>
                        __
                        <br/>__
                        <br/>__
                    </span>
                        <div className={classNames('hamburger_menu', {"active": hamburgerActive})} >
                            <Categories activeCategory={category}
                                onClickCategory={onSelectCategory}
                                items={categoryNames}
                            />
                            <div className="hamburger_menu-btn btn circle-btn">
                                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" ></path>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
                                </svg>
                            </div>
                        </div>

                </div>
                  <Categories activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}

                  />

                <SortPopup
                    activeSortType = {sortBy.type}
                    items={sortNames}
                    onClickSortType={onSelectSortType}
                />
                </div>

                <h2 className="content-title">Все пиццы</h2>
                <div className="content-item">
                {
                    isLoaded ? items.map(obj=>
                        <PizzasBlock
                        onClickAddPizza={hendleAddPizzaToCart}
                        key={obj.id}
                        isLoading={true}
                        addedCount = {cartItems[obj.id] && cartItems[obj.id].length}
                        {...obj} />
                    ) : Array(10).fill(0).map((_, index)=> <PizzasLoadingBlock key={index}/>)
                }

                </div>

            </div>
    )
}

export default Home
