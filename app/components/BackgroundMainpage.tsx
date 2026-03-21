import React, { useState, useEffect } from 'react';

export const CodeBackground = () => {
  const [text, setText] = useState('');
  const [lineCount, setLineCount] = useState(0);
  const fullCode = `// My frist custom app.
// Please dont hack it

const app = {
  state: { count: 0, items: [] },

  init() { this.el = { btn: document.querySelector("#btn"), out: document.querySelector("#output") }; this.bind(); this.render(); },

  bind() { this.el.btn?.addEventListener("click", () => this.add()); window.addEventListener("resize", () => this.log("resize")); },

  add() { const id = Date.now(); this.state.items.push({ id, text: \`Item \${++this.state.count}\` }); this.render(); },

  remove(id) { this.state.items = this.state.items.filter(i => i.id !== id); this.render(); },

  render() {
    if (!this.el.out) return;
    this.el.out.innerHTML = \`
      <h2>Zähler: \${this.state.count}</h2>
      <ul>
        \${this.state.items.map(i => \`<li data-id="\${i.id}">\${i.text}</li>\`).join("")}
      </ul>\`;
  },

  log(msg) { console.log(\`[\${new Date().toLocaleTimeString()}]\`, msg); }
};

// Utils
const utils = {
  random(min = 0, max = 100) { return Math.floor(Math.random() * (max - min) + min); },
  debounce(fn, delay = 200) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), delay); }; }
};

// Extra Features
document.addEventListener("click", e => { if (e.target.matches("li")) app.remove(Number(e.target.dataset.id)); });

// Init
document.addEventListener("DOMContentLoaded", () => app.init());

// I hope you like my Program
// And also my Portfolio Site :)

console.log("byee");`;

  const highlightCode = (code: string) => {
    return code.split(/(\/\/.*|\bconst\b|\blet\b|\bthis\b|\bdocument\b|\bwindow\b|\bfunction\b|\breturn\b|\bif\b|\bnew\b|'.*?'|`.*?`|".*?"|\d+|[{}[\]().,;]|\n)/g).map((part, index) => part === '\n' ? <br key={index} /> : part.startsWith('//') ? <span key={index} className="text-slate-500 italic">{part}</span> : ['const', 'let', 'function', 'return', 'if', 'new'].includes(part) ? <span key={index} className="text-purple-400">{part}</span> : ['this', 'document', 'window'].includes(part) ? <span key={index} className="text-red-400">{part}</span> : part.match(/^['"`].*['"`]$/) ? <span key={index} className="text-green-400">{part}</span> : part.match(/^\d+$/) ? <span key={index} className="text-orange-400">{part}</span> : part.match(/[{}[\]().,;]/) ? <span key={index} className="text-slate-400">{part}</span> : part);
  };

  useEffect(() => {
    let i = 0; const timer = setInterval(() => { setText(fullCode.slice(0, i)); setLineCount(fullCode.slice(0, i).split('\n').length); i++; if (i > fullCode.length) clearInterval(timer); }, 1);
    return () => clearInterval(timer);
  }, [fullCode]);

  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  useEffect(() => {
    const logs = ["", "$ npm i", "up to date, audited 510 packages in 12s", "191 packages are looking for funding", "      run `npm fund` for details", "3 vulnerabilities (1 moderate, 2 high)", "To address issues, run:", "      npm audit fix", "To address all issues, run:", "      npm audit fix --force", "Run `npm audit` for details.", "", "$ npm run dev", "", "> portfolio@0.1.0 dev", "> next dev", "", "", "▲ Next.js 16.1.6 (Turbopack)", "- Local:         http://localhost:3000", "- Network:       http://26.117.50.64:3000", "- Environments: .env.local", "", "✓ Starting...", "✓ Ready in 14.2s", "", "○ Compiling / ...", "GET / 200 in 4.1s (compile: 3.6s, render: 476ms)"];
    let currentLine = 0; const interval = setInterval(() => { if (currentLine < logs.length) { setTerminalLines(prev => [...prev, logs[currentLine]]); currentLine++; } else { clearInterval(interval); } }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-y-hidden opacity-20 pointer-events-none font-mono text-[10px] hidden md:block sm:text-xs md:text-sm p-10 select-none">
      <div className="absolute right-10 top-10 bottom-10 w-100 bg-slate-950/50 border border-slate-800 p-4 rounded-lg hidden 2xl:flex flex-col overflow-y-auto scrollbar-hide">
        <div className="text-green-500 mb-2">$ terminal</div>
        {terminalLines.map((line, idx) => (<div key={idx} className="text-slate-400 mb-1 truncate"><span className="text-blue-500 mr-2">→</span>{line}</div>))}
      </div>
      <div className="flex gap-2 mb-4 opacity-40"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
      <div className="flex gap-4">
        <div className="text-slate-600 text-right select-none hidden sm:block min-w-[20px]">{Array.from({ length: Math.max(lineCount, 1) }).map((_, i) => (<div key={i}>{i + 1}</div>))}</div>
        <pre className="text-blue-400 flex-1 whitespace-pre">{highlightCode(text)}<span className="animate-pulse border-l-2 border-white ml-1" /></pre>
      </div>
    </div>
  );
};
export default CodeBackground;