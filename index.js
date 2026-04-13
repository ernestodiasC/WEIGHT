createPool=function(_list){
    let _s={
        list:_list,
        max_weight:0,
    }
    for(let i=0;i<_s.list.length;i++){
        _s.max_weight+=_s.list[i].weight
    }
    return _s
}

let ItemPool=createPool([
    {name:"One",weight:1},
    {name:"Two",weight:.5},
    {name:"Three",weight:.5},
    {name:"Four",weight:.25},
    {name:"Five",weight:.3},
    {name:"Seis",weight:.45},
    {name:"Sete",weight:.1},
    {name:"Oito",weight:.333},
    {name:"Nine",weight:.9},
    {name:"Ten",weight:.75},
])

const resultid=document.getElementById("result")
const oddid=document.getElementById("odd")

getItem=function(_pool){
    let random=Math.random()*_pool.max_weight
    let i=0
    while(true){
        random-=_pool.list[i].weight
        if(random<0){
            return _pool.list[i]
        }
        i=i+1
    }
}

getItemHTML=function(){
    let _i=getItem(ItemPool)
    resultid.textContent=_i.name
    oddid.textContent=Math.round(_i.weight/ItemPool.max_weight*100)
    oddid.textContent+="%"
    console.debug(_i)
}