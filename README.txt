TVPC Worship - Apple Pencil Stability Update

기존 tvpc-worship UI/기능은 그대로 유지했습니다.

수정:
- Apple Pencil(pointerType pen/stylus)이 viewer swipe navigation으로 오해되지 않게 처리
- Pencil 입력 중 악보 넘김/중단 가능성 감소
- iOS text selection/callout 개입 감소 CSS 추가
- Share URL은 tvpc-worship 운영 주소로 고정

중요:
iPad 설정 > Apple Pencil > 손글씨 입력(Scribble)을 OFF 하면 필기 끊김이 더 줄어듭니다.

적용:
1. ZIP 압축 풀기
2. tvpc-worship repo root에 index.html 등 업로드/교체
3. iPad에서 홈화면 앱 완전히 종료 후 다시 열기
