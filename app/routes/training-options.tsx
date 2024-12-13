export default function TrainingOptions() {
    return (
      <div className="mx-auto max-w-4xl px-4 my-4 prose-xl">
        <h1>Training Options</h1>
        <div className="prose-xl">
          <p>Rest assured that when you schedule a workshop, you are serving education and teacher development in vulnerable regions of the world. Thanks to our pro bono services, all but the hard costs incurred will directly fund global humanitarian teacher training programs.</p>
          
          <ol className="list-decimal space-y-4">
            <li>In-person, synchronous professional development: per teacher or student teacher (for a 10-hour program for at least 5 people, plus travel expense)</li>
            <li>Zoom-based synchronous professional development: per teacher or student teacher (for a 10-hour program for at least 5 people)</li>
            <li>FCL mentorship for the 11-session online course with practicum: per person</li>
          </ol>

          <img
            src="/images/cost1.webp"
            alt="Cost information" 
            className="rounded-lg mt-8"
          />
        </div>
      </div>
    );
  }