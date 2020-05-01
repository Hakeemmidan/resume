let workExperience = new Vue({
  el: '#work-experience',
  data: {
    positions: [
      {
        title: "Software Engineer",
        company: "Fiskkit",
        timeFrame: "Dec 2019 - present",
        tasks: [
          'Currently leading configuration and customization of Google Analytics',
          'Led and implemented mobile responsiveness of website by utilizing CSS media queries  and React',
          'Fetched information from MySQL database through Laravel (PHP) backend and displayed in React / Redux frontend',
          'Interacted with codebase through Docker containers to allow for remote access'
        ]
      },
      {
        title: "Communication Representative",
        company: "Ettihad Cultural Center (ECC) at Oregon State University",
        timeFrame: "Aug 2017 - Jun 2018",
        tasks: [
          'Organized 10+ events, including the Ettihad Cultural Festival, which hosted 2000+ attendees',
          'Directed a team of 15 people through rehearsals and performance in Ettihad Cultural Festival',
          'Advocated for international students (primarily from South and Central Asia, and North Africa), and aided in conflict resolution',
          'Acted as the MC for two events that collaborated with other university departments and cultural centers'
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
          'Served as a liaison between the ASOSU, SFC, and SLI unit'
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