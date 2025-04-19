document.getElementById('form-examen').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const examen = {
      nom: document.getElementById('nom').value,
      duree: parseInt(document.getElementById('duree').value),
      description: document.getElementById('description').value,
      proprietaire: document.getElementById('proprietaire').value,
      questions: []
  };
  const proprietaire = examen.proprietaire.trim();//on ajoutant trim pour éviter les noms doublés dans localStorage 
  const examsKey = 'examens_' + proprietaire;
  const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
  exams.push(examen);
  localStorage.setItem(examsKey, JSON.stringify(exams));

  alert('Examen ajouté avec succès pour ' + proprietaire);
  this.reset();
});

// Solution Trouvé : ajouter une fonction pour récupérer tous les examens d'un propriétaire
function AvoirExamensPourProp(proprietaire) {
  const examsKey = 'examens_' + proprietaire.trim();
  const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
  return exams;
}
