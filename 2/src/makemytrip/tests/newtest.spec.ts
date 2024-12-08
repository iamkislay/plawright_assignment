import {test,Page} from "@playwright/test";
import { NewHome } from "../pages/NewHome";
import { newFlightspage } from "../pages/newFlightpage";
import { ReviewPage } from "../pages/Reviewpage";

test.describe('EaseMyTrip functionality',async ()=>{
    let page: Page;
    let homePage: NewHome;
    let flightPage:newFlightspage;
    let reviewPage: ReviewPage;

    test.beforeAll(async ({browser})=>{
        page = await browser.newPage();
        homePage = new NewHome(page);
        flightPage=new newFlightspage(page);
        reviewPage=new ReviewPage(page);
        await homePage.landingToHomePage(process.env.NEWHOMEPAGE_URL);
    })

    test('Home page verification',async()=>{
        await homePage.homePageVerification()
    })

    test('Click Flights',async ()=> {
        await homePage.clickFlights()
    })

    //Flights page testing
    test("From City filling in Flights",async ()=>{
        await flightPage.fromCityFiling("Chennai");
    })

    test("To City filling in Flights",async ()=>{
        await flightPage.toCityFilling("bangalore");
    })

    test("Mimimum Fare test" , async ()=>{
        await flightPage.findLowestPriceDateInDecemberAndClick();
    })

    
    test("Click search",async ()=>{
        await flightPage.clickOnSearch();
    })

    test(" Cheapest Flight Book Now button",async ()=>{
        await reviewPage.cheapestFlightBookNow();
    })

    test("Handle Signup Pop Up ",async ()=>{
        await reviewPage.handleSignUpPopUp();
    })

    test("Invalid Coupon Apply",async ()=>{
        await reviewPage.invalidPromoCodeVerification();
        await page.pause();
    })

    test("Valid coupons message ",async()=>{
        await reviewPage.validPromoCodeVerfication();
    })

    test("Grand Total verification",async()=>{
        await reviewPage.grandTotalverificaton(flightPage.minimumFare);
    })
    

})
