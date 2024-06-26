import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export type InfoT = {
  dodatkoweInformacje: string;
  dodatkoweInformacjeGora: string;
  dodatkoweInformacje1: string;
  dodatkoweInformacje2: string;
  dodatkoweInformacje3: string;
};

const Info = ({ data }: { data: InfoT }) => {
  const {
    dodatkoweInformacjeGora,
    dodatkoweInformacje1,
    dodatkoweInformacje2,
    dodatkoweInformacje3,
  } = data;

  const texts = [
    dodatkoweInformacje1,
    dodatkoweInformacje2,
    dodatkoweInformacje3,
  ];

  return (
    <div className=" flex flex-col items-center justify-center font-tinos md:bg-linear w-screen relative after:bg-green after:h-full after:md:h-1/2 after:absolute after:bottom-0 after:right-0 after:left-0 after:z-10">
      <section className="flex flex-col items-center justify-center w-10/12 md:w-full 2xl:w-8/12 my-10 lg:my-20 mx-10 lg:mx-20 text-black gap-8 container bg-white border-2 border-darkGreen z-20 shadow-lg shadow-black">
        <div className="flex flex-col gap-5 text-center lg:pt-6 p-6 md:p-14">
          {/* @ts-ignore */}
          <div className="flex flex-col text-darkGreen font-semibold text-xl">
            {documentToReactComponents(dodatkoweInformacjeGora as any)}
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center h-max  text-black text-large pt-8 md:pt-10 ">
            {texts.map((text, index) => {
              return (
                <div
                  key={index + Math.random()}
                  className="w-full lg:w-1/3 lg:px-8 lg:first:border-r lg:first:border-black lg:last:border-l lg:last:border-black lg:border-divider"
                >
                  {documentToReactComponents(text as any)}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
