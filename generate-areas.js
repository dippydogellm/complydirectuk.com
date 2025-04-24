const fs = require('fs');
const path = require('path');

const areas = [
  "Manchester", "Liverpool", "Leeds", "Sheffield", "York", "Chester", "Stoke-on-Trent", "Preston", "Huddersfield", "Bradford", "Blackpool", "Bolton", "Stockport", "Salford", "Oldham", "Rochdale", "Bury", "Wigan", "Warrington", "Burnley", "Blackburn", "Macclesfield", "Altrincham", "Sale", "St Helens", "Crewe", "Birkenhead", "Southport", "Lancaster", "Halifax", "Runcorn", "Widnes", "Ellesmere Port", "Northwich", "Nantwich", "Congleton", "Knutsford", "Wilmslow", "Lymm", "Middlewich", "Sandbach", "Winsford", "Glossop", "Buxton", "Matlock", "Bakewell", "Ashbourne", "Leek", "Newcastle-under-Lyme", "Stafford", "Shrewsbury", "Telford", "Wolverhampton", "Birmingham", "Coventry", "Leicester", "Nottingham", "Derby", "Loughborough", "Lincoln", "Scunthorpe", "Grimsby", "Hull", "Doncaster", "Barnsley", "Rotherham", "Wakefield", "Dewsbury", "Keighley", "Skipton", "Harrogate", "Ripon", "Darlington", "Middlesbrough", "Sunderland", "Newcastle upon Tyne", "Durham", "Carlisle", "Kendal", "Penrith", "Workington", "Whitehaven", "Barrow-in-Furness", "Morecambe", "Heysham", "Fleetwood", "Lytham St Annes", "Poulton-le-Fylde", "Kirkham", "Garstang", "Longridge", "Clitheroe", "Accrington", "Haslingden", "Rawtenstall", "Bacup", "Todmorden", "Hebden Bridge", "Sowerby Bridge", "Brighouse", "Elland", "Mirfield", "Batley", "Heckmondwike", "Ossett", "Pontefract", "Castleford", "Goole", "Selby", "Beverley", "Driffield", "Bridlington", "Scarborough", "Whitby", "Malton", "Pickering", "Thirsk", "Northallerton", "Richmond", "Leyburn", "Hawes", "Settle", "Ingleton", "Kirkby Lonsdale", "Sedbergh", "Appleby-in-Westmorland", "Kirkby Stephen", "Barnard Castle", "Bishop Auckland", "Spennymoor", "Newton Aycliffe", "Shildon", "Crook", "Consett", "Stanley", "Chester-le-Street", "Washington", "Houghton-le-Spring", "Seaham", "Peterlee", "Hartlepool", "Redcar", "Saltburn-by-the-Sea", "Guisborough", "Loftus", "Skelton", "Marske-by-the-Sea", "Great Ayton", "Stokesley", "Yarm", "Thornaby", "Stockton-on-Tees", "Billingham", "Norton", "Sedgefield", "Ferryhill", "Trimdon", "Wingate", "Shotton Colliery", "Easington", "Murton", "Hetton-le-Hole", "Horden", "Blackhall Colliery", "Seaton Carew", "Greatham", "Wolviston", "Wynyard", "Hart", "Elwick", "Dalton Piercy", "Cowpen Bewley", "Port Clarence", "South Bank", "Eston", "Normanby", "Ormesby", "Nunthorpe", "Marton", "Coulby Newham", "Hemlington", "Acklam", "Linthorpe", "Grove Hill", "North Ormesby", "Berwick Hills", "Pallister", "Thorntree", "Brambles Farm", "Park End", "Beckfield", "Cargo Fleet", "Southfield", "Northfield", "Eastfield", "Westfield", "Middlesbrough Centre", "Newport", "Ayresome", "Whinney Banks", "Longlands", "Tollesby", "Saltersgill", "Easterside", "Marton Manor", "Stainton", "Thornton", "Maltby", "Hilton", "Seamer", "Newby", "Great Broughton", "Swainby", "Osmotherley", "Borrowby", "Knayton", "Thirlby", "Sutton-under-Whitestonecliffe", "Bagby", "Sowerby", "Thirsk Centre", "Carlton Miniott", "Sandhutton", "Baldersby", "Topcliffe", "Asenby", "Dalton", "Sessay", "Hutton Sessay", "Raskelf", "Easingwold", "Stillington", "Crayke", "Brandsby", "Sheriff Hutton", "Strensall", "Haxby", "Wigginton", "New Earswick", "Huntington", "York Centre", "Acomb", "Holgate", "Clifton", "Rawcliffe", "Skelton", "Poppleton", "Nether Poppleton", "Upper Poppleton", "Rufforth", "Askham Bryan", "Askham Richard", "Copmanthorpe", "Bishopthorpe", "Naburn", "Acaster Malbis", "Appleton Roebuck", "Bolton Percy", "Tadcaster", "Boston Spa", "Wetherby", "Collingham", "Bardsey", "Thorner", "Scarcroft", "Shadwell", "Alwoodley", "Moortown", "Roundhay", "Oakwood", "Harehills", "Gipton", "Seacroft", "Cross Gates", "Halton", "Colton", "Whitkirk", "Garforth", "Kippax", "Allerton Bywater", "Castleford Centre", "Glasshoughton", "Ferrybridge", "Knottingley", "Brotherton", "Fairburn", "Hillam", "Monk Fryston", "South Milford", "Sherburn in Elmet", "Ulleskelf", "Cawood", "Riccall", "Barlby", "Selby Centre", "Brayton", "Thorpe Willoughby", "Hambleton", "Monk Fryston", "Hillam", "Burton Salmon", "Brotherton", "Fairburn", "Ledsham", "Ledston", "Kippax", "Garforth", "Swillington", "Great Preston", "Allerton Bywater", "Methley", "Oulton", "Woodlesford", "Rothwell", "Carlton", "Lofthouse", "Robin Hood", "East Ardsley", "West Ardsley", "Tingley", "Morley", "Churwell", "Gildersome", "Drighlington", "Birkenshaw", "Birstall", "Batley", "Dewsbury", "Ossett", "Horbury", "Wakefield Centre", "Sandal", "Walton", "Crofton", "Sharlston", "Normanton", "Altofts", "Warmfield", "Kirkthorpe", "Stanley", "Outwood", "Wrenthorpe", "Alverthorpe", "Thornes", "Lupset", "Kettlethorpe", "Hall Green", "Crigglestone", "Durkar", "Calder Grove", "Middlestown", "Netherton", "Horbury Bridge", "Flockton", "Grange Moor", "Emley", "Skelmanthorpe", "Denby Dale", "Clayton West", "Scissett", "Shelley", "Shepley", "Stocksmoor", "Thurstonland", "Brockholes", "Honley", "Holmfirth", "New Mill", "Wooldale", "Totties", "Hepworth", "Scholes", "Jackson Bridge", "Hade Edge", "Holmbridge", "Cartworth Moor", "Upperthong", "Netherthong", "Thongsbridge", "Wilshaw", "Meltham", "Marsden", "Slaithwaite", "Linthwaite", "Golcar", "Milnsbridge", "Paddock", "Marsh", "Edgerton", "Birkby", "Fartown", "Bradley", "Brackenhall", "Deighton", "Sheepridge", "Cowcliffe", "Fixby", "Rastrick", "Brighouse", "Clifton", "Hartshead", "Roberttown", "Liversedge", "Heckmondwike", "Norristhorpe", "Gomersal", "Birkenshaw", "Drighlington", "Tong", "Bierley", "East Bowling", "West Bowling", "Little Horton", "Great Horton", "Wibsey", "Buttershaw", "Low Moor", "Wyke", "Oakenshaw", "Shelf", "Northowram"
];

// Generate locations data
const locationsData = {
  areas: areas.map(area => ({
    id: area.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: area,
    postcode: "VARIOUS", // This would need to be updated with actual postcodes
    description: `Expert fire safety and protection services throughout ${area} and surrounding areas, with specialized expertise in local premises.`,
    coverage: {
      districts: [
        `${area} City Centre`,
        `${area} Business District`,
        `${area} Industrial Area`,
        `${area} Retail Park`,
        `${area} Business Park`
      ],
      response_times: {
        emergency: "1-2 hours",
        standard: "Same day",
        planned: "Scheduled"
      }
    },
    key_industries: [
      "Manufacturing",
      "Retail",
      "Technology",
      "Healthcare",
      "Education",
      "Professional Services"
    ],
    local_regulations: [
      "Local Authority Requirements",
      "Building Control Regulations",
      "Compliance Requirements",
      "Environmental Regulations"
    ],
    emergency_services: {
      fire_station_proximity: "Multiple stations within 5 miles",
      emergency_support: "24/7 coverage",
      backup_services: "Available on demand"
    }
  }))
};

// Generate area content data
const areaContentData = {
  areas: areas.reduce((acc, area) => {
    const areaId = area.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    acc[areaId] = {
      title: `Fire Safety Services in ${area} | Comply Direct UK`,
      description: `Expert fire protection and safety training in ${area}. Same-day service for fire alarms, risk assessments, emergency lighting, and fire doors. BS 5839 compliant.`,
      content: {
        intro: `Comply Direct UK is ${area}'s trusted provider of fire protection and safety training services.`,
        local_expertise: `We have deep knowledge of ${area}'s building regulations and fire safety standards.`,
        services_highlight: `We provide same-day service for all fire protection needs across ${area}. We serve businesses across all ${area} postcodes with our comprehensive range of fire safety solutions.`,
        training_services: `Our ${area} training center offers easy access to all our safety certification courses. We offer flexible scheduling for Fire Marshal training, First Aid courses, and specialized Forestry First Aid training.`,
        compliance: `We ensure your ${area} business meets all relevant fire safety legislation through regular maintenance, testing, and comprehensive fire risk assessments. Our detailed reports ensure you have all the documentation needed for compliance.`,
        testimonials: [
          {
            quote: `Comply Direct UK's fire safety services have been invaluable for our ${area} business.`,
            author: "Robert Brown, Site Supervisor"
          },
          {
            quote: "Their emergency lighting service was prompt and professional.",
            author: "David Smith, Office Manager"
          }
        ]
      }
    };
    return acc;
  }, {})
};

// Write the files
fs.writeFileSync(
  path.join(__dirname, 'data/locations.json'),
  JSON.stringify(locationsData, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, 'data/area-content.json'),
  JSON.stringify(areaContentData, null, 2)
);

console.log('Generated new area data files successfully!'); 