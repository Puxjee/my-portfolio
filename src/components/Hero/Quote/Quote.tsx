import { QuoteIcon } from "lucide-react";
import React from "react";

const Quote = ({
  color,
  quote,
  author,
}: {
  color: string;
  quote: string;
  author: string;
}) => {
  return (
    <div>
      <fieldset className="border border-gray p-4 w-fit ">
        <legend>
          <QuoteIcon
            fill={color}
            stroke="none"
            className="inline-block mr-2 rotate-180 border-0"
          />
        </legend>
        {
          <blockquote className="text-gray text-md font-semibold">
            {quote}
          </blockquote>
        }
      </fieldset>

      <fieldset className="border border-gray p-4 w-fit -mt-[13px] rotate-y-180 ml-auto">
        <legend>
          <QuoteIcon
            fill={color}
            stroke="none"
            className="inline-block  border-0 rotate-180 bg"
          />
        </legend>
        {
          <cite className="text-gray text-sm flex justify-end -rotate-y-180 font-medium">
            - {author}
          </cite>
        }
      </fieldset>
    </div>
  );
};

export default Quote;
