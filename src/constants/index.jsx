

import pet from '../assets/Wed_Designs/Hero-Section_PetWeb.png';
import petFull from '../assets/Wed_Designs/Landing_Page.png';
import video1 from '../assets/Videos/Videography1.mp4';
import video2 from '../assets/Videos/videography2.mp4';




export const navItems = [
  { prop: "Home", offset:-120, duration:1500, to:"Hero"},
  { prop: "About Us", offset:-100, duration:1500, to:"AboutUs"},
  { prop: "Services", offset:-100, duration:1500, to:"Services"},
  { prop: "Works", offset:-100, duration:1500, to:"Portfolio"},
  { prop: "Contact", offset:-100, duration:4500, to:"Email"},
];

export const serviceItems = [
  {
    icon:"🌐",
    title:"Web Development",
    paragrapgh:"Custom web development solutions tailored to your business needs."
  },
  {
    icon:"📱",
    title:"App Development",
    paragrapgh:"Innovative mobile app development for iOS and Android platforms."
  },
  {
    icon:"🎮",
    title:"Game Development",
    paragrapgh:"Engaging game development services for all platforms."
  },
  {
    icon:"🔍",
    title:"SEO",
    paragrapgh:"Expert SEO strategies to boost your online visibility."
  },
  {
    icon:"📢",
    title:"Social Media Marketing",
    paragrapgh:" Dynamic social media campaigns to grow your brand."
  },
  {
    icon:"🖌️",
    title:"2D/3D Graphics",
    paragrapgh:"High-quality 2D and 3D graphics to enhance your projects."
  },
  
  
]
export const WebImg = [
  { src: pet, alt: "Design", full: petFull },
  { src: pet, alt: "Design" , full: petFull },
  { src: pet, alt: "Design" , full: petFull },
]

export const BannerParagraph = "Contact us to explore your Goals and we’ll craft a personalized package of services tailored to your unique needs and budget."

export const GraphicDesign = [
  {
    Image: "https://www.softechgoal.com/Graphicdesignport2.jpg",
    alt: "Graphic Design"
  }
  ,
  {
    Image: "https://www.softechgoal.com/Graphicdesignport1.jpg", 
    alt: "Graphic Design"
  },
  {
    Image: "https://www.softechgoal.com/Graphicdesignport3.jpg", 
    alt: "Graphic Design"
  }
]

export const videos = [
  {src:video1},
  {src:video2}
]


export const footer1 =[
  {icon:"fa-solid fa-phone px-2",No:"+1 (512) 889-7071"},
  {icon:"fa-brands fa-whatsapp px-2 text-[#52da7f]",No:"+1 (512) 889-7071"},
]

export const footer2 = [
  {icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/company/softechgoal",target:"_blank"},
  {icon:"fa-brands fa-instagram px-5",href:"https://www.instagram.com/softechgoal?igsh=MWZqZ3Rxb2MxN2g5ZA==",target:"_blank"},
  {icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/profile.php?id=61565552590000",target:"_blank"},

]

