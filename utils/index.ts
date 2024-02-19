import Req from './req';
export { Req };
export const isUC = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('ucbrowser') > -1 || ua.indexOf('quark') > -1;
};
export const isIos = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('iphone') > -1;
};
export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return /^((?!chrome|android).)*safari/i.test(ua);
};
export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
};
