animaux = [];

function addanimal (name,country) {
    animal = {
        'animalName': name,
        'animalCountry':country
    }
    animaux.push(animal)
    console.log(animaux)
}

$(".ajout_animal").on("click", function(){
  var name = $('.name_input').val();
  var country = $('.country_input').val();
  console.log(name,country)
  addanimal(name,country)
});