import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { useEffect } from "react";
import { fetchMenu } from "../redux/slice/menuSlice";
import FoodCard from "./FoodCard";
import { useSearchParams } from "react-router-dom";
import { setCategory, setSearchQuery } from "../redux/slice/filterSlice";
import EmptyPage from "./EmptyPage/EmptyPage";

const  Menu: React.FC = () => {
    const menu = useSelector((state: RootState) => state.menu);
    const category = useSelector((state: RootState) => state.filter.category);
    const search = useSelector((state: RootState) => state.filter.searchQuery);
    const dispatch = useDispatch<AppDispatch>();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (menu.status === 'loading') {
            dispatch(fetchMenu());
        }
    }, [dispatch, menu.status]);

        
    useEffect(() => {
        const search = searchParams.get('search') || '';
        const categoryParam = searchParams.get('category') || 'Food';

        dispatch(setSearchQuery(search));
        dispatch(setCategory(categoryParam as 'Food' | 'Drinks' | 'Snacks' | 'Sauces'));
    }, [dispatch, searchParams]);

   
    useEffect(() => {
        const params: { search?: string; category?: string } = {};
        if (search) {
            params.search = search;
        }
        if (category) {
            params.category = category;
        }
        setSearchParams(params);
    }, [search, category, setSearchParams]);

    
    const filteredMenu = menu.items.filter(item=> {
        const matchesCategory = item.category===category;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch
    })

    return(
        <div className="food-list">
            {filteredMenu.length>0 ?
            filteredMenu.map((item) => (
                <FoodCard {...item} key={item.id}/>
            ))
            : <EmptyPage problem="Item not found" problemDescription="Try searching the item with a different keyword."/>}
        </div>
    )
}

export default Menu