import GUN from 'gun';
var gun = GUN(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun']);
var users = gun.get('trinit-hackathon-ppp').get('usertable');
var donations = gun.get('trinit-hackathon-ppp').get('donations');

// await users.put({"name":"Ravi","Age":35})
// copy.on((data)=>{console.log(data)})

export function CreateReliefActivity(relnum,userid,teamname,userstatus,lat,lon,contact,locality){
    var reliefactivities = gun.get('trinit-hackathon-ppp').get('reliefactivity-1').get(relnum);
    reliefactivities.put({"userid":userid,"teamname":teamname,"userstatus":userstatus,"lat":lat,"lon":lon,"contact":contact,"locality":locality});
}

CreateReliefActivity('1', 123, 'DelhiHelpers', 'NGO', 28.6139, 77.2090, 9876543210, 'Delhi');
CreateReliefActivity('2', 456, 'MumbaiAid', 'Volunteer', 19.0760, 72.8777, 9876543211, 'Mumbai');
CreateReliefActivity('3', 789, 'BangaloreCares', 'NGO', 12.9716, 77.5946, 9876543212, 'Bangalore');
CreateReliefActivity('4', 101, 'HydSupport', 'Volunteer', 17.3850, 78.4867, 9876543213, 'Hyderabad');
CreateReliefActivity('5', 202, 'BhopalRelief', 'NGO', 23.2599, 77.4126, 9876543214, 'Bhopal');
CreateReliefActivity('6', 303, 'JaipurUnity', 'Volunteer', 26.9124, 75.7873, 9876543215, 'Jaipur');
CreateReliefActivity('7', 404, 'ChennaiAid', 'NGO', 13.0827, 80.2707, 9876543216, 'Chennai');
CreateReliefActivity('8', 505, 'ChandigarhHope', 'Volunteer', 30.7333, 76.7794, 9876543217, 'Chandigarh');
CreateReliefActivity('9', 606, 'KolkataAssist', 'NGO', 22.5726, 88.3639, 9876543218, 'Kolkata');
CreateReliefActivity('10', 707, 'KochiRelieve', 'Volunteer', 10.8505, 76.2711, 9876543219, 'Kochi');
