// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// javob:Pasdan yozib keting kodini
let a = 5
let b = 5 % 2
alert(b)




// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// Javob:Pasdan yozib keting kodini
let a1 = Math.round(Math.random() * 10)
alert(a1)



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// javob: 12 chiqishi kerak!
let a2 = Math.round(12.510)
alert(a2)





// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// Javob:Kodini yozib bering
let mars = function (it) {
    alert(it.length)
    return
}
mars("MARS IT SCHOOL")




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

//Javob:Kodini yozib bering
for (let i = 0; i < 10; i++) {
    let element = [i];
    let a = ("MARS IT SCHOOL")
    console.log(a)
}





// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// Javob:Kodini yozib bering
let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
console.log(harflar[17] + harflar[0] + harflar[7] + harflar[2] + harflar[9] + harflar[0] + harflar[11] + harflar[13] + harflar[10])




// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Javob:Kodini yozib bering
let age = +prompt("Nechi yoshsiz")
if (age < 18) {
    console.log("Siz balog'at yoshiga yetmagansiz")
} else if (age > 18) {
    console.log("Siz balag'ot yoshiga yetgansiz")
} else {
    console.log("Balog'at yoshi muborak")
}





// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Javob:Kodini yozib bering
let name1 = prompt("Ismingizni kiriting: ");
console.log(`Sizning ismingiz: ${name1.split('').reverse().join('')}`);





// 9-savol Switch case


// Promt 1 dan 7 gacha bo'lgan raqam kiriting va kiritilgan raqam qaysi hafta kuniga to'gri kelishini chiqarib bering
// masalan 4 raqamini kiritsam console.log da("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi") bo'lib chiqish kerak
// agar kiritilgan raqam 7 dan katta bolsa ya'ni 8 yoki 15 kiritilsa console da (Namalum raqam kiritdingiz ) deb chiqish kerak


// Javob:Kodini yozib bering
let week = +prompt("Hafta kunini tanlang")
switch (week) {
    case 1:
        console.log("Siz kiritgan raqam haftaning Dushanba kuniga to'gri keladi")
        break;

    case 2:
        console.log("Siz kiritgan raqam haftaning Seshanba kuniga to'gri keladi")
        break;

    case 3:
        console.log("Siz kiritgan raqam haftaning Chorshanba kuniga to'gri keladi")
        break;

    case 4:
        console.log("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi")
        break;

    case 5:
        console.log("Siz kiritgan raqam haftaning Jum'a kuniga to'gri keladi")
        break;

    case 6:
        console.log("Siz kiritgan raqam haftaning Shanba kuniga to'gri keladi")
        break;

    case 7:
        console.log("Siz kiritgan raqam haftaning Yakshnba kuniga to'gri keladi")
        break;

    default:
        console.log("Nomalum raqam kiritingiz")
        break;
}




// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring


// Javob :Kodini yozib bering
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < sonlar.length; i++) {
  if (sonlar[i] % 2 === 0) {
    console.log(sonlar[i]);
  }
}