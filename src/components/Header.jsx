import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <li className="nav-item"><a href="/actions" className="nav-link">Actions</a></li>
            <li className="nav-item"><a href="/switches" className="nav-link">Switches</a></li>
            <li className="nav-item"><a href="/settings" className="nav-link">Settings</a></li>
            <li className="nav-item"><a href="/info" className="nav-link">Info</a></li>
        </header>
    );
}
