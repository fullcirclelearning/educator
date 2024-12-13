export default function Testimonials() {
    return (
      <div className="mx-auto max-w-4xl px-4 my-4 prose-xl">
        <h1>Testimonials</h1>
        <div className="prose-xl">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/2">
              <blockquote className="italic">
                “To me Full Circle Learning is not just a simple organization, but rather a body of highly human-centric and dedicated humanitarians, working to build the better world that our hearts know.”
              </blockquote>
              <p className="font-semibold mt-2">- Fiston Muganda, Uganda (Nakivale Refugee Camp)</p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/test1.webp"
                alt="a student in their full circle learning shirt"
                className="rounded-lg"
              />
            </div>
          </div>

          <blockquote className="italic mb-4">
            “Truly our community has embraced change through the beautiful model we emulate from the FCL, and our children are fast becoming the change agents in this human family.”
          </blockquote>
          <p className="font-semibold mb-8">- Sheila Tantoh, Cameroon</p>

          <blockquote className="italic mb-4">
            “It is clear more than ever, that the only hope for our future lies in educating the next generation to be world-embracing peacemakers.”
          </blockquote>
          <p className="font-semibold mb-8">- Fariba Mahjour, California</p>

          <blockquote className="italic mb-4">
            “I can testify with beautiful stories on how Full-circle learning has positively impacted our community and beyond.”
          </blockquote>
          <p className="font-semibold mb-8">- Eric Muleya, Zambia</p>

          <blockquote className="italic mb-4">
            “A potential shift toward a more progressive learning approach in education may occur in the near future as a result of the human family, the environment, and communities being touched and having an impact on one another‘s minds and hearts.”
          </blockquote>
          <p className="font-semibold mb-8">- Alagie NDow, The Gambia</p>

          <blockquote className="italic mb-4">
            “It‘s a deep honor to witness young people transforming their lives and communities around the world using the Full-Circle Learning model. Thirty years of evidence-based educational excellence are giving tomorrow‘s global leaders the skills and compassion to bring clean water, green energy, public health, food security, peace, racial justice, and gender equity to villages, towns, and cities from Lusaka to Los Angeles. With Full-Circle Learning, the future looks brighter every day.”
          </blockquote>
          <p className="font-semibold mb-8">- Henry Lake, Connecticut</p>

          <blockquote className="italic mb-4">
            “This is a blueprint to help propel humanity into its next evolution of world action.”
          </blockquote>
          <p className="font-semibold mb-8">- Fourth-Grade Teacher, Liberia</p>
        </div>
      </div>
    );
  }