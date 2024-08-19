import React from 'react';
import { BsSearch, BsXLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { clearSearch, setSearchQuery } from '../redux/slice/filterSlice';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const search = useSelector((state: RootState) => state.filter.searchQuery)

    
    
    return (
        <div className="input-group search-bar">
            <span className="input-group-text search-icon">
                <BsSearch />
            </span>
            <input
                id="Search"
                type="text"
                placeholder="Search"
                className="form-control search-input"
                value={search}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <span className="input-group-text search-icon" onClick={() => dispatch(clearSearch())}>
                <BsXLg />
            </span>
        </div>
    );
};

export default SearchBar;
