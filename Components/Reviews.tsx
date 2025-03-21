export default function Reviews() {
  return (
    <div className="flex flex-col gap-y-10 ">
      <div className="">
        <p>we always love to hear from you</p>
        <h2 className="capitalize">we love to hear from you</h2>
      </div>
      <div className="flex gap-x-5 w-[360px]  overflow-x-scroll ">
        {Array.from({ length: 3 })
          .fill({})
          .map((val, i) => {
            return (
              <div
                key={i + Math.random().toString(36).substring(2)}
                className="border-2 boder-base h-max p-2  w-44 rounded-2xl"
              >
                <div className="flex gap-x-4">
                  <img
                    src=""
                    alt="??"
                    className="h-10 w-10 rounded-full bg-skin-button-accent"
                  />
                  <div className="w-max">
                    <h6>Rakesh Dhaundiyal</h6>
                    <p className="text-skin-accent-inverted">army cant.</p>
                  </div>
                </div>
                <p>
                  Kabadiwale ka wait karna aur fir bargain karna has always been
                  a chore to me.Thanks to Scrapbuddy, now I get all this done in
                  a few clicks.
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
