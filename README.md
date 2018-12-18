This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Carousel with React Hooks

## Purpose

Practice ["React Hooks"](https://reactjs.org/docs/hooks-overview.html).

## Demo

https://baco16g.github.io/hooks-carousel

## Usage

```zsh
$ npm start # open http://localhost:3000
```

## Stack

### dependencies

* react@^16.7.0-alpha.2
* react-dom@^16.7.0-alpha.2
* styled-components@^4.1.3
* typescript@^3.2.2

### devDependencies

* tslint@^5.11.0
* prettier@^1.15.3

## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
duration | number | 500(ms) | Animation speed to switch the slide
threshold | number | 100(px) | Distance threshold on whether to switch the slide
dotColor | string | #000000 | Theme color of dot navigation
arrowColor | string | #000000 | Theme color of arrow navigation
loop | boolean | true | Whether to repeat the slide or not
auto | boolean | true | Whether to repeat whether to automatically switch the slide or not
interval | number | 2000(ms) | Interval when switching automatically

## Reference material

* [takefumi-yoshii/react-hooks-ogiri](https://github.com/takefumi-yoshii/react-hooks-ogiri)
* [amio/re-carousel](https://github.com/amio/re-carousel)
* [blue-harvest/carousel-react-hooks-example](https://github.com/blue-harvest/carousel-react-hooks-example)

## ToDos

* Replace UI widget with [retoggle](https://github.com/Raathigesh/retoggle).

## Author

baco16g (Yuki kobayashi)
