class person {
    name = "Code Lord";
    call() {}
}

let myperson = new person();
myperson.call;
document.write("<h2>" + myperson.name + "</h2>" + " " + "<br>");

//Section  2 for the classes

class param {
    constructoX() {
        document.write((this.Xname = "CodeX" + "<br>"));
    }
    printName() {
        // document.write(this.Xname);
    }
}
const pers = new param();
pers.constructoX();

// creating a seconds function
class XTime {
    Secs() {
        document.write(new Date().getSeconds());
    }
    Mins() {
        document.write(new Date().getMinutes());
    }
}
const x = new XTime();
x.Secs();