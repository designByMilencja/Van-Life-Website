import React from "react";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../../style.js";

const Build = () => {
    return (<>
            <section id="build"
                     className=" h-[100%] mt-[100px] ss:mt-[200px] sm:mt-[240px] md:mt-[200px] glass rounded-lg relative">
                <div>
                    <h3 className="font-poppins font-semibold hover:animate-pulse xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white pt-[30px] mx-2 md:mx-[50px]">Before
                        travelling</h3>
                    <div className="absolute z-[0] w-[40%] h-[15%] top-60 pink__gradient"></div>
                    <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                    <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="ml-[80px] sm:mb-0 flex-col justify-center items-center p-4">
                        <Carousel className="p-2 text-white max-w-[500px]">
                            <div>
                                <img src="src/assets/bus/wojciech/w2.JPG" alt="sitting and planning men"/>
                                <p className="legend">Planning...</p>
                            </div>

                            <div>
                                <img src="src/assets/bus/floor/IMG_4702.jpeg"
                                     alt="man gluing plywood on the floor"/>
                                <p className="legend">Gluing plywood on the floor...</p>
                            </div>

                            <div>
                                <img src="src/assets/bus/floor/IMG_4703.jpeg" alt="plywood flooring in the van"/>
                                <p className="legend">Plywood flooring in the van ...</p>
                            </div>

                            <div>
                                <img src="src/assets/bus/floor/IMG_4704.jpeg" alt="gluing plywood on the floor"/>
                                <p className="legend">A durable and natural finish...</p>
                            </div>
                            <div>
                                <img src="src/assets/bus/floor/IMG_4705.jpeg" alt="gluing plywood on the floor"/>
                                <p className="legend">Bonded plywood as van flooring...</p>
                            </div>

                            <div>
                                <img src="src/assets/bus/floor/IMG_4706.jpeg" alt="finish gluing plywood on the floor"/>
                                <p className="legend">A solid foundation...</p>
                            </div>
                        </Carousel>
                        <div className="p-[30px]">
                            <p className="text-white max-w-[400px]"> Converting a bus to a camper is quite an extensive
                                and stressful issue, in addition, each arrangement branches out into more and more
                                additional small cases. Such a scheme causes a lot of unplanned events and nerves.</p>
                        </div>
                    </div>
                    <div className="ml-[80px] sm:mb-0 flex-col justify-center items-center p-4">
                        <div className="p-[30px]">
                            <p className="text-white max-w-[400px]"> We started with a visit to Bialystok where we
                                purchased a 2015 Mercedes sprinter. Since then, two years have passed before we set out,
                                even though the
                                plans were to leave within 6 months. In the photo, the main hero of the first days of
                                the renovation, when we stripped the floor and rust was literally everywhere, of course,
                                the priority was to get rid of it as soon as possible, with the help of a rust
                                remover</p>
                        </div>
                        <Carousel className="p-2 max-w-[500px]">
                            <div>
                                <img className="py-2" src="src/assets/bus/products/IMG_4690.jpeg"
                                     alt="product for remove rust"/>
                                <p className="legend">Powerful rust removal solutions...</p>
                            </div>

                            <div>
                                <img className="py-2" src="src/assets/bus/rust/before1.jpeg" alt="rust on the floor of camper van"/>
                                <p className="legend">Difficult battle with rust ...</p>
                            </div>

                            <div>
                                <img className="py-2" src="src/assets/bus/rust/before2.jpeg" alt="rust on the floor of camper van"/>
                                <p className="legend">Safe and efficient rust removal ...</p>
                            </div>

                            <div>
                                <img className="py-2" src="src/assets/bus/rust/inProgress1.jpeg" alt="half of the floor free of rust"/>
                                <p className="legend">Before and after effect...</p>
                            </div>

                            <div>
                                <img className="py-2" src="src/assets/bus/painting/IMG_4683.jpeg"
                                     alt="chair inside elements"/>
                                <p className="legend">car chair before painting inside... </p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/painting/IMG_4681.jpeg"
                                     alt="chair elements before painting"/>
                                <p className="legend">car chair before painting outside... </p>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="ml-[80px] sm:mb-0 flex-col justify-center items-center p-4">
                        <Carousel className="p-2 text-white max-w-[500px]">
                            <div>
                                <img className="py-2" src="src/assets/bus/cut/tyl.JPG" alt="back view when we cut window"/>
                                <p className="legend">Back view with the roof window cut out...</p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/cut/IMG_4913.jpeg" alt="cut large roof window in the end of the wall"/>
                                <p className="legend">Cut large roof window...</p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/cut/IMG_4915.jpeg" alt="cut window in the middle of the wall"/>
                                <p className="legend">Cut small roof window with windmill...</p>
                            </div>
                        </Carousel>
                        <div className="p-[30px]">
                            <p className="text-white max-w-[400px]"> Every day it got better and better, that's why you
                                should never give up, even if the effects are not immediate. You can see how each day we
                                got closer to the goal of the trip. The photos above show the most demanding part of the
                                work, i.e. innocent-looking cutouts.</p>
                        </div>
                    </div>
                    <div className="ml-[80px] sm:mb-0 flex-col justify-center items-center p-4">
                        <div className="p-[30px]">
                            <p className="text-white max-w-[400px]">This is where we started building furniture, our
                                goal was to create unique and personalized home decor pieces. We wanted to customize the
                                design, size and materials to perfectly match the furniture to the camper. The idea was
                                an economical way to save money, we wanted to use special lightweight materials and save
                                on the cost of buying ready-made furniture.</p>
                        </div>
                        <Carousel className="p-2 max-w-[500px]">
                            <div>
                                <img className="py-2" src="src/assets/bus/wood/wood.JPG" alt="carpentry shop - source of materials"/>
                                <p className="legend">Carpentry shop where we sourced materials</p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/furniture/IMG_5214.JPG" alt="front frame of kitchen"/>
                                <p className="legend">front of kitchen with furniture frame</p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/furniture/IMG_5215.JPG" alt="furniture frame"/>
                                <p className="legend">View of furniture - kitchen and bathroom frame...</p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/furniture/IMG_5216.JPG" alt="view frame of furniture in our future bedroom"/>
                                <p className="legend">View of back our bedroom...</p>
                            </div>
                            <div>
                                <img className="py-2" src="src/assets/bus/alufox/bok.JPG" alt="back view of camper with cut side window"/>
                                <p className="legend">side of camper with plywood and cut out side window...</p>
                            </div>
                        </Carousel>
                    </div>
                </div>


            </section>

            <div className="text-center my-5">
                <h2 className={`${styles.heading2} p-5`}>
                    Be careful! Building steps - <span className="text-gradient"> are not easy </span> at all
                </h2>
            </div>
        </>

    )
}
export default Build
