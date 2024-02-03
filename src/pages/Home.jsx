// import OfferCarousel from "../../components/carousel/OfferCarouel";
import { Col, Container, Row } from "react-bootstrap";
import BigPoster from "../components/homepage/BigPoster";
import BoxCarousal from "../components/homepage/BoxCarousal";
import SmallBoxCarousal from "../components/homepage/SmallBoxCarousal";
import TopCarousal from "../components/homepage/TopCarousal";
export default function Home() {
  const topCarousalOffer1 = [
    {
      imageUrl:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1705085055_Poco_Realme.jpg?im=Resize=(1680,320)",
      interval: 2000,
      path:"/Electronics"
    },
    {
      imageUrl:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1705085098_Har_Thaali_Mein_Basmati_Desktop.jpg?im=Resize=(1680,320)",
      interval: 2000,
      path:"/"
    },
    {
      imageUrl:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704987401_Best_offers_on_Men_s_Casual_Wear__Desktop.jpg?im=Resize=(1680,320)",
      interval: 2000,
      path:"/Fashion/MensFashion"
    },
  ];
  const topCarousalOffer2 = [
    {
      imageUrl:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1705073210_Mumbai.jpg?im=Resize=(1680,320)",
      interval: 2000,
      path:"/"

    },
    {
      imageUrl:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704995009_Web_Mumbai_JioMartHome_01.jpg?im=Resize=(1680,320)",
      interval: 2000,
      path:"/premiumfruits"
    },
    
  ];
  const bigposterimageurl1 = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704813035_Coming_Soon_1680x320.jpg?im=Resize=(1240,150)"
  const bigposterimageurl2 = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1701235639_Global_Store_Desktop.jpg?im=Resize=(1240,150)"
  const offers1 = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704824608_Mens_fashion.jpg?im=Resize=(223,280)",
      title: "mensfashion",
      description: "40%-70%",
      path:"/Fashion/MensFashion"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704824649_Womens_fashion.jpg?im=Resize=(223,280)",
      title: "womensfahion",
      description: "40%-70%",
      path:"/Fashion/WomensFashion"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704824694_Kids_fashion.jpg?im=Resize=(223,280)",
      title: "kidsfashion",
      description: "40%-70%",
      path:"/Fashion/KidsFashion"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703858569_Mom_and_Baby_Care.jpg?im=Resize=(223,280)",
      title: "infants",
      description: "upto50%",
      path:"/Fashion/Infants"
    
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703852514_Smartphones.jpg?im=Resize=(223,280)",
      title: "smartphones",
      description: "upto30%",
      path:"/Electronics/MobilesTablets/Smartphone"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703858374_Laptops_and_tablets.jpg?im=Resize=(223,280)",
      title: "laptopsandtablets",
      description: "upto40%",
      path:"/Electronics"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703858502_Smart_televisions.jpg?im=Resize=(223,280)",
      title: "smarttv",
      description: "upto75%",
      path:"/Electronics/TvSpeaker/Tv"
    },
  ];
  const offers2 = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703858479_Kitchen_appliances.jpg?im=Resize=(223,280)",
      title: "kitchenappliances",
      description: "upto60%",
      path:"/HomeKitchenNeeds/KitchenWare"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703858326_Blankets_Comforters_and_More.jpg?im=Resize=(223,280)",
      title: "blankets",
      description: "from199",
      path:"/HomeKitchenNeeds/Furniture/Mattress"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704824956_Artisanal_Bedsheets.jpg?im=Resize=(223,280)",
      title: "bedsheets",
      description: "upto70%",
      path:"/HomeKitchenNeeds/Furniture/Mattress"

    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703857690_Washing_machines.jpg?im=Resize=(223,280)",
      title: "washingmachine",
      description: "upto45%",
      path:"/Electronics/HomeAppliances/WashingMachine"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704183342_Kitchen_Essentials.jpg?im=Resize=(223,280)",
      title: "kitchenessentials",
      description: "from199",
      path:"/HomeKitchenNeeds/KitchenWare/CookWare"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703858296_Luggage.jpg?im=Resize=(223,280)",
      title: "luggages",
      description: "upto80%",
      path:"/SportsToysLuggages/BagsTravelLuggages/TrolleysAndSuitcases"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704824902_Beauty_and_personal_care.jpg?im=Resize=(223,280)",
      title: "beauty",
      description: "upto50%",
      path:"/Beauty"
    },
  ];
  const mobileaccessoriesboxcarousaloffer = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703920742_2.jpg?im=Resize=(223,280)",
      title: "vivosmartphones",
      description: "upto25%",
      path:"/Electronics/MobilesTablets/Smartphone"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703920773_3.jpg?im=Resize=(223,280)",
      title: "oppo",
      description: "upto30%",
      path:"/Electronics/MobilesTablets/Smartphone"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703920803_4.jpg?im=Resize=(223,280)",
      title: "smartwatches",
      description: "upto80%",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703920819_5.jpg?im=Resize=(223,280)",
      title: "Headphonesandsoundbars",
      description: "upto40%",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703920867_6.jpg?im=Resize=(223,280)",
      title: "mobileaccessories",
      description: "upto60%",
      path:"/Electronics/MobilesTablets/MobileAccessories"
    },
  ];
  const smallboxcarousal1 = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703012390_Redmi_Desktop.jpg?im=Resize=(1680,320)",
      title: "redmi",
      description: "upto30%",
      path:"/Electronics/MobilesTablets/Smartphone"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703012398_JioMotive_Desktop.jpg?im=Resize=(1680,320)",
      title: "jiomotivedriveconnector",
      description: "from4,999",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1704179363_1703012405_Grand_saving_on_sound_bars_and_home_theatre_Desktop.jpg?im=Resize=(1680,320)",
      title: "soundbars",
      description: "upto80%",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703012415_Oneplus.jpg?im=Resize=(1680,320)",
      title: "oneplus",
      description: "upto30%",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703012430_Mobile_accesories_Desktop.jpg?im=Resize=(1680,320)",
      title: "mobileaccessories",
      description: "upto60%",
      path:"/Electronics/MobilesTablets/MobileAccessories"
    },
  ];
  const footwearaccessoriesboxcarousaloffer = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703743461_1.jpg?im=Resize=(223,280)",
      title: "menssportsshoe",
      description: "upto80%",
      path:"/Fashion/MensFashion/MensFootWear"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703743515_2.jpg?im=Resize=(223,280)",
      title: "menscasualshoe",
      description: "from299",
      path:"/Fashion/MensFashion/MensFootWear"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703743536_3.jpg?im=Resize=(223,280)",
      title: "handbags",
      description: "from149",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703743561_4.jpg?im=Resize=(223,280)",
      title: "scandalsslippers",
      description: "from99",
      path:"/Fashion/WomensFashion/FootWear"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703743461_1.jpg?im=Resize=(223,280)",
      title: "menssportsshoe",
      description: "upto80%",
      path:"/Fashion/MensFashion/MensFootWear"
    },{
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703743608_6.jpg?im=Resize=(223,280)",
      title: "watches",
      description: "from199",
      path:"/Fashion/WomensFashion/Watches"
    },
    
  ];
  const apparelsboxcarousaloffer = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703744063_1.jpg?im=Resize=(223,280)",
      title: "sarees",
      description: "40-80%",
      path:"/Fashion/WomensFashion/TraditionalWear"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703744087_2.jpg?im=Resize=(223,280)",
      title: "menswinterwear",
      description: "from249",
      path:"/Fashion/MensFashion/WesternWear"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703744111_3.jpg?im=Resize=(223,280)",
      title: "trackpantssweatwear",
      description: "from149",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703744146_4.jpg?im=Resize=(223,280)",
      title: "womenswinterwear",
      description: "from99",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703744176_5.jpg?im=Resize=(223,280)",
      title: "trackpantstracksuits",
      description: "from249",
      path:"/"
    },{
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703744204_6.jpg?im=Resize=(223,280)",
      title: "kutaandkurtis",
      description: "upto70%",
      path:"/Fashion/WomensFashion/EthinicWear"
    },
    
  ];
  const electronicsboxcarousaloffer = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703847775_1.jpg?im=Resize=(223,280)",
      title: "ac",
      description:"from22500",
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703847814_2.jpg?im=Resize=(223,280)",
      title: "homeappliances",
      description: "from499",
      path:"/Electronics/HomeAppliances/Irons"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703847871_3.jpg?im=Resize=(223,280)",
      title: "refrigerators",
      description: "from7191",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703847919_6.jpg?im=Resize=(223,280)",
      title: "cameroaccessories",
      description: "upto50%",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703847940_5.jpg?im=Resize=(223,280)",
      title: "trimmerhairdryer",
      description: "upto75%",
      path:"/"
    },{
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703847992_4.jpg?im=Resize=(223,280)",
      title: "itaccessories",
      description: "upto40%",
      path:"/"
    },
    
  ];
  const smallboxcarousal2 = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703745652_Mini_Klub_Mothercare_Desktop.jpg?im=Resize=(1680,320)",
      title: "mothercare",
      description: "upto70%",
      path:"/Fashion/Infants"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703745701_Crocs__Inc5__Uspa_More__Desktop.jpg?im=Resize=(1680,320)",
      title: "sportsshoe",
      description: "upto60%",
      path:"/Fashion/MensFashion/MensFootWear"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703745728_Bagpacks_Desktop.jpg?im=Resize=(1680,320)",
      title: "bagpacks",
      description: "upto80%",
      path:"/SportsToysLuggages/BagsTravelLuggages/BagsAndBackpacks"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1703745788_Madame___Popwings__buynewtrend_Desktop.jpg?im=Resize=(1680,320)",
      title: "shirts",
      description: "upto70%",
      path:"/Fashion/MensFashion/WesternWear"
    },
  ];
  const smallboxcarousal3 = [
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694708490_Sansui_Desktop.jpg?im=Resize=(1680,320)",
      title: "ac",
      description: "upto45%",
      path:""
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1695491175_Hot_New_Launches_Desktop.jpg?im=Resize=(1680,320)",
      title: "gamescd",
      description: "upto60%",
      path:"/"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694708556_Bajaj_Desktop.jpg?im=Resize=(1680,320)",
      title: "mixturebajaj",
      description: "upto50%",
      path:"/HomeKitchenNeeds/KitchenWare"
    },
    {
      image:
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694708636_Creaters_paradise_Desktop.jpg?im=Resize=(1680,320)",
      title: "camera",
      description: "upto65%",
      path:"/"
    },
  ];
  return (
    <>
      <Container fluid>
        <Row>
          <TopCarousal topCarousalOffer={topCarousalOffer1} />
        </Row>
        <Row>
          <BigPoster bigposterimageurl={bigposterimageurl1}/>
        </Row>
        <Row>
          <Col>
            <p
              className="mt-4 mx-4"
              style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
            >
              Shop From Top Categories
            </p>
          </Col>
        </Row>
        <Row>
          <BoxCarousal offers={offers1} />
        </Row>
        <Row>
          <BoxCarousal offers={offers2} />
        </Row>
        <Row>
          <TopCarousal topCarousalOffer={topCarousalOffer2} />
        </Row>
        <Row>
          <BigPoster bigposterimageurl={bigposterimageurl2}/>
        </Row>
        <Row>
          <Col>
            <p
              className="mt-4 mx-4"
              style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
            >
              Mobile & Accessories
            </p>
          </Col>
        </Row>
        <Row>
          <BoxCarousal offers={mobileaccessoriesboxcarousaloffer} />
        </Row>
        <Row>
          <SmallBoxCarousal offers={smallboxcarousal1} />
        </Row>
        <Row>
          <Col>
            <p
              className="mt-4 mx-4"
              style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
            >
              Footwear and Accessories
            </p>
          </Col>
        </Row>
        <Row>
          <BoxCarousal offers={footwearaccessoriesboxcarousaloffer} />
        </Row>
        <Row>
          <Col>
            <p
              className="mt-4 mx-4"
              style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
            >
            Apparels 
            </p>
          </Col>
        </Row>
        <Row>
          <BoxCarousal offers={apparelsboxcarousaloffer} />
        </Row>
        <Row>
          <SmallBoxCarousal offers={smallboxcarousal2} />
        </Row>
        <Row>
          <Col>
            <p
              className="mt-4 mx-4"
              style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
            >
            Electronics Hub 
            </p>
          </Col>
        </Row>
        <Row>
          <BoxCarousal offers={electronicsboxcarousaloffer} />
        </Row>
        <Row>
          <SmallBoxCarousal offers={smallboxcarousal3} />
        </Row>
      </Container>
    </>
  );
}
