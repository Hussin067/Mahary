import React from "react"; 
import { Layers, Terminal, Users , Award } from 'lucide-react';
const GeneralCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <SkillStatCard 
        icon={<Layers size={24} className="text-blue-400" />} 
        count="32" 
        label="All Skills" 
        bgColor="bg-blue-500/10"
      />
      <SkillStatCard 
        icon={<Terminal size={24} className="text-green-400" />} 
        count="18" 
        label="Technical" 
        bgColor="bg-green-500/10"
      />
      <SkillStatCard 
        icon={<Users size={24} className="text-purple-400" />} 
        count="10" 
        label="Soft Skills" 
        bgColor="bg-purple-500/10"
      />
      <SkillStatCard
        icon={<Award size={24} className="text-teal-500" />} 
        count="400" 
        label="KFU Skills Points" 
        bgColor="bg-teal-500/10"
      />
      
    </div>
  );
};

const SkillStatCard = ({ icon, count, label, bgColor }) => (
  <div className="bg-card border border-border p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className={`p-3 rounded-xl ${bgColor}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-foreground leading-none group-hover:text-blue-500 transition-colors duration-300">{count}</h3>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  </div>
)

export default GeneralCard;