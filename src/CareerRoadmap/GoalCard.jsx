import React from 'react';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

const GoalCard = ({ title, tag, tagColor, targetDate, progress, milestones }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-6 transition-all duration-300 hover:shadow-lg">
      
    
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${tagColor}`}>
              {tag}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <Calendar size={16} />
            <span>Target: {targetDate}</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground mb-1">{progress}%</div>
          <div className="text-xs text-muted-foreground">Complete</div>
        </div>
      </div>

      
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-foreground rounded-full transition-all duration-1000" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

     
      <div>
        <p className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wider">Milestones</p>
        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
             
              className="bg-background border border-border/50 rounded-xl p-4 flex items-center gap-3 hover:bg-muted transition-colors duration-300"
            >
              {milestone.isCompleted ? (
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
              ) : (
                <Circle size={20} className="text-gray-400 shrink-0" />
              )}
              
              <div className="flex-1">
                <span className={`text-sm font-semibold ${milestone.isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {milestone.text}
                </span>
                
                {milestone.subText && !milestone.isCompleted && (
                  <p className="text-xs text-muted-foreground mt-1">{milestone.subText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default GoalCard;