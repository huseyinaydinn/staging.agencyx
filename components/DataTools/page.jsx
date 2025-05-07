import React from "react";
import { FiUsers, FiGift, FiBookOpen, FiCreditCard } from "react-icons/fi";
import { TbUsersPlus } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { GiSettingsKnobs } from "react-icons/gi";
import { LiaWrenchSolid } from "react-icons/lia";

const DataTools = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-2 md:px-0 py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2 text-gray-100">
        Every Tool <span className="text-blue-300">You Wish You Had</span>
      </h2>
      <h3 className="text-xl md:text-2xl font-light text-center mb-8 text-gray-300">— Already Built</h3>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  grid-rows-1 lg:grid-rows-2 gap-4">
        {/* AI Agents Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col lg:col-span-2 lg:row-span-2 min-h-[220px] lg:min-h-[280px] min-w-[180px] lg:min-w-[340px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.1)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-lg font-semibold text-gray-100">AI Agents</span>
            <FiUsers className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-sm text-gray-400 mb-2 block relative z-20">Voice, chat, and smart replies — 24/7</span>
          <div className="flex flex-col gap-2 mt-4 relative z-20">
            <button className="w-full flex items-center gap-2 bg-[#23252C] hover:bg-[#23252C]/80 transition rounded-lg px-3 py-2 text-xs text-left text-gray-200 shadow-[inset_0_2px_8px_0_rgba(156,163,175,0.35)]">
              <TbUsersPlus  className="text-gray-400" /> Assign to Jordan Blake <span className="ml-2"><span className="rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_6px_2px_rgba(250,204,21,0.7)] bg-white"><img src="/avatar.png" alt="" className="w-5 h-5 rounded-full" /></span></span>
            </button>
            <button className="w-full flex items-center gap-2 bg-[#23252C] hover:bg-[#23252C]/80 transition rounded-lg px-3 py-2 text-xs text-left text-gray-200 shadow-[inset_0_2px_8px_0_rgba(156,163,175,0.35)]">
              <TbUsersPlus  className="text-gray-400" /> Assign to Jordan Blake <span className="ml-2"><span className="rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_6px_2px_rgba(250,204,21,0.7)] bg-white"><img src="/avatar.png" alt="" className="w-5 h-5 rounded-full" /></span></span>
            </button>
            <button className="w-full flex items-center gap-2 bg-[#23252C] hover:bg-[#23252C]/80 transition rounded-lg px-3 py-2 text-xs text-left text-gray-200 shadow-[inset_0_2px_8px_0_rgba(156,163,175,0.35)]">
              <TbUsersPlus  className="text-gray-400" /> Assign to Jordan Blake <span className="ml-2"><span className="rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_6px_2px_rgba(250,204,21,0.7)] bg-white"><img src="/avatar.png" alt="" className="w-5 h-5 rounded-full" /></span></span>
            </button>
          </div>
        </div>
        {/* CRM Dashboard Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col lg:col-span-1 lg:row-span-2 min-h-[180px] lg:min-h-[280px] min-w-[160px] lg:min-w-[220px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-lg font-semibold text-gray-100">CRM Dashboard</span>
            <CgScreen  className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-sm text-gray-400 mb-2 block relative z-20">Full customer context in one view</span>
        </div>
        {/* Loyalty Engine Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col lg:col-span-1 lg:row-span-2 min-h-[180px] lg:min-h-[280px] min-w-[160px] lg:min-w-[220px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-lg font-semibold text-gray-100">Loyalty Engine</span>
            <FiGift className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-sm text-gray-400 mb-2 block relative z-20">Points, rewards, tiers — powered by logic</span>
        </div>
        {/* Workflow Builder Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100">Workflow Builder</span>
            <GiSettingsKnobs className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20">Drag, drop, done</span>
        </div>
        {/* Knowledge Base Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100">Knowledge Base</span>
            <FiBookOpen className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20">Train your AI once. Scale it forever</span>
        </div>
        {/* Admin Controls Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100">Admin Controls</span>
            <LiaWrenchSolid  className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20">Total Visibility & override tools</span>
        </div>
        {/* Billing / Access Card */}
        <div className="bg-black border border-[#23252C] rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100">Billing / Access</span>
            <FiCreditCard className="text-lg text-gray-300 ml-auto" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20">Plans, roles, usage — all simplified</span>
        </div>
      </div>
    </section>
  );
};

export default DataTools;