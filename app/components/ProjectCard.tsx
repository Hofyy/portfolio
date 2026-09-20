import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import Tag from "./Tag";

type ProjectCardProps = {
  title: String;
  description: String,
  tags: string[];
  imagesrc: string;
  projectlink: string;
  githublink: string;
};

export default function ProjectCard({ title, description, tags, imagesrc, projectlink, githublink }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-124 h-112 bg-gray-100 rounded-xl hover:shadow-xl hover:-translate-y-0.5 shadow-lg transition-all duration-300 overflow-hidden group text-slate-900 tracking-wide">
      {/* Bild: obere 2/3 */}
      <div className="h-2/3 w-full overflow-hidden relative">
        <img
          src={imagesrc}
          alt="Project Preview"
          className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute w-full h-full bg-gray-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
          <div className="w-full flex self-center justify-center gap-6">
            <FaExternalLinkAlt className="text-black w-14 h-14 bg-white p-3.5 rounded-xl font-light hover:cursor-pointer scale-90 hover:scale-100 duration-300 transition-all" href={projectlink} />
            <FaGithub className="text-black w-14 h-14 bg-white p-3.5 rounded-xl font-light hover:cursor-pointer scale-90 hover:scale-100 duration-300 transition-all" href={githublink} />
          </div>
        </div>
      </div>

      {/* Inhalt: untere 1/3 */}
      <div className="h-auto w-full p-4 flex flex-col bg-white">
        <div>
          <h4 className="text-lg font-bold mb-2 group-hover:text-purple-700 transition-all duration-300">{title}</h4>
          <p className="text-gray-600 text-sm mb-3">
            {description}
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
