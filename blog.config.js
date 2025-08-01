const BLOG = {
  title: 'YUNTLIN', // 블로그 제목 → 원하는 이름으로 수정
  author: 'JaeYun Lee', // 작성자 이름 → 본인 이름으로 수정
  email: 'jaeyun9292@gmail.com', // 연락 이메일 → 본인 이메일 주소로 수정
  link: 'https://blog-jaeyun.vercel.app/', // 사이트 링크 → 배포된 블로그 주소로 수정
  description: '안드로이드를 중심으로 개발 지식과 경험을 기록합니다.', // 블로그 설명 → 한글로 바꿔도 됨
  lang: 'en-US', 
  timezone: 'Asia/Seoul', // 시간대 → 한국이면 'Asia/Seoul'로 변경
  appearance: 'dark', // 테마 (auto, light, dark)
  font: 'sans-serif', // 글꼴 스타일
  path: '', // 폴더형 배포 아니면 그대로 둡니다
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  since: 2021, // 블로그 시작 년도 (빈 값이면 현재 연도 사용)
  postsPerPage: 8, // 한 페이지에 표시할 글 수
  sortByDate: true, // 최신순 정렬 여부
  showAbout: true, // About 페이지 표시 여부
  showCover: true, // Notion 커버 이미지 표시 여부
  showPageIcon: true,
  showIcon: true,
  showArchive: true, // Archive 페이지 표시 여부
  autoCollapsedNavBar: false, // 상단 내비게이션 자동 접힘 여부
  // ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  ogImageGenerateURL: false,
  socialLink: 'https://github.com/jaeyun9292',
  seo: {
    keywords: ['안드로이드', 'Android', '개발 블로그', '클린 아키텍처', 'Android CleanArchitecture', '안드로이드 클린 아키텍처','Android Compose', '안드로이드 컴포즈'],
    googleSiteVerification: '5TKDfLGzC0RXa_GapRMpydv-gOnTTflMpCqEnobZp4E' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-17S2C78Y6T' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
