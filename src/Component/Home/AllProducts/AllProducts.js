import React from 'react';
import FilterMenu from "./FilterMenu";
import fakeProductData from "./productData";
import ProductCard from '../../Common/ProductCard';

const AllProducts = () => {
  const a = fakeProductData;
  const b = [...a, ...fakeProductData]
  const productData = [...b, ...b, ...b, ...a];
  
    return (
      <div className="row py-3">
        <div className="col-md-3">
          <FilterMenu />
        </div>
        <div className="col-md-9">
          <div className="row">
            {productData.map((d, i) => (
              <ProductCard data={d} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default AllProducts;