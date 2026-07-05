
import React from 'react';

const SkillGroup: React.FC<{ title: string; skills: string[]; color: string; dotColor: string }> = ({ title, skills, color, dotColor }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
      <h5 className={`text-[10px] font-bold uppercase tracking-widest ${color}`}>{title}</h5>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1.5 rounded-xl bg-gray-100/80 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 text-xs font-mono border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/40 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const SkillsCard: React.FC = () => {
  return (
    <div className="glass rounded-3xl p-8 flex flex-col h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        <SkillGroup
          title="Cloud"
          skills={['Azure Portal', 'Azure DevOps', 'AWS', 'Terraform']}
          color="text-blue-600 dark:text-blue-400"
          dotColor="bg-blue-500"
        />
        <SkillGroup
          title="AI & MLOps"
          skills={['MLOps', 'YOLOv8', 'OpenCV', 'RAG', 'Llama']}
          color="text-purple-600 dark:text-purple-400"
          dotColor="bg-purple-500"
        />
        <SkillGroup
          title="Engineering Tooling"
          skills={['Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Bash']}
          color="text-emerald-600 dark:text-accent-400"
          dotColor="bg-emerald-500 dark:bg-accent-500"
        />
        <SkillGroup
          title="Languages"
          skills={['Python', 'Go', 'TypeScript', 'Java', 'SQL']}
          color="text-amber-600 dark:text-amber-400"
          dotColor="bg-amber-500"
        />
      </div>
    </div>
  );
};
