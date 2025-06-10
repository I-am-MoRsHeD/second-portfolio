

const Expertise = () => {
    return (
        <div id="expertise" className="mx-3 lg:mx-0 style">
            <div className="border-b-2 border-black">
                <h1 className="text-3xl font-bold">Expert In</h1>
            </div>
            {/* main contant */}
            <div className="flex items-center md:justify-between my-10 md:my-14 lg:my-20 ">
                {/* image */}
                <div className="w-36 md:w-72 lg:w-1/2">
                    <img src="https://i.ibb.co/L8TBKY6/brain2.png" alt="" />
                </div>
                {/* skills info */}
                <div className="space-y-10">
                    {/* 1st step */}
                    <div className="flex lg:gap-10 gap-3 justify-end ">
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/6Yb52PF/html.png" alt="" />
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/f1h7rZY/css.png" alt="" />
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/hYtr4T3/tailwind.png" alt="" />
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/MpmNQPT/js.png" alt="" />
                    </div>
                    <div className="flex justify-end gap-3 lg:gap-10 ">
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/YBvgg2C/nodejs.png" alt="" />

                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/tY5WKWv/react.png" alt="" />
                    </div>
                    <div className="flex justify-end gap-3 lg:gap-10">
                        <img className="w-12 md:w-28 h-12 md:h-24 pb-2" src="https://i.ibb.co/WvfMX6n/mongodb-Logopng.png" alt="" />
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/gwbPbxF/expressjs.png" alt="" />
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/0fc1jWz/jwt.png" alt="" />
                        <img className="w-9 md:w-20 h-9 md:h-20" src="https://i.ibb.co/HVmM90Y/firebase.png" alt="" />
                    </div>
                    {/* 2nd step */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;