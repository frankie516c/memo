이미지 vs Background 선택 사용
이미지를 사용한 이유
1) 가져온 source를 쉽게 수정하기 위해 (링크만 바꾸면 되니까)
2) 똑같은 이미지 패턴 (아래에도 사용함)

movie.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VueMovie</title>
  <link rel="stylesheet" type="text/css" href="common.css" />
	<style>
	.home .movie-detail {
		padding: 16px;
	}
	.home .movie-detail h2 {
		color: #FFF;
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 16px;
	}
	.home .movie-detail span {
		margin: 0 16px;
		padding: 10px;
		border-radius: 10px;
		background-color: #42B883;
		color: #FFF;
		font-size: 18px;
	}
	.home .movie-detail .featured-img {
		display: block;
		max-width: 200px;
		margin-bottom: 16px;
	}
	.home .movie-detail p {
		color: #FFF;
		font-size: 18px;
		line-height: 1.4;
	}
	.home .movie-detail .text-center {
		text-align: center;
	}
	</style>
</head>
<body>
  <header>
    <a href="main.html">
      <h1><span>Shell</span>Movies</h1>
    </a>
  </header>
  <main class="home">
    <div class="movie-detail">
      <div>
        <h2>Ghost in the Shell<span>movie</span></h2>
        <p>1995</p>
        <p>Japan, United Kingdom</p>
        <img src="https://m.media-amazon.com/images/M/MV5BYWRiYjQyOGItNzQ1Mi00MGI1LWE3NjItNTg1ZDQwNjUwNDM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" alt="Movie Poster" class="featured-img" />
        <p>It is the year 2029. Technology has advanced so far that cyborgs are commonplace. In addition, human brains can connect to the internet directly. Major Motoko Kusanagi is an officer in Section 9, an elite, secretive police division that deals with special operations, including counter terrorism and cyber crime. She is currently on the trail of the Puppet Master, a cyber criminal who hacks into the brains of cyborgs in order to obtain information and to commit other crimes.</p>
      </div>
      <hr>
      <div class="text-center">
        <h2>선택한 내용이 없습니다.</h2>
        <p>다시 검색하세요.</p>
      </div>
    </div>
  </main>
</body>
</html>
```

main.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VueMovie</title>
  <link rel="stylesheet" type="text/css" href="common.css" />
	<style>
		.home .feature-card {
			position: relative;
		}
		.home .feature-card .featured-img {
			display: block;
			width: 100%;
			height: 300px;
			object-fit: cover;
			position: relative;
			z-index: 0;
		}
		.home .feature-card .detail {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.6);
			padding: 16px;
			z-index: 1;
		}
		.home .feature-card .detail h3 {
			color: #FFF;
			margin-bottom: 16px;
		}
		.home .feature-card .detail p {
			color: #FFF;
		}
		.home .search-box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 16px;
		}
		.home .search-box input {
			display: block;
			appearance: none;
			border: none;
			outline: none;
			background: none;
		}
		.home .search-box input[type=text] {
			width: 100%;
			color: #FFF;
			background-color: #496583;
			font-size: 20px;
			padding: 10px 16px;
			border-radius: 8px;
			margin-bottom: 15px;
			transition: 0.4s;
		}
		.home .search-box input[type=text]::placeholder {
			color: #f3f3f3;
		}
		.home .search-box input[type=text]:focus {
			box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
		}
		.home .search-box input[type=submit] {
			width: 100%;
			max-width: 300px;
			background-color: #42B883;
			padding: 16px;
			border-radius: 8px;
			color: #FFF;
			font-size: 20px;
			text-transform: uppercase;
			transition: 0.4s;
			cursor: pointer;
		}
		.home .search-box input[type=submit]:active {
			background-color: #3B8070;
		}
		.home .movies-list {
			display: flex;
			flex-wrap: wrap;
			margin: 0px 8px;
		}
		.home .movies-list .movie {
			max-width: 50%;
			flex: 1 1 50%;
			padding: 16px 8px;
		}
		.home .movies-list .movie .movie-link {
			display: flex;
			flex-direction: column;
			height: 100%;
		}
		.home .movies-list .movie .movie-link .product-image {
			position: relative;
			display: block;
		}
		.home .movies-list .movie .movie-link .product-image img {
			display: block;
			width: 100%;
			height: 275px;
			object-fit: cover;
		}
		.home .movies-list .movie .movie-link .product-image .type {
			position: absolute;
			padding: 8px 16px;
			background-color: #42B883;
			color: #FFF;
			bottom: 16px;
			left: 0px;
			text-transform: capitalize;
		}
		.home .movies-list .movie .movie-link .detail {
			background-color: #496583;
			padding: 16px 8px;
			flex: 1 1 100%;
			border-radius: 0px 0px 8px 8px;
		}
		.home .movies-list .movie .movie-link .detail .year {
			color: #AAA;
			font-size: 14px;
		}
		.home .movies-list .movie .movie-link .detail h3 {
			color: #FFF;
			font-weight: 600;
			font-size: 18px;
		}
	</style>
</head>
<body>
  <header>
    <a href="main.html">
      <h1><span>Shell</span>Movies</h1>
    </a>
  </header>
  <main class="home">
    <div class="feature-card">
      <a href="movie.html">
        <img src="https://m.media-amazon.com/images/M/MV5BYWRiYjQyOGItNzQ1Mi00MGI1LWE3NjItNTg1ZDQwNjUwNDM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" alt="Movie Poster" class="featured-img" />
        <div class="detail">
          <h3>Ghost in the Shell</h3>
          <p>It is the year 2029. Technology has advanced so far that cyborgs are commonplace. In addition, human brains can connect to the internet directly. Major Motoko Kusanagi is an officer in Section 9, an elite, secretive police division that deals with special operations, including counter terrorism and cyber crime. She is currently on the trail of the Puppet Master, a cyber criminal who hacks into the brains of cyborgs in order to obtain information and to commit other crimes.</p>
        </div>
      </a>
    </div>

    <form action="#" class="search-box">
      <input type="text" placeholder="영화 제목을 입력하세요." />
      <input type="submit" value="검색" />
    </form>

    <div class="movies-list">
      <div class="movie">
        <a href="movie.html" class="movie-link">
          <div class="product-image">
            <img src="https://m.media-amazon.com/images/M/MV5BYWRiYjQyOGItNzQ1Mi00MGI1LWE3NjItNTg1ZDQwNjUwNDM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" alt="Movie Poster"/>
            <div class="type">movie</div>
          </div>
          <div class="detail">
            <p class="year">1995</p>
            <h3>Ghost in the Shell</h3>
          </div>
        </a>
      </div>

      <div class="movie">
        <a href="movie.html" class="movie-link">
          <div class="product-image">
            <img src="https://placehold.co/960x600?text=None" alt="Movie Poster"/>
            <div class="type">Box</div>
          </div>
          <div class="detail">
            <p class="year">2023</p>
            <h3>영화 제목</h3>
          </div>
        </a>
      </div>
    </div>
  </main>
</body>
</html>
```

common.css
```html
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
*::selection {
  background: rgba(66, 184, 131, 0.5);
}

body {
  background-color: #35495E;
}

a {
  text-decoration: none; <!--헤더에 밑줄 없애는 것-->
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
header h1 {
  color: #FFF;
  font-size: 28px;
}
header h1 span {
  color: #42B883;
}
```
