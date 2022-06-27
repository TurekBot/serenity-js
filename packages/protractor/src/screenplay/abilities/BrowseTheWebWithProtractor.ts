import { ConfigurationError } from '@serenity-js/core';
import { BrowserCapabilities, BrowseTheWeb, ModalDialog } from '@serenity-js/web';
import * as protractor from 'protractor';

import { ProtractorModalDialog, ProtractorPagesContext } from '../models';
import { promised } from '../promised';

/**
 * @desc
 *  An {@link @serenity-js/core/lib/screenplay~Ability} that enables the {@link Actor}
 *  to interact with web front-ends using [Protractor](http://www.protractortest.org/#/).
 *
 * @example <caption>Using the protractor.browser</caption>
 *  import { actorCalled } from '@serenity-js/core';
 *  import { BrowseTheWebWithProtractor } from '@serenity-js/protractor'
 *  import { By, Navigate, PageElement } from '@serenity-js/web'
 *  import { Ensure, equals } from '@serenity-js/assertions';
 *  import { protractor } from 'protractor';
 *
 *  const HomePage = {
 *      title: PageElement.located(By.css('h1')).describedAs('title')
 *  }
 *
 *  await actorCalled('Wendy')
 *      .whoCan(BrowseTheWebWithProtractor.using(protractor.browser))
 *      .attemptsTo(
 *          Navigate.to(`https://serenity-js.org`),
 *          Ensure.that(Text.of(HomePage.title), equals('Serenity/JS')),
 *      );
 *
 * @extends {@serenity-js/web/lib/screenplay/abilities~BrowseTheWeb}
 *
 * @public
 *
 * @see https://www.protractortest.org/
 * @see {@link @serenity-js/core/lib/screenplay/actor~Actor}
 */
export class BrowseTheWebWithProtractor extends BrowseTheWeb<protractor.ElementFinder> {

    /**
     * @desc
     *  Ability to interact with web front-ends using a given protractor browser instance.
     *
     * @param {protractor~ProtractorBrowser} browser
     * @returns {BrowseTheWebWithProtractor}
     */
    static using(browser: protractor.ProtractorBrowser): BrowseTheWebWithProtractor {
        return new BrowseTheWebWithProtractor(browser);
    }

    /**
     * @param {ProtractorBrowser} browser
     *  An instance of a protractor browser
     */
    constructor(protected browser: protractor.ProtractorBrowser) {
        super(new ProtractorPagesContext(browser));
    }

    async browserCapabilities(): Promise<BrowserCapabilities> {
        const capabilities = await promised(this.browser.getCapabilities());

        return {
            platformName:   capabilities.get('platform'),
            browserName:    capabilities.get('browserName'),
            browserVersion: capabilities.get('version'),
        };
    }

    async modalDialog(): Promise<ModalDialog> {
        return new ProtractorModalDialog(this.browser);
    }

    /**
     * @desc
     *  Returns Protractor configuration parameter at `path`.
     *
     * @example <caption>protractor.conf.js</caption>
     *  exports.config = {
     *    params: {
     *        login: {
     *            username: 'jane@example.org'
     *            password: process.env.PASSWORD
     *        }
     *    }
     *    // ...
     * }
     *
     * @example <caption>Retrieving config param by name</caption>
     *  BrowseTheWeb.as(actor).param('login') // returns object with username and password
     *
     * @example <caption>Retrieving config param by path</caption>
     *  BrowseTheWeb.as(actor).param('login.username') // returns string 'jane@example.org'
     *
     * @param {string} path
     *  Either a name or a dot-delimited path to the param.
     *
     * @returns {T}
     *
     * @throws {@serenity-js/core/lib/errors~ConfigurationError}
     *  Throws a `ConfigurationError` if the parameter is `undefined`
     */
    param<T = any>(path: string): T {
        return path.split('.')
            .reduce((config, segment) => {
                if (! (config && config[segment] !== undefined)) {
                    throw new ConfigurationError(`Protractor param '${ path }' is undefined`);
                }

                return config[segment];
            }, this.browser.params);
    }
}
