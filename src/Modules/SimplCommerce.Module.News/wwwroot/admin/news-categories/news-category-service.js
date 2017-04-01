﻿/*global angular*/
(function () {
    angular
        .module('simplAdmin.news')
        .factory('newsCategoryService', newsCategoryService);

    /* @ngInject */
    function newsCategoryService($http) {
        var service = {
            getNewsCategory: getNewsCategory,
            createNewsCategory: createNewsCategory,
            editNewsCategory: editNewsCategory,
            deleteNewsCategory: deleteNewsCategory,
            getNewsCategorys: getNewsCategorys
        };
        return service;

        function getNewsCategory(id) {
            return $http.get('api/news-categories/' + id);
        }

        function getNewsCategorys() {
            return $http.get('api/news-categories');
        }

        function createNewsCategory(newsCategory) {
            return $http.post('api/news-categories', newsCategory);
        }

        function editNewsCategory(newsCategory) {
            return $http.put('api/news-categories/' + newsCategory.id, newsCategory);
        }

        function deleteNewsCategory(newsCategory) {
            return $http.delete('api/news-categories/' + newsCategory.id, null);
        }
    }
})();