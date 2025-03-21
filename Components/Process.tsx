import img_src from "../src/assets/images/other/india-map-locations.png";
function Process() {
  return (
    <div className="w-[360px] h-full flex gap-x-2  rounded-3xl ">
      <div className="w-[250px] rounded-2xl  h-full border-2 border-base/60 flex items-center flex-col justify-center px-2">
        <p className="text-skin-base text-pretty text-base leading-snug ">
          The Kabadiwala has established its services in 5 major cities of India
          and is now expanding its reach in other parts of the country.
        </p>
        <div className="pills flex  mt-4 justify-center gap-2">
          <span className="  text-skin-inverted  rounded-full px-3 py-1 bg-skin-button-accent/80 text-sm ">
            Plastic
          </span>
          <span className=" text-skin-inverted  rounded-full px-3 text-sm py-1 bg-skin-button-accent/80">
            Plastic
          </span>
        </div>
      </div>
      <div className="w-fit h-max my-2 ">
        <div className=" border-2  leading-7 border-accent rounded-2xl flex self-center h-60">
          <h5 className="py-5 px-2 w-1/2 text-left m-auto">
            Our Presence Across Nation
          </h5>
          <div className="rounded-3xl">
            <img
              src={img_src}
              alt="our_presence_across_nation"
              className="h-full rounded-full p-2 object-fill bg-clip-border "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
