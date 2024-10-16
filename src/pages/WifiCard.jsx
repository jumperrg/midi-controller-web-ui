// import './WifiCard.css';
import "../App.css";

export default function WifiCard() {
    let nets = ["wifi1", 'wifi2', 'wifi3'];

    function onLoadHandler() {
        // send a query to get json with networks
        // store the networks in array
        // show it in the dropdown
    };

    function connect({ ssid, passwd }) {
        console.log('Connecting to ' + ssid);
    };

    function togglePassword() {
        var passwordInput = document.getElementById('wifi-password');
        var toggleButton = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.textContent = '🔒';
        } else {
            passwordInput.type = 'password';
            toggleButton.textContent = '👁️';
        }
    };

    return (
        <>
            <div className="wifibodycontainer">
                <h1>Wi-Fi Connection</h1>
                <label for="wifi-list">SSID</label>

                <select id="wifi-list" name="wifi-list">
                    {nets.map(net => {
                        return <option value={net}>{net}</option>
                    })}
                </select>

                <label for="wifi-password">Password</label>
                <input type="password" id="wifi-password" name="wifi-password" placeholder="Enter Wi-Fi password" />
                {/* <button type="button" class="toggle-password" onclick="togglePassword()">👁️</button> */}

                <button onClick={() => connect()}>Connect</button>

                <div>
                    After the "connect" is pressed, the controller will be connected to the WI-FI access point.
                    This page will become inactive, you can close it. The settings page will be available by... смотреть в
                    продолжении.
                </div>
            </div>
        </>
    )
}