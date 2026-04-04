import React from 'react';
const SkillBar = ({ name, level, type }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <div>
        <p className="text-foreground font-medium group-hover:text-blue-500 transition-colors duration-300">{name}</p>
        <p className="text-muted-foreground text-[10px]">{type}</p>
      </div>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
      <div 
        className="h-full bg-linear-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);
export default SkillBar;