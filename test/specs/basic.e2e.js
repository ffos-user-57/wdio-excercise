describe('Open Shoutem Website - Pricing', () => {
    it('Proper h1 is displayed', async () => {
        browser.url('https://shoutem.com/pricing/');
        const naslov = await $('h1');
        await expect(naslov).toHaveText('There are more ways to create apps with Shoutem');
        //just run with npm run-script wdio run wdio.conf.js which is in the main folder
        //ofc npm install before it
    
    });
   
    it('Clicked the button and proper h1 is displayed', async () => {
        browser.url('https://shoutem.com/apps/social-network/');
        const elem = await $('a=Build now');
        elem.click();
        const chooseNaslov = await $("h1");
        await expect(chooseNaslov).toHaveText('Choose an app template');
        
    
    });

})