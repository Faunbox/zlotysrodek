import { getSurveyUrl } from "@/lib/contentful";
import FilledButton from "../typography/filledButton";
import Link from "next/link";

const NutritionalSurvey = async () => {
  const surveyUrl = await getSurveyUrl();

  return (
    <Link
      href={`https:${surveyUrl}`}
      rel="noopener"
      target="_blank"
      className="w-full pl-8"
    >
      <FilledButton
        color="bg-darkGreen"
        text="white"
        py={1}
        ariaLabel="Ankieta żywieniowa"
      >
        Ankieta Żywieniowa
      </FilledButton>
    </Link>
  );
};

export default NutritionalSurvey;
