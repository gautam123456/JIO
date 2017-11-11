
# image-component https://github.com/gautam123456/image-component/tree/master/src/components/Img.js

### Usage Example
```
render() {
  <Img src={path} onError={handleError} />
}
```


###Props

####src
`PropTypes.string.isRequired`

This is path of the image that has to be rendered.

####onError
`PropTypes.func`

Error Handler in case image is not found at specified path or on network

To see the component in action please follow below steps. 

1. Clone this repo
2. Do npm install & npm start
3. Bydefault content will be served at localhost:80, access it using browser.

Steps to test.

1. We can modify any image path in https://github.com/gautam123456/image-component/tree/master/src/components/Main.js so that we are sure that path is incorrect.
2. By default even if image is not found a default image will be served through error handler method.
3. We can comment out call to props.onError method call and default image will not be server in case of error.

Project Structure:
1. There are components at directory https://github.com/gautam123456/image-component/tree/master/src/components
2. Required Image Component is at path https://github.com/gautam123456/image-component/tree/master/src/components/Img.js
3. Data is served through https://github.com/gautam123456/image-component/tree/master/src/components/Main.js
4. Webpack entry point is at https://github.com/gautam123456/image-component/tree/master/src/index.js
