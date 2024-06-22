import React from 'react'

const HeroFirstSection = () => {
    return (
        <>
            <section className=' relative'>
                <div className="bg-[url('./src/assets/images/wave.svg')] bg-green-900 bg-repeat bg-center h-screen w-full py-24">
                    <div className='flex m-auto max-w-6xl h-full'>
                        <div className=' w-80 h-80 absolute z-40 -top-10 '>
                            <img src="./src/assets/images/gaviota.png" alt="gaviota" />
                        </div>
                        <article className='flex flex-col m-auto items-end px-32 pb-36 text-white text-center'>
                            <h3 className='text-6xl mx-auto font-playfair italic'>Una escapada a Termas!</h3>
                            <p className='text-2xl mb-6 mt-10'>Descubre Termas de Río Hondo, un oasis de bienestar en Argentina. Relájate en sus aguas termales naturales, disfruta de spa de clase mundial, explora la riqueza cultural y deléitate con la gastronomía local.</p>
                            <p className='text-2xl'>
                                Ideal para una escapada rejuvenecedora, Termas de Río Hondo te ofrece una experiencia única de salud y descanso. ¡Ven y revitalízate!</p>
                        </article>
                        <div className='w-80 h-80 absolute -bottom-2 right-24'>
                            <img className='' src="./src/assets/images/garza.png" alt="garza" />
                        </div>
                    </div>
                    <div className='w-full absolute bottom-0 '>
                        <img className='w-full' src="./src/assets/images/chevron.svg" alt="chevron" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroFirstSection