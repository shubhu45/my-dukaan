import React, { useEffect, useState } from 'react'
import ContainerComponent from '../Layout/Container/ContainerComponent'
import './Store.scss'
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Config from '../../config/config.json'
import { FormControlLabel, Searchbar, Switch } from '@material-ui/core';
import Footer from '../Layout/Footer/Footer'
import SearchBar from 'material-ui-search-bar';
import ProductList from './ProductList';
import ApiData from '../../config/ApiData.json'

export default function Store(props){
    const storeId = props.match.params.storeId;
    const bagInActiveIcon = Config.header.bagInActiveIcon;
    const accountInActiveIcon = Config.header.accountInActive;
    const homeInActiveIcon = Config.header.homeInActiveIcon;

    const categories = ApiData.data.categories;
    
    useEffect(()=>{
        //Fetch seller info using getSellerinfo api and storeId 
        setSellerInfo(ApiData.data)
    },[storeId])

    const [sellerInfo, setSellerInfo] = useState(ApiData.data)
    const [searchKeyword, setSearchKeyWord] = useState("");
    const [isVegSelected, setIsVegSelected] = useState(false)

    let handleChange = (fieldName, value) => {
        console.log("Fis is===", fieldName, value)
        if(fieldName === "search"){
            setSearchKeyWord(value)
        }
    }

    return(
        <ContainerComponent>
            <div className="store-parent-container">
                <header className="header-wrap">
                    <nav className="navbar">
                        <div className="navbar-container container">
                            {sellerInfo && <div className="seller-info-div">
                                <img className="store-image" src={sellerInfo.image} alt="seller-profile-pic"></img>
                                <div className="seller-info-text-wrap">
                                    <h5>{sellerInfo && sellerInfo.name}</h5>
                                    {sellerInfo.verified ? <div className="verified-info-container green">
                                        <CheckCircleIcon/>
                                        <h6 className="green">SELLER VERIFIED</h6>
                                    </div> : <div className="verified-info-container red">
                                            <CancelIcon/>
                                            <h6 className="red">SELLER NOT VERIFIED</h6>
                                        </div>}
                                </div>
                            </div>}
                            <div className="navbar-cart-icon-wrap">
                                <a className="nav-link" href="/bag">
                                    <span className="cart-items-count">1</span>
                                    <div className="navbar-icon-text-wrapper">
                                        <img src={bagInActiveIcon} alt="bag-inactive-icon"></img>
                                        <h5 className="mg-10">Bag</h5>
                                    </div>
                                </a>
                                <a className="nav-link" href="/account">
                                    <div className="navbar-icon-text-wrapper">
                                        <img src={accountInActiveIcon} alt="account-inactive-icon"></img>
                                        <h5 className="mg-10">Account</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="mobile-nav-container">
                    <a className="nav-link" href="/bag">
                        <div className="navbar-icon-text-wrapper">
                            <img src={homeInActiveIcon} alt="bag-inactive-icon"></img>
                            <h5 className="mg-10">Home</h5>
                        </div>
                    </a>
                    <a className="nav-link" href="/bag">
                        <span className="mob-cart-items-count">1</span>
                        <div className="navbar-icon-text-wrapper">
                            <img src={bagInActiveIcon} alt="bag-inactive-icon"></img>
                            <h5 className="mg-10">Bag</h5>
                        </div>
                    </a>
                    <a className="nav-link" href="/account">
                        <div className="navbar-icon-text-wrapper">
                            <img src={accountInActiveIcon} alt="account-inactive-icon"></img>
                            <h5 className="mg-10">Account</h5>
                        </div>
                    </a>
                </div>

                <div className="main-container">
                    <div className="product-search-bar-wrap">
                        <div className="product-search-bar">
                        <SearchBar
                            placeholder="Search for products ..."
                            onChange={(e) => handleChange("search", e)}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            style={{
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                        />
                        <div>
                        <FormControlLabel
                            control={<Switch size="small" 
                            checked={isVegSelected} 
                            color="primary"
                            onChange={()=> {setIsVegSelected(!isVegSelected)}} />}
                            label="Veg Only"
                        />
                        </div>
                        </div>
                    </div>
                    <div className="store-container">
                            <div className="left-navigation">Navigation List</div>
                            <div className="products-container">
                               {categories && categories.length > 0 && categories.map((category, id) => {
                                   return  <ProductList
                                                key={category.id+id} 
                                                category={category}/>
                               })}
                            </div>
                            <div className="right-container">Bag Details</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </ContainerComponent>
    )
}