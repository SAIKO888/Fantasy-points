function calculatePoints() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const tackles = parseInt(document.getElementById('tackles').value);
    const goals = parseInt(document.getElementById('goals').value);
    const assists = parseInt(document.getElementById('assists').value);
    const cleanSheet = document.getElementById('cleanSheet').checked;

    if (!name || isNaN(tackles) || isNaN(goals) || isNaN(assists)) {
        alert("يرجى إدخال جميع المعلومات.");
        return;
    }

    // حساب النقاط بناءً على المركز والقواعد المحددة
    let points = 0;

    // حساب النقاط للأهداف
    if (position === "مهاجم") {
        points += goals * 4;
    } else if (position === "خط وسط") {
        points += goals * 5;
    } else if (position === "مدافع") {
        points += goals * 6;
    } else if (position === "حارس") {
        points += goals * 10;
    }

    // حساب النقاط للأسيستات
    if (position === "مهاجم" || position === "خط وسط") {
        points += assists * 3;
    } else if (position === "مدافع") {
        points += assists * 4;
    } else if (position === "حارس") {
        points += assists * 5;
    }

    // حساب النقاط للقطعات
    points += Math.floor(tackles / 3); // كل 3 قطعات بنقطة واحدة

    // حساب النقاط للكلين شيت
    if (cleanSheet) {
        if (position === "حارس" || position === "مدافع") {
            points += 4;
        } else if (position === "خط وسط") {
            points += 1;
        }
    }

    // إضافة اللاعب إلى الجدول
    const playerList = document.getElementById('player-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${position}</td>
        <td>${tackles}</td>
        <td>${goals}</td>
        <td>${assists}</td>
        <td>${cleanSheet ? "YES" : "NO"}</td>
        <td>${points}</td>
    `;
    playerList.appendChild(row);

    // مسح المدخلات
    document.getElementById('player-form').reset();
}