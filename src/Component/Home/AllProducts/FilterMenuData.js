const filterMenuitems = [
  {
    type: "Category",
    items: ["Men's Clothing", "Casual Wear", "Shirts"],
  },
  {
    type: "Brand",
    items: [
      "Aeropostale",
      "Antony Morato",
      "Arrow",
      "ArrowBlue Jeans",
      "Arrow Sport ",
      "Mufti",
      "Raymond",
      "Belmont",
      ],
    more: 250
  },
  {
    type: "Country",
    items: ["USA", "Germany", "Italy", "UK", "Bangladesh"],
    more: 2
  },
  {
    type: "Size",
    items: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    type: "Color",
    items: ["#000000", "#6f3e18", "#d4be8d", "#838383", "#ffffff", "#0f73ad"],
    },
    {
        type: "Discount",
        items:["10%-30%", "30%-50%", "50%-70%"]
    },
    {
        type: "Price",
        items:["Min", "Max"]
    },
    {
        type: "Rating",
        items :[5, 4, 3, 2, 1]
    },
    {
        type: "Fabric",
        more: 20,
        items:["Cotton Blend", "Cotton Linen Blend", "Cotton Silk", "Linen Blend", "Poly silk", "Polycotton", "Pure Cotton", "Rayon"]
    },
    {
        type: "Pattern",
        more:5,
        items: ["Checkered", "Chevron/ZigZag", "Color Block", "Floral Print", "Houndstooth", "Polka Print", "Printed", ]
    },
    {
        type: "Service",
        items: ["Cash on Delivery", "Free Shipping"]
    },
    { 
        type: "Clothing Style",
        items :[]
    },
    {
        type: "Men's Trend",
        items: []
    }
];
export default filterMenuitems;