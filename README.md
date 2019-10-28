# LazyLoader
LazyLoading script to add to any website for improving performance. 

### How it works?
Uses InspectionObserver API to track images and the viewport to load the images in a lazy manner.

### How to use?
1. Add the script to the index of your website
2. Change the `src` tag to `data-src` for the images that you want to lazy load.
3. Reload and track the network logs in the dev-tools of your browser to see the results.

*Note*: Use [web.dev](https://web.dev/) to see the performance of your website/web-app.
