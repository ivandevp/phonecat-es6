'use strict'

const angular = require('angular')
const controllers = require('./controllers')

const phonecatApp = angular.module('phonecatApp', [])
phonecatApp.controller('PhoneListCtrl', ['$scope', controllers.phoneList])