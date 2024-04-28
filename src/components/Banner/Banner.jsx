import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className="relative z-20 mt-5">
            <div className="carousel w-full lg:h-[600px] rounded-2xl ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/v40jM9H/banner3-jpg.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zJSMJnq/banner2-jpg.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G0PcZmx/banner1-jpg.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="lg:ml-[400px] md:ml-[120px] text-center absolute text-slate-600 md:-mt-[430px]  bg-white/60 lg:p-6 md:p-4 rounded-xl">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6 text-black">Find exactly what you need, anywhere in the world with free cancellation options.</p>
                    <button className="btn rounded-none bg-orange-500 border-none text-white text-lg px-8 "><Link to="/all">Explore Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;