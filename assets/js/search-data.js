// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-agenda",
          title: "Agenda",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/agenda/";
          },
        },{id: "nav-faq",
          title: "FAQ",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/faq/";
          },
        },{id: "nav-catalysts",
          title: "Catalysts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/catalysts/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "agenda_cards-fututed-ai",
          title: 'FututEd AI',
          description: "",
          section: "Agenda_cards",handler: () => {
              window.location.href = "/agenda_cards/promo/";
            },},{id: "agenda_cards-schedule",
          title: 'Schedule',
          description: "",
          section: "Agenda_cards",handler: () => {
              window.location.href = "/agenda_cards/schedule/";
            },},{id: "agenda_cards-where-and-when",
          title: 'Where and When',
          description: "",
          section: "Agenda_cards",handler: () => {
              window.location.href = "/agenda_cards/where_when/";
            },},{id: "catalysts_cards-judges",
          title: 'Judges',
          description: "",
          section: "Catalysts_cards",handler: () => {
              window.location.href = "/catalysts_cards/judges/";
            },},{id: "catalysts_cards-mentors",
          title: 'Mentors',
          description: "",
          section: "Catalysts_cards",handler: () => {
              window.location.href = "/catalysts_cards/mentors/";
            },},{id: "catalysts_cards-scoring",
          title: 'Scoring',
          description: "",
          section: "Catalysts_cards",handler: () => {
              window.location.href = "/catalysts_cards/scoring/";
            },},{id: "catalysts_cards-futured-ai",
          title: 'FuturEd AI',
          description: "",
          section: "Catalysts_cards",handler: () => {
              window.location.href = "/catalysts_cards/top/";
            },},{id: "catalysts_cards-why-apply",
          title: 'Why Apply',
          description: "",
          section: "Catalysts_cards",handler: () => {
              window.location.href = "/catalysts_cards/why_apply/";
            },},{id: "faq_cards-what-is-a-hackathon",
          title: 'What is a hackathon?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question1/";
            },},{id: "faq_cards-will-there-be-mentors-to-assist-my-team",
          title: 'Will there be mentors to assist my team?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question10/";
            },},{id: "faq_cards-how-can-i-stay-updated",
          title: 'How can I stay updated?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question11/";
            },},{id: "faq_cards-how-do-i-collect-my-prize",
          title: 'How do I collect my prize?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question12/";
            },},{id: "faq_cards-when-will-the-prizes-be-given",
          title: 'When will the prizes be given?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question13/";
            },},{id: "faq_cards-what-is-an-ai-hackathon",
          title: 'What is an AI hackathon?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question2/";
            },},{id: "faq_cards-is-registration-to-futured-ai-free",
          title: 'Is registration to FuturEd AI free?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question3/";
            },},{id: "faq_cards-who-can-participate-in-futured-ai",
          title: 'Who can participate in FuturEd AI?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question4/";
            },},{id: "faq_cards-what-should-i-bring-to-the-futured-ai",
          title: 'What should I bring to the FuturEd AI?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question5/";
            },},{id: "faq_cards-do-i-need-to-have-prior-experience",
          title: 'Do I need to have prior experience?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question6/";
            },},{id: "faq_cards-can-i-bring-a-pre-existing-project",
          title: 'Can I bring a pre-existing project?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question7/";
            },},{id: "faq_cards-what-is-the-selection-process",
          title: 'What is the selection process?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question8/";
            },},{id: "faq_cards-what-is-the-judging-rubric",
          title: 'What is the judging rubric?',
          description: "",
          section: "Faq_cards",handler: () => {
              window.location.href = "/faq_cards/question9/";
            },},{id: "home_cards-at-a-glance",
          title: 'At_a_glance',
          description: "",
          section: "Home_cards",handler: () => {
              window.location.href = "/home_cards/at_a_glance/";
            },},{id: "home_cards-challenge",
          title: 'Challenge',
          description: "",
          section: "Home_cards",handler: () => {
              window.location.href = "/home_cards/challenge/";
            },},{id: "home_cards-organizers",
          title: 'Organizers',
          description: "",
          section: "Home_cards",handler: () => {
              window.location.href = "/home_cards/organizers/";
            },},{id: "home_cards-prizes",
          title: 'Prizes',
          description: "",
          section: "Home_cards",handler: () => {
              window.location.href = "/home_cards/prizes/";
            },},{id: "home_cards-timeline",
          title: 'Timeline',
          description: "",
          section: "Home_cards",handler: () => {
              window.location.href = "/home_cards/timeline/";
            },},{id: "home_cards-why-apply",
          title: 'Why Apply',
          description: "",
          section: "Home_cards",handler: () => {
              window.location.href = "/home_cards/why_apply/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
