const input = document.getElementById("searchQuery");
const button = document.getElementById("searchButton");
const resultArea = document.getElementById("searchResult");
const githubForm = document.getElementById("githubUserSearch");

const inputTypeChanged = false;

const githubAPI = "https://api.github.com/users/";

githubForm.onsubmit = () => {
    fetchFunction()
    return false
}

window.onload = () => {
    resultArea.style.display = "none"
}

button.onclick = () => {
    fetchFunction();
}

const fetchFunction = () => {
    if (input.value === "") {
        alert("Please enter a username")
        return
    }

    const userSearchQuery = input.value;

    const apiURL = githubAPI + userSearchQuery;

    console.log(apiURL);

    fetch(apiURL)
        .then(res => res.json())
        .then(data => {

            resultArea.style.display = "grid"

            console.log(data);

            if (data.message === "Not Found") {
                resultArea.innerHTML = "<h1>User not found :(</h1>"
            }

            var { login, html_url, avatar_url, name, bio, blog, company, location, twitter_username, public_repos, followers, following, created_at } = data;

            const date = created_at.slice(0, 10);
            console.log(date);

            login = login !== null ? login : "Not available"
            bio = bio !== null ? bio : "Not available"
            location = location !== null ? location : "Not available"
            blog = blog !== null ? blog : "Not available";
            company = company !== null ? company : "Not available";
            twitter_username = twitter_username !== null ? twitter_username : "Not available";

            const newDate = new Date(date).toDateString();

            resultArea.innerHTML = `<div class="userIcon ">\
                    <img src="${avatar_url}" id="userImage" class="skeleton"  alt="" >\
            </div >\
            <div class="userName">\
                <h2 id="userName">${name}</h2>\
                <a href="${html_url}" id="userNickName">@${login}</a>\
            </div>\
            <div class="userBio">\
                <p id="userBio">${bio}</p>\
            </div>\
            <div class="userJoinedDate">\
                <p id="userDate">Joined ${newDate}</p>\
            </div>\
            <div class="userProfileInfo">\
                <div class="userRepo">\
                    <p>Repos</p>\
                    <p id="userRepo">${public_repos}</p>\
                </div>\
                <div class="userFollowers">\
                    <p>Followers</p>\
                    <p id="userFollowers">${followers}</p>\
                </div>\
                <div class="userFollowing">\
                    <p>Following</p>\
                    <p id="userFollowing">${following}</p>\
                </div>\
            </div>\
            <div class="userLinks ">\
                <div class="userPortfolioLink display">\
                    <div class="linkSvg svg">\
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"\
                            data-view-component="true" class="octicon octicon-link">\
                            <path fill-rule="evenodd"\
                                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"\
                                fill="white"></path>\
                        </svg>\
                    </div>\
                    <a href="${blog}" id="userLink">${blog}</a>\
                </div>\
                <div class="userAddress display">\
                    <div class="svg">\
                        <svg width="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <g clip-path="url(#clip0_21:23)">\
                                <path fill-rule="evenodd" clip-rule="evenodd"\
                                    d="M4.2625 15.4C4.32654 15.3146 4.40958 15.2453 4.50504 15.1976C4.6005 15.1499 4.70577 15.125 4.8125 15.125H8.25C8.43234 15.125 8.6072 15.1974 8.73614 15.3264C8.86507 15.4553 8.9375 15.6302 8.9375 15.8125C8.9375 15.9948 8.86507 16.1697 8.73614 16.2986C8.6072 16.4276 8.43234 16.5 8.25 16.5H5.15625L2.0625 20.625H19.9375L16.8438 16.5H13.75C13.5677 16.5 13.3928 16.4276 13.2639 16.2986C13.1349 16.1697 13.0625 15.9948 13.0625 15.8125C13.0625 15.6302 13.1349 15.4553 13.2639 15.3264C13.3928 15.1974 13.5677 15.125 13.75 15.125H17.1875C17.2942 15.125 17.3995 15.1499 17.495 15.1976C17.5904 15.2453 17.6735 15.3146 17.7375 15.4L21.8625 20.9C21.9391 21.0021 21.9858 21.1236 21.9972 21.2508C22.0087 21.3779 21.9845 21.5058 21.9274 21.62C21.8703 21.7342 21.7825 21.8302 21.6739 21.8973C21.5653 21.9644 21.4402 22 21.3125 22H0.6875C0.559823 22 0.434669 21.9644 0.32606 21.8973C0.217452 21.8302 0.129681 21.7342 0.0725816 21.62C0.0154828 21.5058 -0.00868781 21.3779 0.0027783 21.2508C0.0142444 21.1236 0.0608942 21.0021 0.1375 20.9L4.2625 15.4Z"\
                                    fill="white" />\
                                <path fill-rule="evenodd" clip-rule="evenodd"\
                                    d="M11 1.37498C10.4583 1.37498 9.9219 1.48167 9.42143 1.68898C8.92096 1.89628 8.46623 2.20012 8.08319 2.58316C7.70014 2.9662 7.3963 3.42094 7.189 3.92141C6.9817 4.42188 6.875 4.95828 6.875 5.49998C6.875 6.04168 6.9817 6.57808 7.189 7.07855C7.3963 7.57902 7.70014 8.03375 8.08319 8.41679C8.46623 8.79984 8.92096 9.10368 9.42143 9.31098C9.9219 9.51828 10.4583 9.62498 11 9.62498C12.094 9.62498 13.1432 9.19038 13.9168 8.41679C14.6904 7.64321 15.125 6.594 15.125 5.49998C15.125 4.40596 14.6904 3.35675 13.9168 2.58316C13.1432 1.80958 12.094 1.37498 11 1.37498V1.37498ZM5.5 5.49998C5.5001 4.44154 5.8056 3.40561 6.37986 2.51649C6.95411 1.62737 7.77271 0.92284 8.73744 0.487425C9.70218 0.0520107 10.7721 -0.095787 11.8187 0.0617665C12.8653 0.21932 13.8443 0.675532 14.6381 1.37566C15.4319 2.07579 16.0068 2.99009 16.2939 4.00886C16.5809 5.02764 16.5679 6.1076 16.2564 7.11916C15.9449 8.13072 15.3481 9.03092 14.5377 9.71173C13.7273 10.3925 12.7376 10.825 11.6875 10.9574V18.5625C11.6875 18.7448 11.6151 18.9197 11.4861 19.0486C11.3572 19.1775 11.1823 19.25 11 19.25C10.8177 19.25 10.6428 19.1775 10.5139 19.0486C10.3849 18.9197 10.3125 18.7448 10.3125 18.5625V10.9587C8.98283 10.7912 7.76007 10.144 6.87392 9.13855C5.98777 8.13315 5.49921 6.83879 5.5 5.4986V5.49998Z"\
                                    fill="white" />\
                            </g>\
                            <defs>\
                                <clipPath id="clip0_21:23">\
                                    <rect width="22" height="22" fill="white" />\
                                </clipPath>\
                            </defs>\
                        </svg>\
                    </div>\
                    <p id="userAddress">${location}</p>\
                </div>\
                <div class="display">\
                    <div class="svg">\
                        <svg width="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path\
                                d="M19.5715 2.18408H9.57153C8.46853 2.18408 7.57153 3.08108 7.57153 4.18408V10.1841H5.57153C4.46853 10.1841 3.57153 11.0811 3.57153 12.1841V21.1841C3.57153 21.4493 3.67689 21.7037 3.86443 21.8912C4.05196 22.0787 4.30632 22.1841 4.57153 22.1841H20.5715C20.8367 22.1841 21.0911 22.0787 21.2786 21.8912C21.4662 21.7037 21.5715 21.4493 21.5715 21.1841V4.18408C21.5715 3.08108 20.6745 2.18408 19.5715 2.18408ZM5.57153 12.1841H11.5715V20.1841H5.57153V12.1841ZM19.5715 20.1841H13.5715V12.1841C13.5715 11.0811 12.6745 10.1841 11.5715 10.1841H9.57153V4.18408H19.5715V20.1841Z"\
                                fill="white" />\
                            <path\
                                d="M11.5715 6.18408H13.5715V8.18408H11.5715V6.18408ZM15.5715 6.18408H17.5715V8.18408H15.5715V6.18408ZM15.5715 10.2151H17.5715V12.1841H15.5715V10.2151ZM15.5715 14.1841H17.5715V16.1841H15.5715V14.1841ZM7.57153 14.1851H9.57153V16.1851H7.57153V14.1851Z"\
                                fill="white" />\
                        </svg>\
                    </div>\
                    <p id="userCompany">${company}</p>\
                </div>\
                <div class="display">\
                    <div class="svg">\
                        <svg width="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path\
                                d="M13.5715 3.18408L16.8645 6.47708L9.8645 13.4771L11.2785 14.8911L18.2785 7.89108L21.5715 11.1841V3.18408H13.5715Z"\
                                fill="white" />\
                            <path\
                                d="M19.5715 19.1841H5.57153V5.18408H12.5715L10.5715 3.18408H5.57153C4.46853 3.18408 3.57153 4.08108 3.57153 5.18408V19.1841C3.57153 20.2871 4.46853 21.1841 5.57153 21.1841H19.5715C20.6745 21.1841 21.5715 20.2871 21.5715 19.1841V14.1841L19.5715 12.1841V19.1841Z"\
                                fill="white" />\
                        </svg>\
                    </div>\
                    <p id="userTwitter">${twitter_username}</p>\
                </div>\
            </div>`
        })
}