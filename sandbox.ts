export {}

class Test {
    property: string;
}

let t:any = new Test();
t.property = "hello";

console.log(JSON.stringify(t));

class MyEntity {
    id:string;
    value:string;

    constructor(id,value){
        this.id=id;
        this.value=value;
    }
}

let dic: MyEntity[] = new Array();
dic.push(new MyEntity("1","value"));

console.log("Entry "+ dic.pop());