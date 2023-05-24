import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div className="home">
        <div className='home_container'>
            <img className="home_image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD/May/Deals-Unrec-PC-3000._CB588530729_.jpg"
            alt="Home-BG-Banner" />
        
                    <div className="home_row">
                           <Product
                            id='123456784'
                            title='ASUS Vivobook 16X (2022), 16-inch (40.64 cms) WUXGA, AMD Ryzen 5 5600H'
                            price={'₹47,990'}
                            image='https://m.media-amazon.com/images/I/41yaV+zJJYL._AC_SY200_.jpg'
                            rating={4}
                            
                           />
                            <Product  id='123456785'
                            title='Tabelito Basic Laptop Bag Sleeve Nylon Case Cover Padded Pouch for 13-35.5 cm/14" ES laptops Multi Pocket Accessories MacBook/Dell/Lenovo/Asus/Hp/Ultrabook/Thinkpad/Ideapad/Surfacepro (Grey)'
                            price={'₹299.00'}
                            image='https://images-eu.ssl-images-amazon.com/images/I/91Jlr8nV0eL._AC_UL160_SR160,160_.jpg'
                             rating={4}
                            
                           />
                    </div>
                    <div className="home_row">
                    <Product  id='123456786'
                            title='U.S. POLO ASSN. Regallo Skinny Fit Stone Wash Jeans'
                            price={'₹1,990'}
                            image='https://m.media-amazon.com/images/I/71ikxtcDg-L._UX425_.jpg'
                            rating={2}
                            
                           />
                                <Product  id='123456787'
                            title='Apple iPhone 13 (128GB) - (Product) RED'
                             price={'₹64,990'}
                            image='https://m.media-amazon.com/images/I/71gm8v4uPBL._SX466_.jpg'
                            rating={4}
                            
                           />
                                <Product  id='123456788'
                            title='LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCU, Scarlet Charm, Base stand with drawer)'
                            price={'₹17,990'}
                            image='https://m.media-amazon.com/images/I/61T4yGA9-oL._AC_UL320_.jpg'
                            rating={3}
                            
                           />
                    </div>    
                    <div className="home_row">
                    <Product id='123456789'
                            title='Haier 165L 1 Star Direct Cool Single Door Refrigerator (HED-171RS-P, Red Steel)'
                            price={'₹86,990'}
                            image='https://m.media-amazon.com/images/I/51-V4Rj4jdL._SX466_.jpg'
                            rating={3}
                            
                           />
                    </div>
        
        </div>      
    </div>
  )
}

export default Home
