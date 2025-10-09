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
        new FontFace('THSarabun', 'url(../assets/fonts/THSarabun.woff)'),
        //kurious
        new FontFace('kuriousRegular', 'url(../assets/fonts/kurious-Regular.woff)'),
        new FontFace('kuriousMedium', 'url(../assets/fonts/kurious-medium.woff)'),
        new FontFace('kuriousSemiBold', 'url(../assets/fonts/kurious-semibold.woff)'),
        new FontFace('kuriousBold', 'url(../assets/fonts/kurious-Bold.woff)')
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

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, ' ').replace(/\./g, '');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = formattedDate.split(' ')[0];
    const month = months[new Date(date).getMonth()];
    const year = formattedDate.split(' ')[2];
    return `${day} ${month} ${year}`;
}

function generateUniqueID() {
    const now = new Date(document.getElementById('datetime').value);
    const startDate = new Date("2024-07-24");
    const dayDifference = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const uniqueDay = (14840 + dayDifference).toString().padStart(6, '0');
    const timePart = `${padZero(now.getHours())}${padZero(now.getMinutes())}${padZero(now.getSeconds())}`;
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    // ดึงค่าธนาคารที่เลือก
    const bank = document.getElementById('bank').value;

    let prefix = "BOR"; // ค่าดีฟอลต์

    if (bank === "MetaAds") {
        const prefixes = ["APM", "BPM", "CPM", "DPM"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    } else if (bank === "รหัสพร้อมเพย์" || bank === "พร้อมเพย์วอลเล็ท") {
        const prefixes = ["APP", "BPP", "CPP", "DPP"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    } else if (bank === "ธ.กสิกรไทย") {
        const prefixes = ["ATF", "BTF", "CTF", "DTF"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    } else {
        const prefixes = ["AOR", "BOR", "COR", "DOR"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    }

    return `${uniqueDay}${timePart}${prefix}0${randomPart}`;
}


function padZero(num) {
    return num.toString().padStart(2, '0');
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
    const backgroundSelect = document.getElementById('backgroundSelect').value || '';
    const QRCode = document.getElementById('QRCode').value || '';

    // Check if the selected bank is "พร้อมเพย์วอลเล็ท"
    const isPromptPay   = bank === 'พร้อมเพย์วอลเล็ท';
    const isMetaAds     = bank === 'MetaAds';
    
    let bankLogoUrl = '';
    let bankText = '';
    let receiveraccountPositionY = 697.7;
    let receivernamePositionY = 577.0;

    if (isPromptPay) {     // << แทรก isMetaAds
        receiveraccountPositionY = 639.0;
        receivernamePositionY = 577.0;
        bankText = '';
    } else if (isMetaAds) {     // << แทรก isMetaAds
        receiveraccountPositionY = 639.0;
        receivernamePositionY = 1300.0;
        bankText = '';
    } else {
        bankText = bank;
        receiveraccountPositionY = 697.7;
        receivernamePositionY = 577.0;
    }

    switch (bank) {
        case 'ธ.กสิกรไทย':
            bankText = 'ธ.กสิกรไทย';
            bankLogoUrl = '../assets/image/logo/KBANK.png';
            break;
        case 'ธ.กรุงไทย':
            bankText = 'ธ.กรุงไทย';
            bankLogoUrl = '../assets/image/logo/KTB.png';
            break;
        case 'ธ.กรุงเทพ':
            bankText = 'ธ.กรุงเทพ';
            bankLogoUrl = '../assets/image/logo/BBL1.png';
            break;
        case 'ธ.ไทยพาณิชย์':
            bankText = 'ธ.ไทยพาณิชย์';
            bankLogoUrl = '../assets/image/logo/SCB1.png';
            break;
        case 'ธ.กรุงศรีอยุธยา':
            bankText = 'ธ.กรุงศรีอยุธยา';
            bankLogoUrl = '../assets/image/logo/BAY.png';
            break;
        case 'ธ.ทหารไทยธนชาต':
            bankText = 'ธ.ทหารไทยธนชาต';
            bankLogoUrl = '../assets/image/logo/TTB1.png';
            break;
        case 'ธ.ออมสิน':
            bankText = 'ธ.ออมสิน';
            bankLogoUrl = '../assets/image/logo/O.png';
            break;
        case 'ธ.ก.ส.':
            bankText = 'ธ.ก.ส.';
            bankLogoUrl = '../assets/image/logo/T.png';
            break;
        case 'ธ.อาคารสงเคราะห์':
            bankText = 'ธ.อาคารสงเคราะห์';
            bankLogoUrl = '../assets/image/logo/C.png';
            break;
        case 'ธ.เกียรตินาคินภัทร':
            bankText = 'ธ.เกียรตินาคินภัทร';
            bankLogoUrl = '../assets/image/logo/K.png';
            break;
        case 'ธ.ซีไอเอ็มบี':
            bankText = 'ธ.ซีไอเอ็มบี';
            bankLogoUrl = '../assets/image/logo/CIMB2.png';
            break;
        case 'ธ.ยูโอบี':
            bankText = 'ธ.ยูโอบี';
            bankLogoUrl = '../assets/image/logo/UOB.png';
            break;
        case 'ธ.แลนด์ แอนด์ เฮ้าส์':
            bankText = 'ธ.แลนด์ แอนด์ เฮ้าส์';
            bankLogoUrl = '../assets/image/logo/LHBANK.png';
            break;
        case 'ธ.ไอซีบีซี':
            bankText = 'ธ.ไอซีบีซี';
            bankLogoUrl = '../assets/image/logo/ICBC.png';
            break;
        case 'รหัสพร้อมเพย์':
            bankText = 'รหัสพร้อมเพย์';
            bankLogoUrl = '../assets/image/logo/P-KBANK.png';
            break;
        case 'พร้อมเพย์วอลเล็ท':
            bankLogoUrl = '../assets/image/logo/P-KBANK.png';
            break;
        case 'MetaAds':
            bankLogoUrl = '../assets/image/logo/Meta.png';
            break;
    }

    const formattedDate = formatDate(datetime);
    const formattedTime = new Date(datetime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = backgroundSelect;
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw bank logo
        const bankLogo = new Image();
        bankLogo.src = bankLogoUrl;
        bankLogo.onload = function() {
            ctx.drawImage(bankLogo, 34.6, 526.7, 157, 157); // Adjust position and size as needed
            
            // Draw text with custom styles
            drawText(ctx, `${formattedDate}  ${formattedTime} น.`, 68.9, 136.6, 37.5, 'kuriousRegular', '#4e4e4e', 'left', 1.5,0, 0, 0, 800, 0);

            drawText(ctx, `${sendername}`, 238.9, 272.0, 39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800,0);
            drawText(ctx, `ธ.กสิกรไทย`, 238.9, 333.6, 37.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`, 238.9, 392.5, 37.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0);
            
            drawText(ctx, `${receivername}`, 238.9, receivernamePositionY, 39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, bankText, 238.9, 639.0, 37.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${receiveraccount}`, 238.9, receiveraccountPositionY, 37.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0);
            if (isMetaAds) {
                         drawText(ctx, `${receiveraccount}`, 238.9, 697.7,
                                 37.5, 'kuriousRegular', '#545454', 'left',
                                 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `Meta Ads (KGP)`, 238.9, 577.00, 39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
                     }
            drawText(ctx, `${generateUniqueID()}`, 459, 885.4, 35.63, 'kuriousRegular', '#575757', 'right', 1.5, 3, 0, 0, 500, -2);
            drawText(ctx, `${amount11} บาท`, 459, 1003.6, 38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -2);
            drawText(ctx, `0.00 บาท`, 459, 1124.2, 38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -2);
            drawText(ctx, `${QRCode}`, 238.9, 599.0, 33, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);
            drawImage(ctx, '/assets/image/logo/KBANK.png', 34.6, 222, 157, 157);  
        
            // Draw the selected image
            if (selectedImage) {
                const customImage = new Image();
                customImage.src = selectedImage;
                customImage.onload = function() {
                    ctx.drawImage(customImage, 0, 0, 842, 1200); // Adjust the position and size as needed
                }
            }
        }
    }
}

function drawText(ctx, text, x, y, fontSize, fontFamily, color, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;

    
    
    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const lines = [];
        let currentLine = '';

        for (let i = 0; i < paragraph.length; i++) {
            const char = paragraph[i];
            const nextChar = i < paragraph.length - 1 ? paragraph[i + 1] : '';
            const isThai = /[\u0E00-\u0E7F]/.test(char);
            const isWhitespace = /\s/.test(char);

            // แยกข้อความตามพยางค์ไทยหรือคำอังกฤษและอักขระพิเศษ
            if (isThai && !isWhitespace) {
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

                if (testWidth > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = char;
                } else {
                    currentLine = testLine;
                }
            } else {
                // กรณีภาษาอังกฤษ สัญลักษณ์ และช่องว่าง
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

                if (testWidth > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = char;
                } else {
                    currentLine = testLine;
                }
            }
        }

        lines.push(currentLine.trim());

        lines.forEach((line, index) => {
            let currentX = x;
            
            if (align === 'center') {
                // ปรับการจัดกึ่งกลางตามค่าของ x ที่กำหนดเอง
                currentX = x - (ctx.measureText(line).width / 2) - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                // จัดให้อยู่ทางขวา โดยใช้ค่าของ x ที่กำหนดเองเป็นจุดอ้างอิง
                currentX = x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }
        
            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const characters = text.split('');
    let currentPosition = x;

    characters.forEach((char, index) => {
        const charCode = char.charCodeAt(0);
        const prevChar = index > 0 ? characters[index - 1] : null;
        const prevCharCode = prevChar ? prevChar.charCodeAt(0) : null;

        const isUpperVowel = (charCode >= 0x0E34 && charCode <= 0x0E37);
        const isToneMark = (charCode >= 0x0E48 && charCode <= 0x0E4C);
        const isBeforeVowel = (charCode === 0x0E31);
        const isBelowVowel = (charCode >= 0x0E38 && charCode <= 0x0E3A);

        let yOffset = 0;
        let xOffset = 0;

        if (isUpperVowel) {
            yOffset = -1;
            xOffset = 0;
        }

        if (isToneMark) {
            if (prevChar && ((prevChar.charCodeAt(0) >= 0x0E34 && prevChar.charCodeAt(0) <= 0x0E37) || prevChar.charCodeAt(0) === 0x0E31)) {
                yOffset = -8;
                xOffset = 0;
            } else {
                yOffset = 0;
                xOffset = -7;
            }
        }

        if (isBeforeVowel) {
            yOffset = -1;
            xOffset = 1;
        }

        if (isBelowVowel) {
            yOffset = 0;
            xOffset = -10;
        }

        ctx.fillText(char, currentPosition + xOffset, y + yOffset);

        if (!isToneMark && !isBeforeVowel && !isBelowVowel) {
            currentPosition += ctx.measureText(char).width + letterSpacing;
        } else {
            currentPosition += ctx.measureText(char).width;
        }
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
