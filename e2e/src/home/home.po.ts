import { browser, by, element } from 'protractor';

export class HomePage {
	navigateTo() {
		return browser.get('/');
	}

	getHeading() {
		return element(by.tagName('h1'));
	}
}
