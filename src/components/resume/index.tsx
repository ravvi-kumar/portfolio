export default function Resume() {
  return (
    <div className="bg-white dark:bg-black p-8">
      <div className="shadow-lg border-2 border-gray-200 dark:border-gray-700 rounded-lg p-10 dark:text-white">
        <div className="flex flex-col gap-4 lg:flex-row flex-wrap">
          <div className="md:mr-4 flex-1">
            <Heading />
          </div>
          <div className="lg:basis-[400px]">
            <Info />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row flex-wrap">
          <div className="md:mr-4 flex-1 py-4">
            <Education />
            <Training />
          </div>
          <div className="py-4 w-[300px] lg:w-auto lg:basis-[400px]">
            <Skills />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row flex-wrap">
          <div className="md:mr-4 flex-1 py-4">
            <Experience />
          </div>
          <div className="py-4 lg:basis-[400px]">
            <Languages />
          </div>
        </div>
        <div className="py-4">
          <SideProjects />
        </div>
        <SoftSkills />
        <Extra />
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Heading() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">Ravi Chopra</h1>
      <p className="text-lg mb-6">
        Excellent time management and problem solving skills. Organized
        candidate on whom you can completely depend. Successful at managing
        multiple priorities with a positive attitude. Willingness to take on
        additional responsibilities to meet team goals. Passionate about
        learning and committed to continual improvement.
      </p>
    </div>
  );
}
function Info() {
  return (
    <div>
      <div>
        <h3 className="font-bold">Address</h3>
        <p>Mohali, Punjab, 140301</p>
      </div>
      <div>
        <h3 className="font-bold">Phone</h3>
        <p>+91 6283679170</p>
      </div>
      <div>
        <h3 className="font-bold">Email</h3>
        <p>ravi.kumar8989@gmail.com</p>
      </div>
      <div>
        <h3 className="font-bold">Site</h3>
        <a href="https://ravvi.vercel.app" target="_blank">
          https://ravvi.vercel.app
        </a>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
      <h3 className="text-xl font-semibold">
        {`Garden valley international School, Machhiwara - 10th `}
      </h3>
      <p className="mb-4">April 2015 - April 2016</p>
      <h3 className="text-xl font-semibold">
        {`Garden valley international School, Machhiwara - 12th `}
      </h3>
      <p className="mb-4">April 2017 - April 2018</p>
    </div>
  );
}
function Training() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Training</h2>
      <p className="mb-4">3 Months of web Development training</p>
      <p className="font-semibold mb-4"> ~ LN Web Works ~ Ludhiana</p>
      <p>Feb 2022 - May 2022</p>
    </div>
  );
}
function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">EXPERIENCE</h2>
      <h3 className="text-xl font-semibold">
        {`Mps Infotech, Mohali ~ React js Intern `}
      </h3>
      <ul className="list-disc ml-5 mb-4">
        <li>
          Worked on a time management desktop application built with electron
          js.
        </li>
        <li>Integrated stripe payment with google firebase cloud functions.</li>
        <li>
          Assisted with day-to-day operations, worked efficiently and
          productively with all team members.
        </li>
      </ul>
      <p className="mb-4">June 2022 - Aug 2022</p>
      <h3 className="text-xl font-semibold">
        Mps Infotech, Mohali ~ Software Developer
      </h3>
      <ul className="list-disc ml-5 mb-4">
        <li>
          Worked on a business management project built with NextJS, TypeScript
          and React-Query.
        </li>
        <li>
          Built a video conference application from scratch with webSockets to
          create audit-logs using Nestjs as Backend.
        </li>
        <li>
          Built a React Native application from scratch with biometric Auth, and
          Geo-fencing functionality to track location movement.
        </li>
        <li>
          Built a google slides chat bot with Cloudflare D1 database, Hono for
          api and OpenAi, where users can chat with their google slides.
        </li>
      </ul>
      <p className="mb-4">Aug 2022 - Present</p>
    </div>
  );
}

function SideProjects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">SIDE PROJECTS</h2>
      <h3 className="font-semibold">JavaScript</h3>
      <p className="mb-4"> ~ text editor, css-boxShadow generator.</p>
      <h3 className="font-semibold">React js</h3>
      <p className="mb-4">
        ~ video conference App, Slot machine, window Xp userInterface,
        pdf-editor.
      </p>
      <h3 className="font-semibold">Next js</h3>
      <p className="mb-4">
        ~ Trello clone , Agency website with (App Directory).
      </p>
      <h3 className="font-semibold">Zustand</h3>
      <p className="mb-4">
        ~ Created a shared zustand store b/w react and svelte in Astro.
      </p>
      <h3 className="font-semibold">Stripe</h3>
      <p className="mb-4">
        ~ Created a dummy stripe product using Nestjs as Backend.
      </p>
      <h3 className="font-semibold">Svelte</h3>
      <p className="mb-4"> ~ Chat application using webSockets in Node js.</p>
    </div>
  );
}

function SoftSkills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">SOFT SKILLS</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Flexible & adaptable</li>
        <li>Good analytical skills</li>
        <li>Proficient in Written Communication</li>
        <li>Good Listening Skills</li>
        <li>Well organized workflow</li>
      </ul>
    </div>
  );
}

function Extra() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">EXTRA</h2>
      <p>
        React-query , zustand, redux-toolkit, svelte, drizzle orm, Astrojs,
        cloudflare workers, cloudflare pages, Honojs, Docker, Mongodb,
        Socket-io, Nestjs, TypeOrm, Prisma, Expo, Express, Github, Gitlabs,
        Postman, Firebase
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 mt-6">SKILLS</h2>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">JavaScript / TypeScript</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Reactjs / Nextjs</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Svelte / SvelteKit</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Nodejs / Nestjs</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Mongoose / TypeOrm / Prisma</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">React Native</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Problem-Solving</h3>
          <div className="flex">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 mt-6">LANGUAGES</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>English</li>
        <li>Punjabi</li>
        <li>Hindi</li>
      </ul>
    </div>
  );
}
