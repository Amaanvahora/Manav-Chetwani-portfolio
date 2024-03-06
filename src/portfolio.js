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
  username: "Manav Chetwani",
  title: "Hi all, I'm Manav Chetwani",
  subTitle: emoji(
    "Over 2+ years of work experience as a Machine Learning Engineer and Data Engineer.Skilled in architecting end-to-end ETL processes, harnessing technologies such as Spark, Spark Streaming, Databricks, and Azure Data Factory, to efficiently manage and process large-scale data pipelines."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mnx02",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "manav01chetwani@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Scripting Languages: C, C++, Python, Java, Scala, HTML, Shell Scripting"
    ),
    emoji("⚡ Big Data Processing Tools: Apache Hadoop, Apache Spark, Apache Hive, Apache Kafka"),
    emoji("⚡ Database: MongoDB, SQL, MySQL"),
    emoji("⚡ Machine Learning Tools: TensorFlow, Keras, PyTorch, XGBoost, Naive Bayes, Numpy, Pandas"),
    emoji("⚡ Version Control & Management: Git, GitLab, Github, JIRA, Agile Scrum, SDLC"),
    emoji("⚡ Others: Docker, Jenkins, CI/CD, REST APIs, Django, JSON, XML, Microsoft Office"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Windsor University",
      logo: require("./assets/images/windsorLogo.png"),
      subHeader: "Master of Applied Computing",
      duration: "Jan 2023 – Apr 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Implemented a Grocery Website Analysis prototype using Selenium for web scraping and parsing HTML content using JAVA, also implemented an inverted indexing approach to validate and extract relevant text from various shop websites in Canada in order to utilize extracted data to provide users with the best deals available.",
        "Showcased strong problem-solving skills and a deep understanding of e-commerce dynamics"
      ]
    },
    {
      schoolName: "Parul University",
      logo: require("./assets/images/parulLogo.png"),
      subHeader: "Bachelors of Technology in Computer Science and Engineering",
      duration: "Jul 2018 – Mar 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Developed a project with the goal of optimizing dog breed identification using advanced transfer learning models like RNNs and CNNs.",
        "Leveraged cutting-edge technologies to modify pre-trained models using mlflows through layered adjustments, aiming to boost efficiency in classifying labeled dog images."]
    }
  ]
};
// Blogs Section

const blogSection = {
  title: "My testomonial",
  subtitle:"Recommendations on LinkedIn",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/in/manavchetwani/",
      title: "Gyandip Mallhi : Former Data Engineer @ Jio Platforms (Reliance)",
      description:
        "Manav was an intern at the firm i worked at. He has great drive and is a quick learner."
    },
    {
      url: "https://www.linkedin.com/in/manavchetwani/",
      title: "Shweta Ajay : Senior Data Processing Specialist/SME at NielsenIQ",
      description:
        "I found him to be hard-working, bright, and a skilled communicator. I particularly enjoyed his sense of humor in the face of what can sometimes be a stressful situation when faced with tight deadlines. But what makes him stand out is his willingness to help others and his extraordinary ability of problem solving. A very active person with a strong will to be at par with excellence."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }
  // ],
  // displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML Engineer Intern",
      company: "BlackBerry",
      companylogo: require("./assets/images/blackberryLogo.png"),
      date: "Jan 2024 - April 2024",
      descBullets: [
        "Deployed machine learning models, specializing in DNN, XGBoost, RNN (LSTM) and LLM, to analyze and mitigate cybersecurity threats within large datasets, enhancing BlackBerry's security infrastructure.",
        "Utilized Principal Component Analysis and SMOTE for advanced feature engineering, optimizing representation and mitigating bias. Improved machine learning model performance by 8%.",
        "Implemented Local Outlier Factor and Isolation Forest algorithms to detect outliers, enhancing data integrity.",
        " Collaborated seamlessly with cross-functional teams by actively utilizing Jira and Confluence, ensuring effective project management and streamlined communication.",
        "Applied Python and SQL Server for robust data analysis and algorithm implementation, ensuring the identification and prevention of security vulnerabilities, showcasing a commitment to data-driven security measures."
      ]
    },
    {
      role: "Data Processing Specialist",
      company: "NeilsonIQ",
      companylogo: require("./assets/images/nelisonLogo.png"),
      date: "April 2022 - Dec 2022",
      descBullets: [
        "Developed automated tools using Python, utilizing libraries such as NumPy, Pandas, and OpenCV.",
        "Spearheaded database checks and processing for high-profile clients (PNG, Coca-Cola, Heineken, SPG, Pepsi).",
        "Designed and accomplished efficient and scalable automation solutions to improve database management and processing workflows.",
        "Collaborated with cross-functional teams to understand client requirements and translated it into automated solutions, ensuring a 15% increase in timely and high-quality deliverables. ",
        "Enhanced data quality by creating a rigorous testing framework that includes unit and integration tests. This ensures a reliable and error-free data processing pipeline."
      ]
    },
    {
      role: "Big Data Engineer",
      company: "JIO Reliance Industries LTD",
      companylogo: require("./assets/images/jioLogo.png"),
      date: "Jan 2015 – Sep 2015",
      descBullets: [
        "Performed Spark jobs on petabytes of incoming data with Azure Databricks, harnessing the parallel processing and fault-tolerance of Spark's distributed computing framework to meticulously analyze large-scale datasets across a spectrum of use cases. ",
        "Demonstrated proficiency in designing and implementing prototypes for various data architecture solutions, gaining a deep understanding of different architectural patterns and its applicability to specific business requirements. ",
        "Designed the data pipeline architecture using Apache Airflow in team of 5 for a new product called JIO Meet that scaled from 0 to 350,000 daily active users. ",
        "Worked closely with data scientists and analysts to understand data requirements and providing necessary datasets and transformations using services like Azure Machine Learning and Azure Data Factory for their analytical and modeling tasks"
    
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/githubLogo.png"),
      projectName: "Grocery Website Analysis",
      projectDesc: "The project involves developing a back-end software application that uses concepts like Web crawler, Data validation using regular expressions, HTML parser, Inverted indexing, Frequency count, Page ranking, Spell checking, Word completion, Search frequency, Finding patterns using regular expressions.",
      footerLink: [
        {
          name: "Grocery Website Analysis",
          url: "https://github.com/mnx02/Grocery-websites-analysis"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/githubLogo.png"),
      projectName: "Comparative Study of Trainable Network in Transfer Learning",
      projectDesc: "The comparative studying between different architectures for transfer learning models in the context of dog breed identification. Dog breed identification is a classic problem in computer vision, where the goal is to classify images of dogs into different breeds.",
      footerLink: [
        {
          name: "Comparative Study of Trainable Network in Transfer Learning ",
          url: "https://github.com/mnx02/Comparative-Study-of-Trainable-Network-in-Transfer-Learning-for-Dog-Breed-Identification"
        }
      ]
    },
    {
      image: require("./assets/images/githubLogo.png"),
      projectName: "WeSeeU",
      projectDesc: "This is a POC of software to make games accessible to visually impaired people. Software is developed by the help of various python libraries (pyautogui, opencv, gTTS, speech recognization, etc.) and in agile methodologies. This POC includes two games StickMan Archer 2 by Crazy games and Ball Game as a part of project.",
      footerLink: [
        {
          name: "WeSeeU",
          url: "https://github.com/mnx02/WeSeeUn"
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
      title: "Microsoft Certified: Azure Data Fundamentals",
      subtitle:
        "Skills: Hadoop · Microsoft Power BI · Microsoft Azures.",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/users/manavchetwani-8294/credentials/f5e2ebef8e13c58b?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },
    {
      title: "Learning Hadoop",
      subtitle:
        "Skills: Hadoop · Apache Kafka · C (Programming Language) · C# .",
      image: require("./assets/images/linkedLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/c008188d5901def8ed6f4fbe418dd96b8b54244ab3fe96d7b48d91151c43665d"
        }
      ]
    },

    {
      title: "Unix Essential Training",
      subtitle: "Skills: Hadoop · Apache Kafka · C (Programming Language) · C# · Shell Scripting · Java",
      image: require("./assets/images/linkedLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/d932e3682ae9d09dbc9c6d4fe76edc3178f34d7ab0126914adaf5867458fb70a"
        }
      ]
    },
    {
      title: "Software Design: From Requirements to Release",
      subtitle: "Skills: Software Development Life Cycle (SDLC) · Shell Scripting · Javaa",
      image: require("./assets/images/linkedLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/747e67f0de283382d9a54488a7ef5e44a2947af0e490d31a2c1767af091dd293"
        }
      ]
    },
    {
      title: "Using Databases with Python",
      subtitle: "Skills: Pandas (Software) · SQL · C (Programming Language)",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/42FS8RTGHHVX"
        }
      ]
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "Skills: Pandas (Software) · Debugging · C (Programming Language)",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/72X27C7VCSWS"
        }
      ]
    },
    {
      title: "Python Data Structures",
      subtitle: "Skills: Pandas (Software) · C (Programming Language))",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/QLHRDL2KMM6LS"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// // Podcast Section

const podcastSection = {
  title: emoji("My testomonial"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://drive.google.com/drive/folders/1s0-h1lcoscfgE3J_gwrpJFtaqlr55Jg4"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(437)-599-4919",
  email_address: "manav01chetwani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
