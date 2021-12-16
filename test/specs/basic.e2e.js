describe('Open Homework Website - test stuff', () => {
    it('Bad login', async () => {
        browser.url('https://demo.openmrs.org/openmrs/login.htm');

        const usernameinput = await $('input#username');
        await usernameinput.setValue("admino");

        const pwdinput = await $('input#password');
        await pwdinput.setValue("admino");

        const locationpicker = await $("li#Laboratory");
        await locationpicker.click();

        const loginbutton = await $(".btn#loginButton");
        await loginbutton.click();

        const loginalert = await $("div#error-message");
        await expect(loginalert).toHaveText("Invalid username/password. Please try again.");



    });

    it('Good login', async () => {


        browser.url('https://demo.openmrs.org/openmrs/login.htm');

        const usernameinput = await $('input#username');
        await usernameinput.setValue("Admin");

        const pwdinput = await $('input#password');
        await pwdinput.setValue("Admin123");

        const locationpicker = await $("li#Laboratory");
        await locationpicker.click();

        const loginbutton = await $(".btn#loginButton");
        await loginbutton.click();

        const loginalert = await $("h4");
        await expect(loginalert).toHaveText("Logged in as Super User (admin) at Laboratory.");


    });

    it('Logout ', async () => {

        const logoutbtn = await $("a=Logout");
        logoutbtn.click();


        const loggedout = await $("a#cantLogin");
        await expect(loggedout).toHaveText("Can't log in?");


    });

})