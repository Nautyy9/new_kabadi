export default function Talking() {
  return (
    <div className="flex flex-col gap-10 w-[360px]">
      <div className="">
        <p>See Another Side of Who We Are.</p>
        <h2>They Love Talking About Us</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="h-max border-2 border-base/60 w-5/6 mx-auto rounded-2xl relative">
          <aside className="w-[48%]  bg-skin-button-muted h-10 absolute right-0  rounded-2xl rounded-br-none rounded-tl-none"></aside>
          <div className="p-2 leading-snug">
            <h5 className="w-[50%] text-skin-base/80">
              Mattress Circular Journey
            </h5>
            <p>
              ISPF, IPUA and The Kabadiwala came together to initiate India’s
              first mattress recycling campaign which is named as ‘Feko Nahi
              Recycle Karo.
            </p>
          </div>
        </div>
        <div className="h-32 border-2 border-accent w-11/12 mx-auto rounded-2xl relative">
          <aside className="w-2/3  bg-skin-button-accent h-10 absolute right-0  rounded-2xl rounded-br-none rounded-tl-none"></aside>
        </div>{" "}
        <div className="h-32 border-2 border-base/60 w-full mx-auto rounded-2xl relative">
          <aside className="w-2/3  bg-skin-button-muted h-10 absolute right-0  rounded-2xl rounded-br-none rounded-tl-none"></aside>
        </div>
      </div>
    </div>
  );
}
