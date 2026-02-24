import { JSX } from "react";

type iconProps = {
  icon: JSX.Element,
  href: string,
  target: string
}

export default function Icon({ icon, href, target }: iconProps) {
  return (
    <div className="border rounded-xl w-10 h-10 border-gray-500 flex items-center justify-center
                  bg-gray-500/50 hover:bg-gray-700/20 transition-all transform duration-400 hover:scale-105">
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center"
      >
        { icon }
      </a>
    </div>
  )
}