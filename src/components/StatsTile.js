export default function StatsTile (props) {
    return (
        <div className="bg-light-bg p-2 my-7 rounded-2xl">
            <h1 className="text-2xl font-semibold text-grey text-center">{props.org}</h1>
            <div className="flex items-center justify-center gap-12">
                {props.stats.map((item) => {
                    return (
                        <div>
                            <h1 className="text-6xl font-semibold text-neon mt-6 text-center">{item.num}</h1>
                            <h1 className="text-1xl text-grey text-center">{item.subtext}</h1>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}