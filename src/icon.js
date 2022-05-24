import boar from "./public/NFTticket boar.png"
import deer from "./public/NFTticket deer.png"
import "./styles/App.css";

const Icon = ()=>{
    return (
        <a className="Ticket_buy">
            <p className="Title_pur">NFTチケット購入</p>
            <p className="SubTitle_pur">NFTチケットとは？</p>
            <div className="NFTIcon">
                <p><img className="icon-boar" src={boar} alt="boar" /></p>
                <p><img className="icon-deer" src={deer} alt="deer" /></p>
            </div>
            <p className="How-to-buy">購入方法</p>
        </a>
    );
}

export default Icon