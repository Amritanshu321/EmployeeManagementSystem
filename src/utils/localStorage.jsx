const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Update client report",
          "description": "Prepare and update the monthly client report.",
          "date": "2025-03-20",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix login bug",
          "description": "Resolve the login issue for internal dashboard.",
          "date": "2025-03-15",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Client meeting",
          "description": "Attend the Zoom meeting with the client regarding project scope.",
          "date": "2025-03-18",
          "category": "Meeting"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Prepare presentation",
          "description": "Create slides for the quarterly performance review.",
          "date": "2025-03-22",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Security audit",
          "description": "Conduct audit on backend services.",
          "date": "2025-03-10",
          "category": "Audit"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Review PRs",
          "description": "Go through open pull requests on GitHub.",
          "date": "2025-03-21",
          "category": "Code Review"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Onboarding session",
          "description": "Host a session for the new interns.",
          "date": "2025-03-16",
          "category": "Training"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Optimize DB queries",
          "description": "Improve performance of database queries on user table.",
          "date": "2025-03-22",
          "category": "Optimization"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Team catch-up",
          "description": "Daily stand-up with development team.",
          "date": "2025-03-20",
          "category": "Meeting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Code documentation",
          "description": "Write documentation for the new feature rollout.",
          "date": "2025-03-21",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Update user guide",
          "description": "Revise user guide for the mobile app.",
          "date": "2025-03-18",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Add dark mode",
          "description": "Implement dark mode toggle in user settings.",
          "date": "2025-03-23",
          "category": "Feature"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Design review",
          "description": "Participate in design system review session.",
          "date": "2025-03-19",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Deploy to staging",
          "description": "Push the latest build to staging server.",
          "date": "2025-03-17",
          "category": "Deployment"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Analytics integration",
          "description": "Set up Google Analytics for marketing pages.",
          "date": "2025-03-22",
          "category": "Analytics"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "User feedback analysis",
          "description": "Analyze user feedback from the last release.",
          "date": "2025-03-22",
          "category": "Analysis"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix broken links",
          "description": "Identify and fix all broken links on the website.",
          "date": "2025-03-18",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Client handoff",
          "description": "Prepare documents for client project handoff.",
          "date": "2025-03-15",
          "category": "Client Work"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const  setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin)

  }