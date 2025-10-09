// ฟังก์ชันเพื่อโหลดฟอนต์
function loadFonts() {
    const fonts = [
        //SukhumvitSet
        new FontFace('SukhumvitSetThin', 'url(../assets/fonts/SukhumvitSet-Thin.woff)'),
        new FontFace('SukhumvitSetText', 'url(../assets/fonts/SukhumvitSet-Text.woff)'),
        new FontFace('SukhumvitSetLight', 'url(../assets/fonts/SukhumvitSet-Light.woff)'),
        new FontFace('SukhumvitSetMedium', 'url(../assets/fonts/SukhumvitSet-Medium.woff)'),
        new FontFace('SukhumvitSetSemiBold', 'url(../assets/fonts/SukhumvitSet-SemiBold.woff)'),
        new FontFace('SukhumvitSetBold', 'url(../assets/fonts/SukhumvitSet-Bold.woff)'),
        new FontFace('SukhumvitSetExtraBold', 'url(../assets/fonts/SukhumvitSet-Extra%20Bold.woff)'),
        //SFThonburi
        new FontFace('SFThonburiLight', 'url(../assets/fonts/SFThonburi.woff)'),
        new FontFace('SFThonburiRegular', 'url(../assets/fonts/SFThonburi-Regular.woff)'),
        new FontFace('SFThonburiSemiBold', 'url(../assets/fonts/SFThonburi-Semibold.woff)'),
        new FontFace('SFThonburiBold', 'url(../assets/fonts/SFThonburi-Bold.woff)'),
        //Kanit
        new FontFace('KanitThin', 'url(../assets/fonts/Kanit-Thin.woff)'),
        new FontFace('KanitExtraLight', 'url(../assets/fonts/Kanit-ExtraLight.woff)'),
        new FontFace('KanitLight', 'url(../assets/fonts/Kanit-Light.woff)'),
        new FontFace('KanitRegular', 'url(../assets/fonts/Kanit-Regular.woff)'),
        new FontFace('KanitMedium', 'url(../assets/fonts/Kanit-Medium.woff)'),
        new FontFace('KanitSemiBold', 'url(../assets/fonts/Kanit-SemiBold.woff)'),
        new FontFace('KanitBold', 'url(../assets/fonts/Kanit-Bold.woff)'),
        new FontFace('KanitExtraBold', 'url(../assets/fonts/Kanit-ExtraBold.woff)'),
        new FontFace('KanitBlack', 'url(../assets/fonts/Kanit-Black.woff)'),
        //Bangkok
        new FontFace('BangkokTime1', 'url(../assets/fonts/Bangkok-Time1.woff)'),
        new FontFace('BangkokTime2', 'url(../assets/fonts/Bangkok-Time2.woff)'),
        new FontFace('BangkokMoney', 'url(../assets/fonts/Bangkok-Money.woff)'),
        new FontFace('BangkokTime', 'url(../assets/fonts/Bangkok-Time.woff)'),
        //BangkokMoney
        new FontFace('BangkokMoneyRegular', 'url(../assets/fonts/Bangkok-Money-Regular.woff)'),
        new FontFace('BangkokMoneyMedium', 'url(../assets/fonts/Bangkok-Money-Medium.woff)'),
        new FontFace('BangkokMoneySemiBold', 'url(../assets/fonts/Bangkok-Money-SemiBold.woff)'),
        new FontFace('BangkokMoneyBold', 'url(../assets/fonts/Bangkok-Money-Bold.woff)'),
        //TTB-Money
        new FontFace('TTBMoneyRegular', 'url(../assets/fonts/TTB-Money-Regular.woff)'),
        new FontFace('TTBMoneyMedium', 'url(../assets/fonts/TTB-Money-Medium.woff)'),
        new FontFace('TTBMoneySemiBold', 'url(../assets/fonts/TTB-Money-SemiBold.woff)'),
        new FontFace('TTBMoneyBold', 'url(../assets/fonts/TTB-Money-Bold.woff)'),
        new FontFace('TTBMoneyExtraBold', 'url(../assets/fonts/TTB-Money-ExtraBold.woff)'),
        //THSarabunNew
        new FontFace('THSarabunRegular', 'url(../assets/fonts/THSarabun.woff)'),
        new FontFace('THSarabunBold', 'url(../assets/fonts/THSarabun-Bold.woff)'),
        new FontFace('THSarabunItalic', 'url(../assets/fonts/THSarabun-Italic.woff)'),
        new FontFace('THSarabunBoldItalic', 'url(../assets/fonts/THSarabun-BoldItalic.woff)'),
        new FontFace('THSarabunNew', 'url(../assets/fonts/THSarabunNew.woff)'),
        new FontFace('THSarabunNewBold', 'url(../assets/fonts/THSarabunNew-Bold.woff)'),
        new FontFace('THSarabunNewItalic', 'url(../assets/fonts/THSarabunNew-Italic.woff)'),
        new FontFace('THSarabunNewBoldItalic', 'url(../assets/fonts/THSarabunNew-BoldItalic.woff)'),
        //other
        new FontFace('DXKrungthaiSemiBold', 'url(../assets/fonts/DX-Krungthai-SemiBold.woff)'),
        new FontFace('DXKrungthaiThin', 'url(../assets/fonts/DX-Krungthai-Thin.woff)'),
        new FontFace('DXSCB', 'url(../assets/fonts/DX-SCB.woff)'),
        new FontFace('DXTTBBold', 'url(../assets/fonts/DX-TTB-bold.woff)'),
        new FontFace('DXTTBRegular', 'url(../assets/fonts/DX-TTB-regular.woff)'),
        new FontFace('DXKrungthaiBold', 'url(../assets/fonts/DX-Krungthai-Bold.woff)'),
        new FontFace('DXKrungthaiMedium', 'url(../assets/fonts/DX-Krungthai-Medium.woff)'),
        new FontFace('DXKrungthaiRegular', 'url(../assets/fonts/DX-Krungthai-Regular.woff)'),
        new FontFace('TTBMoney', 'url(../assets/fonts/TTB Money.woff)'),
        new FontFace('CoreSansLight', 'url(../assets/fonts/Core-Sans-E-W01-35-Light.woff)'),
        new FontFace('CoreSansBold', 'url(../assets/fonts/Core-Sans-N-65-Bold.woff)'),
        new FontFace('THSarabun', 'url(../assets/fonts/THSarabun.woff)')
    ];

    // โหลดฟอนต์ทั้งหมดและเพิ่มเข้าไปที่ document
    return Promise.all(fonts.map(font => font.load())).then(function(loadedFonts) {
        loadedFonts.forEach(function(font) {
            document.fonts.add(font);
        });
    });
}

// เรียกใช้ฟังก์ชันเพื่อโหลดฟอนต์หลังจากหน้าเว็บถูกโหลด
window.onload = function() {
    setCurrentDateTime();
    // โหลดฟอนต์และอัปเดตการแสดงผล
    loadFonts().then(function() {
        // ใช้ document.fonts.ready เพื่อให้มั่นใจว่าฟอนต์ถูกโหลดทั้งหมด
        document.fonts.ready.then(function() {
            updateDisplay(); // วาดใหม่ด้วยฟอนต์ที่ถูกต้องหลังจากฟอนต์ถูกโหลดเสร็จ
        });
    }).catch(function() {
        // หากฟอนต์โหลดไม่สำเร็จ จะยังคงแสดงผลได้
        updateDisplay();
    });
};

function setCurrentDateTime() {
    const now = new Date();
    const localDateTime = now.toLocaleString('sv-SE', { timeZone: 'Asia/Bangkok', hour12: false });
    const formattedDateTime = localDateTime.replace(' ', 'T');
    document.getElementById('datetime').value = formattedDateTime;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, ' ').replace(/\./g, '');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = padZero(formattedDate.split(' ')[0]);
    const month = months[new Date(date).getMonth()];
    let year = formattedDate.split(' ')[2];
    year = `25${year}`;
    return `${day} ${month} ${year}`;
}


function generateUniqueID() {
    const randomString = Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    return `A${randomString}`;
}

function updateDisplay() {
    const sendername = document.getElementById('sendername').value || '-';
    const senderaccount = document.getElementById('senderaccount').value || '-';
    const receivername = document.getElementById('receivername').value || '-';
    const receiveraccount = document.getElementById('receiveraccount').value || '-';
    const bank = document.getElementById('bank').value || '-';
    const amount11 = document.getElementById('amount11').value || '-';
    const datetime = document.getElementById('datetime').value || '-';
    const selectedImage = document.getElementById('imageSelect').value || '';
    const QRCode = document.getElementById('QRCode').value || '';

    let bankLogoUrl = '';
    let bankText = '';

    switch (bank) {
        case 'กสิกรไทย':
            bankText = 'กสิกรไทย';
            bankLogoUrl = '../assets/image/logo/KBANK1.png';
            break;
        case 'กรุงไทย':
            bankText = 'กรุงไทย';
            bankLogoUrl = '../assets/image/logo/KTB3.png';
            break;
        case 'กรุงเทพ':
            bankText = 'กรุงเทพ';
            bankLogoUrl = '../assets/image/logo/BBL3.png';
            break;
        case 'ไทยพาณิชย์':
            bankText = 'ไทยพาณิชย์';
            bankLogoUrl = '../assets/image/logo/SCB.png';
            break;
        case 'กรุงศรี':
            bankText = 'กรุงศรี';
            bankLogoUrl = '../assets/image/logo/BAY2.png';
            break;
        case 'ทีเอ็มบีธนชาต':
            bankText = 'ทีเอ็มบีธนชาต';
            bankLogoUrl = '../assets/image/logo/TTB.png';
            break;
        case 'ออมสิน':
            bankText = 'ออมสิน';
            bankLogoUrl = '../assets/image/logo/O2.png';
            break;
        case 'ธ.ก.ส.':
            bankText = 'ธ.ก.ส.';
            bankLogoUrl = '../assets/image/logo/T1.png';
            break;
        case 'ธ.อ.ส.':
            bankText = 'ธ.อ.ส.';
            bankLogoUrl = '../assets/image/logo/C2.png';
            break;
        case 'เกียรตินาคินภัทร':
            bankText = 'เกียรตินาคินภัทร';
            bankLogoUrl = '../assets/image/logo/K.png';
            break;
        case 'ซีไอเอ็มบี':
            bankText = 'ซีไอเอ็มบี';
            bankLogoUrl = '../assets/image/logo/C-CIMB.png';
            break;
        case 'ยูโอบี':
            bankText = 'ยูโอบี';
            bankLogoUrl = '../assets/image/logo/UOB2.png';
            break;
        case 'แลนด์ แอนด์ เฮ้าส์':
            bankText = 'แลนด์ แอนด์ เฮ้าส์';
            bankLogoUrl = '../assets/image/logo/LHBANK.png';
            break;
        case 'ไอซีบีซี':
            bankText = 'ไอซีบีซี';
            bankLogoUrl = '../assets/image/logo/ICBC.png';
            break;
        case 'พร้อมเพย์':
            bankText = 'พร้อมเพย์';
            bankLogoUrl = '../assets/image/logo/P-Krungthai1.png'; // Logo สำหรับพร้อมเพย์
            break;
        case 'พร้อมเพย์ ':
            bankText = 'พร้อมเพย์';
            bankLogoUrl = '../assets/image/logo/P-Krungthai.png'; // Logo สำหรับพร้อมเพย์วอลเล็ท
            break;
    }

    const formattedDate = formatDate(datetime);
    const formattedTime = new Date(datetime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = '../assets/image/bs/KTB12.jpg';
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw bank logo
        const bankLogo = new Image();
        bankLogo.src = bankLogoUrl;
        bankLogo.onload = function() {
            ctx.drawImage(bankLogo, 31.2,684.5,126.5,126.5); // Adjust position and size as needed
            
            // Draw text with custom styles
            drawText(ctx, `${formattedDate} - ${formattedTime}`,963.7, 1176.9,41.50, 'DXKrungthaiMedium', '#000000', 'right', 1.5, 3, 0, 0, 800, -1.5);

            drawText(ctx, `${generateUniqueID()}`, 357.5, 357.3,34.5, 'DXKrungthaiMedium', '#586970', 'left', 1.5, 1, 0, 0, 500, -1);
            
            
            drawText(ctx, `${sendername}`, 188, 519, 47, 'DXKrungthaiBold', '#000000', 'left', 1.5, 3, 0, 0, 800, -0.6);
            drawText(ctx, `***`, 188 + ctx.measureText(`${sendername}`).width - 7, 519, 47, 'DXKrungthaiRegular', '#000000', 'left', 1.5, 3, 0, 0, 800, -0.6);

            drawText(ctx, `กรุงไทย`, 188, 577,36.5, 'DXKrungthaiMedium', '#000000', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`,188, 631,37, 'DXKrungthaiMedium', '#586970', 'left', 1.5, 1, 0, 0, 500,-1.6);
            
            drawText(ctx, `${receivername}`, 188,796.3,47, 'DXKrungthaiBold', '#000000', 'left', 1.5, 3, 0, 0, 800, -0.6);
            drawText(ctx, `${bank}`, 188, 853.8,36.5, 'DXKrungthaiMedium', '#000000', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${receiveraccount}`, 188, 908.1,37, 'DXKrungthaiMedium', '#586970', 'left', 1.5, 1, 0, 0, 500,-1.6);
            
            drawText(ctx, `บาท`, 963.7, 1025.7,41.50, 'DXKrungthaiMedium', '#000000', 'right', 1.5, 3, 0, 0, 500, -1.5);
            drawText(ctx, `${amount11}`, 883.5, 1025.7,56.80, 'DXKrungthaiBold', '#000000', 'right', 1.5, 3, 0, 0, 500, -1.5);

            drawText(ctx, `0.00 บาท`, 963.7, 1104.0,41.50, 'DXKrungthaiMedium', '#000000', 'right', 1.5, 3, 0, 0, 500, -1.5);

            drawText(ctx, `${QRCode}`, 238.9, 599.0,33, 'DXKrungthaiMedium', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);
            drawImage(ctx, '/assets/image/logo/KTB3.png',31.2,406,126.5,126.5);  
        
          
                      // Draw the selected image
            if (selectedImage) {
                const customImage = new Image();
                customImage.src = selectedImage;
                customImage.onload = function() {
                    ctx.drawImage(customImage, 0, 0, 1008, 1280); // Adjust the position and size as needed
                }
            }
            //ถึงที่นี่
            
        }
    }
}

function drawText(ctx, text, x, y, fontSize, fontFamily, color, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;

    // แยกข้อความตาม <br>
    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        // ใช้ Intl.Segmenter เพื่อแบ่งคำภาษาไทย
        const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
        const words = [...segmenter.segment(paragraph)].map(segment => segment.segment);

        let lines = [];
        let currentLine = '';

        words.forEach((word) => {
            const testLine = currentLine + word;
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

            if (testWidth > maxWidth && currentLine !== '') {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) {
            lines.push(currentLine);
        }

        lines.forEach((line, index) => {
            let currentX = x;

            if (align === 'center') {
                currentX = x - (ctx.measureText(line).width / 2) - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                currentX = x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }

            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });

        // เพิ่มระยะห่างหลังจากขึ้นบรรทัดใหม่ด้วย <br>
        currentY + lineHeight;
    });
}


function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const segmenter = new Intl.Segmenter('th', { granularity: 'grapheme' });
    const characters = [...segmenter.segment(text)].map(segment => segment.segment);
    let currentPosition = x;

    characters.forEach((char, index) => {
        ctx.fillText(char, currentPosition, y);
        const charWidth = ctx.measureText(char).width;
        currentPosition += charWidth + letterSpacing;
    });
}



function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas_image.png';
    link.click();
}

document.getElementById('generate').addEventListener('click', updateDisplay);

function drawImage(ctx, imageUrl, x, y, width, height) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        ctx.drawImage(image, x, y, width, height);
    };
}
