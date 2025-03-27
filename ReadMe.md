## Twitter functionality

## Notes :

1. Read differnce between named import and default import
2. What is CDN? : Remote service, Provides Assets to web app eg: fn styles icons
   Gives us a snippet of code that bring asset into our app

3. CDN JS website search for CDN

4.Data attributes : ❌ use uppercase letters when naming data atributes in html instead of " - "
use camelcase in JS

5.  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
    })[0]; this will save index=0 position data only

6.  What is UUID ?
    36 characters string used for identiy piece of data globally unique
    git repo : https://github.com/uuidjs/uuid#cdn-builds or https://www.npmjs.com/package/uuid/v/7.0.2
    import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
    console.log(uuidv4());
