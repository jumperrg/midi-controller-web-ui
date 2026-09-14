import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className="header">
            <ul className="nav-list">
                <li className="nav-item"><a href="/actions" className="nav-link">Actions</a></li>
                <li className="nav-item"><a href="/switches" className="nav-link">Switches</a></li>
                <li className="nav-item"><a href="/settings" className="nav-link">Settings</a></li>
                <li className="nav-item"><a href="/info" className="nav-link">Info</a></li>
                <li className="nav-item">
                    <button
                        type="button"
                        className="theme-toggle"
                        title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </li>
            </ul>
        </header>
    );
}
