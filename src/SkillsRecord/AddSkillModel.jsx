import React from 'react';
import { X } from 'lucide-react';

const AddSkillModal = ({ isOpen, onClose }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    // The dark blurred background overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* The Modal Box */}
      <div className="bg-card w-full max-w-md rounded-2xl border border-border shadow-2xl relative animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Add New Skill</h2>
          <p className="text-sm text-muted-foreground mt-1">Record a new skill you've acquired</p>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 space-y-4">
          
          {/* Skill Name Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-foreground">Skill Name</label>
            <input 
              type="text" 
              placeholder="e.g., JavaScript" 
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors duration-300"
            />
          </div>

          {/* Category Select */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-foreground">Category</label>
            <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none transition-colors duration-300">
              <option value="">Select category</option>
              <option value="technical">Technical</option>
              <option value="soft">Soft Skills</option>
              <option value="creative">Creative</option>
            </select>
          </div>

          {/* Proficiency Level */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-foreground">Proficiency Level (%)</label>
            <input 
              type="number" 
              placeholder="75" 
              min="0" max="100"
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors duration-300"
            />
          </div>

          {/* Source/Course Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-foreground">Source/Course</label>
            <input 
              type="text" 
              placeholder="e.g., CS101 Course" 
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors duration-300"
            />
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 pt-2">
          <button className="w-full py-3 bg-foreground text-background font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300 shadow-md">
            Add Skill
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddSkillModal;