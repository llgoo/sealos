import { TAppConfig } from 'stores/app';
import { APPTYPE } from 'constants/app_type';

// 已安装 app
const installedApps: TAppConfig[] = [
  {
    key: 'Sealos-Document',
    name: 'Sealos Document',
    icon: '/images/sealos.svg',
    type: APPTYPE.IFRAME,
    data: {
      url: 'https://www.sealos.io/docs/cloud/Intro',
      desc: 'Sealos Documents'
    },
    gallery: [
      'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
      'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
    ],
    menuData: {
      nameColor: 'text-black',
      helpDropDown: false,
      helpDocs: false
    }
  },
  {
    key: 'sealos-image-hub',
    name: 'Image Hub',
    icon: '/images/icons/app_store.png',
    type: APPTYPE.IFRAME,
    data: {
      url: 'https://hub.sealos.io/',
      desc: 'Image Hub'
    },
    gallery: [],
    menuData: {
      nameColor: 'text-black',
      helpDropDown: false,
      helpDocs: 'https://www.sealos.io/docs/cloud/apps/appstore/'
    }
  },
  // {
  //   key: 'App-Store',
  //   name: 'App Store',
  //   icon: '/images/icons/app_store.png',
  //   type: APPTYPE.APP,
  //   data: {
  //     url: '',
  //     desc: 'App Store'
  //   },
  //   gallery: [
  //     'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   menuData: {
  //     nameColor: 'text-black',
  //     helpDropDown: false,
  //     helpDocs: 'https://www.sealos.io/docs/cloud/apps/appstore/'
  //   }
  // },
  // {
  //   name: 'Python Compiler',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
  //   type: 'iframe',
  //   data: {
  //     url: 'https://www.programiz.com/python-programming/online-compiler/',
  //     desc: 'Compile Python'
  //   },
  //   gallery: [
  //     'https: //cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https: //www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize'
  // },
  // {
  //   name: 'sealos',
  //   icon: 'https://i.imgur.com/VfPj2Il.png',
  //   type: 'iframe',
  //   data: {
  //     url: '',

  //     desc: 'sealos Cloud'
  //   },
  //   gallery: [
  //     'https: //cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https: //www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize'
  // },
  {
    key: 'Terminal',
    name: 'Terminal',
    icon: '/images/terminal.svg',
    type: APPTYPE.IFRAME,
    data: {
      url: '',
      desc: 'sealos CLoud Terminal'
    },
    gallery: [
      'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
      'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
    ],
    menuData: {
      nameColor: 'text-black',
      helpDropDown: false,
      helpDocs: 'https://www.sealos.io/docs/cloud/apps/terminal/'
    }
  },
  {
    key: 'Kubernetes-Dashboard',
    name: 'Kubernetes Dashboard',
    icon: '/images/kubernetes.svg',
    type: APPTYPE.IFRAME,
    data: {
      url: '',
      desc: 'sealos Cloud Kubernetes Dashboard'
    },
    gallery: [
      'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
      'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
    ],
    menuData: {
      nameColor: 'text-black',
      helpDropDown: true,
      helpDocs: false
    }
  },
  // {
  //   name: 'Kuboard',
  //   icon: '/images/kuboard.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: '',
  //     desc: 'sealos Cloud Kuboard'
  //   },
  //   gallery: [
  //     'https: //cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https: //www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize',
  //   menuData: {
  //     nameColor: 'text-black',
  //     helpDropDown: true,
  //     helpDocs: false
  //   },
  //   cacheSize: 'maximize',
  //   mask: true
  // },
  // {
  //   name: 'Prometheus',
  //   icon: '/images/prometheus.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: '',
  //     desc: 'From metrics to insight'
  //   },
  //   gallery: [
  //     'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize'
  // },
  // {
  //   name: 'Mysql',
  //   icon: '/images/mysql.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: '',
  //     desc: 'mysql operator'
  //   },
  //   gallery: [
  //     'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize'
  // },
  // {
  //   name: 'Redis',
  //   icon: '/images/redis.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: '',
  //     desc: 'redis operator'
  //   },
  //   gallery: [
  //     'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize',
  //   menuData: {
  //     nameColor: 'text-black',
  //     helpDropDown: true,
  //     helpDocs: false
  //   },
  //   cacheSize: 'maximize',
  //   mask: true
  // },
  // {
  //   name: 'Postgres',
  //   icon: '/images/pgadmin.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: '',
  //     desc: 'postgres operator'
  //   },
  //   gallery: [
  //     'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize',
  //   menuData: {
  //     nameColor: 'text-black',
  //     helpDropDown: true,
  //     helpDocs: false
  //   }
  // },
  // {
  //   name: 'SDK-DEMO',
  //   icon: '/images/mysql.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: 'http://localhost:3000/demo',
  //     desc: 'mysql operator'
  //   },
  //   gallery: [
  //     'https: //cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https: //www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize'
  // },
  {
    key: 'sealos-cloud-provider',
    name: 'sealos cloud provider',
    icon: '/images/infraicon/scp.png',
    type: APPTYPE.APP,
    data: {
      url: '',
      desc: 'infra operator'
    },
    gallery: [
      'https: //cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
      'https: //www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
    ],
    menuData: {
      nameColor: '#0073D7',
      helpDropDown: false,
      helpDocs: 'https://www.sealos.io/docs/cloud/apps/scp/'
    }
  },
  // {
  //   name: 'AFFiNE',
  //   icon: '/images/affine.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: '',
  //     desc: 'AFFiNE operator'
  //   },
  //   gallery: [
  //     'https: //cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
  //     'https: //www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
  //   ],
  //   size: 'maximize',
  //   menuData: {
  //     nameColor: 'text-black',
  //     helpDropDown: true,
  //     helpDocs: false
  //   },
  //   cacheSize: 'maximize',
  //   mask: true
  // },
  {
    key: 'Postgres',
    name: 'Postgres',
    icon: '/images/pgadmin.svg',
    type: APPTYPE.APP,
    gallery: [
      'https://cdn.programiz.com/cdn/farfuture/IwFGGPqycIxTfzLl7mPdcaqUaircnStXfipaHd4EBik/mtime:1605833048/sites/all/themes/programiz/assets/compiler.png',
      'https://www.programiz.com/blog/content/images/2020/07/programiz-online-compiler.png'
    ],
    data: {
      url: '',
      desc: 'postgres operator'
    },
    menuData: {
      nameColor: 'text-black',
      helpDocs: 'https://www.sealos.io/docs/cloud/apps/postgres/',
      helpDropDown: false
    }
  },
  {
    key: 'sealos-deploy-manager',
    name: 'Deploy Manager',
    icon: '/images/sealos.svg',
    type: APPTYPE.IFRAME,
    gallery: [],
    data: {
      url: 'https://deploy.cloud.sealos.io',
      desc: 'deploy manager'
    },
    menuData: {
      nameColor: 'text-black',
      helpDocs: 'https://www.sealos.io/docs/cloud/Intro/',
      helpDropDown: false
    }
  }
  // {
  //   key: 'sealos-app-sdk-demo',
  //   name: 'Sealos SDK APP Demo',
  //   icon: '/images/sealos.svg',
  //   type: APPTYPE.IFRAME,
  //   data: {
  //     url: 'https://sdk-app-demo.cloud.sealos.io',
  //     desc: 'Sealos Demo'
  //   },
  //   gallery: [
  //   ],
  //   menuData: {
  //     nameColor: 'text-black',
  //     helpDropDown: false,
  //     helpDocs: false
  //   },
  // },
];

export default installedApps;
