export default function SkillTag(props) {
    return (
        <div className="border border-2 rounded-3xl border-neon bg-light-bg h-auto">
            <h1 className="text-neon p-2 px-7 text-center">{props.tag}</h1>
        </div>
    )
}