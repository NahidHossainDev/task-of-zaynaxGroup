import React from 'react';

const ProductCard = ({ data }) => {
    const { img, title, price } = data;
    return (
      <div className="col-3 product-card pl-0">
        <div className="card p-3">
          <img src={img} alt="" />
          {title}
          <h6>BDT. {price}</h6>
          <div className="d-flex">
            <s className="lightGray">BDT 7850</s>
            <span className="lightGray ml-auto">34% off</span>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;