type Skill = {
  name: string;
  icon: string;
  color?: string;
  custom?: "oauth" | "faiss" | "api" | "playwright";
};

const groups: Skill[][] = [
  [
    { name: "TypeScript", icon: "typescript", color: "3178C6" },
    { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
    { name: "Python", icon: "python", color: "3776AB" },
    { name: "React", icon: "react", color: "61DAFB" },
    { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
    { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
    { name: "Express", icon: "express", color: "FFFFFF" },
    { name: "FastAPI", icon: "fastapi", color: "009688" },
  ],
  [
    { name: "OAuth 2.0", icon: "", custom: "oauth" },
    { name: "OpenID Connect", icon: "openid", color: "FFFFFF" },
    { name: "JWT / JWKS", icon: "jsonwebtokens", color: "FB015B" },
    { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
    { name: "SQLite", icon: "sqlite", color: "003B57" },
    { name: "FAISS", icon: "", custom: "faiss" },
  ],
  [
    { name: "Playwright", icon: "", custom: "playwright" },
    { name: "pytest", icon: "pytest", color: "0A9EDC" },
    { name: "Docker", icon: "docker", color: "2496ED" },
    { name: "Git", icon: "git", color: "F05032" },
    { name: "REST APIs", icon: "", custom: "api" },
    { name: "Unix / macOS", icon: "apple", color: "FFFFFF" },
  ],
];

function SkillLogo({ skill }: { skill: Skill }) {
  if (skill.custom === "playwright") {
    return (
      <img
        src="https://raw.githubusercontent.com/microsoft/playwright/main/packages/dashboard/public/playwright-logo.svg"
        alt=""
        width="24"
        height="24"
        loading="lazy"
        decoding="async"
      />
    );
  }

  if (skill.custom === "oauth") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.25 20 5v6.2c0 5.1-3.4 8.6-8 10.55-4.6-1.95-8-5.45-8-10.55V5l8-2.75Z" />
        <path d="M9.2 12.2 11 14l4-4" />
      </svg>
    );
  }

  if (skill.custom === "faiss") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.8" cy="10.8" r="6.7" />
        <path d="m16 16 4.2 4.2M8 10.8h5.6M10.8 8v5.6" />
      </svg>
    );
  }

  if (skill.custom === "api") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 3l-4 18" />
      </svg>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
      alt=""
      width="24"
      height="24"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function Stack() {
  return (
    <section id="stack" className="stack-section section-wrap">
      <div className="section-heading-row stack-heading">
        <h2>Tools I reach<br /><em>for often.</em></h2>
        <p>Grouped by the kind of work they help me do. The labels drift gently; hover or tap to bring one into focus.</p>
      </div>
      <div className="skill-cloud">
        {groups.map((group) => (
          <div className="skill-group" key={group[0].name}>
            <div className="skill-group-chips">
              {group.map((skill) => (
                <span className="skill-chip" key={skill.name} data-cursor="link">
                  <b className="skill-logo"><SkillLogo skill={skill} /></b>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
