import React from 'react';
import { GraduationCap, Award, Target, Briefcase } from 'lucide-react';
const StatCard = ({ title, value, subtext, icon, colorClass }) => (
  <div className="bg-card border border-border p-5 rounded-2xl flex justify-between items-start hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 cursor-default shadow-sm hover:-translate-y-1 group">
    <div>
      <p className="text-muted-foreground text-xs font-medium mb-1 uppercase tracking-wider group-hover:text-blue-500 transition-colors duration-300">{title}</p>
      <h3 className="text-2xl font-bold text-foreground">{value}</h3>
      <p className="text-[10px] text-muted-foreground mt-1">{subtext}</p>
    </div>
    <div className={`p-2 rounded-xl flex items-center justify-center ${colorClass}`}>
      {icon}
    </div>
  </div>
);
export default StatCard; 