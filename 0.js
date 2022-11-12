const stu = {
    name1: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
const{name1}=stu
const[h1,h2,h3]=stu.hobby
const{address :{home}}=stu
const[student,{year}]=stu.title
console.log(name1)
console.log(h1,h2,h3)
console.log(home)
console.log(year)
