const puppeteer = require('puppeteer');
/// Enter your email and password here
const yourEmail = ('saint.focus.ima@gmail.com');
const yourPassword = ('H833OC-rus');
/// Enter your email and password here
const URL_TEST = 'https://hh.ru/account/login?backurl=%2F%3FhhtmFrom%3Dmain&hhtmFrom=main';

async function hh() {
		const browser = await puppeteer.launch({headless: false, slowMo: 10});
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
		
		await page.waitForSelector('.bloko-link[target = "_blank"]');
		let vacancy = await page.$('.bloko-link[target = "_blank"]');
		await vacancy.click();
		
		const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));
		page = await newPagePromise;
		page.bringToFront();
		
		await page.waitForSelector('.bloko-button.bloko-button_kind-success.bloko-button_scale-large.bloko-button_stretched');
		const vacancyN = await page.$('.bloko-button.bloko-button_kind-success.bloko-button_scale-large.bloko-button_stretched');
		await vacancyN.click();
		
}		
hh()

