import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Categories, SortPopup, PizzasBlock,  PizzasLoadingBlock} from '../components';

import {setCategory, setSortBy} from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';


const categoryNames = ['Мясные', 'Вегатерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
    {name:'популярности', type:'rating', order:'desc'},
    {name:'цене', type:'price', order:'desc'},
    {name:'алфавиту', type:'name', order:'asc'},
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas })=>pizzas.items);
    const isLoaded = useSelector(({ pizzas })=>pizzas.isLoaded);
    const {category, sortBy} = useSelector(({ filters })=>filters);


    React.useEffect(()=>{
        //   axios.get('http://localhost:3001/pizzas').then(({data})=>{
        //   dispatch(setPizzas(data));
        // });


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
    return (
        <div className="conteiner">
                <div className="content-top">
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
                        <PizzasBlock onClickAddPizza={(obj)=>console.log(obj)}
                        key={obj.id} isLoading={true} {...obj} />
                    ) : Array(10).fill(0).map((_, index)=> <PizzasLoadingBlock key={index}/>)
                }

                </div>

            </div>
    )
}

export default Home
