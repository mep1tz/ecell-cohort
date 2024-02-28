const CompanyCards = ({companyName, jobTitle, companyDescription, jobDescription, requiredSkills, logo}) =>{
    return(
        <section class="overflow-hidden bg-white">
        <div class="mx-auto max-w-5xl px-5 py-24">
            <div class="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
                
                alt="Nike Air Max 21A"
                class="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2 border-4 border-yellow-500"
                src={logo}
            />
            <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h2 class="text-2xl font-bold tracking-widest  text-gray-500">
                    {companyName}
                </h2>
                <h2 class="my-4 text-xl font-semibold text-black">{jobTitle}</h2>
                <h2 class="my-4 text-xs font-semibold text-black">{jobDescription}</h2>
                <h1 class="my-4 text-xs font-semibold text-black">{companyDescription}</h1>
                
                <h2 class="my-4 text-xs font-semibold text-black">{requiredSkills}</h2>
                <div class="mb-5 mt-6 flex items-center border-b-2 border-yellow-500     pb-5">   
                </div>
                <div class="flex flex-col items-center justify-between">
                <button
                    type="button"
                    className="rounded-md bg-yellow-500 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Apply
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}

export default CompanyCards