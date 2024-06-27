import { FaCheck } from "react-icons/fa";

const Skill = (props) => {

    const {name} = props;

  return (
    <div className="flex items-center gap-2">
      <FaCheck className="font-extralight" />
      <span className="font-mono font-extralight text-lg text-gray-600 ">
        {name}
      </span>
    </div>
  );
};

export default Skill;
