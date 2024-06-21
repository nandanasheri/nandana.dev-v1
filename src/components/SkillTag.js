export default function SkillTag(props) {
    return (
        <div className="border border-2 rounded-3xl border-neon bg-light-bg h-auto">
            <h1 className="text-neon p-2 px-4 text-center font-regular">{props.tag}</h1>
        </div>
    )
}