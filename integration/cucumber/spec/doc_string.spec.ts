import { expect, ifExitCodeIsOtherThan, logOutput } from '@integration/testing-tools';
import { ActivityFinished, ActivityStarts, SceneFinished, SceneStarts, SceneTagged, TestRunnerDetected } from '@serenity-js/core/lib/events';
import { ExecutionSuccessful, FeatureTag, Name } from '@serenity-js/core/lib/model';

import 'mocha';
import { given } from 'mocha-testdata';

import { cucumber, Pick } from '../src';

describe('@serenity-js/cucumber', function() {

    this.timeout(5000);

    given([
        'synchronous',
        'promise',
        'callback',
    ]).
    it('recognises a passing scenario', (stepInterface: string) =>
        cucumber(
            '--require', 'features/support/configure_serenity.ts',
            '--require', `features/step_definitions/${ stepInterface }.steps.ts`,
            '--require', 'node_modules/@serenity-js/cucumber/register.js',
            'features/doc_strings.feature',
        ).
        then(ifExitCodeIsOtherThan(0, logOutput)).
        then(res => {
            expect(res.exitCode).to.equal(0);

            expect(res.events).to.have.lengthOf(6);

            Pick.from(res.events)
                .next(ActivityStarts, event => expect(event.value.name).to.equal(new Name(
                    'Given a step that receives a doc string:\n' +
                    'Dear customer,\n' +
                    '\n' +
                    'Please click this link to reset your password.',
                )))
            ;
        }));
});
