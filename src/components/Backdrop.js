import "./Backdrop.css";
function Backdrop({ show, click }) {
    //arka fon // perde arkasi
    return show && <div className="backdrop" onClick={click}></div>;
}

export default Backdrop;
