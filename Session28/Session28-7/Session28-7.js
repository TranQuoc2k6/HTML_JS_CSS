let students = [
    {name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    {name: "Hà Bích Ngọc", scores: { math: 8, english: 10, literature: 9 } },
    {name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];
function clarify(students) {
    return students.filter(function(element){
            let average = (element.scores.math + element.scores.english + element.scores.literature ) / 3;
            return average > 8;
    });
};
console.log(clarify(students));