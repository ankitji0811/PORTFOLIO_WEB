

const Project = (props) => {

    const {img, head, detail, anchor } = props;

  return (
    <a href={anchor} className="flex flex-col cursor-pointer ">
                <img className="w-[300px] h-[300px] shadow-md mb-3" src={img}/>

                <h2 className="font-bold text-xl font-Rubik">{head}</h2>
                <p  className="text-gray-600 font-mono text-lg">{detail}</p>
            </a>
  )
}

export default Project