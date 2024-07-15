import React, { useState, useEffect } from 'react';
import { isArrPresent } from '../utils/functions';
import './options.css';

function Options({ data }) {
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        if (isArrPresent(data)) {
            setLoadedData(data);
        }
    }, [data]);

    useEffect(() => {
        if (isArrPresent(loadedData)) {
            console.log(loadedData);
        }
    }, [loadedData]);

    return (
        <div className='wrap-options-base'>
            <div className='wrap-options-flex-col'>
                <div className='wrap-options-flex-row center-row'>
                    <h1>Data</h1>
                </div>
                <div className='wrap-options-flex-row-inner'>
                    {(isArrPresent(loadedData)) ?
                        loadedData.map((option, index) => (
                            <div className='card wrap-options-flex-col' key={index}>
                                <div className='wrap-options-flex-row'>
                                    <span>Lorem: {option.lorem}</span>
                                </div>
                            </div>
                        )) : <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
}

export default Options;
