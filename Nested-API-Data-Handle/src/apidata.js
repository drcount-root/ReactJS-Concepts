const apidata = [
  {
    id: 1,
    name: "New Delhi",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg",
    categories: {
      places: [
        {
          id: 1,
          name: "India Gate",
          rating: 5,
          entryFee: 300,
          desc: "India Gate is an important site to visit when on your tour to Delhi. India Gate was built in order to commemorate the 82000 soldiers of the Indian Army who lost their lives during the First World War.",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://images.thrillophilia.com/image/upload/s--4tb0dgdp--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/044/497/original/1524478807_shutterstock_233903989.jpg.jpg",
        },
        {
          id: 2,
          name: "Jantar Mantar",
          rating: 4,
          entryFee: 300,
          desc: "Among the five major Jantar Mantar constructed by Maharaja Jai Singh II of Jaipur, the one in which Delhi has an equal reputation as of the Jaipur one.",
          openAt: "9am",
          closeAt: "6pm",
          imageUrl:
            "https://images.thrillophilia.com/image/upload/s--AvyyFbpf--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/044/499/original/1524479760_shutterstock_539091853.jpg.jpg",
        },
      ],
      restaurants: [
        {
          id: 1,
          name: "Domino's Pizza",
          price: 300,
          rating: 5,
          address: "Quick Bites - Pizza, Fast Food Connaught Place",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://b.zmtcdn.com/data/pictures/3/143/7398da37ab73c4c7cb16ac860e577369.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        },
        {
          id: 2,
          name: "Dvar Indian Restaurant",
          price: 300,
          rating: 5,
          address: "Blu 1st Floor Radisson, New Delhi 110075 India",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/19/f5/bc/f9/dvar-indian-restaurant.jpg",
        },
      ],
      hotels: [
        {
          id: 1,
          name: "Vivanta New Delhi",
          price: 4000,
          rating: 4,
          address: "Vivanta New Delhi, Dwarka",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/d184d9763c4a11ea9a760242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,20&output-format=jpg",
        },
        {
          id: 2,
          name: "Eros Hotel New Delhi ,Nehru Place",
          price: 6000,
          rating: 4,
          address: "S2,American Plaza, Nehru Place",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/90574b0a15c511eb9ce40242ac110002.jpeg?&output-quality=75&downsize=520:350&crop=520:350;0,20&output-format=jpg",
        },
      ],
      offices: [
        {
          id: 1,
          name: "Commercial Complex D4",
          price: 6499,
          cabins: 4,
          seats: 20,
          address: "Commercial Complex D4, New Delhi",
          desc: "Located on the fourth floor of a prestigious office block, the centre is just beside the Marriott Hotel.",
          area: "1885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/694/768/694-1-768x480.jpg?1618384791",
        },
        {
          id: 2,
          name: "B Wing Prius Platinum Tower",
          price: 6099,
          cabins: 14,
          seats: 200,
          address: "B Wing Prius Platinum Tower, Saket",
          desc: "Saket District Center is 3 mn sq ft of commercial space located in the heart of South Delhi, the city’s richest catchment.",
          area: "2885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/4230/320/4230-1-320x200.jpg",
        },
      ],
    },
    weather: {
      temp: 28,
      main: "Mist",
      icon: "http://openweathermap.org/img/w/50d.png",
    },
  },
  {
    id: 2,
    name: "Mumbai",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2015/01/23/12/43/gateway-of-india-609076_1280.jpg",
    categories: {
      places: [
        {
          id: 1,
          name: "Marine Drive",
          rating: 5,
          entryFee: 500,
          desc: "Popularly referred to as the Queen’s Necklace, Marine Drive is a 4 km long promenade located in South Bombay. ",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://images.thrillophilia.com/image/upload/s--l-wgGSnK--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/040/939/original/1521614653_places_to_visit_in_Mumbai.jpg.jpg",
        },
        {
          id: 2,
          name: "Haji Ali ",
          rating: 5,
          entryFee: 500,
          desc: "A paramount religious site and one of the best places for sightseeing in Mumbai, Haji Ali is situated 500 yards from the shoreline in the middle of the Arabian Sea that houses the tomb of Muslim Saint Pir Haji Ali Shah Bukhari.",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://images.thrillophilia.com/image/upload/s--PtX4ti6i--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/040/937/original/1602662752_shutterstock_433239013.jpg.jpg",
        },
      ],
      restaurants: [
        {
          id: 1,
          name: "Domino's Pizza",
          price: 300,
          rating: 5,
          address: "Quick Bites - Pizza, Fast Food Connaught Place",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://b.zmtcdn.com/data/pictures/3/143/7398da37ab73c4c7cb16ac860e577369.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        },
      ],
      hotels: [
        {
          id: 1,
          name: "ITC Maratha, A Luxury Collection Hotel",
          price: 4000,
          rating: 4,
          address: "Sahar, Andheri (E) Mumbai 400099 Maharashtra",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/edc70dc48ab111eab45b0242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg",
        },
        {
          id: 2,
          name: "Trident Bandra Kurlal",
          price: 4000,
          rating: 4,
          address: "C 56, G Block, Trident Road, Bandra Kurla Complex",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/dd3715f2727a11eab8a00242ac110004.jpg?&output-quality=75&downsize=520:350&crop=520:350;58,0&output-format=jpg",
        },
      ],
      offices: [
        {
          id: 1,
          name: "Commercial Complex D4",
          price: 6499,
          cabins: 4,
          seats: 20,
          address: "Commercial Complex D4, New Delhi",
          desc: "Located on the fourth floor of a prestigious office block, the centre is just beside the Marriott Hotel.",
          area: "1885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/694/768/694-1-768x480.jpg?1618384791",
        },
        {
          id: 2,
          name: "B Wing Prius Platinum Tower",
          price: 6099,
          cabins: 14,
          seats: 200,
          address: "B Wing Prius Platinum Tower, Saket",
          desc: "Saket District Center is 3 mn sq ft of commercial space located in the heart of South Delhi, the city’s richest catchment.",
          area: "2885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/4230/320/4230-1-320x200.jpg",
        },
      ],
    },
    weather: {
      temp: 29,
      main: "Clear",
      icon: "http://openweathermap.org/img/w/01d.png",
    },
  },
  {
    id: 3,
    name: "Lucknow",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2018/03/30/10/12/architecture-3274968_1280.jpg",
    categories: {
      places: [
        {
          id: 1,
          name: "The Bara Imambara",
          entryFee: 0,
          rating: 5,
          desc: "The Bara Imambara of Lucknow is one of the most famous monuments of the city. It is an important place of worship for the Muslims who come here every year to celebrate the religious festival of Muharram.",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://www.holidify.com/images/cmsuploads/compressed/Baraimambara1_20200417100912_20200417101153.jpg",
        },
      ],
      restaurants: [
        {
          id: 1,
          name: "Sepia - Authentic Lucknowi Cuisine",
          price: 300,
          rating: 5,
          address: "Renaissance Lucknow Hotel, Lucknow 226010 India",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-f/0a/3e/6b/58/sepia-interiors.jpg",
        },
      ],
      hotels: [
        {
          id: 1,
          name: "Vivanta",
          price: 4000,
          rating: 4,
          address: "Vivanta, Dwarka",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/d184d9763c4a11ea9a760242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,20&output-format=jpg",
        },
      ],
      offices: [
        {
          id: 1,
          name: "Commercial Complex D4",
          price: 6499,
          cabins: 4,
          seats: 20,
          address: "Commercial Complex D4, New Delhi",
          desc: "Located on the fourth floor of a prestigious office block, the centre is just beside the Marriott Hotel.",
          area: "1885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/694/768/694-1-768x480.jpg?1618384791",
        },
        {
          id: 2,
          name: "B Wing Prius Platinum Tower",
          price: 6099,
          cabins: 14,
          seats: 200,
          address: "B Wing Prius Platinum Tower, Saket",
          desc: "Saket District Center is 3 mn sq ft of commercial space located in the heart of South Delhi, the city’s richest catchment.",
          area: "2885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/4230/320/4230-1-320x200.jpg",
        },
      ],
    },
    weather: {
      temp: 24,
      main: "Rain",
      icon: "http://openweathermap.org/img/w/10n.png",
    },
  },
  {
    id: 4,
    name: "Goa",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2017/05/30/05/46/goa-2355885_1280.jpg",
    categories: {
      places: [
        {
          id: 1,
          name: "Calangute Beach",
          entryFee: 2000,
          rating: 5,
          desc: "The largest beach in Goa, Calangute Beach is also affectionately known as the “Queen of Beaches”.",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/01/08/22/16/sunset-1129390_1280.jpg",
        },
        {
          id: 2,
          name: "Baga Beach",
          entryFee: 2000,
          rating: 5,
          desc: "Baga Beach is the most famous of all Goa sightseeing places and as a tourist visiting Goa you really haven’t been to Goa if you haven’t been to Baga",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://images.thrillophilia.com/image/upload/s--bxaNNw1---/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/039/872/original/1607412230_shutterstock_1301320006.jpg.jpg",
        },
      ],
      restaurants: [
        {
          id: 1,
          name: "Kava",
          price: 700,
          rating: 5,
          address: "Simvaddo Goa, Anjuna, Bardez 403509 India",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/17/eb/ee/c0/getlstd-property-photo.jpg",
        },
        {
          id: 2,
          name: "Jardin d'Ulysse",
          price: 700,
          rating: 5,
          address:
            "H/1283, Temb Wadda Pernem, Morjim Beach, Morjim 403512 India",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-p/11/d7/73/4e/photo1jpg.jpg",
        },
      ],
      hotels: [
        {
          id: 1,
          name: "Vivanta",
          price: 4000,
          rating: 4,
          address: "Vivanta Goa",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/d184d9763c4a11ea9a760242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,20&output-format=jpg",
        },
      ],
      offices: [
        {
          id: 1,
          name: "Commercial Complex D4",
          price: 6499,
          cabins: 4,
          seats: 20,
          address: "Commercial Complex D4, New Delhi",
          desc: "Located on the fourth floor of a prestigious office block, the centre is just beside the Marriott Hotel.",
          area: "1885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/694/768/694-1-768x480.jpg?1618384791",
        },
        {
          id: 2,
          name: "B Wing Prius Platinum Tower",
          price: 6099,
          cabins: 14,
          seats: 200,
          address: "B Wing Prius Platinum Tower, Saket",
          desc: "Saket District Center is 3 mn sq ft of commercial space located in the heart of South Delhi, the city’s richest catchment.",
          area: "2885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/4230/320/4230-1-320x200.jpg",
        },
      ],
    },
    weather: {
      temp: 29,
      main: "CLOUDY",
      icon: "http://openweathermap.org/img/w/02d.png",
    },
  },
  {
    id: 5,
    name: "Ahmedabad",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2018/12/17/08/02/mahadev-3879920_1280.jpg",
    categories: {
      places: [
        {
          id: 1,
          name: "Swaminarayan Temple",
          entryFee: 0,
          rating: 5,
          desc: "Swaminarayan Temple is one of the most popular religious sites in Ahmedabad. This magnificent Temple is dedicated to Lord Narnarayanan and it is the first temple of the Swaminarayan sect.",
          openAt: "9am",
          closeAt: "5pm",
          imageUrl:
            "https://images.thrillophilia.com/image/upload/s--NaHQKxbb--/c_fill,g_auto,h_450,w_753/dpr_1.0/v1/attractions/images/000/004/910/original/1580985999_31546232517_de3fb13545_b.jpg.jpg",
        },
      ],
      restaurants: [
        {
          id: 1,
          name: "Domino's Pizza",
          price: 300,
          rating: 5,
          address: "Quick Bites - Pizza, Fast Food Connaught Place",
          openAt: "11am",
          closeAt: "11:30pm",
          imageUrl:
            "https://b.zmtcdn.com/data/pictures/3/143/7398da37ab73c4c7cb16ac860e577369.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        },
      ],
      hotels: [
        {
          id: 1,
          name: "Ahmedabad Enclave",
          price: 4000,
          rating: 4,
          address: "Ahmedabad,Enclave Dwarka,Ahmedabad",
          checkIn: "2pm",
          checkOut: "12pm",
          imageUrl:
            "https://r1imghtlak.mmtcdn.com/d184d9763c4a11ea9a760242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,20&output-format=jpg",
        },
      ],
      offices: [
        {
          id: 1,
          name: "Commercial Complex D4",
          price: 6499,
          cabins: 4,
          seats: 20,
          address: "Commercial Complex D4, New Delhi",
          desc: "Located on the fourth floor of a prestigious office block, the centre is just beside the Marriott Hotel.",
          area: "1885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/694/768/694-1-768x480.jpg?1618384791",
        },
        {
          id: 2,
          name: "B Wing Prius Platinum Tower",
          price: 6099,
          cabins: 14,
          seats: 200,
          address: "B Wing Prius Platinum Tower, Saket",
          desc: "Saket District Center is 3 mn sq ft of commercial space located in the heart of South Delhi, the city’s richest catchment.",
          area: "2885 Sq.Ft",
          imageUrl:
            "https://www.easyoffices.com/images/results/global-centre/4230/320/4230-1-320x200.jpg",
        },
      ],
    },
    weather: {
      temp: 32,
      main: "SUNNY",
      icon: "http://openweathermap.org/img/w/01d.png",
    },
  },
];

export default apidata;
