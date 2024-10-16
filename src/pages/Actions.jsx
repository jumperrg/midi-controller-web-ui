import { useState } from 'react';
import Panel from '../components/Panel';
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
            <Panel
                key={pd.panelId}
                panelId={pd.panelId}
                note={pd.note}
                dropdowns={pd.dropdowns}
                colors={pd.colors}
                updatePanelState={updatePanelState}>
            </Panel>
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