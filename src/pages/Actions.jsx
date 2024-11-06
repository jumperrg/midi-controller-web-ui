import { useState } from 'react';
import ActionsBoard from '../components/ActionsBoard';
import "../App.css";
import './Actions.css';
import { panelsData } from '../components/data'

export default function Actions() {
    const [globalState, setGlobalState] = useState({
        panel0: {},
        panel1: {},
        panel2: {},
        panel3: {},
        panel4: {},
        panel5: {}
    });

    const updatePanelState = (panelId, dropdownName, selectedValue) => {
        setGlobalState((prevState) => ({
            ...prevState,
            [panelId]: {
                ...prevState[panelId],
                [dropdownName]: selectedValue
            }
        }));
    }

    const handleSave = () => {
        const jsonData = JSON.stringify(globalState);
        console.log("Submitting preset data: ", jsonData);
    }

    return (<>
        <br></br>
        {panelsData.map((pd) => (
            <ActionsBoard
                key={pd.panelId}
                panelId={pd.panelId}
                note={pd.note}
                action={pd.action}
                colors={pd.colors}
                updatePanelState={updatePanelState}>
            </ActionsBoard>
        ))}
        <br></br>
        <br></br>
        <div className="footercontainer">
            <button>&lt;</button>
            <div>Preset: 01</div>
            <button>&gt;</button>
            <button>Get from device</button>
            <button onClick={handleSave}>Save to device</button>
        </div>

    </>)
}