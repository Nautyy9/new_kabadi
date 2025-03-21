import { BsHandIndexThumb, BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

function JoinUs() {
  return (
    <div className="flex flex-col gap-y-10  w-full max-w-[360px]">
      <div className="flex justify-center items-center flex-col">
        <h2 className="">Join Our Community</h2>
        <p className="px-5">
          If you&apos;re also vocal for recycle, you sure want to stay updated
          on the latest happenings. Subscribe to our newsletter today!
        </p>
      </div>
      <div className="w-full flex items-center border-2 border-base/60  justify-center rounded-full h-10 relative ">
        <span className=" px-6 bg-skin-button-muted rounded-full h-11 flex items-center border-2 border-base/60 absolute -left-0.5 text-skin-inverted">
          Email
        </span>
        <button className="w-20 h-8 flex items-center justify-center bg-skin-button-accent text-skin-accent rounded-full absolute right-1 top-0.5">
          Subscribe
          <span className="absolute -bottom-1 bg-skin-button-accent  rounded-full p-0">
            <BsHandIndexThumb stroke="" className=" h-3.5 w-3.5" />
          </span>
        </button>
        <span className="">Typer Writter Animation</span>
      </div>
      <div className="flex gap-x-3 w-full max-w-[360px] ">
        <div className="p-2 h-28 w-32 border-2 border-base/60 rounded-2xl relative overflow-x-visible">
          <p>Dehradun </p>
          <span className="h-10 w-10  rounded-tr-none rounded-bl-none rounded-xl absolute  border-t-2 border-l-2 border-base/60 bg-skin-fill ring-inverted -right-0.5 -bottom-0.5 flex items-end justify-end">
            <IoLocationOutline className="h-9 w-9  " />
          </span>
        </div>
        <div className="p-2 h-28 w-32 border-2 border-base/60 rounded-2xl relative overflow-x-visible">
          <p>+91 123-456-7890</p>
          <span className="h-10 w-10  rounded-tr-none rounded-bl-none rounded-xl absolute  border-t-2 border-l-2 border-base/60 bg-skin-fill ring-inverted -right-0.5 -bottom-0.5 flex items-end justify-end">
            <BsWhatsapp className="h-7 w-7  " />
          </span>
        </div>
        <div className="h-28 w-32 p-2 border-2 border-base/60 rounded-2xl relative text-pretty">
          <p>JohnDoe @gmail.com</p>
          <span className="h-10 w-10  rounded-tr-none rounded-bl-none rounded-xl absolute  border-t-2 border-l-2 border-base/60 bg-skin-fill ring-inverted -right-0.5 -bottom-0.5 flex items-end justify-end">
            <SiGmail className="h-7 w-7  " />
          </span>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
