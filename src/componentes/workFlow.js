import React from "react";

const TimelineItem = ({ period, title, desc }) => (
  <div className="timeline-content">
    <div className="timeline-period">{period}</div>
    <div className="timeline-title">{title}</div>
    <p>{desc}</p>
  </div>
);

const WorkFlow = () => {
  const ourWork = [
    {
      period: "Step 1",
      title: "Consultation",
      desc: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      period: "Step 2",
      title: "Planning",
      desc: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      period: "Step 3",
      title: "Implementation",
      desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      period: "Step 4",
      title: "Customization",
      desc: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
  ];

  return (
    <div className="workflow">
      <div>
        <hr />
        <h2>Work Flow</h2>
        <h1>How we Work</h1>
      </div>
      <div className="timeline">
        {ourWork.map((step, index) => (
          <TimelineItem
            key={index}
            period={step.period}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
