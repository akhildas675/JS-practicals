function cut(val){
let num=val.toString().split('')
    let mid=num.length/2
    return {
        half:num.slice(0,mid),
        half2:num.slice(mid)

    }

}
let arr=123456
console.log(cut(arr));