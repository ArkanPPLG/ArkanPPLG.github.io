const date = new Date();
const date2 = new Date(date.getTime() + 7 * 60 * 60 * 1000);
const today = date.getDay();
const week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

function updateWaktu() {
    const date = new Date();
    const date2 = new Date(date.getTime() + 7 * 60 * 60 * 1000);
    const today = date.getDay();
    const week = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    const hour = new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        hour: 'numeric',
    });
    const minute = new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        minute: 'numeric',
    });

    const jam = hour.format(date2);
    const menit = minute.format(date2);

    const intm = parseInt(menit);

    const table = {
        1: document.querySelectorAll(".senin td"),
        2: document.querySelectorAll(".selasa td"),
        3: document.querySelectorAll(".rabu td"),
        4: document.querySelectorAll(".kamis td"),
        5: document.querySelectorAll(".jumat td"),
        6: document.querySelectorAll(".sabtu td"),
    }

    if (today == 0) {
        for (let key in table) {

            table[key].forEach(tableColor => {
                tableColor.style.backgroundColor = "rgb(247,134,134)"
            })
        }
    } else {
        table[today].forEach(tableColor => {
            tableColor.style.backgroundColor = "rgb(168,255,166)"
        })
    }

    const tableData = {
        1: document.querySelectorAll(".senin"),
        2: document.querySelectorAll(".selasa"),
        3: document.querySelectorAll(".rabu"),
        4: document.querySelectorAll(".kamis"),
        5: document.querySelectorAll(".jumat"),
        6: document.querySelectorAll(".sabtu"),
    }

    for (let key in tableData) {
        if (key == 1) {
            tableData[key].forEach((item, index) => {
                if (index == 0) {
                    item.classList.add("tableData1")
                    item.classList.add("tableData2")
                } else if (index == 1) {
                    item.classList.add("tableData3")
                    item.classList.add("tableData4")
                } else if (index == 2) {
                    item.classList.add("tableData5")
                } else if (index == 3) {
                    item.classList.add("tableData6")
                } else if (index == 4) {
                    item.classList.add("tableData7")
                } else if (index == 5) {
                    item.classList.add("tableData8")
                    item.classList.add("tableData9")
                }
            })
        } else if (key == 2){
            tableData[key].forEach((item, index) => {
                if (index == 0) {
                    item.classList.add("tableData1")
                    item.classList.add("tableData2")
                } else if (index == 1) {
                    item.classList.add("tableData3")
                    item.classList.add("tableData4")
                } else if (index == 2) {
                    item.classList.add("tableData5")
                } else if (index == 3) {
                    item.classList.add("tableData6")
                } else if (index == 4) {
                    item.classList.add("tableData7")
                } else if (index == 5) {
                    item.classList.add("tableData8")
                    item.classList.add("tableData9")
                } else if (index == 6) {
                    item.classList.add("tableData10")
                }
            }) 
        } else if (key == 3){
            tableData[key].forEach((item, index) => {
                if (index == 0) {
                    item.classList.add("tableData1")
                    item.classList.add("tableData2")
                } else if (index == 1) {
                    item.classList.add("tableData3")
                    item.classList.add("tableData4")
                } else if (index == 2) {
                    item.classList.add("tableData5")
                } else if (index == 3) {
                    item.classList.add("tableData6")
                    item.classList.add("tableData7")
                }  else if (index == 4) {
                    item.classList.add("tableData8")
                    item.classList.add("tableData9")
                } 
            }) 
        }else if (key == 4){
            tableData[key].forEach((item, index) => {
                if (index == 0) {
                    item.classList.add("tableData1")
                    item.classList.add("tableData2")
                } else if (index == 1) {
                    item.classList.add("tableData3")
                    item.classList.add("tableData4")
                } else if (index == 2) {
                    item.classList.add("tableData5")
                } else if (index == 3) {
                    item.classList.add("tableData6")
                    item.classList.add("tableData7")
                    item.classList.add("tableData8")
                    item.classList.add("tableData9")
                } 
            }) 
        }else if (key == 5){
            tableData[key].forEach((item, index) => {
                if (index == 0) {
                    item.classList.add("tableData1")
                    item.classList.add("tableData2")
                } else if (index == 1) {
                    item.classList.add("tableData3")
                    item.classList.add("tableData4")
                } else if (index == 2) {
                    item.classList.add("tableData5")
                } else if (index == 3) {
                    item.classList.add("tableData6")
                    item.classList.add("tableData7")
                } 
            }) 
        }else if (key == 6){
            tableData[key].forEach((item, index) => {
                if (index == 0) {
                    item.classList.add("tableData1")
                    item.classList.add("tableData2")
                } else if (index == 1) {
                    item.classList.add("tableData3")
                    item.classList.add("tableData4")
                } else if (index == 2) {
                    item.classList.add("tableData5")
                } else if (index == 3) {
                    item.classList.add("tableData6")
                    item.classList.add("tableData7")
                } else if (index == 4) {
                    item.classList.add("tableData8")
                    item.classList.add("tableData9")
                } 
            }) 
        }
    }


    const formattedTime = formatter.format(date2);
    const input = document.getElementById('time');
    let text = `${week[today]} : ${formattedTime}`;

    let data;
    let dataTable;
    if (today != 2) {
        if (jam == '7 AM' && menit >= 0 && menit < 40) {
            dataTable = 1
        } else if (
            (jam == '7 AM' && menit >= 40 && menit <= 59) ||
            (jam == '8 AM' && menit >= 0 && menit < 20)
        ) {
            dataTable = 2
        } else if (jam == '8 AM' && menit >= 20 && menit <= 59) {
            dataTable = 3
        } else if (jam == '9 AM' && menit >= 0 && menit < 40) {
            dataTable = 4
        } else if (jam == '9 AM' && menit >= 40 && menit <= 59) {
            dataTable = 5
        } else if (jam == '10 AM' && menit >= 0 && menit < 40) {
            dataTable = 6
        } else if ((jam == '10 AM' && menit >= 40 && menit <= 59) || (jam == '11 AM' && menit >= 0 && menit < 20)) {
            dataTable = 7
        } else if (jam == '11 AM' && menit >= 20 && menit < 55) {
            dataTable = 8
        } else if ((jam == '11 AM' && menit >= 55 && menit <= 59) || (jam == '12 PM' && menit >= 0 && menit < 30)) {
            dataTable = 9
        }
    } else if (today == 2) {
        if ((jam == '13 AM' && menit >= 0 && menit <= 59) || (jam == '14 PM' && menit >= 0 && menit < 59)) {
            dataTable = 10
        }
    } else {
        data = 'tidak ada jam pelajaran';
    }
    const tableNow = document.querySelectorAll(`.${week}.tableData${dataTable} td`);

    tableNow.forEach((item, index) => {
        if(dataTable == 1 || dataTable == 2){
            if (index != 0){
                item.style.backgroundColor = "rgb(248,255,197)"
            }
        }else{
            item.style.backgroundColor = "rgb(248,255,197)"
        } 
    })
    input.innerHTML = text;
}
setInterval(updateWaktu, 1000);
updateWaktu();

const tampilkanMapel = document.getElementById('mapel');
const tampilkanPiket = document.getElementById('piket');
const tampilkanFoto = document.getElementById('fotokel');
const tampilkanKontak = document.getElementById('kontak');

const article = document.querySelector('.table-container'); // mapel
const piket = document.querySelector('.piket'); // piket
const foto = document.querySelector('.wrapper'); //foto
const kontak = document.querySelector('.content-kontak'); // kontak

const ham = document.getElementById('hamburger');
const menu = document.getElementsByClassName('menu-nav')[0];

const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="toggle"]'
);
const menuItems = document.querySelectorAll('.menu-nav div');

ham.addEventListener('change', function () {
    if (ham.checked) {
        console.log('muncul');
        menu.style.marginLeft = '68vw';
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100);
        });
    } else {
        console.log('bye');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('show');
            }, index * 100);
        });

        setTimeout(() => {
            menu.style.marginLeft = '100vw';
        }, menuItems.length * 100);
    }
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function (e) {
        e.stopPropagation();
        if (this === tampilkanMapel && this.checked) {
            console.log('Tampilkan Mapel');
            article.style.width = '100%';
            piket.style.width = '0';
            foto.style.width = '0';
            kontak.style.visibility = 'hidden';
            tampilkanKontak.checked = false;
            tampilkanPiket.checked = false;
            ham.checked = false;
            tampilkanFoto.checked = false;
            console.log('bye');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('show');
                }, index * 300);
            });

            setTimeout(() => {
                menu.style.marginLeft = '100vw';
            }, menuItems.length * 100);
            open = 1;
        } else if (this === tampilkanPiket && this.checked) {
            console.log('Tampilkan Piket');
            piket.style.width = '98vh';
            article.style.width = '0';
            kontak.style.visibility = 'hidden';
            tampilkanMapel.checked = false;
            tampilkanKontak.checked = false;
            ham.checked = false;
            foto.style.width = '0';
            tampilkanFoto.checked = false;
            console.log('bye');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('show');
                }, index * 300);
            });

            setTimeout(() => {
                menu.style.marginLeft = '100vw';
            }, menuItems.length * 100);
            open = 2;
        } else if (this == tampilkanFoto && this.checked) {
            console.log('tampilkan foto');
            foto.style.width = '100vw';
            article.style.width = '0';
            piket.style.width = '0';
            kontak.style.visibility = 'hidden';
            tampilkanMapel.checked = false;
            ham.checked = false;
            tampilkanPiket.checked = false;
            tampilkanKontak.checked = false;
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('show');
                }, index * 300);
            });

            setTimeout(() => {
                menu.style.marginLeft = '100vw';
            }, menuItems.length * 100);
            open = 3;
        } else if (this == tampilkanKontak && this.checked) {
            console.log('tampilkan Kontak');
            kontak.style.visibility = 'visible';

            foto.style.width = '0';
            article.style.width = '0';
            piket.style.width = '0';
            tampilkanMapel.checked = false;
            ham.checked = false;
            tampilkanPiket.checked = false;
            tampilkanKontak.checked = false;
            tampilkanFoto.checked = false;
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('show');
                }, index * 300);
            });

            setTimeout(() => {
                menu.style.marginLeft = '100vw';
            }, menuItems.length * 100);
            open = 4;
        } else {
            console.log('Semua checkbox tidak dicentang');
            article.style.width = '0';
            piket.style.width = '0';
            open = -1;
        }
        checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== this) {
                otherCheckbox.checked = false;
            }
        });
    });

    document.addEventListener('click', function (event) {
        let tampilanMapel = document.querySelector('.table-container');
        let tampilanPiket = document.querySelector('.piket');
        let tampilanFoto = document.querySelector('.wrapper');
        let tampilanKontak = document.querySelector('.content-kontak');
        if (open !== -1) {
            if (open === 1) {
                if (
                    event.target !== tampilanMapel &&
                    !tampilanMapel.contains(event.target)
                ) {
                    console.log('oioioi');
                    article.style.width = '0';
                    tampilkanMapel.checked = false;
                    open = -1;
                }
            }
            if (open === 2) {
                if (
                    event.target !== tampilanPiket &&
                    !tampilanPiket.contains(event.target)
                ) {
                    piket.style.width = '0';
                    tampilkanPiket.checked = false;
                    open = -1;
                }
            }
            if (open === 3) {
                if (
                    event.target !== tampilanFoto &&
                    !tampilanFoto.contains(event.target)
                ) {
                    foto.style.width = '0';
                    tampilkanFoto.checked = false;
                    open = -1;
                }
            }
            if (open === 4) {
                if (
                    event.target !== tampilanKontak &&
                    !tampilanKontak.contains(event.target)
                ) {
                    kontak.style.visibility = 'hidden';
                    tampilkanKontak.checked = false;
                    open = -1;
                }
            }
        }
    });

    tampilkanPiket.addEventListener('change', function (e) {
        e.stopPropagation();
    });
});
