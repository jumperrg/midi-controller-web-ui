import "./Home.css";
import "./Info.css";

export default function Info() {
  return (
    <>
      <div className="headerPlaceHolder"></div>
      <div className="flexcontainer">
        <div className="wifibodycontainer info-container">
          <h1>MIDI Footswitch Controller</h1>
          <div>
            This is a web configuration tool for a DIY MIDI foot controller.
            Assign each footswitch its own sequence of MIDI actions — control
            change, program change, note on/off, and more — right from your
            browser, then save the preset straight to your device.
          </div>
          <div>
            No app install, no special software. Just plug in, open this page,
            and start shaping your rig.
          </div>
          <div className="info-footer">Enjoy, and happy gigging! 🎸</div>
        </div>
      </div>
    </>
  )
}
