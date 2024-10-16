import './Action.css'
import './ColorPicker.css'
import '../assets/Coloris/dist/coloris.min.css'
import '../assets/Coloris/dist/coloris.min.js'

export default function ColorPicker({ color }) {

    Coloris({
        themeMode: 'dark',
        alpha: false,
        closeButton: true,
        closeLabel: 'Apply and close',
        format: "auto",
        formatToggle: false,
    });

    return (
        <>
            <div className="cp" style={{ textAlign: 'start' }}>
                <label className="dropdown-label">{color}</label>
                <input style={{ width: "80%", height: "24px", margin: "4px" }}
                    type="text" data-coloris
                    className="color-picker"
                />
            </div>
        </>
    )
}