import PropTypes from 'prop-types';

const ProjectCard = ({
    title,
    url,
    columns,
    widthInfo,
}) => {
  return (
    <div 
        className={`bg-bottom rounded-xl relative w-full p-5 xl:p-10 flex flex-col min-h-[600px] lg:min-h-[700px] transition-all duration-300 fade-in-fast col-span-3 lg:col-span-${String(columns)}`}
        style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover", 
            translate: "none", 
            rotate: "none", 
            scale: "none", 
            opacity: 1, 
            transform: "translate(0px, 0px)"
        }}
    >
        <a href="#">
            <div className={`absolute rounded-xl p-5 xl:p-10 bg-white bottom-5 right-5 flex xl:flex-col items-center xl:items-start  justify-between group has-motion w-[87.5%] lg:w-${widthInfo}`}>
                <div className='justify-between items-center hidden xl:flex'>
                    <div className="flex items-center space-x-4 justify-ev">
                        <span className="px-3 py-1 rounded items-center" style={{background: "rgb(68, 138, 112)", color: "rgb(255, 255, 255)"}}>
                            UI &amp; UX
                        </span>
                        <span className="px-3 py-1 rounded items-center" style={{background: "rgb(80, 36, 61)", color: "rgb(255, 255, 255)"}}>
                            Development
                        </span>
                        <p>2023</p>
                    </div>
                </div>
                <span className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mt-0 xl:mt-10 lg:flex">
                    {title}
                </span>
                <button className="text-lg transition-all duration-300 bg-[#3EC091] text-white flex-shrink py-2 px-4 lg:py-3 lg:px-6 rounded font-bold flex items-center space-x-2  hover:opacity-80 group lg:mt-5">
                    <span>See all</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300" data-v-055a3525="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-v-055a3525=""></path>
                    </svg>
                </button>
            </div>
        </a>
    </div>
  )
}

ProjectCard.propTypes  = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    columns: PropTypes.number.isRequired,
    widthInfo : PropTypes.string.isRequired,
}

export default ProjectCard