import ProjectCard from "./ProjectCard"

const Projects = () => {
    const projects= [
        {
            title : "My Intellect",
            year: 2023,
            columns:1,
            url: "//images.ctfassets.net/g6o2flkpydd9/5ImVfFofLeIWSYiFYi0ztc/afd25f52a4efd43b49e4ef51290658cf/myintellectapp_mockup2_2x.jpg"
        },
        {
            title : "Intellectica Online",
            year: 2023,
            columns:2,
            url:"//images.ctfassets.net/g6o2flkpydd9/5J6stIym1cw05HRocj9DxY/054a0a7d7b57ac6ea0c349bb94b1349f/02_copy.png" 
        },
        {
            title : "Intellectica Online",
            year: 2023,
            columns:2,
            url:"//images.ctfassets.net/g6o2flkpydd9/5J6stIym1cw05HRocj9DxY/054a0a7d7b57ac6ea0c349bb94b1349f/02_copy.png" 
        },
        {
            title : "My Intellect",
            year: 2023,
            columns:1,
            url: "//images.ctfassets.net/g6o2flkpydd9/5ImVfFofLeIWSYiFYi0ztc/afd25f52a4efd43b49e4ef51290658cf/myintellectapp_mockup2_2x.jpg"
        },
        {
            title : "Intellectica Online",
            year: 2022,
            columns:3,
            url:"//images.ctfassets.net/g6o2flkpydd9/5J6stIym1cw05HRocj9DxY/054a0a7d7b57ac6ea0c349bb94b1349f/02_copy.png" 
        },
    ]

  return (
    <section className='bg-white py-10 lg:py-20 px-5'>
        <div className="container mx-auto">
            <header className="flex flex-row items-center lg:space-x-10 lg:space-y-5 justify-between mb-10">
                <h2 className="text-3xl lg:text-6xl font-bold flex-shrink">Projects</h2>
                <span className="flex-1 bg-gray-200 w-96 h-px hidden lg:flex"></span>
                <button className="bg-[#3EC091] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 group w-32 fade-in">
                    <span>See all</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300" data-v-055a3525="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-v-055a3525=""></path>
                    </svg>
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {projects?.map((project, index)=>
                    <ProjectCard 
                        key={index} 
                        title={project.title}
                        year={project.year}
                        url={project.url} 
                        columns={project.columns} 
                        widthInfo={project.columns === 1 ? "[92.5]" : "1/2"}
                    />
                )}
            </div>
        </div>
    </section>
  )
}

export default Projects