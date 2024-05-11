import { getSurveyUrl } from "@/lib/contentful";
import Link from "next/link";

const NutritionalSurvey = async () => {
  const surveyUrl = await getSurveyUrl();

  return (
    <Link
      href={`https:${surveyUrl}`}
      rel="noopener"
      target="_blank"
      className="w-full pl-8 tracking-widest uppercase hover:font-semibold duration-150 font-montserrat"  
    >
      Ankieta przed spotkaniem
    </Link>
  );
};

export default NutritionalSurvey;
