const date = new Date()
const date2 = new Date(date.getTime() + (7 * 60 * 60 * 1000))
const today = date.getDay()
const week = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

const formattedTime = formatter.format(date2);

function updateJadwal() {
    const mapel = {
        0: ["LIBURRRR"],
        1: ["Upcara","PKK (LAB)", "Istirahat", "Bahasa Indonesia", "PABP", "PBO"],
        2: ["PABP", "Bahasa Indonesia", "Istirahat", "MTK", "PKK", "PKN", "Istirahat ke-2", "Web (LAB)", "Web (LAB)"],
        3: ["PBO (LAB)", "Mikrotik", "Istirahat", "PKK", "MTK"],
        4: ["PBO (LAB)", "Mikrotik (LAB)", "Istirahat", "DB", "DB"],
        5: ["WEB (LAB)", "PJOK", "Istirahat", "Inggris"],
        6: ["Jepang", "Sejarah", "Istirahat", "Web", "Inggris"]
    }

    const inputJadwal = document.getElementById("schedule")
    const Jadwal = mapel[today];

    const hariIni = week[today];
    let text = `Jadwal Pelajaran hari <strong>${hariIni}</strong>:<br>`

    for(let i = 0;i<Jadwal.length;i++){
        text = text + `${Jadwal[i]}<br>`
    }
    inputJadwal.innerHTML = text
}

setInterval(updateJadwal, 60000)
updateJadwal()

function updatePiket() {
    const list = {
        0: ["LIBURRR!"],
        1: ["Abdul Hadi", "Aditya alfitodinova", "Akmal Sopandi", "Aldri Septi", "Anggira Alfadilah", "Arifa Setiawati"],
        2: ["Arkan Mustofa P", "Bagas Purnama", "Berni Naufal", "Dhimas Try", "Faisal Alfarizi", "Fitra Ramadanu"],
        3: ["Frega Nanda", "Hadiat Rashad", "Ihfan", "Keke Yulia", "Kent Nathan", "M. Fathir"],
        4: ["M. Fajar", "M. Ghailan", "Muthia Khoirun Nisa", "Nabila Rizkia Putri", "Narendra Yakez", "Radit Nur"],
        5: ["Rafi Fauzi", "Rahel Arduino", "Raihan Akmal", "Rasya Akbar", "Reyvan Fasyaditha", "Rian"],
        6: ["RIfwan Muhammad Taufiq", "Salfa", "Salwa Rahma", "Sindi", "Syafitri", "Zulkifli"]
    }

    const inputPiket = document.getElementById("piket")
    const Jadwal = list[today];

    const hariIni = week[today];
    let text = `Jadwal Piket hari <strong>${hariIni}</strong>:<br>`

    for(let i = 0;i<Jadwal.length;i++){
        text = text + `${Jadwal[i]}<br>`
    }
    inputPiket.innerHTML = text
}

setInterval(updatePiket, 60000)
updatePiket()

function updateWaktu() {
    const input = document.getElementById("jam")
    let text = `${week[today]} : ${formattedTime}`

    input.innerHTML = text
}

setInterval(updateWaktu, 1000)
updateWaktu()