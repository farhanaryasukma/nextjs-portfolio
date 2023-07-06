import React from 'react';
import devIcon from "devicon";


const Skill = () => {
  const skills = [
    {
      title: 'Front End',
      icons: [
        'devicon-html5-plain-wordmark',
        'devicon-css3-plain',
        'devicon-javascript-plain',
        'devicon-tailwindcss-original-wordmark',
        'devicon-react-original-wordmark',
        'devicon-redux-original',
        'devicon-nextjs-okriginal-wordmark',
        'devicon-bootstrap-plain-wordmark',
        'devicon-materialui-plain',
      ],
    },
    {
      title: 'Back End',
      icons: [
        'devicon-nodejs-plain-wordmark',
        'devicon-express-original',
        'devicon-postgresql-plain-wordmark',
        'devicon-sequelize-plain-wordmark',
        'devicon-jest-plain',
      ],
    },
    {
      title: 'Tools',
      icons: [
        'devicon-git-plain-wordmark',
        'devicon-github-original-wordmark',
        'devicon-trello-plain',
      ],
    },
  ];

  const getRandomDelay = () => {
    return Math.floor(Math.random() * 51) * 10;
  };

  return (
    <div id="skill" className="text-4xl mt-10 pt-10">
      <h1 className="mb-5 font-semibold">Skills</h1>
      {skills.map((skill) => (
        <div key={skill.title}>
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="bottom-bottom"
            className="text-2xl mb-2"
          >
            {skill.title}
          </h2>
          <div className="skills mb-10 lg:w-11/12 text-8xl mx-auto flex flex-wrap items-center justify-center gap-10">
            {skill.icons.map((icon) => (
              <i
                key={icon}
                className={icon}
                data-aos="flip-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={getRandomDelay()}
              ></i>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;