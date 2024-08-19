# 로그인 회원가입 상품 등록

## 기능

- user: 로그인/회원가입
- product: 등록/수정/삭제
- detail: 조회

### USER

- 로그인
- 회원가입
- 회원정보 조회

기능: 사용자 인증 및 관리 시스템 구현

- 사용자 등록 및 로그인 기능 추가
- JWT 기반 인증 구현
- 사용자 프로필 및 이메일 조회 엔드포인트 생성
- 토큰 갱신 기능 구현
- 보안을 위한 비밀번호 해싱 적용
- 데이터베이스 상호작용을 위한 TypeORM 설정
- 전역 유효성 검사 파이프 구성
- 보호된 라우트를 위한 가드 구현

추가된 엔드포인트:
- POST /auth/register: 새 사용자 등록
- POST /auth/login: 사용자 로그인
- POST /auth/refresh: 토큰 갱신 (인증 필요)
- POST /users: 새 사용자 생성
- GET /users/profile: 인증된 사용자의 프로필 조회 (인증 필요)
- GET /users/:email: 특정 이메일을 가진 사용자 조회 (인증 필요)

세부사항:
- 등록, 로그인, 토큰 갱신을 위한 AuthModule 생성
- 사용자 관리를 위한 UsersModule 구현
- 라우트 보호를 위한 JWT 전략 및 가드 추가
- 입력 유효성 검사를 위한 DTO 설정
- 데이터베이스 연결을 위해 AppModule에서 TypeORM 구성
- User 엔티티에 비밀번호 해싱 구현
- main.ts에 전역 ValidationPipe 추가