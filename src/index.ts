import { SortData } from "./SortData"
import { Numbers } from "./Numbers"
import { Strings } from "./Strings"

const dateArray = [
    new Date(2010, 9, 24),
    new Date(2035, 9, 24),
    new Date(2001, 9, 24),
    new Date(2053, 9, 24),
]

const years = dateArray.map(date => date.getFullYear())

const numbersData = new Numbers(years)
numbersData.sort()
console.log(numbersData.number)

const stringsData = new Strings('Zacdb')
stringsData.sort()
console.log(stringsData.str)