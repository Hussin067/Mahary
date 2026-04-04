import React from 'react';
import { X, Send } from 'lucide-react';

const RequestPointsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      
     
      <div className="bg-white dark:bg-[#1e293b] w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-200 p-6 md:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
        
       
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Request Skill Points Addition</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Submit evidence to add points to your official KFU Skills Record.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-gray-300">Academic Number</label>
              <input type="text" disabled value="223029214" className="w-full bg-slate-100 dark:bg-white/5 border border-transparent rounded-lg px-4 py-2.5 text-sm text-slate-500 dark:text-gray-500 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-gray-300">Full Name</label>
              <input type="text" disabled value="Hassan Ali Bin Hussein" className="w-full bg-slate-100 dark:bg-white/5 border border-transparent rounded-lg px-4 py-2.5 text-sm text-slate-500 dark:text-gray-500 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-gray-300">College</label>
              <input type="text" disabled value="Computer Sciences & IT" className="w-full bg-slate-100 dark:bg-white/5 border border-transparent rounded-lg px-4 py-2.5 text-sm text-slate-500 dark:text-gray-500 cursor-not-allowed" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-gray-300">Skill Type <span className="text-red-500">*</span></label>
              <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500/50 appearance-none">
                <option value="">Select Skill Type</option>
                <option value="activity">Student Activity</option>
                <option value="award">Award</option>
                <option value="training">Training Course</option>
                <option value="leadership">Leadership Skill</option>
                <option value="volunteer">Volunteer Work</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-gray-300">Attachments <span className="text-red-500">*</span></label>
              <div className="relative">
                <input type="file" className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-slate-900 dark:text-white file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 dark:file:bg-teal-500/10 dark:file:text-teal-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-gray-300">Description</label>
            <textarea rows="3" placeholder="Describe the activity, role, or award..." className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500/50 resize-none"></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button type="button" onClick={onClose} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-lg shadow-teal-500/20">
              <Send size={16} /> Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPointsModal;