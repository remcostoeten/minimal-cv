import React from "react";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface FontShowcaseProps {}

const FontShowcase: React.FC<FontShowcaseProps> = () => {
  return (
    <div className="font-bai-jamjuree">
      {" "}
      {/* Apply font family globally */}
      <h1 className="text-3xl font-bold">Heading 1 (Bold)</h1>
      <h2 className="text-2xl">Heading 2 (Regular)</h2>
      <h3 className="text-xl font-bold">Heading 3 (Bold)</h3>
      <h4 className="text-lg">Heading 4 (Regular)</h4>
      <p className="px-4 py-2 mb-4 rounded-md bg-gray-100">
        Paragraph text with some body copy.
      </p>
      <span className="italic text-gray-500">
        Inline text with a different style.
      </span>
      <div className="pre p-3 rounded-md bg-gray-200">
        Preformatted text with a monospaced font.
      </div>
    </div>
  );
};

export default FontShowcase;
