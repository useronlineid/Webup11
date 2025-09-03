// ฟังก์ชันเพื่อโหลดฟอนต์
function loadFonts() {
    const fonts = [
        //SFThonburi
        new FontFace('SFThonburiLight', 'url(../assets/fonts/SFThonburi.woff)'),
        new FontFace('SFThonburiRegular', 'url(../assets/fonts/SFThonburi-Regular.woff)'),
        new FontFace('SFThonburiSemiBold', 'url(../assets/fonts/SFThonburi-Semibold.woff)'),
        new FontFace('SFThonburiBold', 'url(../assets/fonts/SFThonburi-Bold.woff)'),

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
    
    const formattedDateTime = localDateTime.substring(0, 16); // ตัดส่วนวินาทีออก
    document.getElementById('datetime').value = formattedDateTime;

    // Setting datetime1 to 5 minutes earlier
    const fiveMinutesEarlier = new Date(now.getTime() - 240000); // ลดเวลาไป 5 นาที (300,000 มิลลิวินาที)
    const formattedDateTime1 = fiveMinutesEarlier.toLocaleString('sv-SE', { timeZone: 'Asia/Bangkok', hour12: false }).substring(0, 16);
    document.getElementById('datetime1').value = formattedDateTime1;

    // ตั้งค่าเวลาที่มากกว่า 1 นาที
    const oneMinuteLater = new Date(now.getTime() + 60000); // เพิ่ม 1 นาที (60,000 มิลลิวินาที)
    const hours = oneMinuteLater.getHours().toString().padStart(2, '0');
    const minutes = oneMinuteLater.getMinutes().toString().padStart(2, '0');
    const formattedTimePlusOne = `${hours}:${minutes}`;
    document.getElementById('datetime_plus_one').value = formattedTimePlusOne;
}


function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatDateWithDay(date) {
    const days = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    
    const dayName = days[new Date(date).getDay()];
    const day = new Date(date).getDate();
    const month = months[new Date(date).getMonth()];

    return `${dayName}ที่ ${day} ${month}`;
}


function formatDate(date) {
    const day = padZero(new Date(date).getDate());
    const month = padZero(new Date(date).getMonth() + 1);
    const year = new Date(date).getFullYear().toString().substr(-2);
    return `${day}/${month}/${year}`;
}

let qrCodeImage = null;
let powerSavingMode = false;

function handlePaste(event) {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = new Image();
                img.onload = function() {
                    qrCodeImage = img;
                    updateDisplay();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(blob);
        }
    }
}

function updateDisplay() {
    const backgroundSelect = document.getElementById('backgroundSelect').value || '';

    const datetime = document.getElementById('datetime').value || '-';
    const datetime1 = document.getElementById('datetime1').value || '-';

    const datetimePlusOne = document.getElementById('datetime_plus_one').value || '-';
    const batteryLevel = document.getElementById('battery').value || '100';
    const money01 = document.getElementById('money01').value || '-';
    const senderaccount2 = document.getElementById('senderaccount2').value || '-';
    const money02 = document.getElementById('money02').value || '-';

    const nametext1 = document.getElementById('nametext1').value || '-';
    const text1 = document.getElementById('text1').value || '-';
    
    const formattedDate = formatDate(datetime.substring(0, 10)); // แปลงวันที่เป็นรูปแบบ DD/MM/YY
    const formattedDateWithDay = formatDateWithDay(datetime.substring(0, 10)); // แปลงวันที่เป็นรูปแบบ วันอังคารที่ 3 กันยายน
    const formattedTime = datetime.substring(11, 16); // เอาเฉพาะ ชั่วโมง:นาที
    const formattedTime1 = datetime1.substring(11, 16); // เวลาเงินเข้า 2
    const formattedTimePlusOne = datetimePlusOne; // อยู่ในรูปแบบ HH:mm แล้ว

    // คำนวณความต่างของเวลาและสร้างข้อความ timeMessage สำหรับเงินเข้า 1
    let timeDifference = Math.floor((new Date(`1970-01-01T${formattedTimePlusOne}:00`) - new Date(`1970-01-01T${formattedTime}:00`)) / 60000);
    let timeMessage = "";

    if (timeDifference >= 60) {
        let hours = Math.floor(timeDifference / 60);
        timeMessage = `${hours} ชั่วโมงที่แล้ว`;
    } else if (timeDifference > 1) {
        timeMessage = `${timeDifference} นาทีที่แล้ว`;
    } else if (timeDifference === 1) {
        timeMessage = "1 นาทีที่แล้ว";
    } else {
        timeMessage = "ตอนนี้";
    }

    // คำนวณความต่างของเวลาและสร้างข้อความ timeMessage2 สำหรับเงินเข้า 2
    let timeDifference2 = Math.floor((new Date(`1970-01-01T${formattedTimePlusOne}:00`) - new Date(`1970-01-01T${formattedTime1}:00`)) / 60000);
    let timeMessage2 = "";

    if (timeDifference2 >= 60) {
        let hours = Math.floor(timeDifference2 / 60);
        timeMessage2 = `${hours} ชั่วโมงที่แล้ว`;
    } else if (timeDifference2 > 1) {
        timeMessage2 = `${timeDifference2} นาทีที่แล้ว`;
    } else if (timeDifference2 === 1) {
        timeMessage2 = "1 นาทีที่แล้ว";
    } else {
        timeMessage2 = "ตอนนี้";
    }

    const bank1 = document.getElementById('bank1').value || '-';
    const senderaccount1 = document.getElementById('senderaccount1').value || '-';
    const name1 = document.getElementById('name1').value || '-';
    

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

        // Draw text with custom styles
        drawText(ctx, `   ${formattedDateWithDay}   `, 308, 167.8,33.50,'SFThonburiSemiBold', '#ffffff','center', 24, 3, 0, 0, 800, 0);

       
        drawText(ctx, `${formattedTimePlusOne}`, 295, 298.8,138.50,'SFThonburiSemiBold', '#ffffff','center', 1.5, 3, 0, 0, 800, -7);

        drawText(ctx, `แจ้งรายการเงินเข้าบัญชี-สำเร็จ
        `, 107.8, 451.8,20.50,'SFThonburiBold', '#000000', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${timeMessage}`, 547.5, 451.8,18.50,'SFThonburiRegular', '#6f8590','right', 1.5, 3, 0, 0, 800, 0);


        drawText(ctx, `มีเงิน${money01}บ.โอนเข้าบ/ช${senderaccount2} จาก<br>${bank1} ${senderaccount1} ${name1}<br>คงเหลือ${money02}บ.${formattedDate}@${formattedTime}<br>
        `, 107.8, 481.8,20.50,'SFThonburiRegular', '#000000','left', 31.5, 3, 0, 0, 450, 0);

       // แถบ 2 //
        drawText(ctx, `${timeMessage2}`, 547.5, 640.0,18.50, 'SFThonburiRegular', '#6f8590','right', 1.5, 3, 0, 0, 800, 0);

        drawText(ctx, `${nametext1}`, 107.8, 640.0,20.50, 'SFThonburiSemiBold', '#000000', 'left', 1.5, 3, 0, 0, 800, 0);

        drawText(ctx, `${text1}<br>
        `, 107.8, 670.0,20.50, 'SFThonburiRegular', '#000000','left', 31.5, 3, 0, 0, 430, 0);




   
        if (qrCodeImage) {
            ctx.drawImage(qrCodeImage, 0, 130.3, 555, 951); // Adjust position and size as needed
        }


        // Draw battery
        drawBattery(ctx, batteryLevel, powerSavingMode);
    };
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
        // ใช้ Intl.Segmenter โดยไม่กำหนด locale เพื่อรองรับหลายภาษา
        const segmenter = new Intl.Segmenter(undefined, { granularity: 'word' });
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
            lines.push(currentLine.trimStart()); // ตัดช่องว่างที่ขึ้นต้นบรรทัดใหม่ออก
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


function drawBattery(ctx, batteryLevel, powerSavingMode) {
    // วาดกรอบแบตเตอรี่ด้วยมุมโค้งมน
    ctx.lineWidth = 2; // กำหนดความหนาของเส้นเป็น 2 พิกเซล
    ctx.strokeStyle = '#9b9b9b'; // กำหนดสีเส้นขอบเป็นสีเทา
    ctx.fillStyle = '#ffffff'; // กำหนดสีพื้นหลังของกรอบแบตเตอรี่เป็นสีขาว



    // กำหนดสีแบตเตอรี่ตามระดับและโหมดประหยัดพลังงาน
    let batteryColor = '#ffffff'; // สีเขียวสำหรับโหมดปกติ
    if (batteryLevel <= 20) {
        batteryColor = '#ff0000'; // สีแดงสำหรับแบตเตอรี่ต่ำ
    } else if (powerSavingMode) {
        batteryColor = '#fccd0e'; // สีส้มสำหรับโหมดประหยัดพลังงาน
    }

// วาดการเติมแบตเตอรี่
const fillWidth = (batteryLevel / 100) * 38.5; // คำนวณความกว้างของการเติมแบตเตอรี่ตามระดับแบตเตอรี่
const x = 508.5;
const y = 28.0;
const height = 21.0;
const radius = 6; // รัศมีของโค้ง

ctx.fillStyle = batteryColor; // กำหนดสีการเติมแบตเตอรี่ตามที่คำนวณ

// เริ่มวาดรูปร่างที่มีมุมโค้ง
ctx.beginPath(); // เริ่มวาดรูปใหม่
ctx.moveTo(x, y + radius); // เริ่มต้นที่มุมบนซ้าย
ctx.lineTo(x, y + height - radius); // วาดเส้นตรงไปที่มุมล่างซ้าย
ctx.arcTo(x, y + height, x + radius, y + height, radius); // วาดส่วนโค้งที่มุมล่างซ้าย
ctx.lineTo(x + fillWidth - radius, y + height); // วาดเส้นตรงไปที่มุมล่างขวา
ctx.arcTo(x + fillWidth, y + height, x + fillWidth, y + height - radius, radius); // วาดส่วนโค้งที่มุมล่างขวา
ctx.lineTo(x + fillWidth, y + radius); // วาดเส้นตรงขึ้นไปที่มุมบนขวา
ctx.arcTo(x + fillWidth, y, x + fillWidth - radius, y, radius); // วาดส่วนโค้งที่มุมบนขวา
ctx.lineTo(x + radius, y); // วาดเส้นตรงไปที่มุมบนซ้าย
ctx.arcTo(x, y, x, y + radius, radius); // วาดส่วนโค้งที่มุมบนซ้าย
ctx.closePath(); // ปิดเส้นที่วาดเพื่อสร้างรูปร่างปิด
ctx.fill(); // เติมสีการเติมแบตเตอรี่ะสูง 16



    ctx.font = '800 18px SFThonburiBold';
    ctx.fillStyle = '#9ebbcc';
    ctx.textAlign = 'center';
    ctx.fillText(`${batteryLevel}`, x + 37.8 / 2, y + height / 1.25);
}






function togglePowerSavingMode() {
    powerSavingMode = !powerSavingMode;
    const powerSavingButton = document.getElementById('powerSavingMode');
    powerSavingButton.classList.toggle('active', powerSavingMode);
    updateDisplay();
}
function updateBatteryDisplay() {
    const batteryLevel = document.getElementById('battery').value;
    document.getElementById('battery-level').innerText = batteryLevel;
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
