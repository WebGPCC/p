const Hero = () => {
  return (
    <header id="hero" className="bg-cover h-screen flex flex-col items-center justify-center header">
        <h1 className="
            leading-tight 
            text-5xl 
            lg:text-[70px] 
            xl:text-[90px] 
            2xl:text-[120px] 
            xl:max-w-8xl 
            2xl:max-w-8xl 
            font-bold 
            text-center 
            text-[#ffffffd9] 
            lg:space-x-7 
            hover:blur-sm 
            transition-all duration-300"
        >
            Blurring the line between art and technology
        </h1>
        <p className="text-[#ffffffd9] text-xl mt-5 px-5 flex flex-col text-center">
            <span>Fundamental Studio is a modern digital company, offering different kind of services at your disposal.</span> 
            <span>We are your trustworthy partner.</span>
        </p>
    </header>
  )
}

export default Hero