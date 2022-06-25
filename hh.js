const puppeteer = require('puppeteer');
/// Enter your email and password here
const yourEmail = ('');
const yourPassword = ('');
const URL_TEST = 'https://hh.ru/account/login?backurl=%2F%3FhhtmFrom%3Dmain&hhtmFrom=main';

async function hh() {
		const browser = await puppeteer.launch({headless: false, slowMo: 100});
		let page = await browser.newPage();
		await page.goto(URL_TEST);
		
		const emailInput = await page.$('.bloko-form-item');
		await emailInput.type(yourEmail);
		
		const enter = await page.$('div.account-login-actions > button.bloko-link.bloko-link_pseudo');
		await enter.click();
		
		const passwordInput = await page.$('.bloko-input.bloko-input_password');
		await passwordInput.type(yourPassword);
		
		await page.waitForSelector('div.account-login-actions > button.bloko-button');
		const login = await page.$('div.account-login-actions > button.bloko-button');
		await login.click();
		
		await page.waitForSelector('div.supernova-navi-wrapper > div > div > div > div:nth-child(2) > a');
		const yourResume = await page.$('div.supernova-navi-wrapper > div > div > div > div:nth-child(2) > a');
		await yourResume.click();
		
		await page.waitForSelector('div.applicant-resumes-recommendations-buttons > div > a');
		const currentVacancies = await page.$('div.applicant-resumes-recommendations-buttons > div > a');
		await currentVacancies.click();
		
		await page.waitForSelector('.bloko-button.bloko-button_kind-primary.bloko-button_scale-small[href]');
		const vacancy = await page.$('.bloko-button.bloko-button_kind-primary.bloko-button_scale-small[href]');
		await vacancy.click();
		await browser.close();
}		
hh();
