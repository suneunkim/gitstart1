# HTML

## HTML Introduction

- HTML : Hyper Text Markup Language

  - Hyper Text : 하이퍼링크로 연결된 웹 문서 => 웹 페이지
  - Markup Language : 표시 언어

- HTML 표시 내용

  - Web page의 Contents (내용 표시)
    - Text contents
    - Multimedia Contents : image, video, audio
      - Embed(ed) Contents(html상 편집 X, 가져와서 표시만 하는 컨텐츠) 
  - Web Page의 Structure (구조 설명)

- 학습 내용
  - 문법
  - 활용

## HTML Basic

-기본구조

※ ` : backtick (코드예시문 박스화)

```
<!DOCTYPE html>
<html>
  <head>
    웹 문서의 부가정보
  </head>
  <body>
    웹 문서의 내용
  </body>
</html>
```

## HTML Element

- Tag와 Contents로 구성
- Tag는 시작태그와 종료태그로 구성
  - contents와 종료태그 없이 시작태그만 있는 요소 : 빈요소(Empty Element)

```
<h1>제목</h1>

<br> => 빈 요소(Empty Element)
```

## HTML Attribute

- HTML Tag의 추가정보

- syntax : name="value"

```
<img src="photo.jpg" alt="사진">
```

## Text Contents Element

### Heading

- 제목
- h(heading)
  - h1 ~ h6

### Paragraph

- p(paragraph) : 단락

- hr(Horizontal Rules) : 수평선(단락을 구분)

- br(Line Break) : 강제 줄바꿈
  (※ 강제 공백(Entity Code) : &nbsp; - Non-breaking space)
  (※ & : ampersand)
  - HTML Text : 줄바꿈, 공백 인식
    - 공백 1칸으로 인식

### HTML List

- 순서없는 목록 : ul, li
- 순서있는 목록 : ol, li
- 설명 목록 : dl, dt, dd

※ 포함관계/중첩관계(Nested Element)

- 포함하는 요소 : 부모요소(Parent), 조상요소(ancestor)
- 포함되는 요소 : 자식요소(Child), 자손요소(descendant)
- 이웃하는 요소 : 형제요소(sibling)

### HTML Link

- 하이퍼링크 연결

- a(anchor)

  - href(hypertext reference) attribute : 연결되는 페이지의 주소
  - target attribute : 새탭 열기 설정
    - target="\_blank" : 새탭 열기

- Bookmark 기능
  - 목적지에 id attribute를 사용해서 이름 지정
  - a 태그의 href 속성에 "#이름" 으로 위치 표시
  - ex) <h2 id="C4">Chapter 4</h2>
    <a href="#C4">Jump to Chapter 4</a>

### HTML Table

- 표를 표시
- table(표 영역 표시)
- tr(table row) : 가로줄, 행
- th(table heading) : 열 제목
- td(table data) : 열(칸)

## Multimedia Contents

### HTML image

- img : image

- attribute
  - src(source) : 이미지의 파일 경로, 이름
  - alt(alternaive) : 이미지 대체 텍스트

### HTML Video

- video tag
- attribute(name만 사용하는 형태)
  - controls : 동영상 컨트롤 버튼 표시 여부 (재생,일시정지,사운드바,재생바)
  - autoplay : 자동 재생
  - muted : 음소거
  - loop : 반복 재생
  - poster : 영상 대체 이미지(썸네일)

