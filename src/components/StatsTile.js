export default function StatsTile (props) {
    return (
        <div className="bg-light-bg p-2 my-8 rounded-2xl">
            <h1 className="text-2xl font-semibold text-grey text-center">{props.org}</h1>
            <div className="flex items-center justify-center gap-12">
            <div className="bg-">
                <h1 className="text-6xl font-semibold text-neon mt-6 text-center">400</h1>
                <h1 className="text-1xl text-grey text-center">hackers</h1>
            </div>

            <div className="bg-">
                <h1 className="text-6xl font-semibold text-neon mt-6 text-center">80%</h1>
                <h1 className="text-1xl text-grey text-center">hacker retention rate</h1>
            </div>

            <div className="bg-">
                <h1 className="text-6xl font-semibold text-neon mt-6 text-center">$40,000</h1>
                <h1 className="text-1xl text-grey text-center">raised in sponsorships</h1>
            </div>

            </div>
        </div>
    )
}