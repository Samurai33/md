# GDD — Game Design Document

## Setting & World Design
Setting: Marola City (neo‑urban São Paulo: Augusta, Downtown, East Side, Highways).

### Location Details
- **Região Augusta**: Entertainment district with nightclubs, bars, restaurants, and illegal activities. Home to the Vanilla Unicorn nightclub, Cassino Royal, and multiple illegal racing spots.
- **Downtown**: Commercial hub with office buildings, shopping centers, banks (Fleeca, Banco do Brasil, Bank of Liberty), police headquarters (PMERJ model), and government buildings.
- **East Side**: Industrial and residential area with factories, warehouses, favelas (Paraisópolis-inspired), and lower-income neighborhoods.
- **Highways**: Major transportation routes including Marginal Tietê and Marginal Pinheiros connecting all city regions.

### Landmarks & Points of Interest
- **MarolaTower**: 60-story skyscraper downtown, housing luxury apartments and business offices
- **Porto Marola**: Major shipping port with smuggling opportunities
- **Favela do Jacaré**: Largest favela area with unique internal economy
- **Autódromo de Interlagos**: Racing track for official and unofficial events
- **Shopping Marola**: Main mall with boutiques and food court
- **Hospital São Lucas**: Main medical center

## Systems

### Economy System
- **Currency**: Marola Dollar (M$)
- **Taxes**: Property (1.5%/week), Vehicle (1%/week), Income (5-15% based on bracket)
- **Maintenance**: Vehicles (M$100-1,500/week based on class), Properties (M$200-5,000/week based on size/location)
- **Banking**: Checking accounts, savings (1.5% interest), loans (5-12% interest), credit cards, ATMs throughout city
- **Stock Market**: Invest in 15+ companies with fluctuating values based on server events

### Jobs & Activities

#### Legal Jobs
- **Emergency Services**: Police (ranks from Rookie to Chief), EMS (EMT to Medical Director), Fire Department
- **Public Services**: Lawyer, Judge, Taxi Driver, Bus Driver, Garbage Collector, Postal Worker
- **Commercial**: Mechanic, Restaurant Worker, Store Clerk, Real Estate Agent, Car Dealer
- **Industrial**: Trucker, Miner, Logger, Fisherman, Factory Worker
- **Professional**: Journalist, Realtor, Private Security, Pilot, DJ, Businessman

#### Criminal Activities
- **Organized Crime**: 5 major factions with territories and specializations
- **Drug Operations**: Growing, processing, packaging, and distribution
- **Robberies**: Convenience stores, banks, jewelry stores, art galleries
- **Black Market**: Weapons trafficking, stolen goods, illegal imports
- **Money Laundering**: Front businesses, cryptocurrency, offshore accounts

### Justice System
- **Law Enforcement**: City Police, Highway Patrol, Federal Police
- **Legal System**: Criminal code with 120+ laws, jail time, fines
- **Court System**: Trials for major crimes, judge and lawyer roles
- **Prison**: Multiple security levels, prison jobs, escape mechanics
- **Rehabilitation**: Community service, reduced sentences for good behavior

### Health System
- **Physical Health**: Hunger, thirst, injuries, diseases
- **Mental Health**: Stress levels affecting skills, addiction system
- **Medical Care**: Hospitals, clinics, insurance system
- **Injuries**: 12 injury types with specific treatments
- **EMS System**: Professional EMTs or player-based medical assistance

### Inventory/Items
- **Personal Inventory**: Weight-based system (max 50kg)
- **Item Categories**: Consumables, Tools, Weapons, Clothing, Collectibles, Materials
- **Item Quality**: 5 tiers affecting durability and effectiveness
- **Crafting System**: 200+ recipes across 8 crafting skills
- **Storage**: Home storage, vehicle trunks, rentable storage units

### Vehicles
- **Classes**: 12 vehicle classes with different handling models
- **Customization**: Visual mods, performance upgrades, liveries
- **Damage System**: Engine, body, tires with realistic repair requirements
- **Fuel System**: Multiple fuel types, varying consumption rates
- **Ownership**: Purchase, rental, financing options

### Properties
- **Residential**: Apartments, houses, mansions, favela homes
- **Commercial**: Stores, offices, warehouses, factories
- **Special Properties**: Nightclubs, restaurants, garages
- **Ownership Models**: Full ownership, rental, shared ownership
- **Property Features**: Furniture customization, storage capacity, security systems

### Events/Radio (MarolaBeat)
- **Radio Stations**: 5 custom stations with unique content
- **Live DJ System**: Player-run radio shows
- **Events System**: Car meets, concerts, fighting tournaments, races
- **Special Events**: Seasonal celebrations, limited-time activities

## UX/Onboarding
- **Character Creation**: Detailed appearance customization with 300+ options
- **Tutorial**: Interactive guided experience through city basics
- **Job Center**: Central location for employment opportunities
- **Discord Integration**: Server status, community events, support tickets
- **First Job Placement**: Guaranteed entry-level position

## Balancing
- **Income Targets**: 
  - Entry Level: M$1,000-2,000/hour
  - Mid-Level: M$2,000-4,000/hour
  - High-Level: M$4,000-8,000/hour
  - Expert/Illegal: M$8,000-15,000/hour with increased risk
- **Economic Sinks**: 
  - Vehicle maintenance and customization
  - Property taxes and upgrades
  - Food and consumables
  - Death penalties and medical bills
  - Luxury items and collectibles
- **Progression Gating**:
  - Skill development: 15 unique skills with 100 levels each
  - Licensing: Driver's, weapons, professional certifications
  - Reputation systems with 10 different factions
  - Time-based job promotions
  - Capital requirements for businesses

## Technical Considerations
- **Server Capacity**: Optimized for 300+ concurrent players
- **Custom Scripts**: 85+ custom systems beyond standard framework
- **Anti-Cheat**: Multi-layered protection with behavioral analysis
- **Performance**: Minimum 30 FPS in dense areas with recommended specs
