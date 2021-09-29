const eng = {
	tk_home: 'Home',
	tk_products: 'Products',
	tk_infomation: 'Information',
	tk_about_us: 'About Us',
	tk_about_us_text:
		'The leader in news and information on cryptocurrency, digital assets and the future of money, Duniakripto is a media outlet that strives for the highest journalistic standards and abides by a strict set of editorial policies. Duniakripto is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups.',
	tk_links: 'Links',
	tk_use_terms: 'Use Terms',
	tk_privacy: 'Privacy',
	tk_be_distributor: 'Be Distributor',
	tk_copiraite: ' 2021 All Rights Reserved by',
	tk_how_it_works: 'How does it work?',
	tk_phone: 'Phone: ',
	tk_email: 'Email:',
	tk_address: 'Address:',
	tk_contacts: 'Contacts',
	tk_awg_examples: 'AWG Examples',
	tk_see_more: 'See More...',
	tk_know_more: 'Know More...',
	tk_use_cases: 'Use Cases',
	tk_price: 'Price:',
	tk_performance: 'Performance:',
	tk_filters: 'Filters',
	tk_specification: 'Specification',
	tk_features: 'Features',
	tk_description: 'Description',
	tk_power: 'Power',
	tk_filtreation: 'Filtreation',
	tk_size_weight: 'Size and Weight',
	tk_storage_capacity: 'Storage Capacity',
	tk_economy_15y: 'Cost-Efficient'
};

const ind = {
	tk_home: 'Beranda',
	tk_products: 'Produk',
	tk_infomation: 'Informasi',
	tk_about_us: 'About Us',
	tk_about_us_text:
		'The leader in news and information on cryptocurrency, digital assets and the future of money, Duniakripto is a media outlet that strives for the highest journalistic standards and abides by a strict set of editorial policies. Duniakripto is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups.',
	tk_links: 'Links',
	tk_use_terms: 'Use Terms',
	tk_privacy: 'Privacy',
	tk_be_distributor: 'Be Distributor',
	tk_copiraite: ' 2021 All Rights Reserved by',
	tk_contacts: 'Contacts',
	tk_phone: 'Phone:: ',
	tk_email: 'Email:',
	tk_address: 'Address:',
	tk_how_it_works: 'Bagaimana cara kerjanya?',
	tk_awg_examples: 'AWG Contoh',
	tk_see_more: 'See More...',
	tk_know_more: 'Know More...',
	tk_use_cases: 'Use Cases',
	tk_price: 'Price:',
	tk_filters: 'Filters',
	tk_performance: 'Performance:',
	tk_specification: 'Specification',
	tk_features: 'Features',
	tk_description: 'Description',
	tk_power: 'Power',
	tk_filtreation: 'Filtreation',
	tk_size_weight: 'Size and Weight',
	tk_storage_capacity: 'Storage Capacity',
	tk_economy_15y: 'Cost-Efficient'
};

const dictionary = { ind, eng };

const translate = (lng, key) => dictionary[lng][key];

export { translate };
