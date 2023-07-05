import devIcon from "devicon";

export default function Skill() {
  return (
    <>
      <div id="skill" className="text-4xl mt-10 pt-10">
        <h1 className="mb-5 font-semibold">Skills</h1>
        <div>
          <h2 className="text-2xl mb-2">Front End</h2>
          <div className="skills mb-10 lg:w-11/12 text-8xl mx-auto flex flex-wrap items-center justify-center gap-10">
            <i className="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-tailwindcss-original-wordmark"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i class="devicon-redux-original"></i>
            <i class="devicon-nextjs-okriginal-wordmark"></i>
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-materialui-plain"></i>
          </div>
        </div>
        <h2 className="text-2xl mb-2">Back End</h2>
        <div className="skills mb-10 lg:w-11/12 text-8xl mx-auto flex flex-wrap items-center justify-center gap-10">
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i class="devicon-express-original"></i>
          <i class="devicon-postgresql-plain-wordmark"></i>
          <i class="devicon-sequelize-plain-wordmark"></i>

          <i class="devicon-jest-plain"></i>
        </div>

        <h2 className="text-2xl mb-2">Tools</h2>
        <div className="skills mb-10 lg:w-11/12 text-8xl mx-auto flex flex-wrap items-center justify-center gap-10">
          <i class="devicon-git-plain-wordmark"></i>
          <i class="devicon-github-original-wordmark"></i>
          <i class="devicon-trello-plain"></i>
        </div>
      </div>
    </>
  );
}
