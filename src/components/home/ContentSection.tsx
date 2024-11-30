
interface ContentSectionProps {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: JSX.Element | string;
  imageUrl: string;
  isReversed?: boolean;
}

export function ContentSection({
  id,
  number,
  tag,
  title,
  description,
  imageUrl,
  isReversed = false,
}: ContentSectionProps) {
  return (
    <div id={id} className="relative min-h-[100vh] flex items-center py-24">
      <div
        className={`max-w-[1462px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={`space-y-8 ${isReversed ? "lg:col-start-2" : ""}`}>
          <span className="text-[200px] font-bold text-white/10 leading-none">
            {number}
          </span>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-16 bg-yellow-400" />
              <span className="text-yellow-400 uppercase tracking-widest text-sm">
                {tag}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              {title}
            </h2>
            <p className="text-white leading-relaxed max-w-[632px]">
              {description}
              <br />
              <a
                href="#read-more"
                className="text-yellow-400 font-bold block mt-4"
              >
                Read more &rarr;
              </a>
            </p>
          </div>
        </div>

        <div className={`relative ${isReversed ? "lg:col-start-1" : ""}`}>
          <div className="w-full h-[800px] rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
