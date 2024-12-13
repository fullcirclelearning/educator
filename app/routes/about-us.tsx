export default function AboutUs() {
    return (
      <div className="prose-xl mx-auto max-w-4xl px-4 my-4">
        <h1>About Us</h1>
        <p>The Full-Circle Learning (FCL) educational model was piloted in 1992 in Los Angeles California, initially to help traumatized learners re-envision their capacities and connections by embracing their role as society’s change agents.</p>
        <p>The nonprofit organization of the same name, based on this educational model, has trained participants across 40 nations at this writing. In any given year, up to a dozen countries also receive community impact grants, capacity building programs, wisdom exchange alliances, and scholarships in regions where public education is not free. (Pictured, a fundraiser in Nevada City, California)</p>
        <p>This nonprofit organization, headquartered in the USA, is operated by a board of directors who bring diverse backgrounds and unique professional experiences to educator development services. Their career assets include curriculum development, writing and research, human resources, and teaching and/or administering at universities, school districts, individual schools, and complementary learning or arts programs. Board members bring 200 years of collective experience to the organization.</p>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <p className="md:w-1/2">Picture: A board-sponsored event in Nevada City, California. FCL receives top ratings from Guidestar, Candid, and Great Nonprofits.</p>
        <img 
          src="/images/about1.webp" 
          alt="Board-sponsored event in Nevada City" 
          className="md:w-1/2 rounded-lg"
        />
      </div>
      <p>The US Full-Circle Learning board liaises with a global team of skilled facilitators and dedicated trainers to deliver professional development worldwide. (For more information about Full-Circle Learners and Leaders around the world, click on the map dots at <a href="https://www.fullcirclelearning.org" target="_blank" rel="noopener noreferrer">www.fullcirclelearning.org</a>.)</p>
      <p>Full-Circle Learning Board Members Include:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-b pb-2">
          <div className="font-semibold">Teresa Langness, PhD</div>
          <div className="text-sm">Board President</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Lily T. Ning, MAEx</div>
          <div className="text-sm">Programs</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Henry Wilson Lake</div>
          <div className="text-sm">Communications</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Marisol Rexach, PhD</div>
          <div className="text-sm">Board Secretary</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Sana Moussavi</div>
          <div className="text-sm">Human Resources</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Rodney Hume Dawson, PhD</div>
          <div className="text-sm">Programs</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Fariba Mahjour</div>
          <div className="text-sm">Board Vice-President</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Taraneh Darabi, PhD</div>
          <div className="text-sm">Global Outreach</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Zack Daffallah, MBA</div>
          <div className="text-sm">Finance</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Rene Sprattling</div>
          <div className="text-sm">Board Treasurer</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Baktash Aazami, MEd</div>
          <div className="text-sm">Events</div>
        </div>
        <div className="border-b pb-2">
          <div className="font-semibold">Debbie Posada, CPA</div>
          <div className="text-sm">Financial Advisor</div>
        </div>
      </div>
      <p>For more information about Full-Circle Learners and Leaders around the world, visit <a href="https://www.fullcirclelearning.org" className="text-blue-600 hover:underline">www.fullcirclelearning.org</a> and click on the map dots.</p>
      </div>
    );
  }