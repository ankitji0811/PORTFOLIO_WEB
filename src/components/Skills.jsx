import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="flex flex-col items-center text-center mt-4 pb-3">
      <h1 className="font-Rubik text-3xl text-gray-700 font-extrabold mb-14 xl:text-4xl xl:mt-10">
        SKILLS
      </h1>
      <div className="flex flex-col flex-wrap gap-10">
        <div className=" flex gap-8 border-b border-black ">
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="JAVASCRIPT" />
        </div>

        <div className=" flex flex-wrap gap-8 border-b border-black ">
          <Skill name="REACT" />
          <Skill name="TAILWIND-CSS" />
        </div>
        <div className=" flex flex-wrap gap-8 border-b border-black ">
        <Skill name="GIT" />
        <Skill name="GITHUB" />
        <Skill name="REDUX" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
