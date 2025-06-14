const translations = {
  en: {
    chooseCategoryHeading: 'Choose Category',
    postComplaintSubheading: 'Post a complaint',
    catYellowSpot: 'Yellow Spot (Public Urination Spot)',
    catSepticOverflow: 'Overflow of Septic Tanks (New)',
    catSewerOverflow: 'Overflow of Sewerage or Storm Water',
    catDeadAnimal: 'Dead animal(s)',
    catDustbinNotCleaned: 'Dustbins not cleaned',
    catGarbageDump: 'Garbage dump',
    catGarbageVehicle: 'Garbage vehicle not arrived',
    catSweepingNotDone: 'Sweeping not done',
    catNoElectricity: 'No electricity in public toilet(s)',
  },
  hi: {
    chooseCategoryHeading: 'श्रेणी चुनें',
    postComplaintSubheading: 'शिकायत दर्ज करें',
    catYellowSpot: 'पीला स्थान (सार्वजनिक मूत्र स्थान)',
    catSepticOverflow: 'सेप्टिक टैंक का ओवरफ्लो (नया)',
    catSewerOverflow: 'सीवरेज या वर्षा जल का ओवरफ्लो',
    catDeadAnimal: 'मृत जानवर',
    catDustbinNotCleaned: 'कूड़ेदान साफ नहीं किए गए',
    catGarbageDump: 'कचरा डंप',
    catGarbageVehicle: 'कचरा वाहन नहीं आया',
    catSweepingNotDone: 'झाड़ू नहीं लगी',
    catNoElectricity: 'सार्वजनिक शौचालय में बिजली नहीं',
  },
  // ...add other languages as needed...
};

function updateCategoryLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.getElementById('chooseCategoryHeading').textContent = t.chooseCategoryHeading;
  document.getElementById('postComplaintSubheading').textContent = t.postComplaintSubheading;
  document.getElementById('catYellowSpot').textContent = t.catYellowSpot;
  document.getElementById('catSepticOverflow').textContent = t.catSepticOverflow;
  document.getElementById('catSewerOverflow').textContent = t.catSewerOverflow;
  document.getElementById('catDeadAnimal').textContent = t.catDeadAnimal;
  document.getElementById('catDustbinNotCleaned').textContent = t.catDustbinNotCleaned;
  document.getElementById('catGarbageDump').textContent = t.catGarbageDump;
  document.getElementById('catGarbageVehicle').textContent = t.catGarbageVehicle;
  document.getElementById('catSweepingNotDone').textContent = t.catSweepingNotDone;
  document.getElementById('catNoElectricity').textContent = t.catNoElectricity;
}

// Set language on load
const savedLang = localStorage.getItem('sbm_lang') || 'en';
updateCategoryLanguage(savedLang);

document.getElementById('backBtn').addEventListener('click', function() {
  window.history.back();
}); 