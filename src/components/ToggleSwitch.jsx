import './ToggleSwitch.css';

export default function ToggleSwitch({ checked, onChange, onLabel, offLabel }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            className="toggle-switch"
            data-checked={checked}
            onClick={() => onChange(!checked)}
        >
            <span className="toggle-switch-knob"></span>
            <span className="toggle-switch-option is-off">{offLabel}</span>
            <span className="toggle-switch-option is-on">{onLabel}</span>
        </button>
    )
}
