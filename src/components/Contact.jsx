

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12">
        <h1 className="font-Rubik text-3xl text-gray-700 font-extrabold mb-10 xl:text-4xl">CONTACT US</h1>

       <form action="">
        <div className="flex flex-col gap-y-8">
            <input className="border border-gray-500 border-solid px-8 py-2 rounded-3xl" type="text" required placeholder="Name"/>
            <input className="border border-gray-500 border-solid px-8 py-2 rounded-3xl" type="email" required placeholder="Email"/>
            <textarea className="border border-gray-500 border-solid px-8 py-2 rounded-3xl " rows={10} cols={40} required placeholder="Message"/>
            
        </div>
        <button className="font-mono bg-blue-600 px-4 py-2 text-xl rounded-xl text-white shadow-lg mt-10 ">Submit</button>
       </form>
    </div>
  )
}

export default Contact