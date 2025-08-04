// function sapa(nama) {
//     console.log("Halo"+nama+"!");
// }

// sapa("udin");


//  function tambah(a,b) {
//     return a+b;
// }

// let hasil = tambah(5,3);
// console.log (hasil)

// let car = {
//     name: "Fiat",
//     model: 500,
//     weight: "850kg",
//     color: "White",

//     start: function() {
//         console.log("Mobil dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil berjalan.");
//     },
//     brake: function() {
//         console.log("Mobil mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil berhenti.");
//     }
// };


// let sepeda = {
//     model: "Polygon",
//     gear: 7,
//     color: "White",

//     start: function() {
//         console.log("Sepeda Berjalan");
//     },
//     brake: function() {
//         console.log("Mobil mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil berhenti.");
//     }
// };

// console.log(sepeda,model);
// console.log(sepeda,gear);
// console.log(sepeda,color);
// sepeda.start();
// sepeda.brake();
// sepeda.stop();

// function car(name, model, weight, color) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.color = color;

//     this.start = function() {
//         console.log(`${this.name} dinyalakan`);
//     };
//     this.drive = function() {
//         console.log(`${this.name} berjalan`);
//     };
// }

// let car1 = new car("Toyota", "Corolla", "1300kg", "blue");
// let car2 = new car("Honda", "Civic", "1200kg", "red");

// car1.start();
// car2.drive();

// class Sepeda {
//     constructor(merk, warna, gear) {
//         this.merk = merk;
//         this.warna = warna;
//         this.gear = gear;
//     }

//     start() {
//         console.log("sepeda mulai dikayuh");
//     }

//     drive() {
//         console.log("sepeda berjalan");
//     }

//     brake() {
//         console.log("sepeda mengerem.");
//     }

//     stop() {
//         console.log("sepeda berhenti.");
//     }
// }

// // Membuat objek dari class Sepeda
// const sepeda = new Sepeda("polygon", "merah", 21);

// // Menampilkan properti dan memanggil metode
// console.log(sepeda.merk);
// console.log(sepeda.warna);
// console.log("Jumlah gear: " + sepeda.gear);
// sepeda.start();
// sepeda.drive();
// sepeda.brake();
// sepeda.stop();

// class Student {
//     constructor(nama, nim, jurusan, angkatan) {
//         this.nama = nama;
//         this.nim = nim;
//         this.jurusan = jurusan;
//         this.angkatan = angkatan;
//     }

//     introduce() {
//         console.log(`Halo, nama saya ${this.nama}, NIM: ${this.nim}, jurusan ${this.jurusan}, angkatan ${this.angkatan}.`);
//     }

//     isSenior() {
//         if (this.angkatan < 2025) {
//             console.log(`${this.nama} adalah mahasiswa senior.`);
//         } else {
//             console.log(`${this.nama} adalah mahasiswa baru.`);
//         }
//     }

//     displayInfo() {
//         console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}`);
//     }
// }

// // Membuat objek student
// let student1 = new Student("Abigail", "123456", "Teknik Informatika", 2020);
// let student2 = new Student("Bened", "654321", "Sistem Informasi", 2025);

// // Memanggil method
// student1.introduce();
// student2.introduce();

// student1.isSenior();
// student2.isSenior();

// student1.displayInfo();
// student2.displayInfo();
