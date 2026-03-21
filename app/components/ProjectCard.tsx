import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import Tag from "./Tag";

type ProjectCardProps = {
  title: String;
  description: String,
  tags: string[];
};

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-124 h-112 bg-gray-100 rounded-xl hover:shadow-xl hover:-translate-y-0.5 shadow-lg transition-all duration-300 overflow-hidden group text-slate-900 tracking-wide">
      {/* Bild: obere 2/3 */}
      <div className="h-2/3 w-full overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
          alt="Project Preview"
          className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute w-full h-full bg-gray-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
          <div className="w-full flex self-center justify-center gap-6">
            <FaExternalLinkAlt className="text-black w-14 h-14 bg-white p-3.5 rounded-xl font-light hover:cursor-pointer scale-90 hover:scale-100 duration-300 transition-all" />
            <FaGithub className="text-black w-14 h-14 bg-white p-3.5 rounded-xl font-light hover:cursor-pointer scale-90 hover:scale-100 duration-300 transition-all" />
          </div>
        </div>
      </div>

      {/* Inhalt: untere 1/3 */}
      <div className="h-auto w-full p-4 flex flex-col bg-white">
        <div>
          <h4 className="text-lg font-bold mb-2 group-hover:text-purple-700 transition-all duration-300">{title}</h4>
          <p className="text-gray-600 text-sm mb-3">
            Eine vollständige E-Commerce-Lösung mit Warenkorb, Checkout und Payment-Integration. Modernes Design mit Fokus auf Conversion-...
          </p>
        </div>

        <div className="flex flex-wrap -ml-3">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} className="mt-0! scale-[0.7]" />
          ))}
        </div>
      </div>
    </div>
  );
}
