import React from "react";

const TimelineLine = ({ orientation }) => {
  const lineStyle = {
    width: "50px",
    height: "50px",
    border: "1px #6AD7E5 solid",
    ...(orientation === "horizontal" && {
      transform: "rotate(90deg)",
      transformOrigin: "0 0",
    }),
  };

  return <div style={lineStyle}></div>;
};

const TimelineItem = ({ period, title, desc, position, id }) => (
  <div className={`timeline-content ${position}`}>
    <div className="header-section">
      <div className="timeline-id">{id}</div>
      <div className="timeline-title">{title}</div>
      <div className="timeline-period">{period}</div>
    </div>
    <p>{desc}</p>
  </div>
);

const WorkFlow = () => {
  const ourWork = [
    {
      id: "#1",
      period: " 1",
      title: "Consultation",
      desc: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: "#2",
      period: " 2",
      title: "Planning       ",
      desc: "Sprint roadmap  is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: "#3",
      period: " 3",
      title: "Implementation",
      desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      id: "4",
      period: " 4",
      title: "Customization",
      desc: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
  ];

  return (
    <div className="workflow">
      <div>
        <hr />
        <h2 className="flow">Work Flow</h2>
        <h1>How we Work</h1>
      </div>
      <div className="timeline">
        {ourWork.map((step, index) => (
          <React.Fragment key={index}>
            <TimelineItem
              id={step.id}
              period={step.period}
              title={step.title}
              desc={step.desc}
              position={index % 2 === 0 ? "top" : "bottom"}
            />
            {index === 0 && <TimelineLine orientation="horizontal" />}
            {(index === 1 || index === 2) && (
              <TimelineLine orientation="vertical" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
