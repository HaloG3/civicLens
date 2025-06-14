const translations = {
  en: {
    complaintsPageHeading: 'Complaints',
    tilePosted: 'Posted',
    tileVoted: 'Voted',
    tileNearby: 'Nearby',
    tileCity: 'City',
    tileActivity: 'Your Activity',
    tileSearch: 'Search',
    navHome: 'Home',
    navEvents: 'Events',
    navComplaints: 'Complaints',
    navProfile: 'Profile',
  },
  hi: {
    complaintsPageHeading: 'शिकायतें',
    tilePosted: 'पोस्ट की गई',
    tileVoted: 'वोटेड',
    tileNearby: 'नजदीकी',
    tileCity: 'शहर',
    tileActivity: 'आपकी गतिविधि',
    tileSearch: 'खोजें',
    navHome: 'होम',
    navEvents: 'इवेंट्स',
    navComplaints: 'शिकायतें',
    navProfile: 'प्रोफ़ाइल',
  },
  // ...add other languages as needed...
};

function updateComplaintsLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.getElementById('complaintsPageHeading').textContent = t.complaintsPageHeading;
  document.getElementById('tilePosted').textContent = t.tilePosted;
  document.getElementById('tileVoted').textContent = t.tileVoted;
  document.getElementById('tileNearby').textContent = t.tileNearby;
  document.getElementById('tileCity').textContent = t.tileCity;
  document.getElementById('tileActivity').textContent = t.tileActivity;
  document.getElementById('tileSearch').textContent = t.tileSearch;
  document.getElementById('navHome').textContent = t.navHome;
  document.getElementById('navEvents').textContent = t.navEvents;
  document.getElementById('navComplaints').textContent = t.navComplaints;
  document.getElementById('navProfile').textContent = t.navProfile;
}

const savedLang = localStorage.getItem('sbm_lang') || 'en';
updateComplaintsLanguage(savedLang); 