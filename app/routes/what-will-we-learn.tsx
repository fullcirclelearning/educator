export default function WhatWillWeLearn() {
    return (
      <div className="mx-auto max-w-4xl px-4 my-4 prose-xl">
        <h1>What Will We Learn</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="md:w-1/2">
            <ol className="list-decimal space-y-4">
              <li>This integrated education model enhances motivation for socio emotional as well as cognitive and creative development among learners.</li>
              <li>Teachers work together with a common vision to apply a system of steps and strategies that integrate character, academic, arts-based, and conflict-resolution and service learning.</li>
            </ol>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/what1.webp"
              alt="diagram of the FCL educator training showing Character Education/Self-mastery, Academics, Art/Music, Peacemaking Skills, Local & Global Community Service"
              className="rounded-lg"
            />
          </div>
        </div>
        <ol className="list-decimal space-y-4" start={3}>
          <li>Educators learn to set up lesson plans and pacing guides that customize projects for relevant needs and education standards.</li>
          <li>The supporting classroom management approach offers strategies that nurture altruistic identities and positive school culture.</li>
          <li>Classrooms have the option to connect across borders in wisdom exchanges on like minded projects and habits-of-heart, thus enhancing learning motivation while also building leadership capacities and broader perspectives on problem solving.</li>
        </ol>
      </div>
    );
  }