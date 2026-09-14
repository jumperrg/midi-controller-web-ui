import { useState, useContext } from "react";
import Select from 'react-select'
import { GlobalContext } from "../contexts/GlobalContext";
import './DropDown.css'

const transition = 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease';
const bgColor = 'var(--color-surface)';
const borderColor = 'var(--color-border)';
const textColor = 'var(--color-text-muted)';

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: bgColor,
        border: 'none',
        boxShadow: 'none',
        transition,
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        transition,
    }),
    option: (provided) => ({
        ...provided,
        backgroundColor: bgColor,
        color: textColor,
        transition,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: textColor,
        transition,
    }),
    input: (provided) => ({
        ...provided,
        color: textColor, // cursor color
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: textColor,
        transition,
    }),
    // hide the indicator separator
    indicatorSeparator: () => ({
        display: 'none',
    }),
}

export default function DropDown({ opts, name, getChoice }) {
    const [selected, setSelected] = useState('');

    opts = opts.map((option) => {
        return { value: option, label: option }
    });

    function changeHandler(e) {
        setSelected(e.value);
        getChoice({ [name]: e.value });
    }

    return (
        <>
            <div className="dropdown-container">
                <label className="dropdown-label">{name}</label>
                <Select
                    styles={customStyles}
                    value={{ label: selected }} // makes it controlled
                    options={opts}
                    onChange={(e) => changeHandler(e)}
                ></Select>
            </div >
        </>
    )
}
