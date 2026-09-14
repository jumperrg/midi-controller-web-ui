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

    const [panelNames, setPanelNames] = useState(
        () => Object.fromEntries(panelsData.map((pd) => [pd.panelId, pd.panelId]))
    );

    const updatePanelState = (panelId, dropdownName, selectedValue) => {
        setGlobalState((prevState) => ({
            ...prevState,
            [panelId]: {
                ...prevState[panelId],
                [dropdownName]: selectedValue
            }
        }));
    }

    const renamePanel = (panelId, newName) => {
        setPanelNames((prevNames) => ({
            ...prevNames,
            [panelId]: newName
        }));
    }

    const handleSave = () => {
        const jsonData = JSON.stringify(globalState);
        console.log("Submitting preset data: ", jsonData);
    }

    const handleExport = () => {
        const exportData = {
            panels: panelsData.map((pd) => ({
                panelId: pd.panelId,
                name: panelNames[pd.panelId],
                settings: globalState[pd.panelId] || {}
            }))
        };
        const jsonData = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'midi-controller-settings.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    return (<>
        <br></br>
        <div className='headerPlaceHolder'></div>
        <div>Here is your main page for settin up the device</div>
        <div>Update the params before editing them</div>
        {panelsData.map((pd) => (
            <ActionsBoard
                key={pd.panelId}
                panelId={pd.panelId}
                name={panelNames[pd.panelId]}
                note={pd.note}
                action={pd.actionMenu}
                colors={pd.colors}
                updatePanelState={updatePanelState}
                onRename={(newName) => renamePanel(pd.panelId, newName)}>
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
            <button onClick={handleExport}>Export settings (JSON)</button>
        </div>

    </>)
}