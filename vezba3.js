// // vezba 3

var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	tarajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic"
	},
	ocenePolaznika: [3,2,7,4,8,1,9,2,10,10,3,6,3,1,7,3,5,4,10,9,1,9],
	organizacija: "Startit",
	kursJosTraje: true
};


function ocena() {
	var prosek = 0;
	for (var i = 0; i < testObjekat.ocenePolaznika.length; i++) {
		prosek += testObjekat.ocenePolaznika[i];
	}
	var ukupno = prosek / testObjekat.ocenePolaznika.length;
	console.log(ukupno);
}

ocena();