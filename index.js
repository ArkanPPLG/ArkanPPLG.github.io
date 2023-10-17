const date = new Date()
const date2 = new Date(date.getTime() + (7 * 60 * 60 * 1000))
const today = date.getDay()
const week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

function updateJadwal() {
    const mapel = {
        0: ["LIBURRRR"],
        1: ["Upcara", "PKK (LAB)", "Istirahat", "Bahasa Indonesia", "PABP", "PBO"],
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

    for (let i = 0; i < Jadwal.length; i++) {
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

    for (let i = 0; i < Jadwal.length; i++) {
        text = text + `${Jadwal[i]}<br>`
    }
    inputPiket.innerHTML = text
}

setInterval(updatePiket, 60000)
updatePiket()

function updateWaktu() {
    const date = new Date()
    const date2 = new Date(date.getTime() + (7 * 60 * 60 * 1000))
    const today = date.getDay()
    const week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    const hour = new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        hour: 'numeric'
    });
    const minute = new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        minute: 'numeric'
    });

    const jam = hour.format(date2)
    const menit = minute.format(date2)

    const intm = parseInt(menit)

    const jamPelajaran = {
        0: {
            1: "Libur",
            2: "Libur",
            3: "Libur",
            4: "Libur",
            5: "Libur",
            6: "Libur",
            7: "Libur",
            8: "Libur",
            9: "Libur",
        },

        1: {
            1: "Upacara",
            2: "Upacara",
            3: "PKK",
            4: "PKK",
            5: "Istirahat",
            6: "Bahasa Indonesia", 
            7: "PABP", 
            8: "PBO",
            9: "PBO"
        },

        2: {
            1: "PABP",
            2: "PABP",
            3: "Bahasa Indonesia",
            4: "Bahasa Indonesia",
            5: "Istirahat",
            6: "MTK",
            7: "PKK",
            8: "PKN",
            9: "PKN"
        },

        3: {
            1: "PBO",
            2: "PBO",
            3: "Mikrotik",
            4: "Mikrotik",
            5: "Istirahat",
            6: "PKK",
            7: "PKK",
            8: "MTK", 
            9: "MTK"
        },

        4: {
            1: "PBO",
            2: "PBO",
            3: "Mikrotik",
            4: "Mikrotik", 
            5: "Istirahat",
            6: "DB",
            7: "DB",
            8: "DB",
            9: "DB",
        },

        5: {
            1: "WEB",
            2: "WEB",
            3: "PJOK",
            4: "PJOK",
            5: "Istirahat",
            6: "Inggris",
            7: "Inggris"
        },

        6: {
            1: "Jepang",
            2: "Jepang",
            3: "Sejarah",
            4: "Sejarah",
            5: "Istirahat",
            6: "WEB",
            7: "WEB",
            8: "Inggris",
            9: "Inggris"
        }
    }

    const formattedTime = formatter.format(date2);
    const input = document.getElementById("jam")
    let text = `${week[today]} : ${formattedTime}`

    let data;

    if(jam == "7 AM" && menit >= 0 && menit < 40){
        data = jamPelajaran[today][1]
    }else if(jam == "7 AM" && menit >= 40 && menit <= 59 || jam == "8 AM" && menit >= 0 && menit < 20){
        data = jamPelajaran[today][2]
    }else if(jam == "8 AM" && menit >= 20 && menit <= 59){
        data = jamPelajaran[today][3]
    }else if(jam == "9 AM" && menit >= 0 && menit < 40){
        data = jamPelajaran[today][4]
    }else if(jam == "9 AM" && menit >= 40 && menit <= 59){
        data = jamPelajaran[today][5]
    }else if(jam == "10 AM" && menit >= 0 && menit < 40){
        data = jamPelajaran[today][6]
    }else if(jam == "10 AM" && menit >= 40 && menit <= 59 || jam == "11 AM" && menit >= 0 && menit < 20){
        data = jamPelajaran[today][7]
    }else if(jam == "11 AM" && menit >= 20 && menit < 55){
        data = jamPelajaran[today][8]
    }else if(jam == "11 AM" && menit >= 55 && menit <= 59 || jam == "12 PM" && menit >= 0 && menit < 30){
        data = jamPelajaran[today][9]
    }else{
        data = "tidak ada jam pelajaran"
    }

    input.innerHTML = `${text} <br>jam pelajaran : ${data}`
}
setInterval(updateWaktu, 1000)
updateWaktu()
