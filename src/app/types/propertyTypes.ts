// Enum definitions for stricter typing
enum YesNo {
    Yes = "yes",
    No = "no",
  }
  
  export enum PropertyType {
    Apartment = "apartment",
    House = "house",
    Condo = "condo",
    Townhouse = "townhouse",
    Studio = "studio",
    Loft = "loft",
    Villa = "villa",
    Cottage = "cottage",
    Bungalow = "bungalow",
    Duplex = "duplex",
    Penthouse = "penthouse",
    Farmhouse = "farmhouse",
    Chalet = "chalet",
    Mansion = "mansion",
    Cabin = "cabin",
    Guesthouse = "guesthouse",
    Houseboat = "houseboat",
    TinyHouse = "tiny house",
    MobileHome = "mobile home",
    SharedRoom = "shared room",
    EntirePlace = "entire place",
    Resort = "resort",
    Ranch = "ranch",
    Castle = "castle",
    BeachHouse = "beach house",
    LakeHouse = "lake house",
    GatedCommunity = "gated community",
    IndustrialLoft = "industrial loft",
    Kiosk = "kiosk",
    Shops = "shops",
    Warehouse = "warehouse"
  }
  
  

  
  // MonthlyPayments interface to encapsulate recurring expenses
  interface MonthlyPayments {
    security: string; 
    garbage: string;
    water: string;
    electricity: string;
    internet: string;
  }
  
  // Policies interface to define rules for the property
  interface Policies {
    pets: YesNo; // yes or no
    smoking: YesNo; // yes or no
    leaseTerm: string; // e.g., "6 months", "1 year"
    guests: YesNo; // yes or no
  }
  
  // Main interface for property data
  export interface PropertyData {
    id: number; // Unique identifier
    name: string; // Property name
    address: string; // Property address
    type: PropertyType; // Property type from defined enum
    images: {
      livingRoom: string[]; // Array of URLs for living room images
      bedroom: string[]; // Array of URLs for bedroom images
      bathroom: string[]; // Array of URLs for bathroom images
      kitchen: string[]; // Array of URLs for kitchen images
      exterior: string[]; // Array of URLs for exterior images
    };
    price: number; // Price of the property
    viewsCount: number; // Number of views the property has received
    beds: number; // Number of bedrooms
    baths: number; // Number of bathrooms
    manager: string; // Property manager's name or contact
    fact?: string; // Optional fun fact or notable information
    features: string[]; // List of key features
    amenities: string[]; // List of amenities
    monthlyPayments: MonthlyPayments; // Monthly payments object
    policies: Policies; // Policies object
  }
  