# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-rc.42](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.41...v3.0.0-rc.42) (2023-02-12)


### Bug Fixes

* **core:** event TestRunFinished now incidates the Outcome of the test suite ([a941056](https://github.com/serenity-js/serenity-js/commit/a9410566891e543101b935a80db9c7daea0c9944)), closes [#1495](https://github.com/serenity-js/serenity-js/issues/1495)
* **playwright-test:** default to using file name as feature name when describe blocks are absent ([1295b04](https://github.com/serenity-js/serenity-js/commit/1295b04adcd12a9d7eaef795e1080bb1c5a9056d)), closes [#1495](https://github.com/serenity-js/serenity-js/issues/1495)





# [3.0.0-rc.41](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.40...v3.0.0-rc.41) (2023-02-07)


### Bug Fixes

* **core:** easier configuration and automatic colour support detection for AnsiDiffFormatter ([637ed44](https://github.com/serenity-js/serenity-js/commit/637ed44ffb16484544ade975bcbc4c3929ffe8f9)), closes [#1486](https://github.com/serenity-js/serenity-js/issues/1486)
* **playwright:** upgraded Playwright to 1.30.0 ([305a2c2](https://github.com/serenity-js/serenity-js/commit/305a2c258c06aa55685f99237cf3d3ce3c590122))


### Features

* **assertions:** diffs included in RuntimeErrors are now colour-coded ([f88efb4](https://github.com/serenity-js/serenity-js/commit/f88efb48180924351e8f7b25c44f3560b0e01b0d)), closes [#1486](https://github.com/serenity-js/serenity-js/issues/1486)
* **core:** overridable abilities ([03966cc](https://github.com/serenity-js/serenity-js/commit/03966ccae40d102b7dbca1125beb90ceda8fbc50))





# [3.0.0-rc.40](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.39...v3.0.0-rc.40) (2023-01-06)


### Bug Fixes

* **playwright-test:** corrected invalid import path ([2c46662](https://github.com/serenity-js/serenity-js/commit/2c46662ba37cb43d0a487c265c087114d8dda518))





# [3.0.0-rc.39](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.38...v3.0.0-rc.39) (2023-01-05)


### Bug Fixes

* **core:** simplified AsyncOperation events ([ac1a88f](https://github.com/serenity-js/serenity-js/commit/ac1a88f95560b5f163ac3f2302f4274f4bf99455))
* **core:** simplified internal AsyncOperation events to separate service name from task description ([0162d28](https://github.com/serenity-js/serenity-js/commit/0162d287c84a4ab716e5e655cfc2b816ba89f394))
* **playwright-test:** better names for screenshots attached to Playwright Test reports ([8c04334](https://github.com/serenity-js/serenity-js/commit/8c043349165a090daf34fb1c363da47003130a53))


### Features

* **playwright-test:** annotate Playwright Test reports with Serenity/JS tags ([5e4a513](https://github.com/serenity-js/serenity-js/commit/5e4a513a5cd33cbff459148f365f90847c63518c))
* **playwright-test:** custom actors can now be defined in playwright config file ([117da34](https://github.com/serenity-js/serenity-js/commit/117da340c0a9bea214b2a3ea8182d803608697dc))
* **playwright-test:** interoperability between Serenity/JS default `actor` and `page` ([91803de](https://github.com/serenity-js/serenity-js/commit/91803de95c5bd1a8a475e5948e15cc49689a058c))
* **playwright-test:** support for Photographer and automated screenshots upon activity failure ([c5527ca](https://github.com/serenity-js/serenity-js/commit/c5527caee65cb89014ea9cb28b949cf45d7463a3))





# [3.0.0-rc.38](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.37...v3.0.0-rc.38) (2022-12-28)


### Bug Fixes

* **playwright:** introduced an explicit dependency on Playwright ([2136132](https://github.com/serenity-js/serenity-js/commit/2136132a95bfb4181c4854291cfeeacb876b9cfb))





# [3.0.0-rc.37](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.36...v3.0.0-rc.37) (2022-12-18)


### Features

* **playwright:** support for Playwright 1.29.0 ([3dd0635](https://github.com/serenity-js/serenity-js/commit/3dd0635d66df2571fb6d8d3e43d3feed71462da9))





# [3.0.0-rc.36](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.35...v3.0.0-rc.36) (2022-11-28)

**Note:** Version bump only for package @serenity-js/playwright-test





# [3.0.0-rc.35](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.34...v3.0.0-rc.35) (2022-11-25)


### Bug Fixes

* **playwright:** upgraded to Playwright 1.28.1 ([e9c4c1c](https://github.com/serenity-js/serenity-js/commit/e9c4c1c5c4467423c8254baeab0d0603d90c0d96))





# [3.0.0-rc.34](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.33...v3.0.0-rc.34) (2022-11-21)

**Note:** Version bump only for package @serenity-js/playwright-test





# [3.0.0-rc.33](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.32...v3.0.0-rc.33) (2022-11-07)


### Bug Fixes

* **playwright:** upgraded Playwright to 1.27.1 ([1345644](https://github.com/serenity-js/serenity-js/commit/1345644dc6c0b4f09ca1f9cfe97a793e226e747c))





# [3.0.0-rc.32](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.31...v3.0.0-rc.32) (2022-10-12)

**Note:** Version bump only for package @serenity-js/playwright-test





# [3.0.0-rc.31](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.30...v3.0.0-rc.31) (2022-10-07)


### Bug Fixes

* **playwright:** upgraded Playwright to 1.26.1 ([b056613](https://github.com/serenity-js/serenity-js/commit/b056613b2ab53807ff7af9b91229bde7d46879f3))





# [3.0.0-rc.30](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.29...v3.0.0-rc.30) (2022-10-05)

**Note:** Version bump only for package @serenity-js/playwright-test





# [3.0.0-rc.29](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.28...v3.0.0-rc.29) (2022-10-01)

**Note:** Version bump only for package @serenity-js/playwright-test





# [3.0.0-rc.28](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.27...v3.0.0-rc.28) (2022-09-30)


### Bug Fixes

* **core:** activity is now able to detect invocation location on Node 14 ([41f4776](https://github.com/serenity-js/serenity-js/commit/41f4776736620bc32d474d9b66f69c742f8eca96)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright-test:** bulk-attach all Serenity/JS events to Playwright report ([a5f3d7c](https://github.com/serenity-js/serenity-js/commit/a5f3d7cfb8148cc80275a0736976726432b174f3)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright-test:** wait for Photographer to finish taking screenshots before dismissing actors ([b0c5adb](https://github.com/serenity-js/serenity-js/commit/b0c5adba83fc92624e91c7385b38f0061cf5a6ed)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright:** corrected not(isPresent()) for PlaywrightPageElement ([0693b2f](https://github.com/serenity-js/serenity-js/commit/0693b2f2666a8de327c990c72ecf42fc3d7da498)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright:** upgraded Playwright to 1.26.0 ([a13ab3c](https://github.com/serenity-js/serenity-js/commit/a13ab3c54b37a5017beadf1db2b2cd2e747d8ab4))


### Features

* **console-reporter:** improved support for tests executed in parallel ([01264ce](https://github.com/serenity-js/serenity-js/commit/01264ce6110a3199265468f633eee5623fabe008)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **core:** serenity/JS stage crew members can now be configured using `string` ([786cdad](https://github.com/serenity-js/serenity-js/commit/786cdadcda8e031e06b8bee9698a87a7af00d90c)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240) [#594](https://github.com/serenity-js/serenity-js/issues/594)
* **playwright-test:** first draft of the Serenity/JS Playwright Test reporter ([b9e3d89](https://github.com/serenity-js/serenity-js/commit/b9e3d89752c07ef0fd54ad748c31fd7207665c3a)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright-test:** improved Playwright Test reports ([6c6b537](https://github.com/serenity-js/serenity-js/commit/6c6b5379dfc324a4fb75d758daa7782109f1c5ab)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright-test:** support Screenplay Pattern-style scenarios ([c425c54](https://github.com/serenity-js/serenity-js/commit/c425c548034de1b8db60e83671abcb77f9b246e5)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
