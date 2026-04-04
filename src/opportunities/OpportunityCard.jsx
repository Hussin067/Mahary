import React from 'react';
import { Building2, MapPin, Clock, CircleDollarSign, Calendar, ExternalLink, Star } from 'lucide-react';

const OpportunityCard = ({ 
  title, company, location, matchPercentage, description, 
  skills, type, duration, salary, posted, isRemote 
}) => {
  const isHighMatch = matchPercentage >= 85;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center border border-border flex-shrink-0">
            <Building2 className="text-muted-foreground" size={24} />
          </div>
          
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">
                {title}
              </h3>
              {isRemote && (
                <span className="bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Remote
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1 mb-3">
              <span className="flex items-center gap-1"><Building2 size={14} /> {company}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-muted border border-border text-muted-foreground text-xs px-2.5 py-1 rounded-md font-medium group-hover:bg-background transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
              <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                {type}
              </span>
              <span className="flex items-center gap-1"><Clock size={14} /> {duration}</span>
              <span className="flex items-center gap-1"><CircleDollarSign size={14} /> {salary}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {posted}</span>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col justify-between items-end gap-4 min-w-[120px] border-t md:border-t-0 pt-4 md:pt-0 border-border">
          <div className={`flex items-center gap-1 text-lg font-bold ${isHighMatch ? 'text-green-500' : 'text-blue-500'}`}>
            <Star size={18} fill="currentColor" />
            {matchPercentage}%
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-foreground text-background px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 active:scale-95 transition-all duration-300 shadow-sm">
              Apply Now
            </button>
            <button className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground active:scale-95 transition-all duration-300">
              Save
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OpportunityCard;