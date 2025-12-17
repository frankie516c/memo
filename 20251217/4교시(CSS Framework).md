bootstrap(창시: 트위터, X) 인기가 압도적으로 많다
더 디테일한 부분은 tailwindcss에서 사용 가능
W3에는 bootstrap 밖에 없다

Bootstrap 5 Tutorial > BS5 Grid Basic
Grid Sytem
- 12개가 기본으로 span의 형태로 나뉘어짐
- 계산이 편리함 (12=8+4)

Grid Classes
- sm/md/lg/xl/xxl에 따라서 어떤 디바이스인지 화면 크기에 따라 나뉘어짐

flex가 하나의 축선에 나열되는 것
```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <div class="row">
        <div class="col-6">1</div>
        <div class="col-6">2</div>
    </div>
    <div class="row">
        <div class="col-4">1</div>
        <div class="col-4">2</div>
        <div class="col-4">3</div>
    </div>
</div>    
</form>
</body>
</html>
```
- col-6 + col-6 = col-12 이런식으로 합이 12가 되게 하면 됨

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <div class="row">
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
    </div>
</div>    
</form>
</body>
</html>
```
- 만약 12개가 넘어가면 행을 자동으로 내려줌
- flex로만 했을 땐 width가 좁아지는데 얘는 그게 없이 일정함

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <div class="container">
    <div class="row">
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
    </div>
    </div>
</div>    
</form>
</body>
</html>
```
- `container`을 넣어주면 마진이 넣어짐
- 처음부터 마진을 넣으면 수정이 힘들어짐

Bootstrap의 다양한 기능을 확인하고 쵲오적으로는
https://themewagon.com/themes/phoenix/
이런 Dashboard를 만드는게 목적

목표: 최대한 간단한 코드를 사용하기, 시간 절약 및 코드 줄 수 감소
