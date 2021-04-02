import React, { useState } from 'react';
import Chip from "@material-ui/core/Chip";
import filterMenuData from './FilterMenuData';
import AccordionTemp from '../../Common/AccordionTemp';

const FilterMenu = () => {
  const [filterArray, setFilterArray] = useState([
    { key: 0, label: "Size: XL" },
    { key: 1, label: "Clear all" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setFilterArray((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

    return (
      <div className="filter-menu">
        <div className="px-3">
          <strong>Filter</strong>
          {filterArray.map((data, i) => (
            <div className="my-2">
              <Chip
                label={data.label}
                className={data.label}
                onDelete={
                  data.label === "Clear all" ? undefined : handleDelete(data)
                }
              />
            </div>
          ))}
        </div>
        {filterMenuData.map((d, i) => <AccordionTemp data={d} key={i} />)}
       
      </div>
    );
};

export default FilterMenu;