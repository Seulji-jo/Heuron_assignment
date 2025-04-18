# Heuron 프론트엔드 과제

프로젝트는 총 3개의 과제로 구성되어 있으며, 각 과제는 고유한 URL 경로를 통해 접근할 수 있도록 구성하였습니다.

- 과제 1: `이미지 갤러리(/assign1)`
- 과제 2: `카드 게임(/assign2)`
- 과제 3: `검색 데이터(/assign3)`

사용자의 편의성을 고려하여, 루트 경로(/)로 접근 시 이미지 갤러리 페이지(/assign1)로 자동 리다이렉트되도록 설정하였습니다. 또한, 상단 헤더에 네비게이션 메뉴를 구성하여 사용자들이 각 페이지로 손쉽게 이동할 수 있도록 하였습니다.

## 개발 환경

- React ^19.1.0
- typescript
- node v20.11.1

## 사용 라이브러리

- react-query: API 요청, 데이터 캐싱, 로딩 및 에러 상태 관리를 효율적으로 처리하기 위해 도입하였습니다.
- konva(react-konva): HTML5 Canvas 기반의 그래픽 작업을 React 환경에서 간편하게 구현하기 위해 사용하였습니다.
  - use-image: 이미지 리소스를 로드하고 react-konva의 `<Image />` 컴포넌트로 전달하기 위해 사용하였습니다.

## 동작 방식

### 이미지 갤러리 (/assign1)

메인 페이지에서는 이미지 데이터를 불러오는 API를 통해 썸네일 형태의 이미지 목록을 테이블에 표시합니다. API 요청 및 상태 관리는 react-query(TanStack Query)를 활용하여 구현하였으며, 비동기 데이터 처리와 캐싱의 효율성을 확보했습니다.

테이블에 표시된 이미지 중 하나를 클릭하면, 해당 이미지를 보다 자세히 다루는 하위 페이지(이미지 플레이그라운드)로 이동합니다.
이미지 플레이그라운드에서는 다음과 같은 기능들을 직접 경험할 수 있습니다:

- 이미지 색상 전환 (컬러 / 흑백)
- 이미지 확대 및 축소
- 이미지 회전

### 카드 게임 (/assign2)

사용자가 플레이어 수를 입력하면, 하단에 해당 수만큼의 플레이어 정보가 즉시 생성됩니다. 이어서 카드 개수를 입력하면, 각 플레이어에게 입력한 개수만큼 무작위로 카드를 분배합니다.
카드 개수를 입력하는 필드는 플레이어 수가 설정되기 전까지는 readOnly 상태로 비활성화되며, 결과 발표 버튼 또한 플레이어 수와 카드 개수 모두 입력되었을 때만 활성화되도록 disabled 속성을 통해 제어하였습니다.

각 플레이어는 카드와 점수를 보유하며, 해당 정보의 노출 여부는 토글 스위치를 통해 사용자 선택에 따라 조절할 수 있습니다.
게임 진행이 완료되면 결과 발표 버튼을 클릭하여, 우승자의 이름, 점수, 보유 카드를 모달창으로 확인할 수 있습니다. 모달을 닫으면 모든 게임 정보는 자동으로 초기화됩니다.

### 검색 데이터(/assign3)

세 개의 컬럼으로 구성된 임의의 데이터 10개(dummyData.json)를 리스트 형태로 화면에 표시합니다. 상단에는 각각의 컬럼에 대응하는 3개의 입력 필드가 제공되며, 이들을 통해 리스트를 다중 조건 필터링할 수 있습니다.

입력된 조건은 AND 조건으로 동작하며, 모든 필드를 만족하는 항목만 하단의 리스트에 표시됩니다. 또한, 리스트 내 항목 중 검색어와 일치하는 부분은 녹색 하이라이트로 시각적으로 강조됩니다.

## 폴더 구조

```bash
project
├── 📁 .vscode
├── 📁 src
│   ├── 📁 components
│   │   ├── 📁 CardGame
│   │   │   ├── 📄 GameForm.tsx
│   │   │   ├── 📄 GameResultModal.tsx
│   │   │   └── 📄 PlayerCard.tsx
│   │   ├── 📁 ImageGallery
│   │   │   ├── 📄 CanvasImage.tsx
│   │   │   └── 📄 ImageTable.tsx
│   │   ├── 📁 SearchingData
│   │   │   ├── 📄 HighlightText.tsx
│   │   │   └── 📄 SearchForm.tsx
│   │   ├── 📄 Input.tsx
│   │   ├── 📄 Modal.tsx
│   │   ├── 📄 QueryStateHandler.tsx
│   │   └── 📄 ToggleSwitch.tsx
│   ├── 📁 contexts
│   │   └── 📄 ImgColorContext.ts
│   ├── 📁 data
│   │   └── 📄 dummyData.json
│   ├── 📁 hooks
│   │   ├── 📄 useChunkedData.ts
│   │   ├── 📄 useElementSize.ts
│   │   ├── 📄 useImageColor.ts
│   │   ├── 📄 useImageDrag.ts
│   │   ├── 📄 useImageList.ts
│   │   ├── 📄 useInput.ts
│   │   └── 📄 usePlayerList.ts
│   ├── 📁 layout
│   │   └── 📄 index.tsx
│   ├── 📁 pages
│   │   ├── 📁 ImageGallery
│   │   │   ├── 📄 ImagePG.tsx
│   │   │   └── 📄 index.tsx
│   │   ├── 📄 CardGame.tsx
│   │   └── 📄 SearchingData.tsx
│   ├── 📁 scss
│   │   └── 📄 styles.scss
│   ├── 📁 services
│   │   └── 📄 index.ts
│   ├── 📁 types
│   │   ├── 📄 CardGame.ts
│   │   ├── 📄 ImageGallery.ts
│   │   └── 📄 SearchingData.ts
│   ├── 📄 App.tsx
│   ├── 📄 index.tsx
│   ├── 📄 index.css
│   └── 📄 routes.tsx
└── 📁 public
```

### 📁 components

프로젝트 전반에서 사용되는 컴포넌트들이 저장된 디렉토리입니다.
**페이지 전용 컴포넌트**는 기능별 디렉토리(CardGame, ImageGallery, SearchingData) 하위에 분리하여 구성하였습니다. 해당 디렉토리 내 컴포넌트는 해당 페이지에서만 사용되는 컴포넌트들입니다.
범용 또는 재사용 가능한 **공통 컴포넌트**는 특정 페이지 디렉토리에 종속시키지 않고, components 루트에 배치하였습니다.

### 📁 contexts

Context API를 사용해 전역상태를 관리하는 모듈을 모아놓은 디렉토리입니다.

- `📄 ImgColorContext.ts`: 이미지 색상 모드를 전역적으로 관리하기 위한 Context를 생성하는 파일입니다.

### 📁 data

과제3에 쓰이는 더미데이터가 있습니다.

### 📁 hooks

재사용 가능한 커스텀 훅(custom hooks)들을 모아놓은 디렉토리입니다.

- `📄 useChunkedData.ts`: 데이터를 일정 크기로 분할하여 반환하는 훅입니다.
- `📄 useChunkedData.ts`: 데이터를 일정 크기로 분할하여 반환하는 훅입니다.
- `📄 useElementSize.ts`: 특정 DOM의 요소의 크기를 실시간 측정 후 반환하는 훅입니다.
- `📄 useImageColor.ts`: 이미지 색상 모드(컬러/흑백)를 전역적으로 관리하기 위한 훅입니다. Context를 읽고 구독할 수 있는 useContext가 담겨있습니다.
- `📄 useImageDrag.ts`: 이미지 드래그 동작을 처리하는 훅입니다. 드래그 시작, 이동, 종료 이벤트를 관리 합니다.
- `📄 useImageList.ts`: 이미지 리스트를 불러오는 useQuery가 담긴 훅입니다. 비동기 로직을 쉽게 다룰 수 있게 도와줍니다. isLoading, isError, data등을 반환합니다.
- `📄 useInput.ts`: Input 컴포넌트와 연동되는 훅으로 폼 입력 상태관리를 합니다.
- `📄 usePlayerList.ts`: 카드 게임의 플레이어에 관련된 로직을 관리하는 훅입니다. 플레이어(카드) 생성 및 삭제, 점수 계산 등의 기능이 있습니다.

### 📁 layout

루트 경로의 컴포넌트로 화면 구조를 잡아주는 UI 컴포넌트가 있습니다.

### 📁 pages

라우팅 단위를 구성하는 페이지 컴포넌트들을 포함하고 있습니다.
각 페이지는 고유한 URL경로를 가지고 있습니다.

- `📁 ImageGallery`
  - `📄 index.tsx`: 이미지갤러리의 메인페이지로, api로 불러온 이미지 썸네일을 보여줍니다.
  - `📄 ImagePG.tsx`: 선택된 이미지로 이미지 확대/축소, 회전, 흑백/컬러 효과등을 보여줄 수 있습니다. 이미지 갤러리의 자식 페이지로 경로는 `/assign1/playground/:imgId`입니다.
- `📄 CardGame.tsx`: 플레이어와 랜덤카드로 승패를 가리는 카드게임 페이지입니다.
- `📄 SearchingData.tsx`: 텍스트 기반 필터링 된 검색 기능을 제공합니다.

### 📁 scss

부트스트랩을 사용하기 위해 설치한 scss 디렉토리입니다.

### 📁 services

api관련 로직의 모듈 파일이 위치해 있습니다.

### 📁 types

타입을 정리한 디렉토리입니다.

### 📁 src

- `📄 routes.tsx`: 라우팅을 담당하는 파일로, 라우터 프로바이더를 반환합니다.

### 📁 .vscode

- `📄 settings.json`: VSCode 사용자 설정을 저장해 놓은 파일로 일관된 개발환경을 유지하기 위해 세팅해 놓았습니다.

## 프로젝트 설치 및 실행 방법

1. 해당 프로젝트(레포지토리)를 로컬환경에 클론합니다.

```bash
git clone https://github.com/Seulji-jo/Heuron_assignment.git
```

2. 프로젝트를 실행시키기 위해 package를 인스톨합니다.

```bash
npm install
```

3. 다음 명령어로 개발 서버를 실행할 수 있습니다.

```bash
npm start
```

4. 브라우저에서 `http://localhost:5173/`로 들어갑니다.<br>

```bash
http://localhost:5173/
```
