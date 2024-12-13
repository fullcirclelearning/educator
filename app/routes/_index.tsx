import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Full-Circle Learning" },
    { name: "description", content: "Enhancing Pedagogy, Practice, Purpose" },
  ];
};

export default function Index() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl px-4 my-4" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", lineHeight: "1.8" }}>
        <img className="mx-auto block" src="/images/home1.webp" alt="Full-Circle Learning" />
        <h1 className="text-center mt-8 text-5xl font-semibold">Full-Circle Learning:</h1>
        <h2 className="text-center mb-8 text-4xl">Enhancing Pedagogy, Practice, Purpose</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/images/home2.webp" alt="Students learning" className="w-full md:w-1/2" />
          <div className="w-full md:w-1/2">
            <p className="prose-xl">
            Education typically focuses on what to learn or how to learn. Full-Circle Learning also emphasizes <em>why</em> to learn.
            </p>
            <p className="prose-xl">This research-based model of education cultivates the instinct to connect and to create, to balance curiosity with compassion, to problem-solve with humanitarian intent, to improve social cohesion, motivation and behavior.</p>
          </div>
        </div>
        <div className="mb-8 mt-4">
          <p className="prose-xl">
          Learners broaden their sphere of influence as change agents in the world. Their learning influences the wellbeing of other living beings. This transformative impact, in turn, renews the human desire to learn.
          </p>
          <p className="prose-xl">
          Explore this site to discover how you and your colleagues can intensify your own sense of purpose by infusing purpose into all learning.
          </p>
        </div>
      </div>
    </div>
  );
}
