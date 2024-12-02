import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ArrowForwardIos } from '@mui/icons-material';
import { TbAirConditioning, TbCooker } from 'react-icons/tb';
import {
	GasMeter as GasMeterIcon,
	WifiOutlined as WifiOutlinedIcon,
	Checkroom as CheckroomIcon,
	Kitchen as KitchenIcon,
	Microwave as MicrowaveIcon,
	Blender as BlenderIcon,
	Iron as IronIcon,
	LocalLaundryService as LocalLaundryServiceIcon,
	Weekend as WeekendIcon,
	CoffeeMaker as CoffeeMakerIcon,
	BreakfastDining as BreakfastDiningIcon,
	WineBar as WineBarIcon,
	LocalGroceryStore as LocalGroceryStoreIcon,
	Bathtub as BathtubIcon,
	Shower as ShowerIcon,
	FireExtinguisher as FireExtinguisherIcon,
	MedicalServices as MedicalServicesIcon,
	Pool as PoolIcon,
	OutdoorGrill as OutdoorGrillIcon,
	CameraOutdoor as CameraOutdoorIcon,
	AirlineSeatIndividualSuite as AirlineSeatIndividualSuiteIcon,
	Fence as FenceIcon,
	WheelchairPickup as WheelchairPickupIcon,
	Elevator as ElevatorIcon,
	FitnessCenter as FitnessCenterIcon,
	Fireplace as FireplaceIcon,
	HotTub as HotTubIcon,
	SportsTennis as SportsTennisIcon,
	BeachAccess as BeachAccessIcon,
	SolarPower as SolarPowerIcon,
	Villa as VillaIcon,
	RoomService as RoomServiceIcon,
	GolfCourse as GolfCourseIcon,
	TimeToLeave as TimeToLeaveIcon,
	Water as WaterIcon,
} from '@mui/icons-material';
import { FaToilet, FaPumpSoap } from 'react-icons/fa';
import {
	GiCookingPot,
	GiBallPyramid,
	GiLightningHelix,
	GiSecurityGate,
} from 'react-icons/gi';
import { ImTv } from 'react-icons/im';
import { SiCinema4D } from 'react-icons/si';
import { FaHelicopter } from 'react-icons/fa';
import { PiFan } from 'react-icons/pi';

interface AmenitiesProps {
	amenities: string[];
}
const amenitiesIcons: Record<string, React.ElementType> = {
	// Basic Amenities
	'Air Conditioning': TbAirConditioning,
	'Water Heater': GasMeterIcon,
	'Wi-Fi': WifiOutlinedIcon,
	Television: ImTv as React.ElementType,
	Sofa: WeekendIcon,
	'Wardrobe Storage': CheckroomIcon,
	'Comfortable Bed': AirlineSeatIndividualSuiteIcon,
	Fan: PiFan,
	Fenced: FenceIcon,
	'Compound Gen': GiLightningHelix,

	// Kitchen Appliances
	Refrigerator: KitchenIcon,
	'Microwave Oven': MicrowaveIcon,
	'Gas Cooker': TbCooker,
	Blender: BlenderIcon,
	'Coffee Maker': CoffeeMakerIcon,
	Dishwasher: FaPumpSoap,
	Toaster: BreakfastDiningIcon,
	'Cookware Set': GiCookingPot,
	'Pantry & Storage': LocalGroceryStoreIcon,

	// Bathroom Amenities
	Bathtub: BathtubIcon,
	Shower: ShowerIcon,
	Toilet: FaToilet,

	// Safety Equipment
	'Fire Extinguisher': FireExtinguisherIcon,
	'First Aid Kit': MedicalServicesIcon,
	Concierge: RoomServiceIcon,
	'24/7 Security': GiSecurityGate,

	// Outdoor Amenities
	'Swimming Pool': PoolIcon,
	'BBQ Grill': OutdoorGrillIcon,
	'Outdoor Surveillance': CameraOutdoorIcon,
	'Solar Power': SolarPowerIcon,

	// Cleaning Equipment
	'Washing Machine': LocalLaundryServiceIcon,
	'Ironing Equipment': IronIcon,

	// Accessibility Features
	'Wheelchair Accessible': WheelchairPickupIcon,
	Elevator: ElevatorIcon,
	Helipad: FaHelicopter,
	'Parking Space': TimeToLeaveIcon,

	// Entertainment & Specialized Features
	Fireplace: FireplaceIcon,
	'Fitness Gym': FitnessCenterIcon,
	Jacuzzi: HotTubIcon,
	'Wine Cellar': WineBarIcon,
	'Pool Table': GiBallPyramid,
	'Home Theater': SiCinema4D,
	'Tennis Court': SportsTennisIcon,
	'Private Beach Access': BeachAccessIcon,
	'Rooftop Terrace': VillaIcon,
	'Golf Course': GolfCourseIcon,
	'Indoor Pool': WaterIcon,
};

const PropertyAmenities: React.FC<AmenitiesProps> = ({ amenities }) => {
	const [visibleItems, setVisibleItems] = useState<number>(5);

	const showMoreItems = () => setVisibleItems((prev) => prev + 5);

	const groupedAmenities: Record<string, string[]> = {
		'Basic Amenities': [],
		Kitchen: [],
		Bathroom: [],
		'Safety and Security': [],
		'Outdoor Features': [],
		'Cleaning & Laundry': [],
		'Accessibility Features': [],
		'Entertainment & Specialized Features': [],
	};

	amenities.forEach((amenity) => {
		if (amenitiesIcons[amenity]) {
			if (
				[
					'Air Conditioning',
					'Water Heater',
					'Wi-Fi',
					'Fan',
					'Television',
					'Sofa',
					'Fenced',
					'Wardrobe Storage',
					'Comfortable Bed',
					'Compound Gen',
				].includes(amenity)
			) {
				groupedAmenities['Basic Amenities'].push(amenity);
			} else if (
				[
					'Refrigerator',
					'Microwave Oven',
					'Gas Cooker',
					'Blender',
					'Coffee Maker',
					'Dishwasher',
					'Toaster',
					'Cookware Set',
					'Pantry & Storage',
					'Concierge',
				].includes(amenity)
			) {
				groupedAmenities['Kitchen'].push(amenity);
			} else if (['Bathtub', 'Shower', 'Toilet'].includes(amenity)) {
				groupedAmenities['Bathroom'].push(amenity);
			} else if (['Fire Extinguisher', 'First Aid Kit'].includes(amenity)) {
				groupedAmenities['Safety and Security'].push(amenity);
			} else if (
				[
					'Swimming Pool',
					'Solar Power',
					'BBQ Grill',
					'Outdoor Surveillance',
					'24/7 Security',
				].includes(amenity)
			) {
				groupedAmenities['Outdoor Features'].push(amenity);
			} else if (['Washing Machine', 'Ironing Equipment'].includes(amenity)) {
				groupedAmenities['Cleaning & Laundry'].push(amenity);
			} else if (
				[
					'Wheelchair Accessible',
					'Elevator',
					'Parking Space',
					'Helipad',
				].includes(amenity)
			) {
				groupedAmenities['Accessibility Features'].push(amenity);
			} else if (
				[
					'Fireplace',
					'Fitness Gym',
					'Jacuzzi',
					'Private Beach Access',
					'Wine Cellar',
					'Pool Table',
					'Home Theater',
					'Golf Course',
					'Concierge',
					'Tennis Court',
					'Rooftop Terrace',
					'Indoor Pool',
				].includes(amenity)
			) {
				groupedAmenities['Entertainment & Specialized Features'].push(amenity);
			}
		}
	});

	return (
		<Disclosure>
			{({ open }) => (
				<div>
					{' '}
					{/* Wrap everything in a valid element like a <div> */}
					<Disclosure.Button className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-btn hover:cursor-pointer hover:border-b-2 border-btn'>
						<span className='text-base font-semibold text-gray-900'>
							Amenities
						</span>
						<ArrowForwardIos
							className={`w-5 h-5 text-btn transition-transform duration-300 ${
								open ? 'rotate-90' : ''
							}`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className='accordion-panel px-6 py-4 border-x bg-gray-50 border-b border-btn text-gray-700 text-base'>
						{Object.keys(groupedAmenities).map((category) => {
							const items = groupedAmenities[category];
							return items.length > 0 ? (
								<div key={category} className='mb-4'>
									<h3 className='font-bold text-base text-gray-800 mb-2'>
										{category}
									</h3>
									<ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
										{items.slice(0, visibleItems).map((amenity, index) => {
											const Icon = amenitiesIcons[amenity];
											return (
												<li key={index} className='flex items-center'>
													{Icon && (
														<Icon className='mr-2 h-5 w-5 text-gray-600' />
													)}
													{amenity}
												</li>
											);
										})}
									</ul>
								</div>
							) : null;
						})}
						{visibleItems < amenities.length && (
							<button
								className='text-sm text-btn font-semibold hover:underline mt-2'
								onClick={showMoreItems}>
								Show More
							</button>
						)}
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};

export default PropertyAmenities;
