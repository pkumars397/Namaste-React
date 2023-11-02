import React from "react";
import ReactDom from "react-dom/client";

/* Planning
      Header
        -Logo
        -Nav items(right side)
        -cart
      Body
        -Search Bar
        - Restaurant list
          -Restaurant card
            -Image
            -Nam
            -Rating
            -Tag
      footer
       -links
       -Copyrights
*/

const Title = () => {
  return (
    <a href="/">
      <img alt="Logo" src="logo.jpg" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// ! JSX must have one parent element.siblings way is wrong.so we need React Fragment for that.

// const test = (
//   <>
//     {" "}
//     <h1>Hello</h1>
//     <h2>Ji</h2>
//   </>
// );
// style={{ color: "blue" }} inline styling in React

// const burgerKing = {
//   name: "Burger King",
//   image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxtqnke0nupbu1i1fmvf",
//   cusines: ["Burger", "American"],
//   rating: "4.2",
// };

const restaurants = [
  {
    info: {
      id: "14552",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Murugeshpalya",
      areaName: "Murugeshpalya",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "14552",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 9500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9500,
      },
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-01 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-murugeshpalya-bangalore-14552",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "349072",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Kundanahalli, Brookefield",
      areaName: "Marathahalli",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "349072",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-01 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-kundanahalli-brookefield-marathahalli-bangalore-349072",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1313",
      name: "Rolls On Wheels",
      cloudinaryImageId: "ae8f2e6bfc382c556f8a8551f044bd71",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "North Indian", "Snacks"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "1313",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 10500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 10500,
      },
      parentId: "784",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-01 05:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rolls-on-wheels-whitefield-bangalore-1313",
      type: "WEBLINK",
    },
  },
];
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // console.log(restaurant);
  // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.info;
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="RestrauntImage"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
// no key<index key<unique key
const Body = () => {
  return (
    <div className="restraunt-List">
      {restaurants.map((resto) => {
        return <RestrauntCard {...resto.info} key={resto.info.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// root.render(test);
