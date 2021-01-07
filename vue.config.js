var path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, "../express-app/public"), //빌드 디렉토리 설정
  devServer: {
    proxy: { // proxyTable 설정 (CORS 문제를 해결하기 위해 proxy 설정이 필요)
      '/api': { //개발서버에 들어온 모든 http 요청중 /api로 시작되는것은
        target: 'http://localhost:3000/api', // 해당 url로 요청
        changeOrigin: true , // 서버 API 응답에 CORS 헤더를 제공 할 필요가 없도록합니다. 어떤 이유로 든 생략하기로 결정한 경우 서버 API 가 응답 헤더에 포함 (또는 이에 상응하는 항목)을 포함하는지 확인해야합니다 .Access-Control-Allow-Origin: *
        pathRewrite:{ // 고쳐쓰기 (예) 요청 /api/user/256 은 http://localhost:8080/user/256 으로 변환
          "^/api" : ''
        }
      }
    }
  }
}