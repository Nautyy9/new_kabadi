import { ArrowUpRight } from "lucide-react";
import img_src from "../src/assets/images/other/brand-owner.webp";
function Initiative() {
  return (
    <div className="flex flex-col gap-y-5 overflow-hidden max-w-[360px] ">
      <div className="leading-8">
        <h6 className="text-skin-base/50">
          Small steps towards sustainability
        </h6>
        <h2 className="font-semibold">Our Initiative</h2>
      </div>
      <div className="overflow-auto w-max h-full flex gap-x-3">
        <div className="overflow-x-scroll border-2 border-base/60 rounded-3xl w-[300px]">
          <div className="relative">
            <img
              src={img_src}
              alt="initiative_images_1"
              className="rounded-3xl p-1 w-full h-40 object-fill "
            />
            <span className="absolute top-2 left-2 text-skin-muted bg-skin-fill rounded-full h-10 w-10 p-1.5  flex"></span>
            <a
              href="_target"
              className="absolute top-2 right-2 border-2 border-inverted text-skin-muted bg-skin-button-muted rounded-full h-10 w-10 p-1.5  flex "
            >
              <span>
                <ArrowUpRight className="text-skin-inverted w-full h-full"></ArrowUpRight>
              </span>
            </a>
          </div>
          <div className="px-5 leading-6 py-5">
            <h6 className="text-skin-base/50">Mattrress Circular Economy</h6>
            <h4 className="">Mattrress Circular Economy</h4>
            <p className="text-pretty mt-3 ">
              ISPF, IPUA and The Kabadiwala came together to initiate
              India&apos;s first mattress recycling campaign which is named as
              &apos;Feko Nahi Recycle Karo&apos; . The objective is to encourage
              the community to practise sustainable disposal of Mattress.
            </p>
            <div className="pills flex gap-x-1 mt-2 justify-center pt-2">
              <span className="bg-skin-fill border-2 border-base/60 text-skin-base rounded-full px-4 py-1 text-sm my-auto">
                Plastic
              </span>
              <span className="bg-skin-fill border-2 border-base/60 text-skin-base rounded-full px-4 py-1 text-sm my-auto">
                Plastic
              </span>
            </div>
          </div>
        </div>
        <div className="border-2 border-accent rounded-3xl w-[300px]">
          <div className="relative">
            <img
              src={img_src}
              alt="initiative_images_1"
              className="rounded-3xl p-1 w-full h-40 object-fill "
            />
            <span className="absolute top-2 left-2 border-2 border-base/60 text-skin-muted bg-skin-fill rounded-full h-10 w-10 p-1.5  flex"></span>
            <a
              href="_target"
              className="absolute top-2 right-2 border-2 border-inverted text-skin-muted bg-skin-button-muted rounded-full h-10 w-10 p-1.5  flex "
            >
              <span>
                <ArrowUpRight className="text-skin-inverted w-full h-full"></ArrowUpRight>
              </span>
            </a>
          </div>
          <div className="px-5 leading-6 py-5">
            <h6 className="text-skin-base/50">Mattrress Circular Economy</h6>
            <h4>Mattrress Circular Economy</h4>
            <p className="text-pretty mt-3">
              ISPF, IPUA and The Kabadiwala came together to initiate
              India&apos;s first mattress recycling campaign which is named as
              &apos;Feko Nahi Recycle Karo&apos; . The objective is to encourage
              the community to practise sustainable disposal of Mattress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative;
