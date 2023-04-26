import { Serenity } from '@serenity-js/core';
import { ModuleLoader, Path } from '@serenity-js/core/lib/io/index.js';
import type { Capabilities } from '@wdio/types';
import type { EventEmitter } from 'events';

import { InitialisesReporters, ProvidesWriteStream } from './reporter/index.js';
import { WebdriverIOConfig } from './WebdriverIOConfig.js';
import { WebdriverIOFrameworkAdapter } from './WebdriverIOFrameworkAdapter.js';

/**
 * @group Test Runner Adapter
 */
export class WebdriverIOFrameworkAdapterFactory {
    constructor(
        private readonly serenity: Serenity,
        private readonly loader: ModuleLoader,
        private readonly cwd: Path,
    ) {
    }

    public init(
        cid: string,
        config: WebdriverIOConfig,
        specs: string[],
        capabilities: Capabilities.RemoteCapability,
        reporter: EventEmitter & ProvidesWriteStream & InitialisesReporters
    ): Promise<WebdriverIOFrameworkAdapter> {
        return new WebdriverIOFrameworkAdapter(
            this.serenity,
            this.loader,
            this.cwd,
            cid,
            config,
            specs,
            capabilities,
            reporter,
        ).init()
    }
}
