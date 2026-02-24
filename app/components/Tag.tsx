type TagProps = {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <div className="w-auto pr-4 pl-4 h-10 rounded-full bg-gray-500/10 text-slate-900 flex self-center mt-10">
      <span className="h-5.5 m-auto font-semibold" id="about">
        { text }
      </span>
    </div>
  );
}
