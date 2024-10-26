// import './WifiCard.css';
import "../App.css";

export default function Home() {


  return (
    <>
      <div className="wifibodycontainer">
        <h1>Web config UI</h1>
        <div>
          This web application generates a config json file based on the chosen options.
          Adapted for being hosted on ESP32.
        </div>
        <div>You probably want to go to the <a href="actions">Actions</a> page</div>
      </div>
    </>
  )
}