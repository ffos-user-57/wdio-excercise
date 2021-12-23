describe('Testing Hoxframework Website', () => {
    //poteskoce:
    // youtube accept cookies problem
    // using XPATH
    // Finding ENTER key
    // Working with multiple tabs ?? 


    it('1- Test Videos button functionality', async () => {
        browser.url('https://hoxframework.com.hr/');
        //load the website - test website loading as well while we're here

        //define button var
        const videosbutton = await $("a=Videos");
        await videosbutton.click()
        //click button

        //new page loaded, check for <h1> tags
        const videosScreen = await $("h1");
        //make sure <h1> tag has the text that only "Videos" Screen has
        await expect(videosScreen).toHaveText("Category: VIDEOS");
        //Done.


    });

    it('2- Topic click test', async () => {
        //main page
        browser.url('https://hoxframework.com.hr/');

        //define var and click the button when ready
        const randomlyPickedTopic = await $('a[href="https://hoxframework.com.hr/?p=496"]');
        await randomlyPickedTopic.click();
        //clicked the button, new page loading

        //now lets check if the page loaded right - check title:
        await expect(browser).toHaveTitle("Basic PenTesting Tools in Java | Java programming for RedTeam’s basics | HOXFRAMEWORK – Hox Framework");
        
        //DONE

    });

    it('3- Test Discord invite link', async () => {
         
        //load the main website 
        browser.url('https://hoxframework.com.hr/');

        //find the invite link
        const inviteLink = await $("a=Click Here to join");
        await inviteLink.click();
        //click the link

        //Problem here is its gonna start loading discord
        //but we extracted stuff


        await expect(browser).toHaveTitle("HoxFramework Information Share center");

    });

    it('4- Search bar test', async () => {
        //main page
        browser.url('https://hoxframework.com.hr/');

        //locate search button
        const searchButton = await $("button#search-icon");
        await searchButton.click();
        //click it - search thing opens
        
        //define input box - class search-field
        const inputBox = await $(".search-field");
        await inputBox.setValue("metasploit");
        //input query that will be found

        //press enter
        browser.keys("\uE007"); 

        //make sure it loaded
        const queryResult = await $('h1');
        //pick up that h1 and check if we have h1 with this result
        await expect(queryResult).toHaveText('2 search results for "metasploit"');
        //ez

    });
   
    it('5- Second page button', async () => {

        //navigate to main page
        browser.url('https://hoxframework.com.hr/');

        const secondPageButton = await $('a.page-numbers=2');
        //click it
        await secondPageButton.click();
        

        const postLink = await $("a=Reverse engineering tool by the NSA: GHIDRA – Installation and rev. eng. example – HOXFRAMEWORK");
        await postLink.click();


        await expect(browser).toHaveTitle("Reverse engineering tool by the NSA: GHIDRA – Installation and rev. eng. example – HOXFRAMEWORK – Hox Framework");

    });

})