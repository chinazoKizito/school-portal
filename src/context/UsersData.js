// Function for Adding together the Individual scores of the intern
function sumArray(numlist) {
    let sum = 0
    numlist.forEach(item =>{
        sum +=item;
    })
    return sum
}

const userData = [
    {
        id : 'genesys1',
        name : 'Kizito Chinazo',
        path : 'Frontend', 
        image : require('../images/male.webp'),
        aggregateScore : 10 * sumArray([10, 20, 33]),
    },

    {
        id : 'genesys2',
        name : 'Amaka Okoro',
        path : 'Frontend', 
        image : require('../images/female.webp'),
        aggregateScore : 10 * sumArray([10, 20, 30, 40]),   
     },

    {
        id : 'genesys3',
        name : 'Genevieve Uchenna',
        path : 'Frontend', 
        image : require('../images/female-2.webp'),
        aggregateScore : 10 * sumArray([10, 20, 20, 20]),    
    },

    {
        id : 'genesys4',
        name : 'Cabrini Tochi',
        path : 'Frontend', 
        image : require('../images/female-3.webp'),
        aggregateScore : 10 * sumArray([10, 20, 20, 4]),    
    },

    {
        id : 'genesys5',
        name : 'Carolus KaodiChimma',
        path : 'Frontend', 
        image : require('../images/male-2.webp'),
        aggregateScore : 10 * sumArray([10, 20, 50, 70]),    
    },

    {
        id : 'genesys6',
        name : 'Hope Nwakaego',
        path : 'Frontend', 
        image : require('../images/female.webp'),
        aggregateScore : 10 * sumArray([10, 20, 80, 90]),  
     },

    {
        id : 'genesys7',
        name : 'Prosper Ikechukwu',
        path : 'Frontend', 
        image : require('../images/male-3.webp'),
        aggregateScore : 10 * sumArray([17, 20, 30, 4]),    
    },

    {
        id : 'genesys8',
        name : 'Nkiru Onwugbufor',
        path : 'Frontend', 
        image : require('../images/female-3.webp'),
        aggregateScore : 10 * sumArray([10, 20, 30, 26]) 
    },

    {
        id : 'genesys9',
        name : 'Timothy Achunonu',
        path : 'Frontend', 
        image : require('../images/male-1.webp'),
        aggregateScore : 10 * sumArray([10, 20, 30, 30]),   
     },

    {
        id : 'genesys10',
        name : 'Chima Nkwere',
        path : 'Frontend', 
        image : require('../images/male-2.webp'),
        aggregateScore : 10 * sumArray([10, 20, 30, 8]),
    },

    {
        id : 'genesys11',
        name : 'Joshua Ade',
        path : 'Frontend', 
        image : require('../images/male-1.webp'),
        aggregateScore : 10 * sumArray([10, 20, 30, 9]),
    },

    {
        id : 'genesys12',
        name : 'Nasiru Judith',
        path : 'Frontend', 
        image : require('../images/female-3.webp'),
        aggregateScore : 10 * sumArray([10, 20, 30, 21]) 
    },
    {
        id : 'genesys13',
        name : 'Queendaline Ikechukwu',
        path : 'Frontend', 
        image : require('../images/female-2.webp'),
        aggregateScore : 10 * sumArray([17, 20, 29, 4]),    
    },

    {
        id : 'genesys14',
        name : 'Davido Adebanjo',
        path : 'Frontend', 
        image : require('../images/male-1.webp'),
        aggregateScore : 10 * sumArray([17, 20, 13, 4]),    
    },
    {
        id : 'genesys15',
        name : 'Wizkidayo  Adegokuye',
        path : 'Frontend', 
        image : require('../images/male-2.webp'),
        aggregateScore : 10 * sumArray([22, 11, 13, 7]),    
    },
    {
        id : 'genesys16',
        name : 'Tayo  Adina',
        path : 'Frontend', 
        image : require('../images/male-2.webp'),
        aggregateScore : 10 * sumArray([13, 20, 20, 13]),    
    },
    {
        id : 'genesys17',
        name : 'Miriam  Musa',
        path : 'Frontend', 
        image : require('../images/female.webp'),
        aggregateScore : 10 * sumArray([13, 10, 10, 13]),    
    },
    {
        id : 'genesys18',
        name : 'Joseph  Yakubu',
        path : 'Frontend', 
        image : require('../images/male.webp'),
        aggregateScore : 10 * sumArray([13, 7, 7, 13]),    
    },
    {
        id : 'genesys19',
        name : 'Mmaduabuchi  Iheme',
        path : 'Frontend', 
        image : require('../images/male-3.webp'),
        aggregateScore : 10 * sumArray([11, 6, 7, 12]),    
    },
    {
        id : 'genesys20',
        name : 'Josephine  Ihenetu',
        path : 'Frontend', 
        image : require('../images/female.webp'),
        aggregateScore : 10 * sumArray([16, 6, 9, 12]),    
    },
]

// Program cordinator details
export const programCordinator = {
    name : 'Tappi',
    image : require('../images/male-5.jpg'),
    title : 'Program Cordinator'
}



// Export the sorted users data from highest scoring to the lowest
export const sortedUsersData = userData.sort((a, b) => b.aggregateScore - a.aggregateScore)


