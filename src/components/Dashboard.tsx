/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  LogOut, 
  Settings, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  History, 
  Bell, 
  Search,
  Plus,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, name: 'Amazon Web Services', type: 'debit', amount: 149.99, date: 'May 12, 2024', category: 'Infrastructure' },
    { id: 2, name: 'Monthly Salary', type: 'credit', amount: 8400.00, date: 'May 10, 2024', category: 'Income' },
    { id: 3, name: 'Uber Eats', type: 'debit', amount: 42.50, date: 'May 09, 2024', category: 'Food' },
    { id: 4, name: 'Apple Store', type: 'debit', amount: 999.00, date: 'May 08, 2024', category: 'Gadget' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex text-slate-900">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden lg:flex w-64 bg-[#0A1128] text-slate-300 flex-col sticky top-0 h-screen overflow-hidden">
        <div className="p-6 flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">M</div>
          <span className="text-xl font-bold text-white tracking-tight">Moniepoint</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
            { id: 'transactions', icon: History, label: 'Transactions' },
            { id: 'transfer', icon: ArrowUpRight, label: 'Transfer Funds' },
            { id: 'bills', icon: Bell, label: 'Bill Payments' },
            { id: 'cards', icon: CreditCard, label: 'Card Management' },
          ].map(item => (
            <button 
              key={item.id}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                item.active 
                ? 'bg-blue-600/10 text-blue-400 group' 
                : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-400' : ''}`} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">JD</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">James Doe</p>
              <p className="text-[10px] opacity-50 uppercase tracking-wider">Business Account</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2 text-red-400/80 hover:text-red-400 text-xs font-semibold hover:bg-red-500/10 rounded-lg transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col bg-[#F9FAFB] h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center bg-slate-100 rounded-md px-3 py-1.5 w-80">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="bg-transparent text-sm outline-none w-full text-slate-600"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-slate-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
              + Create Transaction
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* Welcome Section */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, James</h1>
              <p className="text-slate-500 text-sm">Here's what's happening with your account today.</p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Last login</p>
              <p className="text-sm font-medium">Apr 29, 2024 · 09:41 AM</p>
            </div>
          </div>

          {/* Summary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Wallet Balance Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-slate-500 font-medium">Wallet Balance</p>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">+12.5%</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">₦12,450,200<span className="text-slate-400 font-normal text-xl">.00</span></p>
              <div className="mt-4 flex items-center text-xs text-slate-400">
                <span className="mr-1">Acct No:</span>
                <span className="font-mono font-medium text-slate-600">8124459032</span>
              </div>
            </motion.div>

            {/* Income Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <p className="text-sm text-slate-500 font-medium mb-4">Income (This Month)</p>
              <p className="text-3xl font-bold text-slate-900">₦3,205,000<span className="text-slate-400 font-normal text-xl">.50</span></p>
              <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[65%] text-blue-500"></div>
              </div>
            </motion.div>

            {/* Expenses Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <p className="text-sm text-slate-500 font-medium mb-4">Expenses (This Month)</p>
              <p className="text-3xl font-bold text-red-600">₦940,000<span className="text-red-400 font-normal text-xl">.00</span></p>
              <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-red-400 h-full w-[25%] text-red-400"></div>
              </div>
            </motion.div>
          </div>

          {/* Transactions & Actions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Recent Transactions List */}
            <section className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-[400px]">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <h2 className="font-bold text-slate-800">Recent Transactions</h2>
                <button className="text-xs text-blue-600 font-bold hover:underline">View All</button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] uppercase text-slate-400 tracking-wider bg-slate-50">
                      <th className="px-4 py-2 font-bold">Recipient/Source</th>
                      <th className="px-4 py-2 font-bold">Type</th>
                      <th className="px-4 py-2 font-bold">Amount</th>
                      <th className="px-4 py-2 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { id: 1, name: 'MTN Airtime', type: 'Utility', amount: -5000, date: 'Oct 24, 2023 · 10:12', status: 'Success', initial: 'MT' },
                      { id: 2, name: 'Samuel Okafor', type: 'Transfer', amount: 150000, date: 'Oct 23, 2023 · 18:45', status: 'Success', initial: 'SM', highlight: true },
                      { id: 3, name: 'Eko Electricity', type: 'Utility', amount: -25000, date: 'Oct 23, 2023 · 14:20', status: 'Pending', initial: 'EK' },
                      { id: 4, name: 'Amazon Web', type: 'Infrastructure', amount: -45000, date: 'Oct 22, 2023 · 09:30', status: 'Success', initial: 'AW' },
                    ].map((tx) => (
                      <tr key={tx.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer">
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-[10px] font-bold ${tx.highlight ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                              {tx.initial}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{tx.name}</p>
                              <p className="text-[10px] text-slate-400">{tx.date}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-500 italic text-xs">{tx.type}</td>
                        <td className={`px-4 py-3 font-semibold ${tx.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {tx.amount < 0 ? '-' : '+'}₦{Math.abs(tx.amount).toLocaleString()}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            tx.status === 'Success' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sidebar Actions Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                <h2 className="font-bold text-slate-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '⇄', label: 'Transfer', bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-600' },
                    { icon: '📱', label: 'Airtime', bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-600' },
                    { icon: '💡', label: 'Electricity', bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-600' },
                    { icon: '⚓', label: 'Deposits', bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-600' },
                  ].map((action, i) => (
                    <button key={i} className="flex flex-col items-center justify-center p-4 border border-slate-100 rounded-lg hover:bg-blue-50 transition-colors group">
                      <div className={`w-8 h-8 ${action.bg} ${action.text} rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                        {action.icon}
                      </div>
                      <span className="text-xs font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Account Limit Card */}
              <div className="bg-gradient-to-br from-[#0A1128] to-blue-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
                 <div className="relative z-10">
                   <p className="text-xs opacity-80 uppercase tracking-widest font-bold mb-1">Account Limit</p>
                   <p className="text-lg font-bold">Tier 3 Account</p>
                   <p className="text-[10px] mt-2 text-blue-200">You've used 40% of your daily transfer limit.</p>
                   <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                     <div className="bg-blue-400 h-full w-[40%]"></div>
                   </div>
                 </div>
                 <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Simple helper component
function ChevronRight({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" /></svg>;
}
