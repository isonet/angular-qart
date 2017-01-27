import QArt from 'qartjs';

export default () => {
    'ngInject';

    return {
        replace: true,
        restrict: 'E',
        require: 'ngModel',
        scope: {
            // https://github.com/kciter/qart.js
            optionFilter: '@',
            imageUrl: '@'
        },
        template: '',
        link: ($scope, element, attributes, ngModel) => {
            const createQart = (filter = $scope.optionFilter, imagePath = $scope.imageUrl) => {
                const text = ngModel.$viewValue || '';
                new QArt({
                    value: text,
                    imagePath,
                    filter
                }).make(element[0]);
            };
            createQart();

            $scope.$watchGroup(['imageUrl', 'optionFilter'], (newValues) => {
                createQart(newValues.optionFilter, newValues.imageUrl);
            }, true);

            ngModel.$render = () => {
                createQart();
            }
        }
    }
}
