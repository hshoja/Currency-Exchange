import React, { useState } from 'react'
import ConverterContext from '../contexts/ConverterContext'


const ConveterProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [rates, setRates] = useState(false)
    const updateLoading = value => setLoading(value);
    const updateRates = values => setRates(values);

    const updatedValues = { loading, rates, updateLoading, updateRates }
    
    return (
        <ConverterContext.Provider value={updatedValues}>
            {children}
        </ConverterContext.Provider>
    )
}

export default ConveterProvider
