/*!
 * Copyright 2002 - 2017 Webdetails, a Hitachi Vantara company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * RequireJS configuration file for sparkl
 */

(function() {

    var requirePaths = requireCfg.paths;
    var requireShims = requireCfg.shim;
    var requireConfig = requireCfg.config;
    var requirePackages = requireCfg.packages;

    if (!requireConfig['amd']) {
        requireConfig['amd'] = {};
    }
    if (!requireConfig['amd']['shim']) {
        requireConfig['amd']['shim'] = {};
    }

    var amdShim = requireConfig['amd']['shim'];


    var prefix;
    if (typeof KARMA_RUN !== "undefined") { // unit tests
        prefix = requirePaths['highcharts-cdf/components'] = 'amd-components';

    } else if (typeof CONTEXT_PATH !== "undefined") { // production
        prefix = requirePaths['highcharts-cdf/components'] = CONTEXT_PATH + 'api/repos/highcharts-cdf';

    } else if (typeof FULL_QUALIFIED_URL != "undefined") { // embedded production
        prefix = requirePaths['highcharts-cdf/components'] = FULL_QUALIFIED_URL + 'api/repos/highcharts-cdf';
    }
    console.log('prefix', prefix);
    // map highcharts
    requirePackages.push({
        name: 'highcharts',
        main: 'highcharts'
    });
    requirePaths['highcharts'] = prefix + '/amd-components/highcharts';
    requireShims['highcharts'] = {
        exports: 'highcharts',
    };
    requirePaths['highcharts/modules/exporting'] = prefix + '/amd-components/highcharts/modules/exporting';
    requirePaths['highcharts/modules/offline-exporting'] = prefix + '/amd-components/highcharts/modules/offline-exporting';
    requireShims['highcharts/modules/offline-exporting'] = {
        deps: [
            'highcharts/modules/exporting'
        ]
    };
    //requirePaths['highcharts/modules/variable-pie'] = prefix + '/amd-components/highcharts/modules/variable-pie';
    requirePaths['highcharts-cdf/components/components/HighchartsComponent'] = prefix + '/HighchartsComponent';

    // para importar no CDE
    requirePaths['cde/resources/highcharts'] = prefix + '/amd-components/HighchartsComponent';
    requireShims['cde/resources/highcharts'] = {
        deps: [
            'highcharts/modules/exporting', 'highcharts/modules/offline-exporting', 'highcharts/modules/variable-pie'
        ]
    };

    console.log('requireCfg', requireCfg);

})();