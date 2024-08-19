import Categories from "../components/Categories"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"

import { FiAlignLeft, FiShoppingCart } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-page d-flex justify-content-between flex-column">            
            <Header leftIcon={<FiAlignLeft />} leftIconPath="/profile-menu" rightIcon={<FiShoppingCart/>} rightIconPath="/cart" />
            <div className="home-heading">
                <h1>Delicous</h1>
                <h1>food for you</h1>
            </div>
            <SearchBar/>
            <Categories/>
            <Menu/>
            <Navbar/>            
        </div>
    )
}

export default Home