window.onload = function() {
    var modal = document.getElementById('modal');
    var acceptBtn = document.getElementById('accept');
    var declineBtn = document.getElementById('decline');
    var image = document.getElementById('scaryImage');
    var alertContainer = document.getElementById('alert-container');

    var alerts = [
        "⚠️ Warning: Your system has been hacked!",
        "⚠️ Virus is loading...",
        "⚠️ All your files have been destroyed!",
        "😈 This is just a prank! Don't worry. Ha ha ha!"
    ];

    function showScaryContent() {
        modal.style.display = 'none';
        image.classList.remove('hidden');
        alertContainer.classList.remove('hidden');
       
        let delay = 0;
        alerts.forEach((message, index) => {
            setTimeout(() => {
                var alertBox = document.createElement('div');
                alertBox.classList.add('alert-box');
                alertBox.innerText = message;
                alertContainer.insertBefore(alertBox, alertContainer.firstChild);
                var audio = new Audio('notification.mp3'); // تأكد من وجود ملف الصوت في نفس المجلد
                audio.play();
            }, delay);
            delay += 2000;
        });
    }

    acceptBtn.onclick = showScaryContent;
    declineBtn.onclick = showScaryContent;
};