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
    dodatkoweInformacje,
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
      <section className="flex flex-col items-center justify-center w-10/12 md:w-full 2xl:w-8/12 my-20 mx-10 lg:mx-20 text-black gap-8 container bg-white border-2 border-darkGreen z-20 shadow-lg shadow-black">
        <div className="flex flex-col gap-5 text-center lg:pt-6 p-6 md:p-14">
          {/* @ts-ignore */}
          <div className="flex flex-col text-darkGreen font-semibold text-xl">
            {documentToReactComponents(dodatkoweInformacjeGora as any)}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center h-max divide-y md:divide-y-0 text-black text-large pt-8 md:pt-20 group-first:border-r-large first:border-black">
            {texts.map((text, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:w-1/3 py-10 md:py-0 md:px-8 first:border-r first:border-black last:border-l last:border-black border-divider"
                >
                  {documentToReactComponents(text as any)}
                </div>
                // <p
                //   key={text.data.slice(0.5)}
                //   className=""
                // >
                //   {text.data}
                // </p>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
