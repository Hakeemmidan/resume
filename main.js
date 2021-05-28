let workExperience = new Vue({
  el: '#work-experience',
  data: {
    positions: [
      {
        title:
          'Software Engineer',
        company: 'Horse',
        timeFrame: 'Mar 2021 - present',
        tasks: [
          'Interviewed software engineering candidates (ongoing)',
          'Made 21 [merged] Pull Requests [so far], that included various changes from new features to error fixes (on GitHub)',
          'Leveraging knowledge in (hard) React, Shopify’s Polaris, styled-components, Ruby on Rails, RSpec, Active Record, Action Controller, Active Support, Active Job, (soft) agile software development, teamwork, and problem-solving',
        ],
        employment: '(full-time)'
      },
      {
        title:
          'Graduate Development Program - Technology (Cybersecurity/IT) Track Apprentice',
        company: 'Large Investment Fund / NEOM',
        timeFrame: 'Aug 2020 - Mar 2021',
        tasks: [
          "Learned about / worked with Linux OS server administration (with Red Hat), Windows OS server administration (with Microsoft), networking (with CompTIA), virtualization (with VMware), cybersecurity (with CompTIA), and computer hacking (with EC-Council)"
        ],
        employment: '(full-time)'
      },
      {
        title: 'Full-Stack Software Engineer',
        company: 'Fiskkit',
        timeFrame: 'Dec 2019 - present',
        tasks: [
          'Worked in Agile environment with a team of 5 developers and 1 designer to optimize development, testing and deployment. This required continuous communication and work overlap',
          "Implemented email confirmation full-stack feature through Mailchimp's Mandrill API, allowing for authenticated emails/signups",
          'Integrated and customized Google Analytics into React/Redux to track many metrics including traffic sources, session duration, and general user interaction; allowing team to pinpoint areas that need improvement',
          'Led screen-responsiveness of entire website by utilizing CSS media queries and React, increasing mobile users proportion by +23%',
          'Made 50+ (ongoing) front-end and back-end enhancements including fixing mission-critical errors that caused entire page crashes',
          'Leveraged knowledge in (hard) React, Redux, Sass, Laravel, MySQL, Docker, (soft) teamwork, and problem solving',
        ],
        employment: '(part-time)'
      },
      {
        title: 'Full-Stack Software Engineering Student',
        company: 'App Academy',
        timeFrame: 'Jun 2019 - Dec 2019',
        tasks: [
          'Participated in daily pair-programming sessions involving many technical challenges ranging from database abstraction layer, data access layer, to the presentation layer. This required continuous learning, communication, and switching in coding environments',
          'Completed 17 intensive 90-100 hour work weeks involving lectures, weekly meetings, daily standup meetings, pair-programming, individual programming, technical reading, and presentation, resulting in significant increase in programming abilities',
          'Leveraged knowledge in (hard) SQL, MongoDB, Ruby on Rails, Express, React, Redux, Sass, CSS, RSpec, Capybara (soft) communication, teamwork, adaptability, problem solving, time management, leadership, and attention to detail ',
        ],
        employment: '(full-time)'
      },
      {
        title: 'Student Advisory Board Member',
        company:
          'Student Leadership & Involvement (SLI) at Oregon State University',
        timeFrame: 'Sep 2018 – Dec 2018',
        tasks: [
          'Reviewed and made recommendations regarding proposed increases in the annual budget of the Student Leadership & Involvement',
          'Recommended the student fee amount required to support the Student Leadership & Involvement annual budget request to the Budget Manager',
          'Reviewed unit programs, services, and facilities and made recommendations to staff to support and enhance the success of OSU students',
          'Served as a sounding board for the leadership of the SLI unit',
          'Served as a liaison between the ASOSU, SFC, and SLI unit',
          'Leveraged knowledge in (hard) MS Excel, VBA, (soft) communication, public speaking, and networking',
        ],
        employment: '(part-time)'
      },
      {
        title: 'Communication Representative',
        company: 'Ettihad Cultural Center (ECC) at Oregon State University',
        timeFrame: 'Aug 2017 - Jun 2018',
        tasks: [
          'Organized 10+ events, including the Ettihad Cultural Festival, which hosted 2000+ walking attendees. This required communication with hundreds of contacts, event planning, weekly meetings, and lots of teamwork',
          'Directed team of 15 people through rehearsals and performance in Ettihad Cultural Festival, resulting in error-free performance',
          'Acted as MC for 2 events that collaborated with other university departments, increasing sign ups by 30+ new student emails',
          'Started programming in Ruby and JavaScript to solve daily abstract problems involving the cultural center',
          'Leveraged knowledge in (hard) Ruby, JavaScript, VBA (soft) communication, public speaking, event planning, teamwork, and leadership ',
        ],
        employment: '(part-time)'
      },
    ],
  },
});

let education = new Vue({
  el: "#education",
  data: {
    units: [
      'Executive Education ​- UC Berkeley​ | ​Fall 2020',
      'B.S. Finance - Oregon State University | 2014 - 2019',
      'Software Engineering - App Academy | Summer 2019'
    ]
  }
})

let projects = new Vue({
  el: '#projects',
  data: {
    projects: [
      {
        title: 'OSUChat (archived)',
        description: 'Oregon State University’s first fully functional chat system',
        highlights: [
          'Installed Action Cable / web sockets to build a chat mechanism for simultaneous live communication',
          'Created chat scroll pagination mechanism without use of external gems or libraries for faster site performance (invovled work on frontend and backend)'
        ],
        tech: {
          database: 'PostgreSQL',
          backend: 'Ruby on Rails',
          frontend: 'React, Redux'
        },
        links: {
          doc: 'https://github.com/Hakeemmidan/OSUChat',
          live: 'N/A'
        }
      },
      {
        title: 'Poll App (group project: 3 developers) ',
        description: 'A polling app where users submit two pictures for their friends to vote on',
        highlights: [
          'Collaborated with 2 other full-stack developers and team lead in an Agile environment using ZenHub for ticket management',
          'Wrote integration tests (35 specs) using Mocha, Chai and in-memory mock-database for better app maintainability',
          'Led and maintained cookie-based authentication API routes using http-cookies and json web tokens for better security',
          'Created friends React context that dynamically updates friends as they are followed / unfollowed for better UX',
          'Led project presentations during evaluations'
        ],
        tech: {
          database: 'MongoDB',
          backend: 'Express, Mongoose, Socket.io',
          frontend: 'React, Material UI'
        },
        links: {
          doc: 'https://github.com/hatchways/team-eagle',
          live: 'N/A'
        }
      },
      {
        title: 'Wikipedia Reliability Rater (group project: 4 developers)',
        description: 'A Wikipedia article reliability measurement tool',
        highlights: [
          "Leveraged ‘request’, ‘cheerio’, and ‘url-parse’ Node packages to web crawl / scrape page specific information (citations, author statistics, etc.)",
          'Employed MediaWiki API to extract targeted Wikipedia article information for display',
          'Integrated D3.js Node package on the frontend to display author-specific data'
        ],
        tech: {
          database: 'MongoDB',
          backend: 'Express, Node',
          frontend: 'React, Redux'
        },
        links: {
          doc: 'https://github.com/michaeltorres1/WiRR',
          live: 'http://www.wikipediarr.com/'
        }
      },
      {
        title: 'Professional Blog',
        description: 'My personal professional blog',
        highlights: [
          'Introduced new archtypes and taxanomies to customize Hugo theme',
          'Created structured data markup and 20+ meta tags for better SEO'
        ],
        tech: {
          database: 'N/A',
          backend: 'N/A',
          frontend: 'Hugo, Sass'
        },
        links: {
          doc: 'https://github.com/Hakeemmidan/personal-website',
          live: 'https://www.hakeem-almidan.com/'
        }
      },
      {
        title: 'Resume Webpage',
        description: 'A webpage that displays an expanded version of my resume',
        highlights: [
          'Learned and implemented Vue fundementals (attribute binding, conditional rendering, and list rendering) for DRY HTML code',
          'Created and customized mobile-friendly animated design for better UI'
        ],
        tech: {
          database: 'N/A',
          backend: 'N/A',
          frontend: 'Vue, Sass'
        },
        links: {
          doc: 'https://github.com/Hakeemmidan/resume',
          live: 'https://hakeemmidan.github.io/resume'
        }
      },
      {
        title: 'Rails User Auth',
        description: 'An open-sourced user authorization',
        highlights: [
          'Connected Action Mailer with SMTP to deliver confirmation and password reset emails',
          'Utilized Sass to create mobile-friendly minimalistic design'
        ],
        tech: {
          database: 'PostgreSQL',
          backend: 'Ruby on Rails',
          frontend: 'React, Redux'
        },
        links: {
          doc: 'https://github.com/Hakeemmidan/rails-user-auth',
          live: 'N/A'
        }
      },
      {
        title: 'Jewely',
        description: 'An Etsy inspired [mock] e-commerce marketplace',
        highlights: [
          'Learned and merged Redux with React and created easily accessible global state for faster site performance, and easier frontend development process',
          'Utilized Active Record and Action Controller for fetching and processing data through RESTful APIs',
          'Integrated multi-photo attachment feature using Amazon S3, JSON JBuilder, and Ruby on Rails’ Active Storage for better UI/UX'
        ],
        tech: {
          database: 'PostgreSQL',
          backend: 'Ruby on Rails',
          frontend: 'React, Redux'
        },
        links: {
          doc: 'https://github.com/Hakeemmidan/Jewely',
          live: 'https://jewely-fsp.herokuapp.com/'
        }
      }
    ]
  }
})