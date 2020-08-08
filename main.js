let workExperience = new Vue({
  el: '#work-experience',
  data: {
    positions: [
      {
        title: "Full-Stack Software Engineer",
        company: "Fiskkit",
        timeFrame: "Dec 2019 - present",
        tasks: [
          'Worked in Agile environment with a team of 5 developers and 1 designer to optimize development, testing and deployment',
          "Led and implemented email confirmation feature for signup flow through Mailchimp's Mandrill API, Laravel, MySQL, and React/Redux",
          'Led, configured, and customized Google Analytics with 5 filtered views for data analysis',
          'Led and implemented mobile responsiveness of website by utilizing CSS media queries  and React',
          'Made 40+ (ongoing) front- end and back - end enhancements including mission critical bug fixes that caused entire page errors',
          'Leveraged knowledge in (hard) React, Redux, Sass, Laravel, MySQL, Docker, (soft) teamwork, and problem solving'
        ]
      },
      {
        title: 'Full-Stack Software Engineering Student',
        company: 'App Academy',
        timeFrame: 'Jun 2019 - Dec 2019',
        tasks: [
          'Participated in daily pair programming sessions involving many technical challenges ranging from the database abstraction layer, data access layer, to the presentation layer',
          'Completed 17 intensive 90 - 100 hour work weeks involving lectures, weekly meetings, daily standup meetings, pair - programming, individual programming, technical reading, and presentation',
          'Leveraged knowledge in (hard) PostgreSQL, MongoDB, Ruby on Rails, Express, React, Redux, Sass, CSS, RSpec, Capybara, (soft) communication, teamwork, adaptability, problem solving, time management, leadership, and attention to detail'
        ]
      },
      {
        title: "Student Advisory Board Member",
        company: "Student Leadership & Involvement (SLI) at Oregon State University",
        timeFrame: "Sep 2018 – Dec 2018",
        tasks: [
          'Reviewed and made recommendations regarding proposed increases in the annual budget of the Student Leadership & Involvement',
          'Recommended the student fee amount required to support the Student Leadership & Involvement annual budget request to the Budget Manager',
          'Reviewed unit programs, services, and facilities and made recommendations to staff to support and enhance the success of OSU students',
          'Served as a sounding board for the leadership of the SLI unit',
          'Served as a liaison between the ASOSU, SFC, and SLI unit',
          'Leveraged knowledge in (hard) MS Excel, VBA, (soft) communication, public speaking, and networking'
        ]
      },
      {
        title: "Communication Representative",
        company: "Ettihad Cultural Center (ECC) at Oregon State University",
        timeFrame: "Aug 2017 - Jun 2018",
        tasks: [
          'Organized 10 + events, including the Ettihad Cultural Festival, which hosted 2000 + attendees',
          'Directed a team of 15 people through rehearsals and performance in Ettihad Cultural Festival',
          'Acted as the MC for two events that collaborated with other university departments and cultural centers',
          'Started programming in Ruby and JavaScript to solve daily abstract problems involving the cultural center',
          'Leveraged knowledge in (hard) Ruby, JavaScript, MS Excel, VBA, (soft) communication, public speaking, event planning, teamwork, and leadership'
        ]
      },
    ]
  }
})

let education = new Vue({
  el: "#education",
  data: {
    units: [
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
        title: 'OSUChat',
        description: 'Oregon State University’s first fully functional chat system',
        highlights: [
          'Installed Action Cable / web sockets to build a chat mechanism for simultaneous live communication',
          'Linked React to backend and created chat scroll pagination mechanism without use of external gems or libraries for faster site performance'
        ],
        tech: {
          database: 'PostgreSQL',
          backend: 'Ruby on Rails',
          frontend: 'React, Redux'
        },
        links: {
          doc: 'https://github.com/Hakeemmidan/OSUChat',
          live: 'http://www.osuchat.com'
        }
      },
      {
        title: 'Poll App (group project: 3 developers) ',
        description: 'A polling app where users submit two pictures for their friends to vote on',
        highlights: [
          'Collaborated with 2 other full- stack developers and team lead in an Agile environment using ZenHub for ticket management',
          'Wrote integration tests(35 specs) using Mocha, Chai and in-memory mock- database for better app maintainability',
          'Led and maintained cookie- based authentication API routes using http - cookies and json web tokens for better security',
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
          "Leveraged ‘request’, ‘cheerio’, and ‘url - parse’ Node packages to web crawl / scrape page specific information(citations, author statistics, etc.)",
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
          'Connected window.localStorage with shopping cart to avoid querying database every time a user updates cart; resulting in faster site performance',
          'Implemented sign-in form autofill by utilizing jQuery for element selection and JavaScript asynchronous behavior for animated appearance',
          'Integrated multi- photo attachment feature using Amazon S3, JSON JBuilder, and Ruby on Rails’ Active Storage'
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