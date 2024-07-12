import './Footer.css'

let currentDate = new Date();
let year = currentDate.getFullYear();
const Footer = ()=> {


    return (


        <footer>
        <div className="container" >
       <div className="row" >
        <div className="col-ls-12" >
            <p>Copyright ©{year} <a href="#">Cybrog Gaming</a>Company. All rights reserved
            <br />Design: <a href="https://templatemo" target="_blank" title="free CSS templates"></a></p>
        </div>
       </div>
           </div>  
           </footer>
 )
}

export default Footer