const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};

person.lang = "en";
console.log(person.language);