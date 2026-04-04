import React from 'react';
import { BadgeCheck } from 'lucide-react';

const SkillItem = ({ name, percentage, level, type, endorsements, acquired, lastUpdated }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group">
      
      
      <div className="flex justify-between items-start mb-6">
        <div>
          
          <h4 className="text-xl font-bold flex items-center gap-2 text-foreground group-hover:text-blue-500 transition-colors duration-300">
            {name} 
            <BadgeCheck size={20} className="text-blue-500" />
          </h4>
          
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-2 font-medium">
            <span className="bg-muted px-2.5 py-1 rounded-md text-muted-foreground">
              {type}
            </span>
            <span>•</span>
            <span>{endorsements} endorsements</span>
            <span>•</span>
            <span>Acquired: {acquired}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-green-500">{percentage}%</div>
          <div className="text-xs text-muted-foreground font-medium">{level}</div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">
          <span>Proficiency</span>
          <span>Last updated: {lastUpdated}</span>
        </div>
        
        <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out group-hover:scale-y-110 group-hover:bg-blue-500" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

    </div>
  );
};

export default SkillItem;