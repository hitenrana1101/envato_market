import React from "react";

const Column = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm px-4 py-4 w-fit flex-shrink-0 border border-gray-100">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-[13px] font-semibold text-gray-800">{title}</h3>
      <button className="text-gray-400 text-lg leading-none">⋯</button>
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const Card = ({ title, tags = [] }) => (
  <div className="bg-white rounded-xl border border-gray-200 px-3 py-3 shadow-sm w-fit">
    <h4 className="text-[13px] font-medium text-gray-900 mb-2 leading-snug">
      {title}
    </h4>
    <div className="flex flex-wrap gap-2 text-[10px] mb-3">
      {tags.map((t) => (
        <span
          key={t.label}
          className={`px-2 py-[2px] rounded-full font-medium ${
            t.type === "bug"
              ? "bg-[#FFF4CC] text-[#B58105]"
              : t.type === "live"
              ? "bg-[#FFE3E3] text-[#D12C2C]"
              : "bg-[#E3F2FF] text-[#2563EB]"
          }`}
        >
          {t.label}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between text-[11px] text-gray-400">
      <div className="flex -space-x-2">
        <div className="w-6 h-6 rounded-full bg-[#F97373] border-2 border-white" />
        <div className="w-6 h-6 rounded-full bg-[#A855F7] border-2 border-white" />
        <div className="w-6 h-6 rounded-full bg-[#60A5FA] border-2 border-white" />
      </div>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-gray-400" />1
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-gray-400" />2
        </span>
      </div>
    </div>
  </div>
);

const Scrum_Board = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] flex justify-center py-6 px-3 sm:w-fit">
      <div className="w-full max-w-6xl sm:w-fit">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <h1 className="text-[20px] font-semibold text-gray-900">
              Sprint 2
            </h1>
            <p className="text-[11px] text-gray-400">Web App Project</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#F97373] border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-[#A855F7] border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-[#60A5FA] border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-[#FBBF24] border-2 border-white flex items-center justify-center text-[11px] text-gray-700">
                +3
              </div>
            </div>

            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm">
              ?
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm">
              ⚙
            </button>

            <button className="px-3 py-1.5 rounded-full border border-gray-300 text-[12px] text-gray-700 flex items-center gap-1 bg-white">
              + New Board
            </button>
          </div>
        </div>

        {/* Desktop: normal wrap layout */}
        <div className="hidden sm:flex flex-wrap gap-4">
          <Column title="To Do">
            <Card
              title="Unable to upload file"
              tags={[
                { label: "Task", type: "task" },
                { label: "Live issue", type: "live" },
              ]}
            />
            <Card
              title="Table data incorrect"
              tags={[{ label: "Bug", type: "bug" }]}
            />
            <Card
              title="Fix broken UI"
              tags={[{ label: "Low priority", type: "task" }]}
            />
          </Column>

          <Column title="In Progress">
            <Card
              title="Fix dashboard layout"
              tags={[{ label: "Bug", type: "bug" }]}
            />
            <Card title="New design" tags={[{ label: "Task", type: "task" }]} />
            <Card
              title="Improve user experiences"
              tags={[
                { label: "Low priority", type: "task" },
                { label: "Task", type: "task" },
              ]}
            />
          </Column>

          <Column title="To Review">
            <Card
              title="Update node environment"
              tags={[{ label: "Low priority", type: "task" }]}
            />
            <Card
              title="Remove user data"
              tags={[{ label: "Live issue", type: "live" }]}
            />
          </Column>

          <Column title="Completed">
            <Card
              title="Ready to test"
              tags={[{ label: "Task", type: "task" }]}
            />
            <Card
              title="Slow API connection"
              tags={[{ label: "Bug", type: "bug" }]}
            />
            <Card
              title="Login failed"
              tags={[{ label: "Live issue", type: "live" }]}
            />
            <Card
              title="Locale incorrect"
              tags={[{ label: "Low priority", type: "task" }]}
            />
          </Column>
        </div>

        {/* Mobile: horizontal slider */}
        <div className="sm:hidden mt-4">
          <div className="overflow-x-auto pb-3">
            <div className="flex gap-4">
              <Column title="To Do">
                <Card
                  title="Unable to upload file"
                  tags={[
                    { label: "Task", type: "task" },
                    { label: "Live issue", type: "live" },
                  ]}
                />
                <Card
                  title="Table data incorrect"
                  tags={[{ label: "Bug", type: "bug" }]}
                />
                <Card
                  title="Fix broken UI"
                  tags={[{ label: "Low priority", type: "task" }]}
                />
              </Column>

              <Column title="In Progress">
                <Card
                  title="Fix dashboard layout"
                  tags={[{ label: "Bug", type: "bug" }]}
                />
                <Card
                  title="New design"
                  tags={[{ label: "Task", type: "task" }]}
                />
                <Card
                  title="Improve user experiences"
                  tags={[
                    { label: "Low priority", type: "task" },
                    { label: "Task", type: "task" },
                  ]}
                />
              </Column>

              <Column title="To Review">
                <Card
                  title="Update node environment"
                  tags={[{ label: "Low priority", type: "task" }]}
                />
                <Card
                  title="Remove user data"
                  tags={[{ label: "Live issue", type: "live" }]}
                />
              </Column>

              <Column title="Completed">
                <Card
                  title="Ready to test"
                  tags={[{ label: "Task", type: "task" }]}
                />
                <Card
                  title="Slow API connection"
                  tags={[{ label: "Bug", type: "bug" }]}
                />
                <Card
                  title="Login failed"
                  tags={[{ label: "Live issue", type: "live" }]}
                />
                <Card
                  title="Locale incorrect"
                  tags={[{ label: "Low priority", type: "task" }]}
                />
              </Column>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrum_Board;
