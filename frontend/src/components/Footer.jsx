import { assets } from "../assets/assets"



function Footer() {
  return (
    <div className="footer font-outfit bg-gray-700" id="footer">
      <div className="footer-content flex p-10 justify-center">
        <div className="fotter-content-left w-1/3 ">
            <img src={assets.logo} className="footer-logo text-start mb-3" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam sapiente corporis magnam, molestias fugit vero est laudantium, a ipsa placeat odio aliquam nobis nemo dicta dolores laborum necessitatibus? Modi.r</p>
            <div className="footer-socal-icon flex gap-4 mt-2">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center w-1/3 flex flex-col justify-start items-center">
            <h2 className="text-2xl text-gray-100">company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Deleviry</li>
                <li>Privacy polocy</li>
            </ul>
        </div>

        <div className="footer-content-right w-1/3 flex flex-col  gap-4 justify-start items-center">
            <h2 className="text-2xl text-gray-100">get in Touch</h2>
            <ul>
                <li>+91 0909090909</li>
                <li>sharath@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr className="text-stone-600" />
      <p className="text-gray-100 text-lg p-2 text-center">copyright 2024 </p>
    </div>
  )
}

export default Footer
