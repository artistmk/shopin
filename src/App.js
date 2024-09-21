
import './App.css';
import './Another.css';


function App() {

  return (
    <>
    <header>
        <div className="navbar">
        
           
           <div className="nav-logo border">
            <div className="logo"></div>
           </div>
           
           
           <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="add-second">Madhya Pradesh</p>
            </div>
           </div>
           
           
           <div className="nav-search">
            <select className="search-select">
                <option id="option1">All</option>
                <option>Mobile</option>
                <option>5G phone</option>
                <option>Laptop</option>
                <option>Washing machine</option>
                <option>Headphones</option>
            </select>
                <input placeholder="Search Shopping Town" className="search-input"/>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
           </div>

        
        <div className="nav-signin border">
          <p><span>Hello, sign in</span></p>
          <p className="nav-second">Account & List</p>
        </div>

        <div className="nav-return border">
            <p><span>Returns</span></p>
            <p className="nav-second">& orders</p>
          </div>

          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </div>
        
        
        <div className="panel">
            <div className="panel-all border">
                <i className="fa-solid fa-bars"></i>
                All
            </div>
            <div className="panel-ops">
             <p className="border">Best Sellers</p>
             <p className="border">Today's Deals</p>
             <p className="border">Mobiles</p>
             <p className="border">Fashion</p>
             <p className="border">Electronics</p>
         </div>  
         <div className="panel-deals border">
            Shop deals in electronics
         </div>
        </div>
     </header>

     <div className="hero-image">
        <div className="hero-msg">
          <p>Up to 60% off | Kitchen products curated from stores nearby <a href="#">See all offers</a></p>
        </div>
     </div>

    
     <div className="shop-section">
      <div className="box1 box">
        <div className="box-content box1">
        <h1>Mobiles</h1>
        <div className="box-img box11"></div>
        <p><a href="#">see more</a></p>
         </div>
      </div>
      <div className="box2 box">
        <div className="box-content">
          <h1>Grocery</h1>
          <div className="box-img box22"></div>
          <p><a href="#">see more</a></p>
           </div>
      </div>
      <div className="box3 box">
        <div className="box-content">
          <h1>Fashion</h1>
          <div className="box-img box33"></div>
          <p><a href="#">see more</a></p>
           </div>
      </div>
      <div className="box4 box">
        <div className="box-content">
          <h1>Electronics</h1>
          <div className="box-img box44"></div>
          <p><a href="#">see more</a></p>
           </div>
      </div>
      <div className="box5 box">
        <div className="box-content">
        <h1>Camera</h1>
        <div className="box-img box55"></div>
        <p><a href="#">see more</a></p>
         </div>
      </div>
      <div className="box6 box">
        <div className="box-content">
          <h1>Laptop</h1>
          <div className="box-img box66"></div>
          <p><a href="#">see more</a></p>
           </div>
      </div>
      <div className="box7 box">
        <div className="box-content">
          <h1>Appliances</h1>
          <div className="box-img box77"></div>
          <p><a href="#">see more</a></p>
           </div>
      </div>
      <div className="box8 box">
        <div className="box-content">
          <h1>4K TV</h1>
          <div className="box-img box88"></div>
          <p><a href="#">see more</a></p>
           </div>
      </div>
     </div>
     
     
     <footer>
      <div className="foot-panel1">
        <p className="border">Back To Top</p>
      </div>

      <div className="foot-panel2">
          <ul>
             <p>Get to Know Us</p>
             <a>About Us</a>
             <a>Careers</a>
             <a>Articles</a>
             <a>Our Terms</a>
          </ul>
          <ul>
            <p>Connect with Us</p>   
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
            <a>Youtube</a>
         </ul>
         <ul>
          <p>Make Money with Us</p>               	
          <a>Sell on ShoppingTown</a>
          <a>Protect and Build Your Brand</a>
          <a>ShoppingTown Selling</a>
          <a>Advertise Your Products</a>
       </ul>
       <ul>
        <p>Let Us Help You</p>                  
        <a>Your Account</a>
        <a>100% Purchase Protection</a>
        <a>Recalls and Product Safety Alerts</a>
        <a>Help</a>
     </ul>
      </div>
      
      <div className="foot-panel3">
        <div className="logo2">
        </div>
      </div>
      
      <div className="foot-panel4">
        <div className="pages">
          <a>Conditions of Use & Sale</a>
            <a>Privacy Notice</a>
            <a>Interest-Based Ads</a>
        </div>
        <div className="copyright">
          © 2023-2024, ShoppingTown.in, Inc. or its affiliates
        </div>
      </div>
     </footer>

    </>
  );
}

export default App;
