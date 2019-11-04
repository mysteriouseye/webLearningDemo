// import "babel-polyfill"

const websites = ['codecasts', "laravist"];

const info = websites.map(website => `${website} is cool!`);

for(const website of websites){
    console.log(website);
}

// Array.from([1, 2, 3]); //有部分es6标准需要polyfill来转换 可以使用babel-polyfill也可以使用polyfill.io