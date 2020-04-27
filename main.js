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

let projects = new Vue({
  el: '#projects',
  data: {
  }
})