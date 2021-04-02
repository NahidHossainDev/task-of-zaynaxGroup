import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import searchIcon from "../images/assets/loupe.png";


const AccordionTemp = ({ data }) => {
  const { type, items } = data;

  const getId = (d) => {
    return d.toString().replace(/\s+/g, '-').toLowerCase()
  }
    return (
      <Accordion className="accordion" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <strong>{type}</strong>
        </AccordionSummary>
        <AccordionDetails className={type}>
          {type === "Brand" && (
            <div className="input-box">
              <input type="text" placeholder="Search By Brands" />
              <img src={searchIcon} alt="" />
            </div>
          )}
          {items.map((d, i) => (
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id={getId(d)}
                name={type}
                class="custom-control-input"
              />
              <label className="custom-control-label" for={getId(d)}>
                {d}
              </label>
            </div>
          ))}
          {data.more && <strong className="more">{data.more} MORE</strong>}
        </AccordionDetails>
      </Accordion>
    );
};

export default AccordionTemp;