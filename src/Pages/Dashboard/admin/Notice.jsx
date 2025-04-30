import { EnvelopeIcon, DocumentTextIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "lucide-react";

const Notice = () => {
  const notices = [
    {
      id: 1,
      date: "TODAY",
      title: "School Reopening Announcement",
      description: "All classes will resume from Monday, 15th January. Please ensure students bring their winter uniforms.",
    },
    {
      id: 2,
      date: "YESTERDAY",
      title: "Parent-Teacher Meeting",
      description: "Scheduled for Saturday, 20th January from 10 AM to 1 PM in the school auditorium.",
    },
    {
      id: 3,
      date: "JAN 10",
      title: "Annual Sports Day",
      description: "Sports day will be held on 25th January. Students should report by 7:30 AM in their respective house uniforms.",
    },
    {
      id: 4,
      date: "JAN 5",
      title: "Examination Schedule",
      description: "Mid-term examinations will begin from 1st February. The detailed timetable is posted on the notice board.",
    },
    {
      id: 5,
      date: "DEC 28",
      title: "Winter Vacation",
      description: "School will remain closed for winter break from 25th December to 5th January.",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Notice Input Form - Design Only */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Notice</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter notice title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter notice description"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md">
              Cancel
            </button>
            <button className="px-4 py-2 text-purple-700 hover:text-white hover:bg-blue-300 bg-blue-gray-50 bg-emerald-500 hover:bg-emerald-600 rounded-md flex items-center gap-2">
              <DocumentTextIcon className="h-5 w-5" />
              Post Notice
            </button>
          </div>
        </div>
      </div>

      {/* Notice List */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BellAlertIcon className="h-8 w-8 text-blue-500" />
            School Notices
          </h1>
        </div>

        <div className="space-y-8">
          {notices.map((notice) => (
            <div key={notice.id} className="group relative py-6 pl-8 sm:pl-32">
              <div className="mb-1 flex flex-col items-start 
                  before:absolute before:left-2 before:h-full before:-translate-x-1/2 
                  before:translate-y-3 before:self-start before:bg-blue-gray-200 before:px-px 
                  after:absolute after:left-2 after:box-content after:h-3 after:w-3 
                  after:-translate-x-1/2 after:translate-y-2 after:rounded-full 
                  after:border-4 after:border-white after:bg-emerald-500 
                  group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                <time className="left-0 mb-3 inline-flex h-6 w-24 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                  {notice.date}
                </time>
                <div className="text-xl font-bold text-slate-900">{notice.title}</div>
              </div>
              <div className="text-slate-600 pl-2 border-l-4 border-emerald-200 ml-1 sm:ml-[6.8rem]">
                {notice.description}
              </div>
              <div className="mt-2 flex gap-3 pl-2 sm:pl-[6.8rem]">
                <button className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1">
                  <EnvelopeIcon className="h-4 w-4" />
                  Send Reminder
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
                  <PencilIcon className="h-4 w-4" />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;