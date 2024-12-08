import { expect, Page } from "@playwright/test";
import { NewLocator } from "../locators/newlocators";

export class newFlightspage{
    minimumFare=0;
    readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }

    async fromCityFiling(toCity:string): Promise <void>{ 
        
        await this.page.locator('//div[@id="frmcity"]').click()
        const fromCityInput = await this.page.locator(NewLocator.flightFromLocator); 
        const cityName = toCity;
        await fromCityInput.type(cityName, { delay: 100 })
        await this.page.waitForTimeout(1000);

        const suggLocator = await this.page.locator(NewLocator.autoSuggestionFromListLocator);
       // Locate the first item in the list and click it
        await suggLocator.locator('li:first-child').click();
        await this.page.waitForTimeout(3000);
    }
    async toCityFilling(fromCity:string):Promise <void>{

        await this.page.locator('//div[@id="tocity"]').click({force:true})
        const toCityInput = await this.page.locator(NewLocator.flightToLocator); 
        const cityName = fromCity;
        await toCityInput.type(cityName, { delay: 100 })
        await this.page.waitForTimeout(1000);

        const suggLocator = await this.page.locator(NewLocator.autoSuggestionToListLocator);
       // Locate the first item in the list and click it
        await suggLocator.locator('li:first-child').click();
        await this.page.waitForTimeout(5000);
    }
    

    async findLowestPriceDateInDecemberAndClick() {
    // await this.page.locator('//div[@class="month2" and text()="Dec 2024"]').click();
    // await this.page.waitForTimeout(1500);
    // await this.page.locator('//div[@id="dvfarecal"]').click();
        await this.page.waitForTimeout(1500);
        await this.page.waitForSelector(NewLocator.calendarAllWeeks, { state: 'visible' });
        const dateElements = await this.page.locator(NewLocator.calendarAllWeeks);
  
        let minFare = Infinity;
        let minFareDateId : string | null = '';

        const count = await dateElements.count();

        for (let i = 0; i < 32; i++) {
            const dateElement = dateElements.nth(i);
    
            // Get the date from the id of the li element.
            const dateId = await dateElement.getAttribute('id');
            const fareElement = await dateElement.locator('span');
    
            // Extract the fare value (₹ <amount>)
            const fareText = await fareElement.innerText();
            const fareMatch = fareText.match(/₹ (\d+(\.\d+)?)/);  // Match the fare pattern
            //console.log(fareMatch);
    
            if (fareMatch) {
                 const fare = parseFloat(fareMatch[1]);
      
        // If the fare is less than the current minimum, update the minimum fare and date ID
                if (fare < minFare) {
                    minFare = fare;
                    minFareDateId = dateId; 
                }
            }
            
        }      
        this.minimumFare=minFare;
        // 3. After finding the minimum fare date, select that date
        if (minFareDateId) {
            console.log(`Selecting date with minimum fare: ${minFareDateId}`);
            const minFareDateElement = this.page.locator(`//li[@id="${minFareDateId}"]`);
            await minFareDateElement.hover();
            await this.page.waitForTimeout(2500);
            await minFareDateElement.click();  // Click on the date with minimum fare
        } else {
            console.log('No valid fare data found.');
        }
        await this.page.waitForTimeout(5000);

    }

    async clickOnSearch(){
        const searchButton = await this.page.locator(NewLocator.searchLocator);
        //expect(searchButton).toBe(search);
        await searchButton.click(); 

    }

    
}