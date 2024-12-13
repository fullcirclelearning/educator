export default function WhySetUpATraining() {
    return (
      <div className="mx-auto max-w-4xl px-4 my-4 prose-xl">
        <h1>Why Set Up A Training</h1>
        <h2>Consider the benefits of Full-Circle Learning’s professional development for teachers:</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="md:w-1/2">
            <ol className="list-decimal space-y-4">
              <li>Full-Circle Learning has more than three decades of experience training educators and parents in this innovative model of education.</li>
              <li>Worldwide, more than a million people per year benefit from Full-Circle Learning training programs and projects.</li>
            </ol>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/whyset1.webp"
              alt="educators group together for a selfie"
              className="rounded-lg"
            />
          </div>
        </div>
        <ol className="list-decimal space-y-4" start={3}>
          <li>Studies confirm the benefits of the model in diverse settings inside and outside the US. Public schools, private schools, charter schools, community schools, complementary education programs, and home schools have seen higher qualitative and quantitative results by applying their Full-Circle Learning training.</li>
          <li>Experts in the field facilitate the learning. Both professional development and graded Full-Circle Learning education courses are available either onsite or via zoom or in small-group online sessions.</li>
          <li>All remuneration except hard-cost expenses apply directly to benefit learners in vulnerable regions of the world, where student projects address sustainability goals (the right to peace, food security, health, equity, economic wellbeing, and the reduction of environmental or climate change impacts).</li>
        </ol>
      </div>
    );
  }