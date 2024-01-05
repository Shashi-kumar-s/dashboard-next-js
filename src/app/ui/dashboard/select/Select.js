import React from 'react';

const SelectField = ({ name, options, selectStyle, onchange,selectedValue }) => {
    return (
        <select
            name={name}
            className={selectStyle}
            onChange={onchange}
            value={selectedValue} 
        >
            <option value="select" disabled="disabled">
                - - select - -
            </option>
            {options.map((option) => {
                return (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                )
            })}
        </select>
    );
};

export default SelectField;
