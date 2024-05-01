import React from 'react'

const Splits = (props) => {

    let split = props.split;

    return (
        <section className="overflow-hidden">
            <div className={`min-h-screen relative flex ${split.leftRight ? "md:flex-row" : "md:flex-row-reverse"}  flex-col-reverse md:items-end justify-around items-center`}>

                <div
                    data-aos={split.leftRight ? "slide-left" : "slide-right"}
                    data-aos-delay="500"
                    className={`absolute rounded-full  w-8/12  ${split.leftRight ? "right-0 top-[50%] bottom-0 md:w-6/12" : "left-[13rem] top-[20%] md:w-2/12 h-[30rem]"} bg-primaryLinear  -z-10`}
                >
                    <h1 className="rotate-90 absolute top-[25%] md:top-[40%] right-[-39%] md:right-[-15%] text-[#EAF2FA]">
                        {split.firstName}{" "}
                        <span className="text-dark_primary">{split.LastName}</span>
                    </h1>
                </div>

                {/* first col */}
                <div className="pb-16 px-6 pt-5 w-5/12" data-aos="fade-down">
                    <h2>{split.title}</h2>
                    <br />
                    <div className="flex flex-col gap-10 mt-10">
                        {/**  <p>{split.detail}</p>*/}
                        <p>{split.detail.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br /></span>
                        })}</p>
                    </div>
                </div>

                {/* sec col */}
                <div className="md:h-[25rem] h-50">
                    <img
                        src={split.image}
                        data-aos="slide-up"
                        alt="..."
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Splits
