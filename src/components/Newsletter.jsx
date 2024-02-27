 const Newsletter = () => {

    return (
        <section className="py-14 max-w-screen-xl mx-auto">
            <div className="relative h-64 overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-primary/70 md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl text-white font-bold">
                            Subscribe to our newsletter
                        </h3>
                    </div>
                    <div className="mt-6">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2 outline-none"
                            />
                            <button
                                className="p-2 px-3 rounded-lg font-medium text-white bg-orange active:bg-red duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* <div className="absolute inset-0 w-full h-full" ></div> */}
            </div>
        </section>
    )
}
export default Newsletter;