import { useState } from "react";

interface ShowcaseItem {
  img: string;
  title: string;
  description: string;
  focused?: boolean;
}

interface Props {
  contents: ShowcaseItem[];
}

export default function Showcases({ contents: initialContents }: Props) {
  const [contents, setContents] = useState(initialContents);

  function focus(index: number) {
    setContents((prev) =>
      prev.map((item, i) => ({ ...item, focused: i === index }))
    );
    document.location.hash = `navbar-${index + 1}`;
  }

  return (
    <div className="container mx-auto my-8 flex flex-col items-center gap-2 rounded-3xl bg-white p-8">
      <p className="text-2xl">Showcases</p>

      <div className="flex w-full flex-col items-center gap-2">
        <div className="relative flex w-full snap-x snap-mandatory gap-6 overflow-auto scroll-smooth">
          <div className="w-1/12 shrink-0 scale-100 snap-center rounded-lg" />
          {contents.map((content, i) => (
            <div
              key={i}
              id={`slides-${i + 1}`}
              className="w-4/5 shrink-0 scale-100 snap-center rounded-lg shadow-xl"
            >
              <img src={content.img} alt={content.title} />
            </div>
          ))}
          <div className="w-1/12 shrink-0 scale-100 snap-center rounded-3xl" />
        </div>
        <div className="flex flex-wrap gap-8">
          {contents.map((_, i) => (
            <a
              key={i}
              id={`#slides-${i + 1}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-center text-white target:bg-black"
              href={`#slides-${i + 1}`}
              onClick={() => focus(i)}
            >
              {i + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
