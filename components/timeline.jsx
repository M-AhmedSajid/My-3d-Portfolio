"use client";

import {
  School,
  Briefcase,
  University,
  Building2,
  Flag,
  BriefcaseBusiness,
} from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const exp = [
  {
    date: "2024 - Present",
    title: "Full Stack Developer",
    icon: <BriefcaseBusiness />,
    subtitle: "Spectra Tech Solutions",
    points: [
      "Building scalable and responsive web applications",
      "Integrating third-party APIs and services",
      "Collaborating with cross-functional teams to deliver high-quality products",
      "Troubleshooting and debugging complex issues",
    ],
  },
  {
    date: "2023 - 2024",
    title: "Web Developer",
    icon: <Briefcase />,
    subtitle: "AllTasker",
    points: [
      "Designing and implementing user-friendly web interfaces using modern front-end technologies",
      "Enhancing website performance and optimizing page load times",
      "Collaborating with UX/UI designers to create visually appealing user experiences",
      "Writing clean, maintainable, and efficient code using HTML, CSS, and JavaScript",
    ],
  },
];

const edu = [
  {
    date: "2025 - Present",
    title: "Bachelor of Engineering in Software Engineering",
    icon: <University />,
    subtitle: "Sir Syed University of Engineering and Technology",
  },
  {
    date: "2022 - 2024",
    title: "Intermediate in Computer Science",
    icon: <Building2 />,
    subtitle: "Govt Degree College for Boys",
  },
  {
    date: "2020 - 2022",
    title: "Matriculation in Science",
    icon: <School />,
    subtitle: "Metro Foundation School",
  },
]

export function Timeline() {
  const { resolvedTheme, theme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // If theme is set to 'system', use the system preference
    // Otherwise use the explicitly set theme
    const currentTheme = theme === "system" ? systemTheme : resolvedTheme;
    setIsDark(currentTheme === "dark");
  }, [resolvedTheme, theme, systemTheme]);

  // Theme-dependent styles
  const timelineStyles = {
    dark: {
      lineColor: "#fff",
      contentStyle: {
        background: "#000",
        color: "#f9fafb",
        borderRadius: "0.5rem",
        boxShadow: "0 3px 0 hsl(204 70% 53%)",
      },
      contentArrowStyle: {
        borderRight: "7px solid hsl(204 70% 53%)",
      },
      iconStyle: {
        background: "hsl(204 70% 53%)",
        color: "#ffffff",
      },
      titleClass: "text-gray-50",
      subtitleClass: "text-gray-400",
      textClass: "text-gray-300",
      dateClass: "text-gray-400",
    },
    light: {
      lineColor: "#000",
      contentStyle: {
        background: "#ffffff",
        color: "#111827",
        borderRadius: "0.5rem",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05)",
        borderBottom: "3px solid hsl(204 70% 53%)",
      },
      contentArrowStyle: {
        borderRight: "7px solid hsl(204 70% 53%)",
      },
      iconStyle: {
        background: "hsl(204 70% 53%)",
        color: "#ffffff",
      },
      titleClass: "text-gray-900",
      subtitleClass: "text-gray-600",
      textClass: "text-gray-700",
      dateClass: "text-gray-600",
    },
  };

  // Use the appropriate styles based on theme
  const styles = isDark ? timelineStyles.dark : timelineStyles.light;

  return (
    <VerticalTimeline lineColor={styles.lineColor}>
      {exp.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={styles.contentStyle}
          contentArrowStyle={styles.contentArrowStyle}
          date={item.date}
          dateClassName={styles.dateClass}
          iconStyle={styles.iconStyle}
          icon={item.icon}
        >
          <div>
            <h3 className={`text-2xl font-bold ${styles.titleClass}`}>
              {item.title}
            </h3>
            <p
              className={`${styles.subtitleClass} text-base font-semibold`}
              style={{ margin: 0 }}
            >
              {item.subtitle}
            </p>
          </div>
          {item.points && (
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {item.points.map((point, index) => (
                <li
                  key={index}
                  className={`${styles.textClass} text-sm pl-1 tracking-wider`}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement iconStyle={styles.iconStyle} icon={<Flag />} />
    </VerticalTimeline>
  );
}

export function Timeline2() {
  const { resolvedTheme, theme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // If theme is set to 'system', use the system preference
    // Otherwise use the explicitly set theme
    const currentTheme = theme === "system" ? systemTheme : resolvedTheme;
    setIsDark(currentTheme === "dark");
  }, [resolvedTheme, theme, systemTheme]);

  // Theme-dependent styles
  const timelineStyles = {
    dark: {
      lineColor: "#fff",
      contentStyle: {
        background: "#000",
        color: "#f9fafb",
        borderRadius: "0.5rem",
        boxShadow: "0 3px 0 hsl(204 70% 53%)",
      },
      contentArrowStyle: {
        borderRight: "7px solid hsl(204 70% 53%)",
      },
      iconStyle: {
        background: "hsl(204 70% 53%)",
        color: "#ffffff",
      },
      titleClass: "text-gray-50",
      subtitleClass: "text-gray-400",
      textClass: "text-gray-300",
      dateClass: "text-gray-400",
    },
    light: {
      lineColor: "#000",
      contentStyle: {
        background: "#ffffff",
        color: "#111827",
        borderRadius: "0.5rem",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05)",
        borderBottom: "3px solid hsl(204 70% 53%)",
      },
      contentArrowStyle: {
        borderRight: "7px solid hsl(204 70% 53%)",
      },
      iconStyle: {
        background: "hsl(204 70% 53%)",
        color: "#ffffff",
      },
      titleClass: "text-gray-900",
      subtitleClass: "text-gray-600",
      textClass: "text-gray-700",
      dateClass: "text-gray-600",
    },
  };

  // Use the appropriate styles based on theme
  const styles = isDark ? timelineStyles.dark : timelineStyles.light;

  return (
    <VerticalTimeline lineColor={styles.lineColor}>
      {edu.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={styles.contentStyle}
          contentArrowStyle={styles.contentArrowStyle}
          date={item.date}
          dateClassName={styles.dateClass}
          iconStyle={styles.iconStyle}
          icon={item.icon}
        >
          <div>
            <h3 className={`text-2xl font-bold ${styles.titleClass}`}>
              {item.title}
            </h3>
            <p
              className={`${styles.subtitleClass} text-base font-semibold`}
              style={{ margin: 0 }}
            >
              {item.subtitle}
            </p>
          </div>
          {item.points && (
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {item.points.map((point, index) => (
                <li
                  key={index}
                  className={`${styles.textClass} text-sm pl-1 tracking-wider`}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement iconStyle={styles.iconStyle} icon={<Flag />} />
    </VerticalTimeline>
  );
}
