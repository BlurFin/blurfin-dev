# 🐠 BlurFin Platform

관상어 경매/거래 플랫폼

## 🏗️ 프로젝트 구조

```
blurfin-dev/
├── apps/
│   ├── web/          # Next.js 프론트엔드 (HTTPS)
│   └── api/          # Express 백엔드
├── packages/         # 공통 패키지
└── docs/             # 프로젝트 문서
    └── guidelines/   # 개발 가이드라인
```

## 🚀 빠른 시작

### 1. 의존성 설치

```bash
yarn install
```

### 2. 로컬 HTTPS 환경 설정

```bash
# mkcert 설치 (Mac)
brew install mkcert

# 로컬 CA 설치
mkcert -install

# /etc/hosts에 추가 (sudo 필요)
sudo nano /etc/hosts
# 다음 줄 추가: 127.0.0.1  local.blurfin.dev
```

### 3. 개발 서버 실행

```bash
yarn dev
```

브라우저에서 접속: **https://local.blurfin.dev:3000**

## 🛠️ 기술 스택

- **Frontend**: Next.js 15 + React 19 + TypeScript + Tailwind CSS 4
- **Backend**: Express.js + TypeScript
- **Dev Tools**: Yarn Workspaces, Husky, ESLint, mkcert

## 📝 주요 명령어

```bash
# 개발
yarn dev                    # HTTPS 개발 서버 (자동 포트 종료)
yarn workspace web dev     # 프론트엔드만
yarn workspace api dev     # 백엔드만

# 코드 품질
yarn lint                   # ESLint 검사
yarn tsc                    # TypeScript 검사
yarn check:all             # 전체 품질 검사

# 버전 관리
yarn version:next          # 다음 버전 확인
```

## 🔒 Git Commit 규칙

Conventional Commits 형식 사용:

```bash
feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 리팩토링
test: 테스트 코드
chore: 빌드/설정 변경
```

## 🌐 배포 도메인

- **프로덕션**: https://www.blurfin.com
- **로컬 개발**: https://local.blurfin.dev:3000
