interface TocItem {
  title: string;
  level: number;
  index: number;
  children: TocItem[];
}
function getMKTitles(mkContent: string): TocItem[] {
  var nav: any[] = [];
  var navLevel: number[] = [];

  // const resNav: any[] = [];
  // nav.forEach((item, index) => {
  //   if (item.level === 1) {
  //     resNav.push({ ...item });
  //   }
  //   if (item.level === 2) {
  //     if (resNav.length > 0) {
  //       resNav[resNav.length - 1].children.push({ ...item });
  //     } else {
  //       resNav.push({ ...item });
  //     }
  //   }
  //   if (item.level === 3) {
  //     if (resNav.length > 0) {
  //       if (resNav[resNav.length - 1].children.length > 0) {
  //         const l = resNav[resNav.length - 1].children.length;
  //         resNav[resNav.length - 1].children[l - 1].children.push({ ...item });
  //       } else {
  //         resNav[resNav.length - 1].children.push({ ...item });
  //       }
  //     } else {
  //       resNav.push({ ...item });
  //     }
  //   }
  // });

  mkContent
    .replace(/```/g, function () {
      return '\f';
    })
    .replace(/\f[^\f]*?\f/g, function () {
      return '';
    })
    .replace(/\r|\n+/g, function () {
      return '\n';
    })
    .replace(/(#+)[^\n]*?(?:\n)/g, function (match, m1, m2) {
      var title = match.replace('\n', '');
      var level = m1.length;
      nav.push({
        title: title
          .replace(/^#+/, '')
          .replace(/\([^)]*?\)/, '')
          .trim(),
        level: level,
        children: [],
      });
      if (navLevel.indexOf(level) === -1) {
        navLevel.push(level);
      }
      return '';
    });

  var index = 0;
  nav = nav.map((item) => {
    item.index = index++;
    return item;
  });

  navLevel = navLevel.sort();

  var retNavs: TocItem[] = [];
  var toAppendNavList;

  navLevel.forEach((level) => {
    toAppendNavList = find(nav, {
      level: level,
    });

    if (retNavs.length === 0) {
      retNavs = retNavs.concat(toAppendNavList);
    } else {
      toAppendNavList.forEach((toAppendNav: any) => {
        toAppendNav = Object.assign(toAppendNav);
        let parentNavIndex = getParentIndex(nav, toAppendNav.index);

        return appendToParentNav(retNavs, parentNavIndex, toAppendNav);
      });
    }
  });

  // 同一级的Level不一样的时候，需要做顺序调整
  retNavs = retNavs.map((navItem) => {
    var children = navItem.children || [];
    if (children.length === 0) {
      return navItem;
    }
    navItem.children = indexSort(navItem.children);
    return navItem;
  });

  return retNavs;
}

function find(arr: any, condition: any) {
  return arr.filter((item: any) => {
    for (var key in condition) {
      if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
        return false;
      }
    }
    return true;
  });
}

function findIndex(arr: any, condition: any) {
  let ret = -1;
  arr.forEach((item: any, index: any) => {
    for (var key in condition) {
      if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
        // 不进行深比较
        return false;
      }
    }
    ret = index;
    return true;
  });
  return ret;
}

function getParentIndex(nav: any, endIndex: any) {
  for (var i = endIndex - 1; i >= 0; i--) {
    if (nav[endIndex].level > nav[i].level) {
      return nav[i].index;
    }
  }
}

function appendToParentNav(nav: any, parentIndex: any, newNav: any) {
  // 先第一级里面找，找不到再去children中去找
  let index = findIndex(nav, {
    index: parentIndex,
  });

  if (index === -1) {
    let subNav;

    for (var i = 0; i < nav.length; i++) {
      subNav = nav[i];
      subNav.children.length && appendToParentNav(subNav.children, parentIndex, newNav);
    }
  } else {
    nav[index].children = nav[index].children.concat(newNav);
  }
}

function indexSort(navList: any) {
  // 有子元素，检查level是否相同
  var needSort =
    find(navList, {
      level: navList[0].level,
    }).length !== navList.length;

  if (needSort === false) return navList;

  return navList
    .map((nav: any) => {
      return nav.index;
    })
    .sort()
    .map((index: any) => {
      var nav = find(navList, {
        index: index,
      });

      if ((nav.children || []).length > 1) {
        nav.children = indexSort(nav.children);
      }

      return nav[0];
    });
}

export default getMKTitles;
