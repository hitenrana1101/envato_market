import React from "react";
import { MdCheckCircle } from "react-icons/md";
import img1 from "../assets/thumb-1.jpg";
import img2 from "../assets/thumb-2.jpg";
import img3 from "../assets/thumb-3.jpg";

const avatars = [img1, img2, img3];

const TaskRow = ({ title, tags = [], date }) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 py-2">
    {/* left */}
    <div className="flex items-center gap-3 px-3">
      <MdCheckCircle className={titleSectionColor(title)} />
      <h3 className="text-[14px] font-semibold text-[#171717]">{title}</h3>
    </div>

    {/* right */}
    <div className="flex flex-wrap items-center gap-2 text-[12px] px-3 md:px-0">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={`h-[25px] px-2 rounded-[8px] flex items-center justify-center font-medium ${
            tagColor(tag)
          }`}
        >
          {tag}
        </span>
      ))}

      {date && (
        <span className="text-[#737373] font-medium text-[13px] ml-auto md:ml-4">
          {date}
        </span>
      )}

      <div className="flex ml-auto md:ml-4">
        {avatars.map((a, i) => (
          <img
            key={i}
            src={a}
            alt=""
            className="h-[25px] w-[25px] rounded-full -ml-1 first:ml-0 border-2 border-white"
          />
        ))}
      </div>
    </div>
  </div>
);

// color helpers
const tagColor = (tag) => {
  if (tag === "Task")
    return "bg-[#DBEAFE] text-[#1d4ed8]";
  if (tag === "Live issue" || tag === "Live Priority")
    return "bg-[#FFE4E6] text-[#be123c]";
  if (tag === "Bug" || tag === "bug")
    return "bg-[#FEF3C6] text-[#92400e]";
  if (tag === "Low priority")
    return "bg-[#F3E8FF] text-[#6b21a8]";
  return "bg-gray-100 text-[#374151]";
};

const titleSectionColor = (title) =>
  ["Ready to test", "Slow API connection", "Login failed", "Locale incorrect"].includes(
    title
  )
    ? "text-blue-700"
    : "text-gray-500";

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h4 className="font-bold text-[20px] px-2">{title}</h4>
    <div className="mt-2 rounded-[14px] border border-gray-100 bg-white">
      {children}
    </div>
  </div>
);

const Projects_Tasks = () => {
  return (
    <div className="w-full max-w-[900px]">
      {/* TO DO */}
      <Section title="To Do">
        <TaskRow
          title="Unable to upload file"
          tags={["Task", "Live issue"]}
          date="August 05"
        />
        <TaskRow
          title="Table data incorrect"
          tags={["Bug"]}
          date="July 11"
        />
        <TaskRow
          title="Fix broken UI"
          tags={["Low priority"]}
          date="August 05"
        />
      </Section>

      {/* IN PROGRESS */}
      <Section title="In Progress">
        <TaskRow
          title="Fix dashboard layout"
          tags={["Bug"]}
          date="April 17"
        />
        <TaskRow
          title="New design"
          tags={["Task", "Low priority"]}
          date="-"
        />
        <TaskRow
          title="Improve user experiences"
          tags={["Low priority", "Task"]}
          date="May 20"
        />
      </Section>

      {/* TO REVIEW */}
      <Section title="To Review">
        <TaskRow
          title="Update node environment"
          tags={["Low priority"]}
          date="-"
        />
        <TaskRow
          title="Remove user data"
          tags={["Live issue"]}
          date="-"
        />
      </Section>

      {/* COMPLETED */}
      <Section title="Completed">
        <TaskRow
          title="Ready to test"
          tags={["Task"]}
          date="April 04"
        />
        <TaskRow
          title="Slow API connection"
          tags={["bug"]}
          date="August 19"
        />
        <TaskRow
          title="Login failed"
          tags={["Live issue"]}
          date="May 06"
        />
        <TaskRow
          title="Locale incorrect"
          tags={["Live Priority"]}
          date="August 13"
        />
      </Section>
    </div>
  );
};

export default Projects_Tasks;
