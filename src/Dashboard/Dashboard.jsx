import React from "react";
import {
  GraduationCap,
  Award,
  Target,
  Briefcase,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import SkillBar from "./SkillBar";
import StatCard from "./StatCard";
import ActivityCard from "./ActivityCard";
import { Link } from "react-router-dom";

const Dashboard = ({ userName = "Hassan" }) => {
  return (
    
    <div className="p-4 sm:p-6 md-p8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-foreground">
          Welcome back, <span className="text-blue-500">{userName}!</span>
        </h2>
        <p className="text-muted-foreground mt-1 mb-8">
          Here's your career development overview
        </p>
      </div>

      
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-500/20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-2xl transition-all duration-500">
      
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 bg-black/10 blur-2xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-5 sm:gap-6 w-full md:w-auto">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-inner flex-shrink-0">
            <Award size={40} className="text-yellow-300 drop-shadow-md" />
          </div>
          <div>
            <p className="text-blue-50 font-medium tracking-wide uppercase text-xs sm:text-sm mb-1 opacity-90">Official KFU Skills Points</p>
            <div className="flex items-end gap-2 sm:gap-3">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-none">400</h1>
              <span className="text-blue-100 font-bold mb-1 sm:mb-2 text-base sm:text-lg">PTS</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
          <Link to="/skills" className="px-6 py-3.5 bg-white text-blue-700 hover:text-blue-800 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all active:scale-95 text-center flex-1 md:flex-none hover:shadow-xl flex items-center justify-center gap-2">
            View History
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="GPA"
          value="3.75"
          subtext="out of 4.0"
          icon={<GraduationCap size={20} className="text-blue-400" />}
          colorClass="bg-blue-400/20"
        />
        <StatCard
          title="Skills Acquired"
          value="24"
          subtext="+3 this semester"
          icon={<Award size={20} className="text-green-400" />}
          colorClass="bg-green-400/20"
        />
        <StatCard
          title="Career Score"
          value="85%"
          subtext="Market ready"
          icon={<Target size={20} className="text-purple-400" />}
          colorClass="bg-purple-400/20"
        />
        <StatCard
          title="Opportunities"
          value="12"
          subtext="Matched for you"
          icon={<Briefcase size={20} className="text-orange-400" />}
          colorClass="bg-orange-400/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between mb-6">
              <h3 className="font-bold text-foreground text-lg">Recent Skills</h3>
              <Link to="/skills" className="text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors">
                View All
              </Link>
            </div>

            <div className="space-y-5">
              <SkillBar name="React.js" level={85} type="Technical" />
              <SkillBar name="Data Analysis" level={72} type="Technical" />
              <SkillBar name="Leadership" level={90} type="Soft Skills" />
              <SkillBar name="UI/UX Design" level={68} type="Technical" />
            </div>
          </div>
        </div>

        <div className="bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold text-foreground text-lg">
              Upcoming Milestones
            </h3>
            <Link to="/roadmap" className="text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors">
              View All
            </Link>
          </div>

          <div className="space-y-6">
            <MilestoneItem
              icon={<BookOpen size={16} />}
              title="Complete ML Course"
              date="Apr 15, 2026"
              progress={75}
            />
            <MilestoneItem
              icon={<CheckCircle size={16} />}
              title="Capstone Project"
              date="May 01, 2026"
              progress={40}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-6 ">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-bold text-foreground text-lg">Available Activities & Volunteering</h3>
            <p className="text-muted-foreground text-sm">Enhance your profile with these opportunities</p>
          </div>
          <Link to="/activities" className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-foreground/20">
            View All
          </Link>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActivityCard 
            type="High-Profile Event" 
            typeColor="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
            capacity="Open" 
            icon="🎙️" 
            title="Discussion Session with H.E. Minister of Health" 
            organizer="King Faisal University" 
            date="Apr 01, 2026 - 10:00 AM" 
            location="KFU Main Auditorium" 
          />
          <ActivityCard 
            type="International Conference" 
            typeColor="bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
            capacity="Limited Seats" 
            icon="🤖" 
            title="Int. Conference on Computing & Machine Intelligence" 
            organizer="College of Computer Sciences and IT" 
            date="Apr 08 - 10, 2026" 
            location="KFU Conference Center" 
          />
          <ActivityCard 
            type="Community Service" 
            typeColor="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
            capacity="45/100" 
            icon="🌴" 
            title="Al-Ahsa Oasis Environmental Cleanup" 
            organizer="National Center for Vegetation Cover" 
            date="Apr 15, 2026" 
            location="Al-Ahsa National Park" 
          />
        </div>

      </div>
    </div>
  );
};

const MilestoneItem = ({ icon, title, date, progress }) => (
  <div className="group cursor-pointer">
    <div className="flex gap-4 items-start mb-2">
      <div className="p-2 bg-muted rounded-lg text-muted-foreground group-hover:bg-blue-600/10 group-hover:text-blue-500 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-[10px] text-muted-foreground">Due: {date}</p>
      </div>
    </div>
    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>

);

export default Dashboard;
