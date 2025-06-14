const translations = {
  en: {
    welcomeMsg: 'Good Afternoon, Welcome civicLens Citizen',
    todayAction: "+ Here are today's action for you",
    statusTitle: 'Overflow of Sewerage or Storm Water reported',
    statusId: 'ID: W0210C28125506',
    statusAddress: '14, 2nd Main Road, Cholanayakanahalli, Bengaluru Urban, IN, India',
    viewStatus: 'View Status',
    tileComplaintTitle: 'Post A Complaint',
    tileComplaintDesc: 'We are committed to reciving your complaint',
    tileRateTitle: 'Rate Public Toilet',
    tileRateDesc: 'Scan QR Code',
    tileLocatorTitle: 'civicLens Toilet Locator',
    tileLocatorDesc: 'Find the nearest toilet',
    tileFeedbackTitle: 'Provide Feedback',
    tileFeedbackDesc: 'Tell your experiance of civicLens App',
    navHome: 'Home',
    navEvents: 'Events',
    navComplaints: 'Complaints',
    navProfile: 'Profile',
    complaintsHeading: 'Previous Complaints',
    complaint1Title: 'Overflow of Sewerage',
    complaint1Status: 'In Progress',
    complaint2Title: 'Garbage not collected',
    complaint2Status: 'Resolved',
    complaint3Title: 'Public Toilet Issue',
    complaint3Status: 'Pending',
  },
  hi: {
    welcomeMsg: 'नमस्कार, civicLens नागरिक आपका स्वागत है',
    todayAction: 'यहाँ आज के लिए आपके कार्य हैं',
    statusTitle: 'सीवरेज या वर्षा जल का ओवरफ्लो रिपोर्ट किया गया',
    statusId: 'आईडी: W0210C28125506',
    statusAddress: '14, 2nd मेन रोड, चोलानायकनहल्ली, बेंगलुरु अर्बन, भारत',
    viewStatus: 'स्थिति देखें',
    tileComplaintTitle: 'शिकायत दर्ज करें',
    tileComplaintDesc: 'हम आपकी शिकायत प्राप्त करने के लिए प्रतिबद्ध हैं',
    tileRateTitle: 'सार्वजनिक शौचालय रेट करें',
    tileRateDesc: 'क्यूआर कोड स्कैन करें',
    tileLocatorTitle: 'civicLens शौचालय लोकेटर',
    tileLocatorDesc: 'निकटतम शौचालय खोजें',
    tileFeedbackTitle: 'प्रतिक्रिया दें',
    tileFeedbackDesc: 'civicLens ऐप का अनुभव साझा करें',
    navHome: 'होम',
    navEvents: 'इवेंट्स',
    navComplaints: 'शिकायतें',
    navProfile: 'प्रोफ़ाइल',
    complaintsHeading: 'पिछली शिकायतें',
    complaint1Title: 'सीवरेज का ओवरफ्लो',
    complaint1Status: 'प्रगति में',
    complaint2Title: 'कचरा नहीं उठाया गया',
    complaint2Status: 'सुलझा लिया गया',
    complaint3Title: 'सार्वजनिक शौचालय समस्या',
    complaint3Status: 'लंबित',
  },
  // ...add other languages as needed...
};

function updateDashboardLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.getElementById('welcomeMsg').textContent = t.welcomeMsg;
  document.getElementById('todayAction').textContent = t.todayAction;
  document.getElementById('statusTitle').textContent = t.statusTitle;
  document.getElementById('statusId').textContent = t.statusId;
  document.getElementById('statusAddress').innerHTML = '<i class="fas fa-location-dot"></i> ' + t.statusAddress;
  document.getElementById('viewStatusBtn').textContent = t.viewStatus;
  document.getElementById('tileComplaintTitle').textContent = t.tileComplaintTitle;
  document.getElementById('tileComplaintDesc').textContent = t.tileComplaintDesc;
  document.getElementById('tileRateTitle').textContent = t.tileRateTitle;
  document.getElementById('tileRateDesc').textContent = t.tileRateDesc;
  document.getElementById('tileLocatorTitle').textContent = t.tileLocatorTitle;
  document.getElementById('tileLocatorDesc').textContent = t.tileLocatorDesc;
  document.getElementById('tileFeedbackTitle').textContent = t.tileFeedbackTitle;
  document.getElementById('tileFeedbackDesc').textContent = t.tileFeedbackDesc;
  document.getElementById('navHome').textContent = t.navHome;
  document.getElementById('navEvents').textContent = t.navEvents;
  document.getElementById('navComplaints').textContent = t.navComplaints;
  document.getElementById('navProfile').textContent = t.navProfile;
  // Previous Complaints section
  document.getElementById('complaintsHeading').textContent = t.complaintsHeading;
  document.getElementById('complaint1Title').textContent = t.complaint1Title;
  document.getElementById('complaint1Status').textContent = t.complaint1Status;
  document.getElementById('complaint2Title').textContent = t.complaint2Title;
  document.getElementById('complaint2Status').textContent = t.complaint2Status;
  document.getElementById('complaint3Title').textContent = t.complaint3Title;
  document.getElementById('complaint3Status').textContent = t.complaint3Status;
}

// Only set language from localStorage on load
const savedLang = localStorage.getItem('sbm_lang') || 'en';
updateDashboardLanguage(savedLang);

// Address input and GPS logic
const addressInput = document.getElementById('addressInput');
const addressText = document.getElementById('addressText');
const gpsBtn = document.getElementById('gpsBtn');

addressInput.addEventListener('input', function() {
  addressText.textContent = addressInput.value;
});

gpsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (navigator.geolocation) {
    gpsBtn.disabled = true;
    gpsBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // Try to use a free reverse geocoding API (OpenStreetMap Nominatim)
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
        .then(res => res.json())
        .then(data => {
          const addr = data.display_name || `Latitude: ${lat}, Longitude: ${lon}`;
          addressInput.value = addr;
          addressText.textContent = addr;
          gpsBtn.disabled = false;
          gpsBtn.innerHTML = '<i class="fas fa-crosshairs"></i>';
        })
        .catch(() => {
          const fallback = `Latitude: ${lat}, Longitude: ${lon}`;
          addressInput.value = fallback;
          addressText.textContent = fallback;
          gpsBtn.disabled = false;
          gpsBtn.innerHTML = '<i class="fas fa-crosshairs"></i>';
        });
    }, function() {
      alert('Unable to retrieve your location.');
      gpsBtn.disabled = false;
      gpsBtn.innerHTML = '<i class="fas fa-crosshairs"></i>';
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}); 