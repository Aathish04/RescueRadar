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

export function CreateDonationActivity(donnum, title, org, daysleft, amountRaised, target, description, categories) {
    var donationactivity = gun.get('trinit-hackathon-ppp').get('donationactivity-1').get(donnum);

    // Convert categories array to a Gun.js set
    var categoriesSet = {};
    categories.forEach(category => {
        categoriesSet[category] = true;
    });

    donationactivity.put({
        "title": title,
        "organization": org,
        "daysLeft": daysleft,
        "amountRaised": amountRaised,
        "target": target,
        "description": description,
        "categories": categoriesSet
    });
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



// Call 1
CreateDonationActivity("DN001", "DelhiHelpers - Disaster Relief", "DelhiHelpers", 10, 3000, 5000, "Providing aid to disaster-affected areas in Delhi", ["Disaster Relief", "Delhi"]);

// Call 2
CreateDonationActivity("DN002", "MumbaiAid - Emergency Assistance", "MumbaiAid", 25, 8000, 12000, "Supporting emergency relief efforts in Mumbai", ["Disaster Relief", "Mumbai"]);

// Call 3
CreateDonationActivity("DN003", "BangaloreCares - Crisis Support", "BangaloreCares", 15, 5000, 10000, "Aiding communities in crisis in Bangalore", ["Disaster Relief", "Bangalore"]);

// Call 4
CreateDonationActivity("DN004", "HydSupport - Relief and Rehabilitation", "HydSupport", 20, 4000, 8000, "Assisting in relief and rehabilitation efforts in Hyderabad", ["Disaster Relief", "Hyderabad"]);

// Call 5
CreateDonationActivity("DN005", "BhopalRelief - Resilience Fund", "BhopalRelief", 30, 10000, 15000, "Building resilience in disaster-prone areas of Bhopal", ["Disaster Relief", "Bhopal"]);

// Call 6
CreateDonationActivity("DN006", "JaipurUnity - Emergency Response", "JaipurUnity", 5, 2000, 5000, "Providing immediate response to emergencies in Jaipur", ["Disaster Relief", "Jaipur"]);

// Call 7
CreateDonationActivity("DN007", "ChennaiAid - Recovery Program", "ChennaiAid", 40, 12000, 20000, "Supporting long-term recovery programs in Chennai", ["Disaster Relief", "Chennai"]);

// Call 8
CreateDonationActivity("DN008", "ChandigarhHope - Humanitarian Assistance", "ChandigarhHope", 18, 6000, 12000, "Providing humanitarian assistance in Chandigarh", ["Disaster Relief", "Chandigarh"]);

// Call 9
CreateDonationActivity("DN009", "KolkataAssist - Relief and Reconstruction", "KolkataAssist", 12, 3500, 6000, "Assisting in relief and reconstruction efforts in Kolkata", ["Disaster Relief", "Kolkata"]);

// Call 10
CreateDonationActivity("DN010", "KochiRelieve - Emergency Support", "KochiRelieve", 22, 7000, 12000, "Providing emergency support to disaster-affected areas in Kochi", ["Disaster Relief", "Kochi"]);

// Call 11
CreateDonationActivity("DN011", "DelhiHelpers - Urgent Aid", "DelhiHelpers", 25, 5500, 10000, "Providing urgent aid to disaster-stricken areas in Delhi", ["Disaster Relief", "Delhi"]);

// Call 12
CreateDonationActivity("DN012", "MumbaiAid - Rehabilitation Project", "MumbaiAid", 18, 4800, 8000, "Supporting rehabilitation projects in Mumbai", ["Disaster Relief", "Mumbai"]);

// Call 13
CreateDonationActivity("DN013", "BangaloreCares - Community Resilience", "BangaloreCares", 30, 9000, 15000, "Building community resilience in Bangalore", ["Disaster Relief", "Bangalore"]);

// Call 14
CreateDonationActivity("DN014", "HydSupport - Emergency Response", "HydSupport", 15, 4000, 8000, "Providing immediate response to emergencies in Hyderabad", ["Disaster Relief", "Hyderabad"]);

// Call 15
CreateDonationActivity("DN015", "BhopalRelief - Relief and Recovery", "BhopalRelief", 20, 6000, 10000, "Assisting in relief and recovery efforts in Bhopal", ["Disaster Relief", "Bhopal"]);

console.log("DOne")