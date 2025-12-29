import React from "react";

const Column = ({ title, children }) => (
  <div className="bg-gray-50 rounded-xl px-4 py-4 min-w-[280px] flex-shrink-0">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600 text-xl">⋯</button>
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const Card = ({ title, tags = [], avatars = 3, comments, attachments, likes }) => {
  const getTagStyle = (type) => {
    const styles = {
      bug: "bg-yellow-100 text-yellow-800",
      live: "bg-pink-100 text-pink-800",
      task: "bg-blue-100 text-blue-800",
      priority: "bg-purple-100 text-purple-800"
    };
    return styles[type] || "bg-gray-100 text-gray-800";
  };

  const avatarColors = [
    "bg-gradient-to-br from-pink-400 to-red-500",
    "bg-gradient-to-br from-purple-400 to-indigo-500",
    "bg-gradient-to-br from-blue-400 to-cyan-500"
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 px-3.5 py-3.5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer">
      <h4 className="text-sm font-medium text-gray-900 mb-2.5 leading-snug">
        {title}
      </h4>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((t, idx) => (
          <span
            key={idx}
            className={`px-2.5 py-1 rounded text-xs font-medium ${getTagStyle(t.type)}`}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(avatars)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full ${avatarColors[index % avatarColors.length]} border-2 border-white -ml-1.5 first:ml-0`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-xs">
          {comments && <span className="flex items-center gap-1">💬 {comments}</span>}
          {attachments && <span className="flex items-center gap-1">📎 {attachments}</span>}
          {likes && <span className="flex items-center gap-1">👍 {likes}</span>}
        </div>
      </div>
    </div>
  );
};

const Scrum_Board = () => {
  const columnsData = [
    {
      title: "To Do",
      cards: [
        {
          title: "Unable to upload file",
          tags: [{ label: "Task", type: "task" }, { label: "Live issue", type: "live" }],
          avatars: 3,
          comments: 1,
          attachments: 2
        },
        {
          title: "Table data incorrect",
          tags: [{ label: "Bug", type: "bug" }],
          avatars: 1,
          comments: 2
        },
        {
          title: "Fix broken UI",
          tags: [{ label: "Low priority", type: "priority" }],
          avatars: 2,
          comments: 1
        }
      ]
    },
    {
      title: "In Progress",
      cards: [
        {
          title: "Fix dashboard layout",
          tags: [{ label: "Bug", type: "bug" }],
          avatars: 2,
          comments: 1
        },
        {
          title: "New design",
          tags: [{ label: "Task", type: "task" }],
          avatars: 1,
          comments: 1,
          likes: 1
        },
        {
          title: "Improve user experiences",
          tags: [{ label: "Low priority", type: "priority" }, { label: "Task", type: "task" }],
          avatars: 1
        }
      ]
    },
    {
      title: "To Review",
      cards: [
        {
          title: "Update node environment",
          tags: [{ label: "Low priority", type: "priority" }],
          avatars: 1,
          comments: 1
        },
        {
          title: "Remove user data",
          tags: [{ label: "Live issue", type: "live" }],
          avatars: 2,
          comments: 1,
          likes: 1
        }
      ]
    },
    {
      title: "Completed",
      cards: [
        {
          title: "Ready to test",
          tags: [{ label: "Task", type: "task" }],
          avatars: 2,
          comments: 1
        },
        {
          title: "Slow API connection",
          tags: [{ label: "Bug", type: "bug" }],
          avatars: 3,
          comments: 1,
          likes: 1
        },
        {
          title: "Login failed",
          tags: [{ label: "Live issue", type: "live" }],
          avatars: 1
        },
        {
          title: "Locale incorrect",
          tags: [{ label: "Low priority", type: "priority" }],
          avatars: 2,
          comments: 2
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-1">Sprint 2</h1>
            <p className="text-sm text-gray-500">Web App Project</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center">
              {["A", "B", "C", "D"].map((letter, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white text-sm font-semibold"
                >
                  {letter}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-white -ml-2 flex items-center justify-center text-white text-sm font-semibold">
                +2
              </div>
            </div>

            <button className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <button className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <button className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 font-medium text-sm transition-colors">
              + New Board
            </button>
          </div>
        </div>

        {/* Board - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {columnsData.map((col, idx) => (
            <Column key={idx} title={col.title}>
              {col.cards.map((card, cardIdx) => (
                <Card key={cardIdx} {...card} />
              ))}
            </Column>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scrum_Board;