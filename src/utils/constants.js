export const issuesData = [
  {
    id: "WEB-001",
    title: "API Gateway Timeout on User Authentication",
    description: "Users experiencing 504 timeout errors when attempting to log in during peak hours. The authentication service is taking longer than 30 seconds to respond, causing session failures.",
    status: "Open",
    priority: "Critical",
    assignee: "Backend Team",
    reportedBy: "QA Team",
    createdDate: "2025-06-08",
    affectedUsers: 1250,
    color:{
      bg:'#EAC7CE',
      text:'#FE0F3F'
    },
    technicalDetails: "Auth service overloaded, connection pool exhausted, Redis cache misses increasing"
  },
  
  {
    id: "WEB-002", 
    title: "Memory Leak in React Component Lifecycle",
    description: "Dashboard components are not properly unmounting, causing browser memory usage to increase over time. Users report browser slowdowns after 2+ hours of usage.",
    status: "In-Progress",
    priority: "High",
    assignee: "Frontend Team",
    reportedBy: "User Support",
    createdDate: "2025-06-05",
    affectedUsers: 800,
    color:{
      bg:'#A0B9E4',
      text:'#1E52AB'
    },
    technicalDetails: "useEffect cleanup functions missing, event listeners not removed, interval timers persist"
  },

  {
    id: "WEB-003",
    title: "CSS Grid Layout Breaking on Mobile Safari",
    description: "Product listing page grid collapses on iOS Safari browsers below version 14. Items overlap and become unclickable, affecting mobile shopping experience.",
    status: "Resolved",
    priority: "Medium",
    assignee: "UI/UX Team", 
    reportedBy: "Customer Service",
    createdDate: "2025-06-01",
    resolvedDate: "2025-06-07",
    affectedUsers: 320,
    color:{
      bg:'#C0F5C4',
      text:'#10A91A'
    },
    technicalDetails: "Safari CSS Grid autoprefixer compatibility, fallback flexbox implementation added"
  },

  {
    id: "WEB-004",
    title: "Database Connection Pool Exhaustion",
    description: "Application experiencing intermittent 500 errors during database operations. Connection pool reaching maximum capacity of 100 connections during traffic spikes.",
    status: "Open", 
    priority: "High",
    assignee: "DevOps Team",
    reportedBy: "Monitoring System",
    createdDate: "2025-06-09",
    affectedUsers: 2100,
    color:{
      bg:'#EAC7CE',
      text:'#FE0F3F'
    },
    technicalDetails: "PostgreSQL max_connections reached, slow queries not releasing connections, pool configuration needs optimization"
  },

  {
    id: "WEB-005",
    title: "Email Notification Template Rendering Error",
    description: "Welcome email templates displaying broken HTML in Outlook clients. Dynamic content placeholders not being replaced correctly, showing raw template syntax to users.",
    status: "In-Progress",
    priority: "Low",
    assignee: "Email Team",
    reportedBy: "Marketing Team", 
    createdDate: "2025-06-03",
    affectedUsers: 150,
    color:{
      bg:'#A0B9E4',
      text:'#1E52AB'
    },
    technicalDetails: "Handlebars template compilation issue, Outlook HTML rendering quirks, MJML framework integration needed"
  }
];