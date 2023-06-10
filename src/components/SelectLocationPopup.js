import React from 'react'

const SelectLocationPopup = (pros) => {
    const clickHandler = () => {
        console.log('====================================');
        console.log('This is testing');
        console.log('====================================');
    }
    return (
        <>
            <div className="col-auto align-self-center col">
                <a href="/" onClick={clickHandler}>
                    <span className="selected-city mr-2">Select Location</span>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
            </div>
        </>
    )

}

export default SelectLocationPopup