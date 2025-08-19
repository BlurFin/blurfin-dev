# 🐠 BlurFin Platform

관상어 경매/거래 플랫폼

## 🏗️ 프로젝트 구조

```
blurfin-dev/
├── apps/
│   ├── web/          # Next.js 프론트엔드 (포트: 3000)
│   └── api/          # Express 백엔드 (포트: 5000)
├── packages/         # 공통 패키지 (향후 추가)
└── package.json      # 루트 워크스페이스 설정
```

## 🚀 빠른 시작

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

**전체 서버 동시 실행:**

```bash
npm run dev
```

**개별 서버 실행:**

```bash
# Next.js 프론트엔드만
npm run dev:web

# Express 백엔드만
npm run dev:api
```

### 3. 접속 주소

- **프론트엔드**: http://localhost:3000
- **백엔드 API**: http://localhost:5000
- **API 테스트**: http://localhost:5000/api/test

## 🛠️ 기술 스택

### 프론트엔드

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

### 백엔드

- **Express.js**
- **TypeScript**
- **CORS, Helmet, Morgan**

## 📝 개발 명령어

```bash
# 개발 서버
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm run start

# 린트
npm run lint
```

## 🔧 환경 설정

백엔드 환경변수 설정:

```bash
cp apps/api/.env.example apps/api/.env
```

## 🎯 다음 단계

- [ ] 데이터베이스 설정 (PostgreSQL)
- [ ] 인증 시스템 구현
- [ ] 실시간 기능 (Socket.io)
- [ ] 파일 업로드 시스템

---

**Happy Coding! 🐠✨**
