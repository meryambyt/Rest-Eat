// Site qui a servi de modèle pour le code https://www.bonbache.fr/barre-de-pagination-web-par-le-code-javascript-866.html
function navig(mode, pageName) {
  var currentPage = document.querySelector('.page.active');
  var currentPageNum = parseInt(currentPage.textContent);

  var prevPage = "";
  var nextPage = "";

  // Vérifier si la page courante est la première page
  if (currentPageNum == 1) {
    prevPage = pageName + "_page1.html";
  } else {
    prevPage = pageName + "_page" + (currentPageNum - 1) + ".html";
  }

  // Vérifier si la page courante est la dernière page
  if (currentPageNum == 4) {
    nextPage = pageName + "_page4.html";
  } else {
    nextPage = pageName + "_page" + (currentPageNum + 1) + ".html";
  }

  // défiler les pages vers l'arrière (mode=0)
  if (mode == 0 && currentPageNum > 1) {
    window.location.href = pageName + "_page" + (currentPageNum - 1) + ".html";

    // défiler les pages vers l'avant (mode=1)
  } else if (mode == 1 && currentPageNum < 4) {
    window.location.href = pageName + "_page" + (currentPageNum + 1) + ".html";
  }

  // Mis à jour du lien
  document.querySelector('.prev-page').href = prevPage;
  document.querySelector('.next-page').href = nextPage;

  // Mis à jour de la class
  currentPage.classList.remove('active');
  var newCurrentPage = document.querySelector('.page[href="' + window.location.href.split('/').pop() + '"]');
  newCurrentPage.classList.add('active');
}


// Trie par note
var restaurants_ini = -1;

window.onload = (event) => {
  restaurants_ini = document.querySelectorAll(".box");
}

// Afficher les restaurants dans l'ordre par defaut
function TrieReset() {
  for (var i = 0, len = 3; i < len; i++) {
    document.querySelector(".list1").appendChild(restaurants_ini[i]);
  }
  for (var i = 3, len = 6; i < len; i++) {
    document.querySelector(".list2").appendChild(restaurants_ini[i]);
  }
}

// Trie des notes par ordre croissant
function trieNoteCroissant() {
  // Tri des restaurants par ordre croissant
  var sorted_restaurants = Array.from(document.querySelectorAll(".box"));
  sorted_restaurants.sort(compareNote);
  // Recuperer des elements dans les listes
  var row1 = document.querySelector(".list1");
  var row2 = document.querySelector(".list2");

  // Vite le contenu des lignes
  row1.innerHTML = "";
  row2.innerHTML = "";

  // Gere l'alignement en une colonne quand fenetre 
  // reduite
  if (window.innerWidth < 945) {
    for (var i = 0, len = 3; i < len; i++) {
      row1.appendChild(sorted_restaurants[i]);
    }
    for (var i = 3, len = 6; i < len; i++) {
      row2.appendChild(sorted_restaurants[i]);
    }
  } else {
    // Gere l'affichage normal (3 lignes, 2 colonnes)
    for (var i = 0, len = 6; i < len; i++) {
      var resto = sorted_restaurants[i];
      if (i % 2 == 0) {
        row1.appendChild(resto);
      } else {
        row2.appendChild(resto);
      }
    }
  }
}

// Trie des notes par ordre decroissant
function trieNoteDecroissant() {
  // Tri des restaurants
  var sorted_restaurants = Array.from(document.querySelectorAll(".box"));
  sorted_restaurants.sort(compareNote);
  // Ordre decroissant
  sorted_restaurants.reverse();
  // Recuperer des elements dans les listes
  var row1 = document.querySelector(".list1");
  var row2 = document.querySelector(".list2");

  // Elements row1 et row2 sont vidés
  row1.innerHTML = "";
  row2.innerHTML = "";

  // Gere l'alignement en une colonne quand fenetre 
  // reduite
  if (window.innerWidth < 945 || (window.innerWidth > 1666 )) {
    for (var i = 0, len = 3; i < len; i++) {
      row1.appendChild(sorted_restaurants[i]);
    }
    for (var i = 3, len = 6; i < len; i++) {
      row2.appendChild(sorted_restaurants[i]);
    }
  } else {
    // Gere l'affichage normal (3 lignes, 2 colonnes)
    for (var i = 0, len = 6; i < len; i++) {
      var resto = sorted_restaurants[i];
      if (i % 2 == 0) {
        row1.appendChild(resto);
      } else {
        row2.appendChild(resto);
      }
    }
  }
}

// Comparaison des notes des restaurants
function compareNote(a, b) {
  // Conversion en float
  a_note = parseFloat(a.querySelector('.note').innerHTML);
  b_note = parseFloat(b.querySelector('.note').innerHTML);
  console.log(a_note);
  //Si a est inferieur à b
  if (a_note < b_note) {
    return -1;
  }
  //Si a est supérieur à b
  if (a_note > b_note) {
    return 1;
  }
  //a vaut b
  return 0;
}

/* https://stackoverflow.com/questions/31274329/get-list-of-filenames-in-folder-with-javascript */
// Liste des fichiers presents dans dossiers restaux_infos
var nom_files = ["afrik_n_fusion.html", "au_feu_de_bois.html", "aupa.html", "barge_crous.html", "bo_bun_2_go.html", "burger_king.html", "chez_gino.html", "chez_trassoudaine.html", "croq_de_bibliotheque.html", "crous_bf.html", "delfino.html", "dupont_cafe.html", "fengs.html", "hokkaido.html", "hokkaido_8.html", "ichi.html", "italian_trattoria.html", "kenzy.html", "la_felicita.html", "lao_chaleune.html", "lao_viet.html", "le_soixante_douze.html", "les_1001_nuits.html", "les_marmites_du_soleil.html", "mcdonalds.html", "milord.html", "molto_gusto.html", "my_kim_restaurant.html", "n_plus_1.html", "new_bai_fern.html", "nieli.html", "nosso.html", "odelices.html", "osoleil.html", "papita.html", "paris_milan.html", "petitsaladier.html", "pho_bida.html", "raya_thai.html", "scalini.html", "season_square.html", "street_bida.html", "sukiyaki.html", "terasse_italie.html", "thai_yim.html", "thelock.html", "under-the-sea-ephemera.html", "venezia.html", "verdi.html", "wok_chen.html"]

function redirigerVersPageAleatoire() {
  // Récupérer tous les fichiers HTML dans le dossier restaux_info
  const fichiers = nom_files

  // Sélectionner un fichier aléatoirement
  const fichierAleatoire = fichiers[Math.floor(Math.random() * fichiers.length)];
  console.log("${fichierAleatoire}")
  // Rediriger l'utilisateur vers la page choisie aléatoirement
  window.location.href = fichierAleatoire;
}

function redirigerVersPageAleatoire1() {
  // Récupérer tous les fichiers HTML dans le dossier restaux_info
  const fichiers = nom_files

  // Sélectionner un fichier aléatoirement
  const fichierAleatoire = fichiers[Math.floor(Math.random() * fichiers.length)];
  console.log("restaux_info/${fichierAleatoire}")
  // Rediriger l'utilisateur vers la page choisie aléatoirement
  window.location.href = "restaux_info/" + fichierAleatoire;
}




