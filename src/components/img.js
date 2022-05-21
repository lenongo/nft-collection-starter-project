import pic from "../public/web3.png"
import "../styles/App.css";

const Img = () => {
    return (
        <div className="promote-img">
            <img className="img" src={pic} alt="picture" />
        </div> 
    );
}

export default Img;