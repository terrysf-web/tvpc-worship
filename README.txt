TVPC Worship - Annotation Emergency Stabilization

목적:
- 손가락/Apple Pencil 필기 중 stroke 끊김을 줄이기 위한 응급 안정화입니다.
- 기존 UI/기능은 유지합니다.

변경:
- 필기 canvas에서 pointer/touch drawing active 상태 감지
- 필기 중 viewer swipe/navigation handler 일시 중지
- 필기 중 iOS browser gesture/selection/callout 개입 감소
- Share URL은 tvpc-worship 운영 주소로 고정

테스트:
1. iPad에서 홈화면 앱 완전히 종료 후 다시 열기
2. 악보 열기
3. 필기 모드/펜 선택
4. 손가락과 Apple Pencil 모두 긴 선을 그려보기
5. stroke 끊김/깜빡임이 줄었는지 확인

주의:
이건 응급 안정화입니다. 완전한 해결은 annotation canvas를 PDF canvas와 분리한 새 구조에서 하는 것이 가장 안정적입니다.
