/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shyam Bhalodia",
  title: "Hi all, I'm Shyam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with 3+ years of experience in JavaScript, Node Js, Nest Js, Express Js, Hapi.dev and React Js specializing in building Web and Mobile applications using these technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lnEEwsu3hGKlirwtAtBa3rLbGvnmAKhe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shyambhalodia",
  linkedin: "https://www.linkedin.com/in/shyam-bhalodia-9188971b2/",
  gmail: "shyambhalodiya61@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "With over 3+ years of experience in the web development industry, I have honed my skills and expertise in utilizing a wide range of technologies to deliver exceptional solutions. My proficiency lies in leveraging the power of Node.js, Nest.js, Express.js, Hapi.dev, MongoDB, Postgres, Firebase, microservices, AWS, and Socket.io to create cutting-edge web applications.",
  skills: [
    emoji(
      "⚡When it comes to web development, my proficiency in Node.js, Nest.js, and Express.js allows me to build high-performance, scalable applications that provide a seamless user experience. These frameworks enable me to develop robust back-end systems and APIs, ensuring that your application runs smoothly and efficiently."
    ),
    emoji(
      "⚡ Data management is a crucial aspect of any web application, and I excel in working with MongoDB and Postgres to build robust and efficient database solutions."
    )
    // emoji(
    //   "⚡My expertise also extends to leveraging the power of Firebase to bring real-time collaboration and cutting-edge functionalities to your applications."
    // ),
    // emoji(
    //   "⚡My years of experience, industry knowledge, and technical skills have equipped me to deliver exceptional web development services. I am dedicated to staying updated with the latest industry trends and technologies, ensuring that I provide innovative solutions that keep you ahead of the competition."
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shree G.K. Dholakiya School ",
      logo: require("./assets/images/dholakiya_school.jpg"),
      title: "High School Education",
      subHeader:
        "Completed 11th and 12th Grade with GSEB (Gujarat Secondary and Higher Secondary Education Board)",
      duration: "September 2015 - April 2018"
    },
    {
      schoolName: "Darshan University",
      logo: require("./assets/images/DU_Logo.png"),
      title: "College Education",
      subHeader: "Bachelor's Degree in Computer Science",
      duration: "June 2018 - June 2022"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Javascript",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tridhya Tech",
      companylogo: require("./assets/images/download.jpeg"),
      date: "June 2021 – May 2022",
      desc: "As an Associate Software Engineer at Tridhya Tech, I have had the privilege of contributing my skills and expertise as a backend developer to a range of exciting projects. With a strong foundation in computer science and a passion for solving complex problems, I have played a vital role in developing and maintaining robust backend systems that power various applications."
    },
    {
      role: "Backend Developer",
      company: "Hauper Technologies",
      companylogo: require("./assets/images/download (1).jpeg"),
      date: "May 2022 – Present",
      desc: "I have had the privilege of serving as a Backend Developer at Hauper Technologies since May 2022.My primary responsibility as a Backend Developer has been to design, develop, and maintain the server-side components that power our applications. I have consistently demonstrated expertise in a range of technologies, including but not limited to Node.js,Nest.js,Express.js to craft efficient and scalable backend systems."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A Showcase of My Work",
  projects: [
    {
      image: require("./assets/images/download.png"),
      projectName: "ScholarLead",
      projectDesc:
        "The School Management Portal is a comprehensive solution designed to streamline the administrative tasks of educational institutions. With the ability for school admins and super admins to register and manage their institutions, create networks, and establish multiple campuses, this portal offers a centralized platform for efficient school management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.scholarlead.com/auth/login/"
        }
      ]
    },
    {
      image: require("./assets/images/images.png"),
      projectName: "Targus - Global Accessories Finder",
      projectDesc:
        "The Targus Product Compatibility and Accessories Management System is a cutting-edge solution designed to simplify and enhance the accessory shopping experience. This comprehensive platform offers both an intuitive admin panel and a user-friendly front end to meet the diverse needs of our customers.",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://gaf-admin.inpixelinc.com/auth"
        }
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "Inspiremind",
      projectDesc:
        "'InspireMind' is a holistic wellness platform that connects users with experienced consultants offering personalized service plans for diet and yoga. Our platform is designed to inspire and empower individuals on their wellness journey, providing them with convenient access to expert guidance and support.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://consultant.inspiremind.io/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9408860729",
  email_address: "shyambhalodiya61@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
