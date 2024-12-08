export const NewLocator = {
    homePageFlightlogo: '//a[@class="emt_logo" and @title="easemytrip.com"]',
    homePageEMTMate: '//span[contains(text(),"EMTMate")]',
    homePageEMTDesk :'//span[contains(text(),"EMTDesk")]',
    homePageEMTRoyale: '//span[contains(text(),"EMTRoyale")]',
    homePageEMTPro: '//span[contains(text(),"EMTPro")]',

    flightLocator : '//a[@href="https://www.easemytrip.com/flights.html" and span[text()="Flights"]]',
    flightFromLocator : '//input[@id="a_FromSector_show"]',
    autoSuggestionFromListLocator: '//div[@id="fromautoFill"]//ul[@class="ausuggest"]',
    autoSuggestionToListLocator: '//div[@id="toautoFill"]//ul[@class="ausuggest"]',
    flightToLocator : '//input[@id="a_Editbox13_show"]',
    calendarAllWeeks : 'li[id^="fst_"], li[id^="snd_"], li[id^="trd_"], li[id^="frth_"], li[id^="fiv_"]',

    datePickerLocator:'//div[@id="dvcalendar"]',
    searchLocator: '//div[@id="divSearchFlight"]',
    cheapSortLocator : '//span[@class="cheptxt" and text()="Cheapest"]',
    recommenderSwitcher:'//div[@class="ui-switcher"]',
    bookFlightButton: '//div[@data-infinite-scroll="loadMoreOutBound()" and @class="top_bar_flgt_1"]/*[2]//button[contains(text(), "Book Now")]',

    signUpPopUp : "//div[@id='mainlogin']",
    crossButtonlocator :'//div[@id="lgnBox"]//div[@class="_crosslog" and text()="×"]',
    inputCouponCode : '//input[@placeholder="Enter Coupon Code"]',
    couponApplyButton: '//div[@class="apl" and text()="apply"]',
    invalidCouponCode: '//p[@ng-bind="CouponMsg"]',
    offerAndCouponsLocator :'//div[@class="coupn_scrl"]',
    validCouponsMessage : '//p[@id="easeFareDetails1_promodiv"]',
    grandTotalTextLoactor: '//div[contains(text(), "Recommended")]',
    totalPriceLocator: '//span[@id="spnGrndTotal"]'


}