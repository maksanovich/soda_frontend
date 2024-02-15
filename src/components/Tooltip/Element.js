export default function ElementTooltop({ element, children }) {
    return (
        <div className="dolphin relative flex">
            {children}
            <div className="absolute top-14 scale-0 transition-all rounded bg-gray-50 p-2 text-xs text-black dolphin-hover:scale-100">
                {element}
            </div>
        </div>
    )
}