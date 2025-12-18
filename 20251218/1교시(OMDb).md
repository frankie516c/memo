<head>
<script src="js주소"></script>
</head>
<body onload="load()">

<form action="#" class="search-box" id="movie-search">
  <input type="text" name="keyword" placeholder="영화 제목을 입력하세요." />
  <input type="submit" value="검색" />
</form>

</body>

`js주소`에 입력하는건 해당 주소 (not 내용)
http://aiedu.tplinkdns.com/movie.js

오탈자가 정말 많음
웬만하면 복사붙여넣기 하기

main.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Frankie's Movie</title>
	<link rel="stylesheet" type="text/css" href="common.css" />
		<style>
			.home .feature-card {
				position: relative;
				height: 700px;
			}
			.home .feature-card .feature-img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: relative;
				z-index: 0;
			}
			.home .feature-card .detail {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: rgba(0,0,0,0.6);
				padding: 16px;
				z-index: 1;
			}
			.home .feature-card .detail h3 {
				color: #fff;
				margin-bottom: 16px;
			}
			.home .feature-card .detail p {
				color: #fff;
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
				color: #fff;
				background-color: #333;
				font-size: 20px;
				padding: 10px 16px;
				border-radius: 8px;
				margin-bottom: 15px;
				transition: 0.4s;
			}
			.home .search-box input[type=text]::placeholder {
				color: #fff;
			}
			.home .search-box input[type=text]:focus {
				box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
			}
			.home .search-box input[type=submit] {
				width: 100%;
				max-width: 300px;
				background-color: red;
				padding: 16px;
				border-radius: 8px;
				color: #fff;
				font-size: 20px;
				text-transform: uppercase;
				transition: 0.4s;
				cursor: pointer;
			}
			.home .search-box input[type=submit]:active {
				background-color: #fff;
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
				background-color: red;
				color: white;
				bottom: 16px;
				left: 0px;
				text-transform: capitalize;
			}
			.home .movies-list .movie .movie-link .detail {
				background-color: rgb(128, 4, 4);
				padding: 16px 8px;
				flex: 1 1 100%;
				border-radius: 0px 0px 8px 8px;
			}
			.home .movies-list .movie .movie-link .detail .year {
				color: lightcoral;
				font-size: 14px;
			}
			.home .movies-list .movie .movie-link .detail h3 {
				color: #fff;
				font-weight: 600;
				font-size: 18px;
			}
		</style>
</head>
<head>
<script src="http://aiedu.tplinkdns.com/movie.js"></script>
</head>
<body onload="load()"></body>
<body>
	<header>
		<a href="main.html">
		<h1><span>Frankie's</span>Movies</h1>
		</a>
	</header>

	<main class="home">
		<div class="feature-card">
			<a href="movie.html">
				<img src="https://i.pinimg.com/736x/e5/5c/89/e55c89b93dce3c74f3beccfd97c03241.jpg" class="feature-img">
			<div class="detail">
				<h3>The Fall</h3>
				<p>The Fall (2006) introduces us to a 1920s Los Angeles hospital where injured stuntman Roy Walker befriends young patient Alexandria and begins telling her an elaborate, fantastical story about five mythical heroes seeking revenge on an evil governor, blurring the lines between his dark reality and the vivid, exotic world he creates for her, while secretly manipulating her to help him commit suicide. The film opens with a striking black-and-white slow-motion sequence of Roy's stunt fall, setting a visually rich tone that contrasts with the drab hospital setting. </p>
			</div>
			</a>
		</div>

		<form action="#" class="search-box" id="movie-search">
			<input type="text" name="keyword" placeholder="Search for the Movie Title." />
			<input type="submit" value="Search" />
		</form>

		<div class="movies-list">
			<div class="movie">
				<a href="movie.html" class="movie-link">
					<div class="product-image">
						<img src="https://images.adsttc.com/media/images/51ab/a84c/b3fc/4bce/8e00/008d/medium_jpg/1299695769-thefall4.jpg?1370204225" class="feature-img"/>
						<div class="type">movie</div>
					</div>
					<div class="detail">
						<p class="year">2006</p>
						<h3>The Fall</h3>
					</div>
				</a>
			</div>

			<div class="movie">
				<a href="box.html" class="movie-link">
					<div class="product-image">
						<img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1WHt/image/XCtoE8NZoocIVrlo0TN7oeFTXog.jpg" class="feature-img"/>
						<div class="type">Box</div>
					</div>
					<div class="detail">
						<p class="year">1969</p>
						<h3>Color of pomegranates</h3>
					</div>
				</a>
			</div>
		</div>
	</main>
</body>
</html>
```

나머지 movie.html, common.css는 똑같음
