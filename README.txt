TVPC Worship - Existing UI Stable Writing v1

기존 tvpc-worship UI/흐름은 그대로 유지하고, 쓰기 엔진만 보강한 버전입니다.

변경:
- Service 악보 화면의 Crop/Zoom/Reset 툴바 숨김
- PDF canvas는 클릭/터치 입력을 받지 않게 처리
- Annotation canvas를 위 레이어로 올림
- 필기 시작 시 pointer capture 적용
- pointerleave로 stroke가 끊기지 않게 처리
- quadratic smoothing 적용
- 필기 모드에서 swipe/navigation 잠금
- 캐시 soft reset 포함, 화면 배지 없음
- Share URL은 tvpc-worship 운영 주소로 고정

적용 후 열기:
https://terrysf-web.github.io/tvpc-worship/index.html?v=stable-writing-v1

홈화면 앱은 기존 아이콘 삭제 후 다시 추가 권장.
