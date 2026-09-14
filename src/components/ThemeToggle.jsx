import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            className="theme-toggle"
            data-theme={theme}
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            onClick={toggleTheme}
        >
            <span className="theme-toggle-knob"></span>
            <span className="theme-toggle-icon">☀️</span>
            <span className="theme-toggle-icon">🌙</span>
        </button>
    )
}
