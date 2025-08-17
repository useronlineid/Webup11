// ฟังก์ชันเพื่อโหลดฟอนต์
function loadFonts() {
    const fonts = [
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
    const day = padZero(formattedDate.split(' ')[0]);
    const month = months[new Date(date).getMonth()];
    const year = formattedDate.split(' ')[2];
    return `${day} ${month} ${year}`;
}

function generateUniqueID() {
    const prefix = "552";  // คง TRO ไว้เหมือนเดิม
    const characters = "123456789";  // เลือกใช้ตัวเลข 1-9 และตัวอักษร a-e
    let uniqueID = "";

    // สุ่มตัวอักษรและตัวเลขตามที่กำหนด (16 ตัวอักษร)
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueID += characters[randomIndex];
    }

    return `${prefix}${uniqueID}`;
}


function padZero(num) {
    return num.toString().padStart(2, '0');
}


function updateDisplay() {
    const sendername = document.getElementById('sendername').value;
    const senderaccount = document.getElementById('senderaccount').value;
    const receivername = document.getElementById('receivername').value;
    const receiveraccount = document.getElementById('receiveraccount').value;
    const bank = document.getElementById('bank').value;
    const amount11 = document.getElementById('amount11').value;
    const datetime = document.getElementById('datetime').value;
    const AideMemoire = document.getElementById('AideMemoire').value;
    const selectedImage = document.getElementById('imageSelect').value;
    const QRCode = document.getElementById('QRCode').value;

    let bankLogoUrl = '';
    switch (bank) {
        case 'ธ.กสิกรไทย จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-KBANK.png';
            break;
        case 'ธ.กรุงไทย จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-KTB.png';
            break;
        case 'ธ.กรุงเทพ จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-BBL.png';
            break;
        case 'ธ.ไทยพาณิชย์ จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-SCB.png';
            break;
        case 'ธ.กรุงศรีอยุธยา จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-BAY.png';
            break;
        case 'ธ.ทหารไทยธนชาต จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-TTB.png';
            break;
        case 'ธ.ออมสิน':
            bankLogoUrl = '../assets/image/logo/K-O.png';
            break;
        case 'ธ.ก.ส.':
            bankLogoUrl = '../assets/image/logo/K-T.png';
            break;
        case 'ธ.อาคารสงเคราะห์':
            bankLogoUrl = '../assets/image/logo/K-C.png';
            break;
        case 'ธ.เกียรตินาคินภัทร':
            bankLogoUrl = '../assets/image/logo/K-K.png';
            break;
        case 'ธ.ซีไอเอ็มบี ไทย จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-CIMB.png';
            break;
        case 'ธ.ยูโอบี จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-UOB.png';
            break;
        case 'ธ.แลนด์ แอนด์ เฮ้าส์ จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-LHBANK.png';
            break;
        case 'ธ.ไอซีบีซี (ไทย) จำกัด (มหาชน)':
            bankLogoUrl = '../assets/image/logo/K-ICBC.png';
            break;
        case 'เติมเงินพร้อมเพย์ วอลเล็ท':
            bankLogoUrl = '../assets/image/logo/P-Kiatnakin.png';
            break;
    }

    const formattedDate = formatDate(datetime);
    const formattedTime = new Date(datetime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = '../assets/image/bs/KKP1.jpg';
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw bank logo
        const bankLogo = new Image();
        bankLogo.src = bankLogoUrl;
        bankLogo.onload = function() {
            ctx.drawImage(bankLogo, 33, 506, 172, 172); // Adjust position and size as needed
            
            drawText(ctx, `${formattedDate} ${formattedTime} น.`, 373, 151.3,33, 'KanitRegular', '#ffffff', 'center', 1.5, 3, 0, 0, 500, 0);

            drawText(ctx, `${sendername}`, 237, 307.1,38.7, 'KanitMedium', '#33286c', 'left', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `ธ.เกียรตินาคินภัทร`, 237, 254,29.7, 'KanitRegular', '#929196', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`, 237, 363,38, 'KanitRegular', '#6b629b', 'left', 1.5, 1, 0, 0, 500, 0);
            
            drawText(ctx, `${receivername}`, 237, 598.6,38.7, 'KanitMedium', '#33286c', 'left', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${bank}`, 237, 545.5,29.7, 'KanitRegular', '#929196', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${receiveraccount}`, 237, 653.1,38, 'KanitRegular', '#6b629b', 'left', 1.5, 1, 0, 0, 500, 0);
            

            // ปรับขนาดฟอนต์สำหรับ ${amount11}
            drawText(ctx, `${amount11}`, 237, 838.7, 56, 'KanitRegular', '#33286c', 'left', 1.5, 3, 0, 0, 500, 0);
            // ปรับขนาดฟอนต์สำหรับ THB
            drawText(ctx, `THB`, 237 + ctx.measureText(`${amount11}`).width + 16, 838.7, 34, 'KanitRegular', '#33286c', 'left', 1.5, 3, 0, 0, 500, 0);

            
            drawText(ctx, `0.00 THB`, 710, 952,32, 'KanitRegular', '#33286c', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${formattedDate}`, 710, 1000 ,32, 'KanitRegular', '#58575c', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${generateUniqueID()}`, 710, 1049,32, 'KanitRegular', '#58575c', 'right', 1.5, 3, 0, 0, 500, 0);

            drawText(ctx, `${AideMemoire}`, 224, 1200.7,32, 'KanitRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0);

            drawText(ctx, `${QRCode}`, 238.9, 599.0,33, 'KanitRegular', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);
            drawImage(ctx, '../assets/image/logo/K-K.png', 33, 215.5, 172, 172);  
        
          
            // Draw the selected image
            if (selectedImage) {
                const customImage = new Image();
                customImage.src = selectedImage;
                customImage.onload = function() {
                    ctx.drawImage(customImage, 0, 0, 748, 1280); // Adjust the position and size as needed
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
