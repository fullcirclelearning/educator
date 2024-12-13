export default function Gallery() {
    return (
      <div className="mx-auto max-w-4xl px-4 my-4 prose-xl">
        <h1>Gallery</h1>
        <p className="prose-xl mb-8">
          Scenes from sample teacher training locations, left to right: Piru California, Nigeria, China, The Gambia, Zambia, Rwanda, Chapman University (California), El Salvador, and Papua New Guinea; for more activities across 40 countries, visit <a href="http://www.fullcirclelearning.org" className="text-blue-600 hover:underline">www.fullcirclelearning.org</a>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/gallery1.webp"
            alt="Teacher training in Piru California"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery2.webp"
            alt="Teacher training in Nigeria"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery3.webp"
            alt="Teacher training in China"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery4.webp"
            alt="Teacher training in The Gambia"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery5.webp"
            alt="Teacher training in Zambia"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery6.webp"
            alt="Teacher training in Rwanda"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery7.webp"
            alt="Teacher training at Chapman University, California"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery8.webp"
            alt="Teacher training in El Salvador"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/images/gallery9.webp"
            alt="Teacher training in Papua New Guinea"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  }