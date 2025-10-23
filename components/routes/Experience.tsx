import { Head } from "fresh/runtime";

export function Experience() {
  return (
    <main>
      <Head>
        <title>Experience - Athul Anil Thomas</title>
      </Head>
      <header class="flex flex-col items-center gap-9.5 mt-8rem xl:mt-12rem">
        <p class="text-center text-gray-300 max-w-[340px] xl:max-w-[640px] xl:text-[1.5rem] my-0 mx-auto line-height-[2rem] xl:line-height-[3rem] font-light">
          {"< "}
          Get to know me better and explore my journey as a{" "}
          <strong class="font-bold text-white">Software Engineer</strong>
          {" />"}
        </p>
        <a
          class="w-46 h-11.5 bg-white text-gray-900 text-center py-3 px-10 rounded-25 font-bold hover:filter-brightness-[0.8]"
          href="/downloads/lucasviga-frontend-se.pdf"
          download
        >
          Download CV
        </a>
      </header>

      <ul class="xl:max-w-[1120px] 2xl:max-w-[1520px] mt-25 mx-8.5 mb-16 xl:my-25 xl:mx-auto">
        <li>
          <div className="experience-details">
            <h2>Front-end Software Engineer</h2>
            <span>Contract</span>
            <time>Jan 2020 - Present</time>
            <address>Manaus, AM, Brazil</address>
          </div>

          <div className="experience-activity">
            <h3>Grupo Clickip Tecnologia</h3>
            <p>Click IP is a Internet provider holding.</p>

            <p>
              • Developed React web app to avoid overloading the call center
              during Internet issues. (Vite, Zustand, Chakra UI). On average, we
              reduced support tickets by 35% during a network issue.
            </p>
            <p>
              • Developed React web app to document all router models used by
              the company. (Next.JS, Zustand, Tailwind). Reducing the use of
              spreadsheets.
            </p>
            <p>
              • Developed React Native app for customers to get Bills, see
              contracts info, data used, and report payments. (React Native CLI,
              Styled Components, Context API).
            </p>
            <p>
              • Helped the team to implement Unit Test with Jest and React
              Testing Library for Front-End applications.
            </p>

            <p>Main activities:</p>
            <p>
              • Led the development team Squad, and mentored Front-End juniors
              developers. (JavaScript, React JS and React Native).
            </p>
            <p>• Designed interfaces for web and mobile apps using Figma.</p>
            <p>
              • Published the first company&apos;s React Native app on Google
              Play and App Store.
            </p>
            <p>
              • Automated deployments for frontend and backend projects using
              GitHub Actions.
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
}
