var fruits = [{
    name: "banana",
    weight: 150
}, {
    name: "apple",
    weight: 130
}, {
    name: "orange",
    weight: 160
}, {
    name: "kiwi",
    weight: 80
}]

fruits.forEach(function(item, index) {
    console.log("Current: " + item.name);
    if (index > 0) {
        console.log("Previous: " + fruits[index - 1].name);
    }
    if (index < fruits.length - 1) {
        console.log("Next: " + fruits[index + 1].name);
    }
});
