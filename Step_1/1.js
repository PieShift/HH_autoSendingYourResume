const puppeteer = require('puppeteer');

const URL_TEST = 'https://hh.ru/';

async function hh() {
	const browser = await puppeteer.launch({headless: false, slowMo: 100});
	await page.goto(URL_TEST);
	
}

hh();