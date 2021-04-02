import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import searchIcon from '../images/assets/loupe.png';


const Header = () => {
     const [refineBy, setRefineBy] = useState("Price")
     const [sortBy, setSortBy] = useState("Best Sellers")
    return (
      <header>
        <p className="pt-4">
          <span className="lightGray pr-4">Homepage</span>
          <strong>All Products</strong>
        </p>
        <div className="py-4 d-flex align-items-center header-2">
            <div>
                Showing 1-40 of 80,068 products
                <span className="pl-5">
                    <strong>Refine by</strong>
                    <DropdownButton id="dropdown-basic-button" title={refineBy}>
                    <Dropdown.Item onClick={() => setRefineBy("Price")}> Price </Dropdown.Item>
                    <Dropdown.Item onClick={() => setRefineBy("Another")}> Another </Dropdown.Item>
                    </DropdownButton>
                </span>
                <span className="pl-5">
                    <strong>Sort by</strong>
                    <DropdownButton id="dropdown-basic-button" title={sortBy}>
                    <Dropdown.Item onClick={() => setSortBy("Best Sellers")}> Best Sellers </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy("Another")}> Another </Dropdown.Item>
                    </DropdownButton>
                </span>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Search"/>
                <img src={searchIcon} alt=""/>
            </div> 
       </div> 
      </header>
    );
};

export default Header;