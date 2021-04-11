import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, Modal, Radio } from '@material-ui/core'
import './VariantsModal.scss'
import Config from '../../../config/config.json'
import { CheckBox } from '@material-ui/icons';

export default function VariantsModal(props){
    const closeIcon = Config.modals.closeIcon;
    let variants = props.variants;
    let add_ons = props.add_ons; 
    const [selectedOption, setSelectedOption] = useState(variants && variants[0] && variants[0].value)
    const [selectedAddOns, setSelectedAddOns] = useState(add_ons);

    let handleChange = (value) => {
        setSelectedOption(value)
    }

    let handleCheckBoxSelection = (addOn, id) => {
        let f = selectedAddOns && selectedAddOns.find(a => a.id === addOn.id)
        if(!f){
            f = addOn;
        }
        f.isSelected = f && f.isSelected ? false : true;
        let index = selectedAddOns && selectedAddOns.indexOf(f);
        let filtered = selectedAddOns;
        filtered.splice(index,1,f)
        setSelectedAddOns(filtered)
    }

    console.log("Selected addons are===", selectedAddOns)
    const modalContent = ( <div className="modal-container">
        <div className="modal-header"> 
            <h4>Selected Options</h4>
            <img className="close-icon" src={closeIcon} onClick={()=> props.handleCloseModal()} alt="close-icon"></img>
        </div>
        <div className="title-div">Variants<span style={{color: 'red'}}>*</span></div>
        <div>
            <div>
                {variants && variants.length > 0 && variants.map((variant,id) => {
                    return <div className="options-container">
                    <div className="radio-group">
                        <Radio
                            color="primary"
                            checked={selectedOption === variant.value}
                            onChange={() => handleChange(variant.value)}
                            value={variant.value}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <span>{variant.value}</span>
                    </div>
                    <div>
                        <span className="variant-origial-price">&#8377;{variant && variant.child && variant.child[1] && variant.child[1]['value']}</span>
                        <span>&#8377;{variant && variant.child && variant.child[0] && variant.child[0]['value']}</span>
                    </div>
                </div>
                })} 
            </div>
            {add_ons && add_ons.length > 0 && <div className="title-div">Add-ons</div>}
            {add_ons && add_ons.length > 0 && add_ons.map((addOn, id) => {
                return <div className="addons-container">
                    <div>
                        <Checkbox
                            checked={selectedAddOns[id] && selectedAddOns[id].isSelected}
                            onChange={() => handleCheckBoxSelection(addOn, id)}
                            color="primary"
                        />
                        <span>{addOn.name}</span>
                    </div>
                    <div>
                        <span>+&#8377;{addOn.price}</span>
                    </div>
                </div>
            })}

            <div className="button-bottom-container">
                <Button size="large" variant="outlined" color="primary">Add to Bag</Button>
                <Button size="large"  variant="contained" color="primary">Buy Now</Button>
            </div>
        </div>
      </div>)

    
    return(
        <Modal
            open={props.showModal}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        {modalContent}
      </Modal>
    )
}