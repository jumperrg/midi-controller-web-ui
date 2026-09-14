import { useState, useRef } from 'react';
import ActionsBoard from '../components/ActionsBoard';
import "../App.css";
import './Actions.css';
import { panelsData } from '../components/data'

export default function Actions() {
    const [panels, setPanels] = useState(panelsData);
    const nextPanelIndex = useRef(panelsData.length);

    const [globalState, setGlobalState] = useState(
        () => Object.fromEntries(panelsData.map((pd) => [pd.panelId, {}]))
    );

    const [panelNames, setPanelNames] = useState(
        () => Object.fromEntries(panelsData.map((pd) => [pd.panelId, pd.label]))
    );

    const [buttonNumbers, setButtonNumbers] = useState(
        () => Object.fromEntries(panelsData.map((pd, i) => [pd.panelId, i]))
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

    const deletePanel = (panelId) => {
        setPanels((prevPanels) => prevPanels.filter((pd) => pd.panelId !== panelId));
    }

    const renumberPanel = (panelId, newNumber) => {
        setButtonNumbers((prevNumbers) => {
            const isTaken = Object.entries(prevNumbers).some(
                ([id, num]) => id !== panelId && num === newNumber
            );
            if (isTaken) {
                return prevNumbers;
            }
            return { ...prevNumbers, [panelId]: newNumber };
        });
    }

    const addPanel = () => {
        const index = nextPanelIndex.current++;
        const panelId = `panel${index}`;
        const newPanel = {
            panelId,
            label: 'New button',
            note: '',
            actionMenu: panelsData[0].actionMenu,
            colors: panelsData[0].colors
        };
        const newNumber = Math.max(-1, ...Object.values(buttonNumbers)) + 1;
        setPanels((prevPanels) => [...prevPanels, newPanel]);
        setPanelNames((prevNames) => ({ ...prevNames, [panelId]: newPanel.label }));
        setGlobalState((prevState) => ({ ...prevState, [panelId]: {} }));
        setButtonNumbers((prevNumbers) => ({ ...prevNumbers, [panelId]: newNumber }));
    }

    const handleSave = () => {
        const jsonData = JSON.stringify(globalState);
        console.log("Submitting preset data: ", jsonData);
    }

    const handleExport = () => {
        const exportData = {
            panels: panels.map((pd) => ({
                panelId: pd.panelId,
                buttonNumber: buttonNumbers[pd.panelId],
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
        {/* <div>Here is your main page for settin up the device</div> */}
        {/* <div>Update the params before editing them</div> */}
        {panels.map((pd, index) => (
            <ActionsBoard
                key={pd.panelId}
                panelId={pd.panelId}
                buttonIndex={buttonNumbers[pd.panelId]}
                name={panelNames[pd.panelId]}
                note={pd.note}
                action={pd.actionMenu}
                colors={pd.colors}
                updatePanelState={updatePanelState}
                onRename={(newName) => renamePanel(pd.panelId, newName)}
                onRenumber={(newNumber) => renumberPanel(pd.panelId, newNumber)}
                onDeletePanel={() => deletePanel(pd.panelId)}
                initialActionCount={index < panelsData.length ? 3 : 1}>
            </ActionsBoard>
        ))}
        <div className="add-panel-container">
            <button className="add-panel-button" onClick={addPanel}>+ Add footswitch</button>
        </div>
        <div className='footerPlaceHolder'></div>
        <div className="footercontainer">
            <div className="preset-nav">
                <button title="Previous preset">&lt;</button>
                <span className="preset-label">Preset: 01</span>
                <button title="Next preset">&gt;</button>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-actions">
                <button>Get from device</button>
                <button onClick={handleSave}>Save to device</button>
                <button onClick={handleExport}>Export settings (JSON)</button>
            </div>
        </div>

    </>)
}