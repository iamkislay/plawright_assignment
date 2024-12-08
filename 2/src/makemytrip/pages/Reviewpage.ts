import { expect, Page } from "@playwright/test";
import { NewLocator } from "../locators/newlocators";
import exp from "constants";

export class ReviewPage{
    
    readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }

    async cheapestFlightBookNow(){
        await this.page.waitForTimeout(3000)
        await this.page.locator(NewLocator.cheapSortLocator).click();
        await this.page.waitForTimeout(4000);
        const recommender = await this.page.locator(NewLocator.recommenderSwitcher);
        const recommenderElement = await recommender.getAttribute('aria-checked');
        if(recommenderElement==='false'){
            await  recommender.click();
        }
        await this.page.waitForTimeout(5000);
        await this.page.locator(NewLocator.bookFlightButton).hover();
        await this.page.locator(NewLocator.bookFlightButton).click();
        await this.page.waitForTimeout(5000);
    } 

    async handleSignUpPopUp(){
        const mainLogin= await this.page.locator(NewLocator.signUpPopUp);
        const getStyleAttribute= await mainLogin.getAttribute('style');
        await this.page.waitForTimeout(2000);
        if(getStyleAttribute && getStyleAttribute.includes('display: none')){
            console.log("Sign-up pop not visible");
        }
        else{
            await mainLogin.locator(NewLocator.crossButtonlocator).click();
            await this.page.waitForTimeout(3000);
        }
    }
    
    async invalidPromoCodeVerification(){
        const inputcoupon = this.page.locator(NewLocator.inputCouponCode);
        inputcoupon.fill("JEFJ747");
        await this.page.waitForTimeout(3000);
        await this.page.locator(NewLocator.couponApplyButton).click();
        await this.page.waitForTimeout(2000);
        const couponMsg =await this.page.locator(NewLocator.invalidCouponCode).innerText();
        expect(couponMsg).toBe("Invalid Coupon");

    }

    async  validPromoCodeVerfication(){
        const allCoupons = this.page.locator(NewLocator.offerAndCouponsLocator);
        await allCoupons.locator('xpath=(./*)[1]').click();
        await this.page.waitForTimeout(3000);
        //await this.handleSignUpPopUp();
        const message = await this.page.locator(NewLocator.validCouponsMessage).innerText();
        expect(message).toContain("Congratulations")

    }

    async grandTotalverificaton(calendarPrice:number){
        const priceString= this.page.locator(NewLocator.totalPriceLocator).innerText();
        const price =  (await priceString).replace(/,/g,'');
        expect(parseFloat(price)).toBeGreaterThanOrEqual(calendarPrice);
        console.log(calendarPrice+" "+price);
    }
}