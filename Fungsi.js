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


let sepeda = {
    model: "Polygon",
    gear: 7,
    color: "White",

    start: function() {
        console.log("Sepeda Berjalan");
    },
    brake: function() {
        console.log("Mobil mengerem.");
    },
    stop: function() {
        console.log("Mobil berhenti.");
    }
};

console.log(sepeda,model);
console.log(sepeda,gear);
console.log(sepeda,color);
sepeda.start();
sepeda.brake();
sepeda.stop();