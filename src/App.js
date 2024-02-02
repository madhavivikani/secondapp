import './App.css';
import { FaAngleDown } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { IoPlay } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { MdLunchDining } from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaCarRear } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import personpic from './image/per.jpeg'
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbLocationShare } from "react-icons/tb";


function App() {
  return (

    <div className='page_layout'>

      <header>
          <nav>
            <div className="main_head">
                <div className="inner">
                  <div className="logo">
                    <img src={require('./image/logo.png')}></img>
                  </div>
                  <div className="menu">
                    <ul className="main_menu">
                      <li><a href="#">HOME<i><FaAngleDown></FaAngleDown></i></a>
                        <ul className='sub_menu'>
                            <li><a href='#'>Home Page 01</a></li>
                            <li><a href='#'>Home Page 02</a></li>
                            <li><a href='#'>Single Styles</a></li>
                            <li><a href='#'>Dark Styles</a></li>
                            <li><a href='#'>RTL Style One</a></li>
                        </ul>
                      </li>
                      <li><a href="#">ROOMS & SUITES<i><FaAngleDown></FaAngleDown></i></a>
                      <ul className='sub_menu'>
                            <li><a href='#'>Rooms</a></li>
                            <li><a href='#'>Rooms And Suits</a></li>
                            <li><a href='#'>Room Details</a></li>
                      </ul>
                      </li>
                      <li><a href="#">PAGES<i><FaAngleDown></FaAngleDown></i></a>
                      <ul className='sub_menu'>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>Faq</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Testimonials</a></li>
                            <li><a href='#'>404</a></li>
                            <li><a href='#'>Team</a></li>
                            <li><a href='#'>Shop</a></li>
                      </ul>
                      </li>
                      <li><a href="#">NEWS<i><FaAngleDown></FaAngleDown></i></a>
                      <ul className='sub_menu'>
                            <li><a href='#'>News Grid</a></li>
                            <li><a href='#'>News Details</a></li>
                      </ul>
                      </li>
                      <li><a href="#">CONTACT</a></li>
                    </ul>
                  </div>
                  <div className='h_btn'>
                    <a href='#'>BOOK NOW</a>
                  </div>
                </div>
            </div>
          </nav>
      </header>

      <div className='slider_img'>
        <div className='o_logo'>
          <img src={require('./image/o_logo.png')}></img>
        </div>
          <p className='unix'>unique place and luxury hotel</p>
          <p className='life'>life enjoy with </p>
          <p className='life1'>the great moments</p>
          <a href='#' className='btn_room'>ROOMS & SUITES</a>
      </div>

      <div className='main_inner'>
        <div className='inner_sec'>
              <div className='first'>
                  <p className='text_c'>CHECK IN</p>
                  <div className='inner_i'>
                    <input type='date' className='input'></input>
                  </div>
              </div>
              <div className='first'>
                  <p className='text_c'>CHECK OUT</p>
                  <div className='inner_i'>
                    <input type='date'></input>
                  </div>
              </div>
              <div className='first'>
                  <p className='text_c'>ROOM</p>
                  <select className='option'>
                    <option>Standard Room Size</option>
                    <option>Standard Room Size</option>
                    <option>Standard Room Size</option>
                    <option>Standard Room Size</option>
                  </select>
              </div>
              <div className='first'>
                <a href='#'>CHECK NOW</a>
              </div>
        </div>
      </div>


      <div className='most_safe_part'>
          <div className='most_s'>
              <div className='room'>
                <div className='first_img'>
                  <img src={require('./image/first_img.jpeg')}></img>
                  <div className='sec_img'>
                    <img src={require('./image/sec_img.jpeg')}></img>
                  </div>
                  <div className='video_box'><a href='https://html.kodesolution.com/2023/hoexr-html/index-1-dark.html#gallery-1'><IoPlay></IoPlay></a></div>
                </div>
                <div className='black_box'>
                    <div className='b_img'>
                      <img src={require('./image/b_img.png')}></img>
                    </div>
                    <p className='Luxury'>Luxury Room</p>
                    <p className='Donec'>Donec in quis the asd
                      pellentesque velit. Donec id
                      velit arcu posuere blane.
                    </p>
                </div>
              </div>

              <div className='hotel'>
                <div className='inner_hotel'>
                <div className='two_p'>
                  <p className='HOEXR'>HOEXR LUXURY HOTEL</p>
                  <div>
                    <img src={require('./image/1.png')}></img>
                  </div>
                </div>
                <p className='most'>Most Safe & Rated
                  Hotel in London.</p>
                <p className='lorem'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo maecenas accumsan
                  lacus vel facilisis.
                </p>
                <div className='the'>
                    <div className='one_light'>
                      <div className='light_img'>
                          <img src={require('./image/lamp.png')} className='img'></img>
                      </div>
                      <p className='best'>The Best Lighting</p>
                      <div className='swim_img'>
                          <img src={require('./image/swim.png')} className='img'></img>
                      </div>
                      <p className='best'>The Best Swiming</p>
                    </div>
                    <div className='one_light'>
                      <div className='dis_btn'>
                        <a href='#'>DISCOVER MORE</a>
                      </div>
                      <div className='watch'>
                        <div className='wtsp_i'>
                          <i><ImWhatsapp></ImWhatsapp></i>
                        </div>
                        <div className='number'>
                          <p className='book'>BOOKING NOW</p>
                          <p className='call'>956 220 6666</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              </div>
          </div>
      </div>

      <div className='l_rooms'>
        <div className='inner_l'> 
            <div className='top_name'>
              <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
              </div>
              <div className='text_h'>
                <p className='HOEXR'>HOEXR LUXURY ROOMS</p>
              </div>
              <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
              </div>
            </div>
        <p className='l_lux'>Luxury Rooms & Suites</p>
        <div className='two_img'>
          <div className='one_img'>
            <img src={require('./image/one_1.jpeg')} className='img'></img>
          </div>
          <div className='two_img'>
            <img src={require('./image/slider.jpeg')} className='img'></img>
          </div>
        </div>
        <div className='three_img'>
          <div className='one1'>
            <img src={require('./image/one1.jpeg')} className='img'></img>
          </div>
          <div className='two1'>
            <img src={require('./image/three3.jpeg')} className='img'></img>
          </div>
          <div className='three1'>
            <img src={require('./image/two2.jpeg')} className='img'></img>
          </div>
        </div>
        </div>
      </div> 

      <div className='hotel_fac'>
        <div className='inner_fac'>
          <div className='top_name'>
              <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
              </div>
              <div className='text_h'>
                <p className='HOEXR'>HOEXR SERVICES</p>
              </div>
              <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
              </div>
          </div>
          <p className='l_lux'>Hotel Facilities</p>
          <div className='six_part'>
            <div className='three_part'>
              <div className='f_testi1'>
                  <p className='flat_box'></p>
                  <i><MdOutlineBedroomParent></MdOutlineBedroomParent></i>
                  <p className='ser_r'>Room Service</p>
                  <p className='orci'>Orci varius natoque penatibus magnis ders disney parturient ridiculus</p>
              </div>
              <div className='f_testi1'>
                  <p className='flat_box'></p>
                  <i><GiWorld></GiWorld></i>
                  <p className='ser_r'>Pick Up & Drop</p>
                  <p className='orci'>Orci varius natoque penatibus magnis ders disney parturient ridiculus</p>
              </div>
              <div className='f_testi1'>
                  <p className='flat_box'></p>
                  <i><FaWifi></FaWifi></i>
                  <p className='ser_r'>Fibre Internet</p>
                  <p className='orci'>Orci varius natoque penatibus magnis ders disney parturient ridiculus</p>
              </div>
              
            </div>

            <div className='three_part'>
              <div className='f_testi1'>
                  <p className='flat_box'></p>
                  <i><MdLunchDining></MdLunchDining></i>
                  <p className='ser_r'>Breakfast</p>
                  <p className='orci'>Orci varius natoque penatibus magnis ders disney parturient ridiculus</p>
              </div>
              <div className='f_testi1'>
                  <p className='flat_box'></p>
                  <i><LiaSwimmingPoolSolid></LiaSwimmingPoolSolid></i>
                  <p className='ser_r'>Swimming Pool</p>
                  <p className='orci'>Orci varius natoque penatibus magnis ders disney parturient ridiculus</p>
              </div>
              <div className='f_testi1'>
                  <p className='flat_box'></p>
                  <i><FaCarRear></FaCarRear></i>
                  <p className='ser_r'>Parking Space</p>
                  <p className='orci'>Orci varius natoque penatibus magnis ders disney parturient ridiculus</p>
              </div>
              
            </div>
          </div>
        </div>
      </div> 

      <div className='promotional_part'>
        <div className='part_t'>
          <div className='bg_pro'>
            <div className='bg_text'>
              <p className='HOEXR'>PROMOTIONAL VIDEO</p>
              <div className='l_img'>
                <img src={require('./image/1.png')}></img>
              </div>
            </div>
            <p className='l_lux'>Book Hotal Rooms,<br></br>
            et Deals & Book Flights Online.</p>
          </div>
          <div className='icon_p'>
            <a href='https://html.kodesolution.com/2023/hoexr-html/index-1-dark.html#gallery-2'><i><IoMdPlay></IoMdPlay></i></a>
          </div>
        </div>
      </div>  

      <div className='fitness'>
        <div className='inner_fit'>
          <div className='main_center'>
            <div className='gym_pic overlay-anim'>
              <img src={require('./image/gym.jpeg')}></img>
            </div>
            <div className='text'>
              <div className='bg_text'>
                <p className='HOEXR'>MODERN</p>
                <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
                </div>
              </div>
              <p className='l_lux'>Fitness Center</p>
              <p className='res_p'>
                Restaurant inilla duiman at elit finibus viverra nec a lacus themo the
                nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru
                the ivite dianne onen nivami acsestion augue artine.
              </p>
              <div className="btn1">
                <a href='#'>DISCOVER MORE</a>
              </div>
            </div>
            
          </div>

          <div className='main_center'>
            <div className='text1'>
              <div className='bg_text'>
                <p className='HOEXR'>DISCOVER</p>
                <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
                </div>
              </div>
              <p className='l_lux'>The Restaurant</p>
              <p className='res_p'>
                Restaurant inilla duiman at elit finibus viverra nec a lacus themo the
                nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru
                the ivite dianne onen nivami acsestion augue artine.
              </p>
              <div className='btn1'>
                <a href='#'>DISCOVER MORE</a>
              </div>
            </div>
            <div className='sec1'>
              <img src={require('./image/sec_img.jpeg')}></img>
            </div>
          </div>

          <div className='main_center'>
            <div className='gym_pic'>
              <img src={require('./image/spa.jpeg')}></img>
            </div>
            <div className='text'>
              <div className='bg_text'>
                <p className='HOEXR'>EXPERIENCES</p>
                <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
                </div>
              </div>
              <p className='l_lux'>Spa Center</p>
              <p className='res_p'>
                Restaurant inilla duiman at elit finibus viverra nec a lacus themo the
                nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru
                the ivite dianne onen nivami acsestion augue artine.
              </p>
              <div className='btn1'>
                <a href='#'>DISCOVER MORE</a>
              </div>
            </div>
            
          </div>

        </div>

        
      </div>

      <div className='main_blur'>
        <div className='inner_blur'>
          <div className='bg_text'>
                <p className='HOEXR'>WHAT SAYS FOR CUSTOMER</p>
                <div className='l_img'>
                  <img src={require('./image/2.png')}></img>
                </div>
          </div>
          <p className='l_lux'>What Client's Say?</p>
          <div className='testi'>
            <div className='pic_per'>
              <img src={personpic}></img>
            </div>
            
            <div className='info'>
               <p className='star_i'>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
               </p>
               <p className='uta'>
                The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.<br></br> Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus <br></br>mus nellen etesque habitant morbine.
               </p>
               <div className='colon'>
                  <div>
                    <p className='name'>Jackson Smith</p>
                    <p>Guest Review </p>
                  </div>
                  <div>
                    <img src={require('./image/colon.png')}></img>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className='menu'>
          <div className='inner_menu'>
            <div className='top_name'>
                <div className='l_img'>
                    <img src={require('./image/1.png')}></img>
                </div>
                <div className='text_h'>
                  <p className='HOEXR'>HOEXR BEST MENUS</p>
                </div>
                <div className='l_img'>
                    <img src={require('./image/1.png')}></img>
                </div>
            </div>
            <p className='l_lux center'>Specialities Foods</p>

            <div className='two_menu'>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/one.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Pasta With Fish<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>STARTER</a>
                  <p className='pasta1'>$39</p>
                </div>
              </div>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/two.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Noodles<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>NEW</a>
                  <p className='pasta1'>$16</p>
                </div>
              </div>
            </div>
            <div className='two_menu'>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/three.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Fresh Meat<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>NEW</a>
                  <p className='pasta1'>$26</p>
                </div>
              </div>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/four.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Chicken<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>VEGAN</a>
                  <p className='pasta1'>$19</p>
                </div>
              </div>
            </div>
            <div className='two_menu'>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/five.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Spaghetti<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>NEW</a>
                  <p className='pasta1'>$37</p>
                </div>
              </div>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/six.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Vegetarian Fried<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>NEW</a>
                  <p className='pasta1'>$34</p>
                </div>
              </div>
            </div>
            <div className='two_menu'>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/seven.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Vegetarian Soup<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>GLUTAN</a>
                  <p className='pasta1'>$42</p>
                </div>
              </div>
              <div className='left'>
                <div className='img1'>
                  <img src={require('./image/eight.png')} className='img'></img>
                </div>
                <div className='name_food'>
                 <p className='lorem_i'>Lorem Ipsum is that it smt</p>
                 <p className='pasta'>Salmon Pasta<span className='line'></span></p>
                </div>
                <div className='prize'>
                  <a href='#' className='saru'>FISH</a>
                  <p className='pasta1'>$71</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='expert'>
        <div className='inner_ex'>
            <div className='top_name'>
                <div className='l_img'>
                    <img src={require('./image/1.png')}></img>
                </div>
                <div className='text_h'>
                  <p className='HOEXR'>HOEXR HOTEL TEAM</p>
                </div>
                <div className='l_img'>
                    <img src={require('./image/1.png')}></img>
                </div>
            </div>
            <p className='l_lux center'>Expert Team Persons</p>
            <div className='ex_pic'>
              <div className='one'>
                <img src={require('./image/one.jpeg')} className='img'></img>
                <div className='name_p'>
                  <p className='event'>Event Platnner</p>
                  <p className='dean'>Michael Dean</p>
                </div>
              </div>
              <div className='one'>
                <img src={require('./image/two.jpeg')} className='img'></img>
                <div className='name_p'>
                  <p className='event'>Kitchen Manager</p>
                  <p className='dean'>Frank Burton</p>
                </div>
              </div>
              <div className='one'>
                <img src={require('./image/three.jpeg')} className='img'></img>
                <div className='name_p'>
                  <p className='event'>Hotel Manager</p>
                  <p className='dean'>Mya Mullins</p>
                </div>
              </div>
              <div className='one'>
                <img src={require('./image/four.jpeg')} className='img'></img>
                <div className='name_p'>
                  <p className='event'>Room Service</p>
                  <p className='dean'>Ralph Nguyen</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className='booking'>
        <div className='inner_book'>
          <div className='main_center'>
            <div className='gym_pic fill zindex'>
              <div className='bg_text'>
                <p className='HOEXR'>ROOMS & SUITES</p>
                <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
                </div>
              </div>
              <p className='l_lux'>Hotel Booking</p>
              <img src={require('./image/cal.png')} className='cal'></img>
              <input type='date' placeholder='Check in'></input>
              <img src={require('./image/cal.png')} className='cal1'></img>
              <input type='date' placeholder='Check in'></input>
              <select className='drop'>
                <option>Adult</option>
                <option>Adult</option>
                <option>Adult</option>
                <option>Adult</option>
              </select>
              <select className='drop child'>
                <option>Children</option>
                <option>Children</option>
                <option>Children</option>
                <option>Children</option>
              </select>
              <div className='check'>
                <a href='#'>CHECK AVAILABILITY</a>
              </div>

            </div>

            <div className='text text2'>
              <div className='bg_text'>
                <p className='HOEXR'>HOEXR HOTEL</p>
                <div className='l_img'>
                  <img src={require('./image/1.png')}></img>
                </div>
              </div>
              <p className='l_lux'>Check Availability</p>
              <p className='one_p'>
                 Each of our guest rooms feature a private bath, wi-fi, cable television <br></br>and include full breakfast.
              </p>
              <p className="one_p">
                Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat <br></br>tacimates definitionem sea, prima quidam vim no. Duo <br></br>nobis persecuti cu.
              </p>
              <div className="watch1">
                <div className='wtsp_i'>
                  <i><ImWhatsapp></ImWhatsapp></i>
                </div>
                <div className='number'>
                  <p className='book'>BOOKING NOW</p>
                  <p className='call'>956 220 6666</p>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='inner_footer'>
            <div className='one one_logo'>
              <img src={require('./image/footer.png')}></img>
              <p className='wel'>
                Welcome to the best five-star deluxe hotel in New
                York. Hotel elementum sesue the aucan vestibulum
                aliquam justo in sapien rutrum volutpat.
              </p>
              <p className='icon_s'>
                <p className='icon_f'><i><FaFacebook></FaFacebook></i></p>
                <p className='icon_f'><i><FaTwitter></FaTwitter></i></p>
                <p className='icon_f'><i><LiaLinkedinIn></LiaLinkedinIn></i></p>
                <p className='icon_f'><i><FaYoutube></FaYoutube></i></p>
              </p>
            </div>
            <div className='one one_ma'>
              <p className='SERVICES'>SERVICES LINKS</p>
              <div className='i_one'>
                <i><RiHomeHeartFill></RiHomeHeartFill></i>
                <span className='about_us_f'>Home</span>
                </div>
              <div className='i_one'>
                 <i><RiHomeHeartFill></RiHomeHeartFill></i>
                  <span className='about_us_f'>Rooms & Suites</span>
              </div>
              <div className='i_one'>
                <i><RiHomeHeartFill></RiHomeHeartFill></i>
                <span className='about_us_f'>Restaurant</span>
              </div>
              <div className='i_one'>
                <i><RiHomeHeartFill></RiHomeHeartFill></i>
                <span className='about_us_f'>Spa & Wellness</span>
              </div>
              <div className='i_one'>
                <i><RiHomeHeartFill></RiHomeHeartFill></i>
                <span className='about_us_f'>About Hotel</span>
              </div>
              <div className='i_one'>
                <i><RiHomeHeartFill></RiHomeHeartFill></i>
                <span className='about_us_f'>Contact</span>
              </div>
            </div>
            <div className='one'>
              <p className='SERVICES'>INFORMATION</p>
              <div className='i_one'>
                <i className='yellow_i'><IoCallSharp></IoCallSharp></i>
                <span className='about_us_f'>1800-121-3637</span>
                </div>
              <div className='i_one'>
                 <i className='yellow_i'><MdMail></MdMail></i>
                <span className='about_us_f'>info@example.com</span>
              </div>
              <div className='i_one'>
                <i className='yellow_i'><FaLocationDot></FaLocationDot></i>
                <span className='about_us_f'>1247/Plot No. 39,</span>
                <span className='about_us_f'> 15th Phase,</span>
              </div>
            </div>
            <div className='one'>
              <p className='SERVICES'>NEWSLETTER</p>
              <p className='wel lor'>Lorem ipsum dolor sit amet consectetur Augue id fermentum</p>
              <div className='email'>
                <input type='email' placeholder='Email'></input>
                <p className='done'>
                  <a href='#'><TbLocationShare></TbLocationShare></a>
                </p>
              </div>
              <div className='i_one agree'>
                <i><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline></i>
                <span className='about_us_f'>I agree to all terms and policies</span>
              </div>
            </div>
        </div>
      </div>

      <div className='copy_part'>
        <p>© Copyrights 2023 Hoexr All rights reserved.</p>
      </div>



    </div>
    
    
    

  );
}

export default App;
