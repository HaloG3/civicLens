const mobileInput = document.getElementById('mobile');
const nextBtn = document.getElementById('nextBtn');
const languageSelect = document.getElementById('language');
const heading = document.querySelector('.card h2');
const privacy = document.querySelector('.privacy');

const translations = {
  en: {
    heading: 'Enter Mobile Number',
    privacy: 'These details are not shared with anyone.',
    placeholder: 'Enter your mobile number',
    next: 'Next',
  },
  hi: {
    heading: 'मोबाइल नंबर दर्ज करें',
    privacy: 'यह जानकारी किसी के साथ साझा नहीं की जाती है।',
    placeholder: 'अपना मोबाइल नंबर दर्ज करें',
    next: 'आगे',
  },
  bn: {
    heading: 'মোবাইল নম্বর লিখুন',
    privacy: 'এই তথ্য কারো সাথে ভাগ করা হয় না।',
    placeholder: 'আপনার মোবাইল নম্বর লিখুন',
    next: 'পরবর্তী',
  },
  te: {
    heading: 'మొబైల్ నంబర్ నమోదు చేయండి',
    privacy: 'ఈ వివరాలు ఎవరికీ పంచుకోబడవు.',
    placeholder: 'మీ మొబైల్ నంబర్ నమోదు చేయండి',
    next: 'తరువాత',
  },
  mr: {
    heading: 'मोबाईल नंबर प्रविष्ट करा',
    privacy: 'ही माहिती कोणासोबतही शेअर केली जाणार नाही.',
    placeholder: 'आपला मोबाईल नंबर प्रविष्ट करा',
    next: 'पुढे',
  },
  ta: {
    heading: 'மொபைல் எண்ணை உள்ளிடவும்',
    privacy: 'இந்த விவரங்கள் யாருடனும் பகிரப்படாது.',
    placeholder: 'உங்கள் மொபைல் எண்ணை உள்ளிடவும்',
    next: 'அடுத்தது',
  },
  gu: {
    heading: 'મોબાઇલ નંબર દાખલ કરો',
    privacy: 'આ વિગતો કોઈ સાથે શેર કરવામાં આવતી નથી.',
    placeholder: 'તમારો મોબાઇલ નંબર દાખલ કરો',
    next: 'આગળ',
  },
  ur: {
    heading: 'موبائل نمبر درج کریں',
    privacy: 'یہ تفصیلات کسی کے ساتھ شیئر نہیں کی جاتیں۔',
    placeholder: 'اپنا موبائل نمبر درج کریں',
    next: 'اگلا',
  },
  kn: {
    heading: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    privacy: 'ಈ ವಿವರಗಳನ್ನು ಯಾರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.',
    placeholder: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    next: 'ಮುಂದೆ',
  },
  ml: {
    heading: 'മൊബൈൽ നമ്പർ നൽകുക',
    privacy: 'ഈ വിവരങ്ങൾ ആരുമായി പങ്കിടുന്നില്ല.',
    placeholder: 'നിങ്ങളുടെ മൊബൈൽ നമ്പർ നൽകുക',
    next: 'അടുത്തത്',
  },
  pa: {
    heading: 'ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    privacy: 'ਇਹ ਵੇਰਵੇ ਕਿਸੇ ਨਾਲ ਸਾਂਝੇ ਨਹੀਂ ਕੀਤੇ ਜਾਂਦੇ।',
    placeholder: 'ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    next: 'ਅੱਗੇ',
  },
  or: {
    heading: 'ମୋବାଇଲ୍ ନମ୍ବର ଦାଖଲ କରନ୍ତୁ',
    privacy: 'ଏହି ବିବରଣୀ କାହା ସହିତ ଅଂଶୀଦାର କରାଯାଏ ନାହିଁ।',
    placeholder: 'ଆପଣଙ୍କର ମୋବାଇଲ୍ ନମ୍ବର ଦାଖଲ କରନ୍ତୁ',
    next: 'ଆଗକୁ',
  },
  as: {
    heading: 'মোবাইল নম্বৰ লিখক',
    privacy: 'এই তথ্য কোনোবাইৰ সৈতে ভাগ নকৰা হয়।',
    placeholder: 'আপোনাৰ মোবাইল নম্বৰ লিখক',
    next: 'পৰৱৰ্তী',
  },
  ma: {
    heading: 'मोबाइल नंबर दर्ज करू',
    privacy: 'ई जानकारी केकरो संगे साझा नै कैल जायत।',
    placeholder: 'अपन मोबाइल नंबर दर्ज करू',
    next: 'आगाँ',
  },
  sa: {
    heading: 'चलदूरध्वनि संख्या लिखत',
    privacy: 'एतेषां विवरणानि कस्यापि सह न साझ्यन्ते।',
    placeholder: 'स्वस्य चलदूरध्वनि संख्या लिखत',
    next: 'अग्रिम्',
  },
  ks: {
    heading: 'موبائل نمبر درج کریں',
    privacy: 'یہ تفصیلات کسی کے ساتھ شیئر نہیں کی جاتیں۔',
    placeholder: 'اپنا موبائل نمبر درج کریں',
    next: 'اگلا',
  },
  sd: {
    heading: 'موبائل نمبر داخل ڪريو',
    privacy: 'اهي تفصيلون ڪنهن سان به ونڊيون نٿيون وڃن.',
    placeholder: 'پنهنجو موبائل نمبر داخل ڪريو',
    next: 'اڳتي',
  },
  doi: {
    heading: 'मोबाइल नंबर दर्ज करो',
    privacy: 'ई जानकारी किसे नाल सांझी नईं की जांदी।',
    placeholder: 'अपना मोबाइल नंबर दर्ज करो',
    next: 'अगला',
  },
  mni: {
    heading: 'মোবাইল নম্বর লিখুন',
    privacy: 'এই তথ্য কারো সাথে ভাগ করা হয় না।',
    placeholder: 'আপনার মোবাইল নম্বর লিখুন',
    next: 'পরবর্তী',
  },
  bho: {
    heading: 'मोबाइल नंबर दर्ज करीं',
    privacy: 'ई जानकारी केहू से साझा नइखे होला।',
    placeholder: 'अपना मोबाइल नंबर दर्ज करीं',
    next: 'आगे',
  },
  ne: {
    heading: 'मोबाइल नम्बर प्रविष्ट गर्नुहोस्',
    privacy: 'यी विवरणहरू कसैसँग साझा गरिँदैन।',
    placeholder: 'आफ्नो मोबाइल नम्बर प्रविष्ट गर्नुहोस्',
    next: 'अर्को',
  },
  san: {
    heading: 'ᱢᱚᱵᱟᱭᱞ ᱱᱟᱢᱚᱨ ᱵᱟᱝᱠᱚ',
    privacy: 'ᱟᱢ ᱵᱟᱝᱠᱚ ᱵᱟᱝ ᱠᱚᱱᱟᱢ ᱵᱟᱝᱠᱚ ᱵᱟᱝ ᱠᱚᱱᱟᱢ ᱵᱟᱝ ᱠᱚᱱᱟᱢ ᱵᱟᱝ ᱠᱚᱱᱟᱢ ᱵᱟᱝ ᱠᱚᱱᱟᱢ',
    placeholder: 'ᱟᱢᱟᱜ ᱢᱚᱵᱟᱭᱞ ᱱᱟᱢᱚᱨ ᱵᱟᱝᱠᱚ',
    next: 'ᱵᱟᱝᱠᱚ',
  },
  kok: {
    heading: 'मोबाइल नंबर टाका',
    privacy: 'ही माहिती कोणाशीही शेअर केली जात नाही.',
    placeholder: 'तुमका मोबाइल नंबर टाका',
    next: 'पुढे',
  },
  sindhi: {
    heading: 'موبائل نمبر داخل ڪريو',
    privacy: 'اهي تفصيلون ڪنهن سان به ونڊيون نٿيون وڃن.',
    placeholder: 'پنهنجو موبائل نمبر داخل ڪريو',
    next: 'اڳتي',
  },
  dogri: {
    heading: 'मोबाइल नंबर दर्ज करो',
    privacy: 'ई जानकारी किसे नाल सांझी नईं की जांदी।',
    placeholder: 'अपना मोबाइल नंबर दर्ज करो',
    next: 'अगला',
  },
  tulu: {
    heading: 'ಮೊಬೈಲ್ ನಂಬರ್ ನಮೂದಿಸಿ',
    privacy: 'ಈ ವಿವರಗಳನ್ನು ಯಾರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.',
    placeholder: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ನಂಬರ್ ನಮೂದಿಸಿ',
    next: 'ಮುಂದೆ',
  },
};

function updateLanguage(lang) {
  const t = translations[lang] || translations['en'];
  heading.textContent = t.heading;
  privacy.textContent = t.privacy;
  mobileInput.placeholder = t.placeholder;
  nextBtn.textContent = t.next;
}

mobileInput.addEventListener('input', function() {
  const value = mobileInput.value.trim();
  if (/^\d{10}$/.test(value)) {
    nextBtn.disabled = false;
    nextBtn.classList.add('enabled');
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.remove('enabled');
  }
});

nextBtn.addEventListener('click', function() {
  if (!nextBtn.disabled) {
    localStorage.setItem('sbm_lang', languageSelect.value);
    window.location.href = 'dashboard.html';
  }
});

languageSelect.addEventListener('change', function() {
  updateLanguage(languageSelect.value);
});

// Set initial language
updateLanguage(languageSelect.value); 