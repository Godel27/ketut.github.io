function showPoem() {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const clickSound = new Audio("1-Minute_Nature_Background_Sound(128k).mp3");
    const backgroundMusic = new Audio("Noble_Maiden_Fair__Instrumental__-_Brave_FYC_Soundtrack(128k).mp3");
    
    // Mengatur volume musik dan efek suara
    clickSound.volume = 0.2; // Volume lebih kecil untuk efek suara
    backgroundMusic.volume = 1.0; // Volume normal untuk musik latar

    // Memainkan efek suara klik
    clickSound.play();

    // Tampilkan screen2 dan sembunyikan screen1 setelah suara klik dimainkan
    setTimeout(() => {
        screen1.style.display = 'none';
        screen2.style.display = 'flex';

        // Memainkan musik latar secara otomatis
        backgroundMusic.play();
    }, 500); // Durasi penundaan sesuai durasi suara klik
}
