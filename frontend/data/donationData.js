const donationData = [
  {
    "title": "Flood Relief Effort for Assam",
    "organization": "Save Assam NGO",
    "daysLeft": 30,
    "amountRaised": 50000,
    "target": 200000,
    "image": require('../assets/donations/flood.jpg'),
    "description": "This campaign aims to provide immediate relief and support to the families affected by the devastating floods in Assam. Funds raised will be used for emergency shelter, food supplies, clean water, and rebuilding efforts. Your contribution can help us bring hope and aid to those in dire need.",
    "categories": "NGO"
  },
  {
    "title": "Cyclone Recovery in West Bengal",
    "organization": "Bengal Aid",
    "daysLeft": 45,
    "amountRaised": 75000,
    "target": 300000,
    "image": require('../assets/donations/cyclone.png'),
    "description": "Our initiative focuses on aiding the recovery of West Bengal from the recent cyclone's devastation. Contributions will support the repair of homes, infrastructure, and provide critical supplies to those affected. Together, we can help communities rebuild stronger.",
    "categories": "Govt"
  },
  {
    "title": "Earthquake Resilience Fund",
    "organization": "India Earthquake Relief",
    "daysLeft": 60,
    "amountRaised": 60000,
    "target": 250000,
    "image": require('../assets/donations/earthquake.jpeg'),
    "description": "This fund aims to enhance earthquake resilience by supporting immediate relief efforts and long-term rebuilding and preparedness initiatives across India. Donations help provide shelter, medical aid, and reconstruction resources.",
    "categories": "Govt"
  },
  {
    "title": "Drought Support for Maharashtra Farmers",
    "organization": "AgriAid India",
    "daysLeft": 90,
    "amountRaised": 80000,
    "target": 500000,
    "image": require('../assets/donations/drought.jpeg'),
    "description": "Support Maharashtra's farmers facing severe drought conditions by contributing to our fund. Your donations will help provide water, sustainable farming equipment, and financial support to those impacted, ensuring their livelihoods and food security.",
    "categories": "NGO"
  },
  {
    "title": "Landslide Rehabilitation in Kerala",
    "organization": "Kerala Relief Initiative",
    "daysLeft": 20,
    "amountRaised": 45000,
    "target": 150000,
    "image": require('../assets/donations/landslide.jpeg'),
    "description": "Kerala faces landslides due to heavy rainfall. This campaign supports affected families, providing them with emergency aid, rebuilding homes, and implementing landslide mitigation measures to protect communities.",
    "categories":  "Govt"
  },
  {
    "title": "Support Tsunami Affected Families in Tamil Nadu",
    "organization": "Tamil Nadu Tsunami Fund",
    "daysLeft": 35,
    "amountRaised": 90000,
    "target": 400000,
    "image": "require('../assets/donations/tsunami.jpg')",
    "description": "Aid families impacted by the tsunami in Tamil Nadu. Funds will assist in rebuilding lives through housing, healthcare, and livelihood support, helping communities to recover and strengthen against future disasters.",
    "categories": "Govt"
  },
  {
    "title": "Aid for Heatwave Victims in Telangana",
    "organization": "Heatwave Relief Foundation",
    "daysLeft": 25,
    "amountRaised": 20000,
    "target": 100000,
    "image": require('../assets/donations/heatwave.jpeg'),
    "description": "Extreme heatwaves in Telangana have endangered lives. This fund provides relief through cooling centers, hydration stations, and health services, prioritizing the elderly and vulnerable populations.",
    "categories": "NGO"
  },
  {
    "title": "Pandemic Relief for Migrant Workers",
    "organization": "Migrant Support Network",
    "daysLeft": 40,
    "amountRaised": 120000,
    "target": 500000,
    "image": require('../assets/donations/pandemic.jpg'),
    "description": "Support migrant workers affected by the pandemic with food, healthcare, and shelter. Contributions also fund skill development and job placement services, aiding in long-term recovery and stability.",
    "categories": "NGO"
  },
  {
    "title": "Rebuilding Lives After Punjab Floods",
    "organization": "Punjab Flood Relief",
    "daysLeft": 50,
    "amountRaised": 65000,
    "target": 300000,
    "image": require('../assets/donations/flood.jpg'),
    "description": "Floods have ravaged parts of Punjab, displacing families and destroying livelihoods. This campaign aims to provide essential relief and support rebuilding efforts, ensuring those affected can return to normal life.",
    "categories": "Govt"
  },
  {
    "title": "Emergency Aid for Gujarat Locust Attack",
    "organization": "Gujarat Agri Relief",
    "daysLeft": 30,
    "amountRaised": 35000,
    "target": 200000,
    "image": require('../assets/donations/locusts.jpeg'),
    "description": "Locust swarms have devastated crops in Gujarat, threatening food security. This fund supports affected farmers with pesticides, equipment, and financial aid to recover and safeguard future harvests.",
    "categories":  "NGO"
  },
  {
    "title": "Uttarakhand Flash Flood Relief Fund",
    "organization": "Uttarakhand Disaster Relief",
    "daysLeft": 60,
    "amountRaised": 50000,
    "target": 220000,
    "image": require('../assets/donations/flood.jpg'),
    "description": "Sudden flash floods in Uttarakhand have caused widespread destruction. This relief fund provides immediate aid and supports recovery efforts, including infrastructure repair and community resilience initiatives.",
    "categories": "Govt"
  },
  {
    "title": "Hailstorm Relief in Madhya Pradesh",
    "organization": "MP Farmers Fund",
    "daysLeft": 45,
    "amountRaised": 30000,
    "target": 120000,
    "image": require('../assets/donations/hailstorm.jpeg'),
    "description": "Unexpected hailstorms have damaged crops across Madhya Pradesh. This campaign helps farmers with seed distribution, financial assistance, and strategies to mitigate future losses, supporting agricultural sustainability.",
    "categories": "NGO"
  },
  {
    "title": "Odisha Cyclone Shelter Construction",
    "organization": "Cyclone Safe Homes",
    "daysLeft": 75,
    "amountRaised": 85000,
    "target": 400000,
    "image": require('../assets/donations/cyclone.png'),
    "description": "Focusing on long-term resilience, this project aims to construct cyclone shelters in Odisha to protect vulnerable communities during disasters. Contributions fund the building of safe havens and emergency preparedness training.",
    "categories":  "Govt"
  },
  {
    "title": "Firefighting Equipment for Himachal Pradesh",
    "organization": "Himachal Fire Safety",
    "daysLeft": 20,
    "amountRaised": 25000,
    "target": 80000,
    "image": require('../assets/donations/firefighting.jpeg'),
    "description": "Support the acquisition of modern firefighting equipment in Himachal Pradesh to combat forest fires more effectively. Your donation helps protect ecosystems, wildlife, and communities from fire-related damages.",
    "categories": "Govt"
  },
  {
    "title": "Funding for Locust Control in Rajasthan",
    "organization": "Rajasthan Locust Squad",
    "daysLeft": 55,
    "amountRaised": 40000,
    "target": 180000,
    "image": require('../assets/donations/locusts.jpeg'),
    "description": "Contribute to our efforts in combating locust invasions in Rajasthan. Funds are utilized for locust control operations, including aerial and ground spraying of pesticides, safeguarding crops and livelihoods.",
    "categories": "NGO"
  }
]

export default donationData;
