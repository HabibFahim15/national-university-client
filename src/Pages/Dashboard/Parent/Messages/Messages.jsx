import { FaEnvelope, FaSearch, FaBell, FaUserCircle, FaInbox, FaPaperPlane, FaArchive, FaStar, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const ParentMessagesPage = () => {
  // Sample data for messages
  const messages = [
    {
      id: 1,
      sender: "Principal Smith",
      senderType: "admin",
      subject: "School Reopening Announcement",
      preview: "Dear parents, we're pleased to announce that school will reopen on January 10th with new safety measures...",
      date: "2023-12-15",
      time: "10:30 AM",
      read: false,
      important: true,
      category: "announcement"
    },
    {
      id: 2,
      sender: "Ms. Johnson (Math Teacher)",
      senderType: "teacher",
      subject: "Sarah's Progress Report",
      preview: "I wanted to share some positive feedback about Sarah's recent improvement in algebra concepts...",
      date: "2023-12-12",
      time: "2:45 PM",
      read: true,
      important: false,
      category: "academic"
    },
    {
      id: 3,
      sender: "School Administration",
      senderType: "admin",
      subject: "Tuition Payment Reminder",
      preview: "This is a friendly reminder that the second installment of tuition fees is due by December 20th...",
      date: "2023-12-10",
      time: "9:15 AM",
      read: true,
      important: false,
      category: "financial"
    },
    {
      id: 4,
      sender: "Mr. Davis (Science Teacher)",
      senderType: "teacher",
      subject: "Science Fair Participation",
      preview: "Your child has expressed interest in participating in the annual science fair. Please confirm...",
      date: "2023-12-08",
      time: "4:20 PM",
      read: false,
      important: true,
      category: "event"
    }
  ];

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [currentFolder, setCurrentFolder] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("all");

  // Filter messages based on current selections
  const filteredMessages = messages.filter(msg => {
    // Folder filter
    if (currentFolder === "inbox") {
      // Skip sent items
    } else if (currentFolder === "sent") {
      return false; // Parents typically can't send messages in school systems
    } else if (currentFolder === "important") {
      if (!msg.important) return false;
    }
    
    // Search filter
    if (searchQuery && 
        !msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !msg.preview.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !msg.sender.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Unread filter
    if (unreadOnly && msg.read) return false;
    
    // Category filter
    if (currentFilter !== "all" && msg.category !== currentFilter) return false;
    
    return true;
  });

  const markAsRead = (id) => {
    // In a real app, this would update the backend
    const updatedMessages = messages.map(msg => 
      msg.id === id ? {...msg, read: true} : msg
    );
    // setMessages(updatedMessages); // You would need to manage messages in state
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-gray-600 text-2xl" />
            <span className="font-medium">Parent</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow border p-4">
          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Folders */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-2">Folders</h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => setCurrentFolder("inbox")} 
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${currentFolder === "inbox" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  <FaInbox />
                  <span>Inbox</span>
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">12</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentFolder("sent")} 
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${currentFolder === "sent" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  <FaPaperPlane />
                  <span>Sent</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentFolder("important")} 
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${currentFolder === "important" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  <FaStar />
                  <span>Important</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentFolder("archive")} 
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${currentFolder === "archive" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  <FaArchive />
                  <span>Archive</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Filters */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Filters</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={unreadOnly}
                  onChange={() => setUnreadOnly(!unreadOnly)}
                  className="rounded text-blue-500"
                />
                <span>Unread only</span>
              </label>
            </div>

            <h3 className="font-bold text-gray-700 mt-4 mb-2">Categories</h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => setCurrentFilter("all")} 
                  className={`w-full text-left px-3 py-1 rounded-lg ${currentFilter === "all" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  All Messages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentFilter("announcement")} 
                  className={`w-full text-left px-3 py-1 rounded-lg ${currentFilter === "announcement" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  School Announcements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentFilter("academic")} 
                  className={`w-full text-left px-3 py-1 rounded-lg ${currentFilter === "academic" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  Academic Updates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentFilter("event")} 
                  className={`w-full text-left px-3 py-1 rounded-lg ${currentFilter === "event" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                >
                  Events & Activities
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow border overflow-hidden">
          {selectedMessage ? (
            // Message detail view
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <FaChevronLeft />
                  <span>Back to inbox</span>
                </button>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                    <FaArchive />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                    <FaTrash />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">{selectedMessage.subject}</h2>
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {selectedMessage.senderType === "admin" ? "A" : "T"}
                  </div>
                  <div>
                    <p className="font-medium">{selectedMessage.sender}</p>
                    <p className="text-sm text-gray-500">
                      {selectedMessage.date} at {selectedMessage.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p>Dear Parent,</p>
                <p className="mt-4">
                  {selectedMessage.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam 
                  nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet 
                  nunc, quis aliquam nisl nunc eu nisl.
                </p>
                <p className="mt-4">
                  Best regards,<br />
                  {selectedMessage.sender}
                </p>
              </div>
            </div>
          ) : (
            // Message list view
            <div>
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-bold text-lg">
                  {currentFolder === "inbox" ? "Inbox" : 
                   currentFolder === "sent" ? "Sent Messages" : 
                   currentFolder === "important" ? "Important Messages" : "Archived Messages"}
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredMessages.length} message{filteredMessages.length !== 1 ? "s" : ""}
                </div>
              </div>

              {filteredMessages.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <FaEnvelope className="mx-auto text-4xl mb-2" />
                  <p>No messages found</p>
                </div>
              ) : (
                <ul className="divide-y">
                  {filteredMessages.map(message => (
                    <li 
                      key={message.id} 
                      className={`hover:bg-gray-50 cursor-pointer ${!message.read ? "bg-blue-50" : ""}`}
                      onClick={() => {
                        setSelectedMessage(message);
                        markAsRead(message.id);
                      }}
                    >
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              message.senderType === "admin" ? "bg-purple-100 text-purple-600" : "bg-green-100 text-green-600"
                            }`}>
                              {message.senderType === "admin" ? "A" : "T"}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3 className={`font-medium truncate ${!message.read ? "text-gray-900" : "text-gray-700"}`}>
                                {message.sender}
                              </h3>
                              <div className="text-sm text-gray-500 whitespace-nowrap ml-2">
                                {message.date} {message.time}
                              </div>
                            </div>
                            <h4 className={`text-lg truncate ${!message.read ? "font-semibold" : ""}`}>
                              {message.subject}
                            </h4>
                            <p className="text-gray-600 truncate">
                              {message.preview}
                            </p>
                            {message.important && (
                              <span className="inline-block mt-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                Important
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentMessagesPage;