import Image from "next/image"

const MyProfilePic = () => {
    return (
        <section className="w-full flex justify-center py-10">
            <div className="relative">
                <Image
                    className="rounded-full border-4 border-white dark:border-slate-800 shadow-xl object-cover transition-transform duration-300 hover:scale-105"
                    src="/images/image.png"
                    width={220}
                    height={220}
                    alt="Subin Kumar"
                    priority
                />

                {/* subtle gradient ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 blur-2xl -z-10"></div>
            </div>
        </section>
    )
}

export default MyProfilePic