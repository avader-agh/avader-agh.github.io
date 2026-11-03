// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-start",
    title: "Start",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-osiągnięcia",
          title: "Osiągnięcia",
          description: "Nagrody i wyróżnienia członków koła w zawodach i konferencjach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/osiagniecia/";
          },
        },{id: "nav-projekty",
          title: "Projekty",
          description: "Projekty naukowe koła, w tym finansowane z Grantów Rektora AGH, oraz przygotowania do zawodów.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projekty/";
          },
        },{id: "nav-członkowie",
          title: "Członkowie",
          description: "Opiekunowie, zarząd i członkowie Koła Naukowego AGH AVADER.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/czlonkowie/";
          },
        },{id: "nav-logo",
          title: "Logo",
          description: "Logotypy Koła Naukowego AGH AVADER do pobrania – do plakatów, prezentacji, publikacji i social mediów.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/logo/";
          },
        },{id: "nav-en",
          title: "EN",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/en/";
          },
        },{
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
