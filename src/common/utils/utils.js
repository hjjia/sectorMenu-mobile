export function getQueryParams(url) {
    const index = url.indexOf(url);
    if (index === -1) return; 
    const res = {};
    const search = url.substr(index + 1);
    const arr = search.split('&');
    for (let i = 0, len = arr.length; i < len; i++) {
        const temp = arr[i].split('=');
        res[temp[0]] = temp[1];
    }
    return res;
}
  
export function moneyFormat(money, type = 'xxx,xxx,xxx.00') {
    const typeArr = (money + '').split('.');

    const len = typeArr[0].length;
    let start = len % 3 === 0 ? 3 : len % 3;
    const times = parseInt(len / 3);

    let res = typeArr[0].substr(0, start);
    for (let i = 0; i < times && len > 3; i++) {
//        res += ',' + typeArr[0].substr(start + i * 3, 3);
        res += `${len % 3===0 && i === times - 1 ? ' ' : ','}${typeArr[0].substr(start + i * 3, 3)}`;
    }

    return typeArr[1] ? `${res}.${typeArr[1]}` : res;
}
