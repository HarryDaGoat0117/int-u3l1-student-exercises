// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place = "A Site";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name for a creature you want.
let creatureName = "Dragon Lore AWP";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color = "red";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2 = "brown";

// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion = "fear";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character = "Ohne";

// 7. Create a variable named `number` and set the value to a number greater than 1.
let number = 67;
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item = "smoke grenade";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2 = "knife";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb = "rush A";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb = "quickly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2 = 1738;





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "A Site";
    document.querySelector(".creature-name").innerHTML = "Dragon Lore AWP";
    document.querySelector(".color").innerHTML = "red";
    document.querySelector(".color-2").innerHTML = "brown";
    document.querySelector(".emotion").innerHTML = "fear";
    document.querySelector(".character").innerHTML = "Ohne";
    document.querySelector(".creature-name-again").innerHTML = "Dragon Lore AWP";
    document.querySelector(".number").innerHTML = 67;
    document.querySelector(".item").innerHTML = "smoke grenade";
    document.querySelector(".character-again").innerHTML = "Ohne";
    document.querySelector(".item-2").innerHTML = "knife";
    document.querySelector(".verb").innerHTML = "rush A";
    document.querySelector(".adverb").innerHTML = "quickly";
    document.querySelector(".number-2").innerHTML = 1738;
    document.querySelector(".story-container").style = "display:block";
});

