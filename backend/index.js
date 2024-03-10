import GUN from 'gun';
var gun = GUN(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun']);
// var users = gun.get('trinit-hackathon-ppp').get('reliefactivity-1');
// users.on((data)=>{console.log(users)})

// users.get('userid').once(v => console.log(v));

// export function Search(tablename,property,value){
//     var table = gun.get('trinit-hackathon-ppp').get('tablename').map();

//     }


// Search(reliefactivity)

export function GetReliefActivity(){

    // var reliefactivities = gun.get('trinit-hackathon-ppp').get('reliefactivity-1');
    let activities = []
    return new Promise((resolve,reject)=>{
        gun.get('trinit-hackathon-ppp').get('reliefactivity-1').once().map().on((event,eventid)=>{if(event){activities.push({id:eventid,...event})}}).then(()=>{resolve(activities)}).catch((error)=>{reject(error)});
    })
}

export async function GetUniqueReliefActivity(){

var reliefobj=await GetReliefActivity()

// console.log(reliefobj)

var op = [];

for(var i in reliefobj){
    var obj = reliefobj[i]
    var k = 0;
    for (var j in op){
        if (op[j].userid==obj.userid){
            k=1
        }
    }
    if(k==0){
        op.push(obj)
    }
}
// console.log(op);
return op;
}

// console.log(await GetUniqueReliefActivity());