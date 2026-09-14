import { useState, useContext } from "react";
import Select from 'react-select'
import { GlobalContext } from "../contexts/GlobalContext";
import './DropDown.css'

const bgColor = 'var(--color-surface)';
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: bgColor,
        border: 'none',
        boxShadow: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: bgColor,
        border: '1px solid var(--color-border)'
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? bgColor : bgColor,
        color: 'var(--color-text-muted)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--color-text-muted)',
    }),
    input: (provided) => ({
        ...provided,
        color: 'var(--color-text-muted)', // cursor color
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'var(--color-text-muted)',
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