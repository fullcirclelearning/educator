export default function ContactUs() {
    return (
      <div className="mx-auto max-w-4xl px-4 my-4 prose-xl">
        <h1>Contact Us</h1>
        <div>
          <p>To discuss a professional development plan that meets your needs, please email <a href="mailto:info@fullcirclelearning.org" className="text-blue-600 hover:underline">info@fullcirclelearning.org</a>.</p>

          <p>To make a tax-deductible contribution for the training of educators among vulnerable populations worldwide, earmark your donation at <a href="http://www.fullcirclelearning.org" className="text-blue-600 hover:underline">www.fullcirclelearning.org</a>.</p>
          <ol className="list-decimal space-y-4">
            <li>In-person, synchronous professional development: $200 per teacher or student teacher (for a 10-hour program for at least 5 people, plus travel expense)</li>
            <li>Zoom-based synchronous professional development: $150 per teacher or student teacher (for a 10-hour program for at least 5 people)</li>
            <li>FCL mentorship for the 11-session online course with practicum: $100 per person</li>
          </ol>
          <img
            src="/images/contact1.webp"
            alt="Contact information"
            className="rounded-lg my-8"
          />
        </div>
      </div>
    );
  }