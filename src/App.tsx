import {
  Carousel,
  Farak,
  Footer,
  Header,
  Home,
  Initiative,
  JoinUs,
  MenuBar,
  Process,
  Reviews,
  Services,
  Speciality,
  Talking,
} from "../Components";
import { useContextValue } from "../Context/Context";
import { cn } from "../utils/cn";

function App() {
  // const { windowWidth, theme } = useContextValue();
  const { theme } = useContextValue();

  // useEffect(() => {
  //   // const main_class = document.getElementsByClassName("main_class");
  //   // console.log(main_class);

  //   return () => {};
  // }, [theme]);

  return (
    <>
      <div
        className={cn(
          "main_class relative  bg-skin-fill text-skin-base w-full  ",
          theme && "dark_one"
        )}
      >
        {/* <div className=" z-[100] w-[360px] mx-auto gap-[20px] flex absolute inset-0  opacity-20">
          <div className="bg-green-500 h-full w-full"></div>
          <div className="bg-green-500 h-full w-full"></div>
          <div className="bg-green-500 h-full w-full"></div>
          <div className="bg-green-500 h-full w-full"></div>
        </div> */}
        <div className="relative  z-20 w-full sm:w-[360px]  min-h-dvh max-h-full mx-auto grid gap-y-24 ">
          <Header></Header>
          <Home></Home>
          <Carousel></Carousel>
          <Speciality></Speciality>
          <Initiative></Initiative>
          <Process></Process>
          <Services></Services>
          <Talking></Talking>
          <Farak />
          <Reviews></Reviews>
          <JoinUs></JoinUs>
          <Footer></Footer>
        </div>
        <MenuBar />
      </div>
    </>
  );
}
export default App;
