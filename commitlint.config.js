/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 제목 최대 길이 (기본 72자에서 100자로 확장)
    'header-max-length': [2, 'always', 100],
    
    // 허용되는 타입들
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 새로운 기능
        'fix',      // 버그 수정
        'docs',     // 문서 수정
        'style',    // 코드 스타일 변경
        'refactor', // 코드 리팩토링
        'test',     // 테스트 추가/수정
        'build',    // 빌드 시스템, 의존성 관련
        'ci',       // CI/CD 설정 변경
        'perf',     // 성능 개선
        'chore',    // 기타 작업
        'hotfix'    // 긴급 수정
      ],
    ],
    
    // 제목은 소문자로 시작 (한국어 허용을 위해 비활성화)
    'subject-case': [0],
    
    // 제목 끝에 마침표 금지
    'subject-full-stop': [2, 'never', '.'],
    
    // 빈 제목 금지
    'subject-empty': [2, 'never'],
    
    // 타입 다음에 콜론과 공백 필수
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
