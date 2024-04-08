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

export function GetDonationActivity() {
    let activities = [];

    return new Promise((resolve, reject) => {
        gun.get('trinit-hackathon-ppp').get('donationactivity-1').once().map().on((event, eventid) => {
            if (event) {
                // Convert categories set back to array
                const categoriesArray = Object.keys(event.categories || {});
                
                activities.push({
                    id: eventid,
                    title: event.title,
                    organization: event.organization,
                    daysLeft: event.daysLeft,
                    amountRaised: event.amountRaised,
                    target: event.target,
                    description: event.description,
                    categories: categoriesArray
                });
            }
        }).then(() => {
            resolve(activities);
        }).catch((error) => {
            reject(error);
        });
    });
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


export async function GetUniqueDonationActivity() {
    var donationObj = await GetDonationActivity();

    var uniqueDonations = [];

    for (var i in donationObj) {
        var donation = donationObj[i];
        var isUnique = true;

        // Check if the donation's ID is already in the uniqueDonations array
        for (var j in uniqueDonations) {
            if (uniqueDonations[j].id === donation.id) {
                isUnique = false;
                break;
            }
        }

        // If the donation is unique, add it to the uniqueDonations array
        if (isUnique) {
            uniqueDonations.push(donation);
        }
    }

    return uniqueDonations;
}


console.log(await GetUniqueReliefActivity());
console.log(await GetUniqueDonationActivity());