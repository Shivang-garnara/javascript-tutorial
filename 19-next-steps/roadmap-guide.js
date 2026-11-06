// ===============================================
// Level 19: Next Steps — Interactive Career Guide
// ===============================================

const learningPaths = {
  frontend: {
    title: "Front-End Developer",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    focus: "Crafting fast, responsive, and accessible user interfaces."
  },
  backend: {
    title: "Back-End Engineer",
    techStack: ["Node.js", "Express", "PostgreSQL", "Docker", "Redis"],
    focus: "Designing scalable REST/GraphQL APIs, microservices, and database schemas."
  },
  fullstack: {
    title: "Full-Stack Engineer",
    techStack: ["Next.js Fullstack", "Prisma ORM", "TypeScript", "PostgreSQL"],
    focus: "Owning features end-to-end from user interface to database layer."
  }
};

console.log("=== Your JavaScript Mastery Next Steps ===");
console.table(learningPaths);

