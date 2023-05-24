import React from 'react'
import './CheckoutBanner.css'
const CheckoutBanner = () => {
  return (
    <div className="checkout_ad">
    <img className="checkout_ad_img"
       alt="Amazon Pay ICICI Bank credit card"
       src="https://m.media-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/CBCC_maple_2._CB662107477_.jpg"/>
<div class="a-section maple-banner__text">
                   Pay only 
                   <span class="a-color-price a-text-bold"> 
                   <span class="a-text-strike">
                   <span data-maple-math="cost">₹878.00</span>
                   </span>
                    <span data-maple-math="cost-after-savings">₹728.00</span></span>. Apply &amp; get <span class="a-text-bold">₹150</span> back + rewards worth <span class="a-text-bold">₹1,350.</span> Lifetime free card.
               </div>
 <button tabindex="-1" class="a-button-text a-text-center" type="button" id="a-autoid-0-announce">
Apply Now
</button>
</div>
  )
}

export default CheckoutBanner
