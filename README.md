# Forex Converter Widget
> A multi currency forex converter widget built with angularjs.

## Installation

Download or clone the widget.

## Usage example

To get a quick view of what the widget can do, navigate to the sample folder and launch the index.html on any browser of your choice.

To use the widget, extract the app.js file in the source folder and place it in your project folder.

To run the widget include the paths to bootstrap 3, the app.js file and angularjs 1 in your html file

```sh
<script type="text/javascript" src="path/to/angularjs/angular.js"></script>
<script type="text/javascript" src="path/to/widget/app.js"></script>
<link rel="stylesheet" type="text/css" href="path/to/bootstrap/bootstrap.min.css">
```

Specify conversionWidget as your module in your html. In this example it is included in the html tag

```sh
<html ng-app="conversionWidget">
```

Specify mainController as your controller in your html. In this example it is included in the body tag

```sh
<body ng-controller="mainController">
```

Include the my-converter directive in your tag of choice

```sh
<div my-converter></div>
```

Voila! Project ready!


## Dependencies
angularjs 1
Bootsrap 3
