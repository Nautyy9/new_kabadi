import {
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="flex flex-col gap-y-2 w-[360px] over">
      <div className="upper_section"></div>
      <div className="lower_section flex justify-between px-5 items-center">
        <div className="services flex flex-col gap-y-5">
          <div className="links flex flex-col gap-y-1">
            <h5>Services</h5>
            <a href="/">Scrap Collection</a>
            <a href="/">Paper Shredding</a>
            <a href="/">Vehicle Scrapping</a>
            <a href="/">Dismantling</a>
            <a href="/">Junk Removal</a>
            <a href="/">Junk Removal</a>
            <a href="/">Society Tie Up</a>
          </div>
          <div className="links flex flex-col gap-y-1">
            <h5>Services</h5>
            <a href="/">Scrap Collection</a>
            <a href="/">Paper Shredding</a>
            <a href="/">Vehicle Scrapping</a>
            <a href="/">Dismantling</a>
            <a href="/">Junk Removal</a>
            <a href="/">Junk Removal</a>
            <a href="/">Society Tie Up</a>
          </div>
        </div>
        <div className="links flex flex-col gap-y-1">
          <h5>Services</h5>
          <a href="/">Scrap Collection</a>
          <a href="/">Paper Shredding</a>
          <a href="/">Vehicle Scrapping</a>
          <a href="/">Dismantling</a>
          <a href="/">Junk Removal</a>
          <a href="/">Junk Removal</a>
          <a href="/">Society Tie Up</a>
        </div>
      </div>
      <div className="justify-end  gap-x-5 flex items-center">
        <h6 className="font-medium">Reach Us At</h6>
        <div className="links flex gap-x-2 [&>*]:h-5 [&>*]:w-5 ">
          <BsWhatsapp></BsWhatsapp>
          <BsInstagram />
          <BsLinkedin className="rounded-sm" />
          <BsPinterest />
        </div>
      </div>
      <div className="mb-20 bg-skin-button-muted text-skin-inverted px-2 py-2">
        <p>Kabadi © 2022 Copyright, All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
