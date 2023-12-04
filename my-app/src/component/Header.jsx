// import '../App.css'

// function Header() {
//     return (
//         <div className="header">
//             <h1>Header Component</h1>
//         </div>
//     );
// }
// export default Header
import "../App.css";
import logoStikom from "../logo_stikom.jpg";

const Logo = {
    nama:"Logo stikom",
    imageUrl: "",
    imageSize: 85,
};
function Header(){
    return(
        <div className="flex-container">
            <img
            className="App-logo"
            src={logoStikom}
            alt={"Logo"+Logo.nama}
            style={{ width: Logo.imageSize, height: Logo.imageSize }}
         />
         <h3>{Logo.nama}</h3>
        <div className="header-tengah">
            <h1> Stikom PGRI Banyuwangi</h1>
            <h2> Jalan Jalan</h2>
        </div>
      </div>
    );
 }
 export default Header;