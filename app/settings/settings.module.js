angular.module('ushahidi.settings', [])
.directive('importerCsv', require('./data-import/data-import.directive.js'))
.directive('mapperCsv', require('./data-import/data-mapper.directive.js'))
.directive('configureCsv', require('./data-import/data-configure.directive.js'))

.directive('surveyEditor', require('./surveys/survey-editor.directive.js'))
.directive('surveyTaskCreate', require('./surveys/task-create.directive.js'))
.directive('surveyAttributeCreate', require('./surveys/attribute-create.directive.js'))
.directive('surveyAttributeEditor', require('./surveys/attribute-editor.directive.js'))

.directive('settingsList', require('./settings-list.directive.js'))
.directive('settingsMap', require('./site/map.directive.js'))
.directive('settingsEditor', require('./site/editor.directive.js'))

.directive('filterUsers', require('./users/filter-users.directive.js'))

.directive('customRoles', require('./roles/roles.directive.js'))
.directive('customRolesEditor', require('./roles/editor.directive.js'))

.config(require('./settings.routes.js'));
