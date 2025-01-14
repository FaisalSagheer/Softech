

import Pet from '../assets/Wed_Designs/Hero-Section_PetWeb.png';
import PetFull from '../assets/Wed_Designs/Landing_Page.png';
import Boat from '../assets/Wed_Designs/Hero-Section-Boat.png';
import BoatFull from '../assets/Wed_Designs/Landing-Page-Boat.png'
import Coffee from '../assets/Wed_Designs/coffee-Hero-Section.png'
import CoffeeFull from '../assets/Wed_Designs/Landing-Page-Coffee.png'
import video1 from '../assets/Videos/Videography1.mp4';
import video2 from '../assets/Videos/videography2.mp4';
import App1 from '../assets/Images/App1.png';
import App2 from '../assets/Images/App2.png';
import App3 from '../assets/Images/App3.png';
import Game1 from '../assets/Images/game1.png';
import Game2 from '../assets/Images/game2.png';
import Game3 from '../assets/Images/game3.png';
import Graphic1 from '../assets/Images/Graphicdesign1.jpg';
import Graphic2 from '../assets/Images/Graphicdesign2.jpg';
import Graphic3 from '../assets/Images/Graphicdesign3.jpg';




export const navItems = [
  { prop: "Home", offset: -120, duration: 1500, to: "Hero" },
  { prop: "About Us", offset: -80, duration: 1500, to: "AboutUs" },
  { prop: "Services", offset: -80, duration: 1500, to: "Services" },
  { prop: "Works", offset: -80, duration: 1500, to: "Portfolio" },
  { prop: "Contact", offset: -80, duration: 4500, to: "Email" },
];

export const serviceItems = [
  {
    icon: "🌐",
    title: "Web Development",
    paragrapgh: "Custom web development solutions tailored to your business needs."
  },
  {
    icon: "📱",
    title: "App Development",
    paragrapgh: "Innovative mobile app development for iOS and Android platforms."
  },
  {
    icon: "🎮",
    title: "Game Development",
    paragrapgh: "Engaging game development services for all platforms."
  },
  {
    icon: "🔍",
    title: "SEO",
    paragrapgh: "Expert SEO strategies to boost your online visibility."
  },
  {
    icon: "📢",
    title: "Social Media Marketing",
    paragrapgh: " Dynamic social media campaigns to grow your brand."
  },
  {
    icon: "🖌️",
    title: "2D/3D Graphics",
    paragrapgh: "High-quality 2D and 3D graphics to enhance your projects."
  },


]
export const WebImg = [
  { src: Pet, alt: "Design", full: PetFull },
  { src: Boat, alt: "Design", full: BoatFull },
  { src: Coffee, alt: "Design", full: CoffeeFull },
]


export const BannerParagraph = "Contact us to explore your Goals and we’ll craft a personalized package of services tailored to your unique needs and budget."

export const GraphicDesign = [
  {
    Image: Graphic2,
    alt: "Graphic Design"
  }
  ,
  {
    Image: Graphic1,
    alt: "Graphic Design"
  },
  {
    Image: Graphic3,
    alt: "Graphic Design"
  }
]

export const videos = [
  { src: video1 },
  { src: video2 }
]

export const Appdev = [
  
    {src: App1,alt:"App Developmet" },
    {src: App2,alt:"App Developmet" },
    {src: App3,alt:"App Developmet" }
  
]
export const GameDev = [
  
    {src:  Game1, alt: "Game Development" },
    {src:  Game3, alt: "Game Development" },
    {src:  Game2, alt: "Game Development" },
  
]
export const footer1 = [
  { icon: "fa-solid fa-phone px-2", No: "+1 (512) 889-7071" },
  { icon: "fa-brands fa-whatsapp px-2 text-[#52da7f]", No: "+1 (512) 889-7071" },
]

export const footer2 = [
  { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/company/softechgoal", target: "_blank" },
  { icon: "fa-brands fa-instagram px-5", href: "https://www.instagram.com/softechgoal?igsh=MWZqZ3Rxb2MxN2g5ZA==", target: "_blank" },
  { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/profile.php?id=61565552590000", target: "_blank" },
]

