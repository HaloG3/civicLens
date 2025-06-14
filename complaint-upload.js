const translations = {
  en: {
    uploadHeading: 'Upload Photo',
    takePhotoBtn: 'Take a Photo',
    uploadGalleryBtn: 'Upload from Gallery',
    uploadedMsg: 'Uploaded!',
  },
  hi: {
    uploadHeading: 'फोटो अपलोड करें',
    takePhotoBtn: 'फोटो लें',
    uploadGalleryBtn: 'गैलरी से अपलोड करें',
    uploadedMsg: 'अपलोड हो गया!',
  },
  // ...add other languages as needed...
};

function updateUploadLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.getElementById('uploadHeading').textContent = t.uploadHeading;
  document.getElementById('takePhotoBtn').textContent = t.takePhotoBtn;
  document.getElementById('uploadGalleryBtn').textContent = t.uploadGalleryBtn;
  document.getElementById('uploadedMsg').textContent = t.uploadedMsg;
}

const savedLang = localStorage.getItem('sbm_lang') || 'en';
updateUploadLanguage(savedLang);

document.getElementById('backBtn').addEventListener('click', function() {
  window.history.back();
});

document.getElementById('cameraInput').addEventListener('change', function() {
  if (this.files && this.files.length > 0) {
    document.getElementById('uploadedMsg').style.display = 'block';
  }
});
document.getElementById('galleryInput').addEventListener('change', function() {
  if (this.files && this.files.length > 0) {
    document.getElementById('uploadedMsg').style.display = 'block';
  }
}); 