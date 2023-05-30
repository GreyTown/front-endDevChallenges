document.getElementById('generate-btn').addEventListener('click', function () {
    var text = document.getElementById('text-input').value;

    if (text.trim() !== '') {
        var typeNumber = 4; // Change this as per your needs (1-40)
        var errorCorrectionLevel = 'L'; // Change this as per your needs ('L', 'M', 'Q', 'H')
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(text);
        qr.make();

        document.getElementById('qrcode').innerHTML = qr.createImgTag();
    }
});
