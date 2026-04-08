let ItemPool={
    list:[
        {name:"One",weight:1},
        {name:"Two",weight:.5},
        {name:"Three",weight:.5},
        {name:"Four",weight:.25},
        {name:"Five",weight:.3},
        {name:"Six",weight:.4},
    ],
}
ItemPool.max_weight=0
for(let i=0;i<ItemPool.list.length;i++){
    ItemPool.max_weight+=ItemPool.list[i].weight
}

const resultid=document.getElementById("result")
const oddid=document.getElementById("odd")

getItem=function(){
    let random=Math.random()*ItemPool.max_weight
    let i=0
    while(true){
        random-=ItemPool.list[i].weight
        if(random<0){
            oddid.textContent=ItemPool.list[i].weight/ItemPool.max_weight*100
            oddid.textContent+="%"
            resultid.textContent=ItemPool.list[i].name
            console.log(ItemPool.list[i])
            return ItemPool.list[i]
        }
        i=i+1
    }
}