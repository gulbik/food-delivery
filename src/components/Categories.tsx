import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/filterSlice";
import { AppDispatch, RootState } from "../redux/store";



const Categories: React.FC = () => {
    const categories: readonly string[] = ['Food', 'Drinks', 'Snacks', 'Sauces' ];
    const dispatch = useDispatch<AppDispatch>();
    const activeCategory = useSelector((state:RootState) => state.filter.category)

    const handleChangeCategory = (categoryName: string ) => {
        dispatch(setCategory(categoryName as 'Food' | 'Drinks' | 'Snacks' | 'Sauces'))
    }

    return(
        <div>
            <ul className="category">
                {categories.map((categoryName, i) => (
                    <li 
                        className={`category-name me-2 ${activeCategory === categoryName ? 'active' : ''}`}
                        key={i} 
                        onClick={() => handleChangeCategory(categoryName)}
                    >
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Categories