TVPC Worship - Pencil No Flicker Update

기존 UI/기능은 그대로 유지했습니다.

이번 수정:
- Apple Pencil 이벤트를 막지 않습니다.
- Pencil 입력 중에는 viewer swipe navigation만 일시 중지합니다.
- 이전 업데이트처럼 pen/stylus를 swipe handler에서 완전히 무시하지 않습니다.
- 강한 touch-action:none 전역 처리는 넣지 않았습니다. 깜빡임/리렌더링을 줄이기 위함입니다.
- Share URL은 tvpc-worship 운영 주소로 고정했습니다.

iPad 권장:
- 설정 > Apple Pencil > 손글씨 입력(Scribble) OFF
- 홈화면 앱 완전히 종료 후 다시 실행
