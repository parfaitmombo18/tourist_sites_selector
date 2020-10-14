const sites = [
    {
        siteImage: "url('images/1.jpg')",
        siteName: 'Ait Benhaddou (Morocco)'

    },
    {
        siteImage: "url('images/2.jpg')",
        siteName: 'Black River Gorge National Park (Mauritius)'

    },
    {
        siteImage: "url('images/3.jpg')",
        siteName: 'Cap Town (South Africa)'

    },
    {
        siteImage: "url('images/4.jpg')",
        siteName: 'Djenne (Mali)'

    },
    {
        siteImage: "url('images/5.jpg')",
        siteName: 'Fish River Canyon (Namibia)'

    },
    {
        siteImage: "url('images/6.jpg')",
        siteName: 'Giza Necropolis (Egypt)'

    },
    {
        siteImage: "url('images/7.jpg')",
        siteName: 'Isalo National Park (Madagascar)'

    },
    {
        siteImage: "url('images/8.jpg')",
        siteName: 'Lalibela (Ethiopia)'

    },
    {
        siteImage: "url('images/9.jpg')",
        siteName: 'Marrakech (Morocco)'

    },
    {
        siteImage: "url('images/10.jpg')",
        siteName: 'Mount Kilimanjaro (Tanzania)'

    },
    {
        siteImage: "url('images/11.jpg')",
        siteName: 'Okavango Delta (Botsawana)'

    },
    {
        siteImage: "url('images/12.jpg')",
        siteName: 'Praslin (Seychelles)'

    },
    {
        siteImage: "url('images/13.jpg')",
        siteName: 'Victoria Falls (Zimbabwe)'

    },
    {
        siteImage: "url('images/14.jpg')",
        siteName: 'Zanzibar (Tanzania)'

    },
]

const btn = document.getElementById('btn');
const site = document.querySelector('.site');


btn.addEventListener('click', function(){    

        // Get random number between 0 - and the length of the array 
        const randomNumber = getRandomNumber();
            
        // Changing the text content of the site name in html content
        site.textContent = sites[randomNumber].siteName;
 
        // Access background image property of html content
        document.body.style.backgroundImage = sites[randomNumber].siteImage;
        
});

// Function to generate a random number
function getRandomNumber(){
    return Math.floor(Math.random()  * sites.length);
}