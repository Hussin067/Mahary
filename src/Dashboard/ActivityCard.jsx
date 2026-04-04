import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const ActivityCard = ({ type, capacity, icon, title, organizer, date, location, typeColor }) => {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      
     
      <div className="flex justify-between items-center mb-4">
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${typeColor}`}>
          {type}
        </span>
        <div className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
          <Users size={12} />
          <span>{capacity}</span>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-3xl mb-3">{icon}</div> 
        <h3 className="text-foreground font-bold text-[15px] leading-tight mb-1 group-hover:text-blue-500 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs">{organizer}</p>
      </div>

    
      <div className="mt-auto space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Calendar size={14} className="opacity-70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <MapPin size={14} className="opacity-70" />
            <span className="truncate">{location}</span>
          </div>
        </div>
        
        <button className="w-full py-2 bg-foreground text-background font-bold text-sm rounded-lg hover:opacity-90 hover:scale-105 active:scale-[0.98] transition-all duration-300 shadow-sm shadow-foreground/20">
          Register
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;