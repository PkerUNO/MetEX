import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getNavBar() {
		return element(by.css('nav.navbar'));
	}

	getNavBarLinks() {
		return this.getNavBar().all(by.tagName('a'));
	}

	getNavBarHomeLink() {
		return this.getNavBarLinks().get(0);
	}

	getNavBarLinesLink() {
		return this.getNavBarLinks().get(1);
	}

	getNavBarPlacesLink() {
		return this.getNavBarLinks().get(2);
	}

	getNavBarGithubLink() {
		return this.getNavBarLinks().get(3);
	}

	getFooter() {
		return element(by.css('footer'));
	}
}
