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

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     eat() {
//       console.log(`${this.name} sedang makan`);
//     }
//   }
  
//   class Cat extends Animal {
//     meow() {
//       console.log(`${this.name} mengeong`);
//     }
//   }
  
  
//   const kucing = new Cat("Tom");
  
  
//   kucing.eat();
//   kucing.meow();

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     eat() {
//       console.log(`${this.name} sedang makan`);
//     }
//   }
  
//   class Dog extends Animal {
//     meow() {
//       console.log(`${this.name} menggonggong`);
//     }
//   }
  
  
//   const anjing = new Dog("Tom");
  
  
//   anjing.eat();
//   anjing.meow();

// class Employee {
//     constructor(name, position, salary) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//     }
// }

// class Manager extends Employee {
//     constructor(name, position, salary, department) {
//         super(name, position, salary);
//         this.department = department;
//     }

//     lead() {
//         console.log(`${this.name} memimpin departemen ${this.department}.`);
//     }

//     showAll() {
//         console.log("Nama:", this.name);
//         console.log("Jabatan:", this.position);
//         console.log("Gaji:", this.salary);
//         console.log("Departemen:", this.department);
//     }
// }

// // Contoh penggunaan
// const manager = new Manager("Andi", "Manager", 15000000, "IT");

// manager.lead();
// manager.showAll();

// class BankAccount {
//     constructor() {
//         this._balance = 0;
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo saat ini: ${this._balance}`);
//     }
// }

// const akun = new BankAccount();
// akun.deposit(500000);
// akun.showBalance();

// akun._balance = 9999999;
// akun.showBalance();

// class SecureAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo aman: ${this.#balance}`);
//     }
// }

// const akun = new SecureAccount();
// akun.deposit(500);
// akun.#balance = 9999;
// akun.showBalance();
  
//   class Message {
//     send() {
//       console.log("Mengirim pesan umum.");
//     }
//   }
  
//   class Email extends Message {
//     send() {
//       console.log("Mengirim email ke pengguna.");
//     }
//   }
  
//   class SMS extends Message {
//     send() {
//       console.log("Mengirim SMS ke nomor penerima.");
//     }
//   }
  
//   const pesan1 = new Message();
//   const pesan2 = new Email();
//   const pesan3 = new SMS();
  
//   pesan1.send();
//   pesan2.send();
//   pesan3.send();

class Account {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }

    showBalance() {
        console.log(`Saldo anda adalah: ${this.#balance}`);
    }
}

class PremiumAccount extends Account {
    showBalance() {
        console.log(`Saldo anda adalah: ${this.getBalance()} | Akun Premium`);
    }
}

// Contoh penggunaan
const akunBiasa = new Account();
akunBiasa.deposit(1000);
akunBiasa.showBalance(); // Saldo anda adalah: 1000

const akunPremium = new PremiumAccount();
akunPremium.deposit(5000);
akunPremium.showBalance(); // Saldo anda adalah: 5000 | Akun Premium
