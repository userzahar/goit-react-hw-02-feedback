
export function Section({ title, children }) {
    return <div className="section">
        <p className={"section__header"}>{title}</p>
        {children}
    </div>
}