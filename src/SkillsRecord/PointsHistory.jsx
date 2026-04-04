import React from 'react';
import { History, PlusCircle } from 'lucide-react';

const PointsHistory = ({ onRequestClick }) => {
  
  const historyData = [
    { title: "Category A Award", category: "Awards", date: "Mar 15, 2026", points: 300 },
    { title: "Workshop Supporting Role", category: "Student Activities", date: "Feb 10, 2026", points: 100 }
  ];

  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 rounded-2xl shadow-sm dark:shadow-none p-6">
      
      
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-50 dark:bg-teal-500/10 rounded-lg">
            <History className="text-teal-600 dark:text-teal-400" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Points History</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track where you earned your 400 KFU SkillPoints.</p>
          </div>
        </div>
        
        
        <button 
          onClick={onRequestClick}
          className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md shadow-teal-500/20"
        >
          <PlusCircle size={18} /> Request Points
        </button>
      </div>

      
      <div className="space-y-3">
        {historyData.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-[#0f172a]/50 border border-gray-100 dark:border-white/5 rounded-xl">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.category} • {item.date}</p>
            </div>
            <div className="font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 px-3 py-1 rounded-full text-sm">
              +{item.points}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PointsHistory;