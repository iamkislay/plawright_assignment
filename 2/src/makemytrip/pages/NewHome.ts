import { expect, Page } from "@playwright/test";
import { NewLocator } from "../locators/newlocators";
import { waitForDebugger } from "inspector";

export class NewHome {

    readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }
    async landingToHomePage(url ?: string): Promise <void>{ 
        await this.page.goto(url ?? "");
        
    }

    async  homePageVerification(){
        await this.page.waitForTimeout(3000)
        const value_1 = await this.page.locator(NewLocator.homePageFlightlogo).isVisible();
        const value_2 = await this.page.locator(NewLocator.homePageEMTMate).isVisible();
        const value_3 = await this.page.locator(NewLocator.homePageEMTDesk).isVisible();
        const value_4 = await this.page.locator(NewLocator.homePageEMTRoyale).isVisible();
        const value_5 = await this.page.locator(NewLocator.homePageEMTPro).isVisible();
        expect(value_1 && value_2 && value_3 && value_4 && value_5).toBe(true)
    }

    async clickFlights(){
        await this.page.locator(NewLocator.flightLocator).click();
        await this.page.waitForTimeout(2000);

    }

}