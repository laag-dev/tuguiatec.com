import React from 'react'

const MagicButton = ({ title, icon, position, otherClasses }: {
    title: string;
    icon: React.ReactNode,
    position: string;
    otherClasses?: string;

}) => {
    return (
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-xl p-[1px] focus:outline-none md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1CDFD8_0%,#081226_50%,#1CDFD8_100%)]" />
            <span className= {`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6 text-md font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton