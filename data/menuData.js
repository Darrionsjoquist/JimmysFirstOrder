let Menu = [
{
EntryName:"srimp paste bowl",
EntryType:"Food",
EntryDescription:"freshly frozen shrimp ground into paste",
EntryPrice:"$160"
},
{
   EntryName:"srimp paste bowl",
   EntryType:"Drinks",
   EntryDescription:"freshly frozen shrimp ground into paste",
   EntryPrice:"$161"
},
{EntryName:"paste cup",
EntryType:"Drinks",
EntryDescription:"freshly frozen shrimp ground into paste",
EntryPrice:"$154"
},
{EntryName:"glop glass",
EntryType:"Drinks",
EntryDescription:"grean glop from fresh the drain",
EntryPrice:"$57"
},
{EntryName:"candied paste",
EntryType:"Treats",
EntryDescription:"freshly frozen shrimp ground into paste",
EntryPrice:"$28"}
]



let specials = [
{
specialName:"Bucket Monkey",
specialDisc:"Our very famous bucket monkey, in an ironic twist the bucket protects him from the rain",
specialImg:"https://i.redd.it/6as3k6sprar51.jpg"
},
{
   specialName:"prophetic Monkey",
   specialDisc:"he knows you, he knows what you've done",
   specialImg:"https://insider.si.edu/wp-content/uploads/2011/03/NHB2011-00358.jpg"
},
{
   specialName:"Hat Monkey",
   specialDisc:"this monkey is one of the most cultured around, his class and civility are unmached",
   specialImg:"https://thumbs.dreamstime.com/b/closeup-illustration-primate-monkey-wearing-black-bowler-hat-cap-computer-generated-illustration-image-head-163807690.jpg"
},

{
   specialName:"Thug Monkey",
   specialDisc:"the thug monkey is king of the streets, better pay your debts or he'll rip yer arms off",
   specialImg:"https://p1.pxfuel.com/preview/882/848/948/monkey-cool-stress-cigarette-sit-sunglasses.jpg"
}
];

// to edit the spreadsheet, use this link
// https://docs.google.com/spreadsheets/d/1i1PAGv6nFwNhmfDq0GkU78zQ_YMqTMkCdDiRn0Z5u-o/edit?usp=sharing

const getDataFromGoogleSheet = async () => {
   return fetch('https://docs.google.com/spreadsheets/d/1i1PAGv6nFwNhmfDq0GkU78zQ_YMqTMkCdDiRn0Z5u-o/export?format=csv')
   .then((result) => result.text())
   .then((text) => {
      return csv().fromString(text);
   });
}

const loadMenuDataFromGoogleSheet = async () => {
   const data = await getDataFromGoogleSheet();
   console.log(data);
   return data;
}

loadMenuDataFromGoogleSheet();
