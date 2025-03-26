import { tweetsData } from "./data.js";

const tweetBtn = document.getElementById("tweet-btn");
const tweetInput = document.getElementById("tweet-input");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
});

// Listening for events on all 3 icons

document.addEventListener("click", function (event) {
  if (event.target.dataset.like) {
    handleClick(event.target.dataset.like);
  }

  if (event.target.dataset.retweet) {
    handleRetweetClick(event.target.dataset.retweet);
  }
});

function handleClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];
  if (!targetTweetObj.isLiked) {
    targetTweetObj.likes++;
  } else {
    targetTweetObj.likes--;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;
  render();
}

function handleRetweetClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--;
  } else {
    targetTweetObj.retweets++;
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
  render();
}

function getFeedHtml() {
  let feedHtml = " ";

  tweetsData.forEach(function (tweet) {
    feedHtml += `<div class="tweet">
    <div class="tweet-inner">
        <img src=${tweet.profilePic} class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply=${tweet.uuid}></i>
                   ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                        <i class="fa-solid fa-heart" data-like=${tweet.uuid}></i>   ${tweet.likes}
                </span>
                <span class="tweet-detail">
                     <i class="fa-solid fa-retweet" data-retweet=${tweet.uuid}></i> ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
    `;
  });

  return feedHtml;
}

function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
}

render();
