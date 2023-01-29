/* eslint-disable no-console */

export function getUserInfoFetch(userInfo) {
  fetch('https://api.github.com/users/glitchwizard')
    .then(res => res.json())
    .then((userFetchResult) => {
      userInfo = userFetchResult;
    });
  return userInfo;
}


export function fetchUserInfo(userCallback) {
  fetch('https://api.github.com/users/glitchwizard')
    .then(res => res.json())
    .then((result) => {
      console.log('userInfo result');
      userCallback(result);
      console.log(result);
      // return result;
      // const fetchResult = result;
      // let localUserInfo = localStorage.getItem('localUserInfo');
      // if (!localUserInfo) {
      //   localUserInfo = {};
      //   localUserInfo.user = fetchResult;
      //   localStorage.setItem('localUserInfo', JSON.stringify(localUserInfo));
      //   return fetchResult;
      // }
      // return fetchResult;
    },
    (error) => {
      return error;
    });
}

export function fetchRepoList(repoCallBack) {
  fetch('https://api.github.com/users/glitchwizard/repos?sort=updated')
    .then(res => res.json())
    .then(
      (result) => {
        console.log('repoList result');
        repoCallBack(result);
        console.log(result);
        // return result;
        // const fetchResult = result;
        // let localUserInfo = localStorage.getItem('localUserInfo');
        // if (!localUserInfo) {
        //   localUserInfo = {};
        //   localUserInfo.repos = fetchResult;
        //   localStorage.setItem('localUserInfo', JSON.stringify(localUserInfo));
        //   return fetchResult;
        // }
        // return fetchResult;
      },
      (error) => {
        return error;
      });
}
  