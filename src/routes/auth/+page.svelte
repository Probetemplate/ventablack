<svelte:head>
<script src="./js/jquery-3.5.1.min.js"></script>
	<script src="./js/bootstrap.bundle.min.js"></script>
	<script src="./js/owl.carousel.min.js"></script>
	<script src="./js/jquery.magnific-popup.min.js"></script>
	<script src="./js/wNumb.js"></script>
	<script src="./js/nouislider.min.js"></script>
	<script src="./js/jquery.mousewheel.min.js"></script>
	<script src="./js/jquery.mCustomScrollbar.min.js"></script>
	<script src="./js/main.js"></script>
</svelte:head>

	
	<script>
  import { collection, onSnapshot } from 'firebase/firestore';
  import { getFirestore } from 'firebase/firestore';

  let projects = [];
  const db = getFirestore();
  const query = collection(db, 'catalogs');

  onSnapshot(query, (snapshot) => {
    projects = snapshot.docs.map(doc => doc.data());
  });
</script>

	<body>
	
	<section class="section section--first section--carousel section--bg" data-bg="img/bg.jpg">
		<div class="container">
			<div class="row">
				<div class="col-12">
				    {#each catalogs as catalog (catalog.id)}
					<div class="details">
						<div class="details__head">
							<div class="details__cover">
							    
							    
								<img src="{catalog.image}" alt="">
							</div>

							<div class="details__wrap">
								<h1 class="details__title">{catalog.title}</h1>

								<ul class="details__list">
									<li><span>Category:</span> <a href="/">{catalog.category}</a></li>
									<li><span>Created by:</span> <a href="/">{catalog.creator}</a></li>
									<li><span>Released:</span> {catalog.released}</li>
									<li><span>Last update:</span> {catalog.updated}</li>
									<li><span>Version:</span> {catalog.version}</li>
								</ul>
							</div>
						</div>

						<div class="details__text">
							{catalog.description}
						</div>

						<div class="details__gallery">
							<div class="details__carousel owl-carousel" id="details__carousel">
								<a href="{catalog.img1}" >
									<img src="{catalog.img1}" alt="">
								</a>

								<a href="{catalog.img2}" >
									<img src="{catalog.img2}" alt="">
								</a>

								<a href="{catalog.img3}" >
									<img src="{catalog.img3}" alt="">
								</a>

								<a href="{catalog.img4}" >
									<img src="{catalog.img4}" alt="">
								</a>

								<a href="{catalog.img5}" >
									<img src="{catalog.img5}" alt="">
								</a>

								<a href="{catalog.img6}" >
									<img src="{catalog.img6}" alt="">
								</a>
							</div>

							<button class="details__nav details__nav--prev" data-nav="#details__carousel" type="button">
								<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><polyline points='328 112 184 256 328 400' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg>
							</button>
							<button class="details__nav details__nav--next" data-nav="#details__carousel" type="button">
								<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><polyline points='184 112 328 256 184 400' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg>
							</button>
						</div>

						<div class="details__cart">
							<ul class="details__stat">
								<li><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M394,480a16,16,0,0,1-9.39-3L256,383.76,127.39,477a16,16,0,0,1-24.55-18.08L153,310.35,23,221.2A16,16,0,0,1,32,192H192.38l48.4-148.95a16,16,0,0,1,30.44,0l48.4,149H480a16,16,0,0,1,9.05,29.2L359,310.35l50.13,148.53A16,16,0,0,1,394,480Z'/></svg> <b>{catalog.star}</b></li>

								<li><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M336,176h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V216a40,40,0,0,1,40-40h40' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><polyline points='176 272 256 352 336 272' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='256' y1='48' x2='256' y2='336' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg> <b>{catalog.sale}</b> sales</li>
							</ul>

							<span class="details__cart-title">PRICE</span>
							<div class="details__price">
								<span>${catalog.taka}</span><s>${catalog.rtaka}</s><b>{catalog.off}% OFF</b>
							</div>

							<div class="details__actions">
								<button class="details__buy" type="button">Buy now</button>

								<button class="details__favorite" type="button">
									<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>Add to favorites
								</button>
							</div>
						</div>

						<div class="details__content">
							<div class="row">
								<div class="col-12 col-xl-4 order-xl-2">
									<!-- requirements -->
									<div class="requirements">
										<span class="requirements__title">Specification:</span>
										<ul class="requirements__list">
											<li><span>Category:</span> <a href="{catalog.link}">{catalog.category}</a></li>
											<li><span>Created by:</span> <a href="{catalog.creator}">{catalog.creator}</a></li>
											<li><span>Released:</span> {catalog.released}</li>
											<li><span>Last update:</span> {catalog.update}</li>
											<li><span>Version:</span> {catalog.version}</li>
											<li><span>Tags:</span> 
											{catalog.tags}</li>
										</ul>
									</div>
									<!-- end requirements -->

									<!-- rating -->
									<form action="#" class="form">
										<input type="text" class="form__input" placeholder="Title">
										<textarea class="form__textarea" placeholder="Review"></textarea>
										<div class="form__slider">
											<div class="form__slider-rating" id="slider__rating"></div>
											<div class="form__slider-value" id="form__slider-value"></div>
										</div>
										<button type="button" class="form__btn">Send</button>
									</form>
									<!-- end rating -->
								</div>

								<div class="col-12 col-xl-8 order-xl-1">
									<!-- comments -->
									<div class="comments comments--details">
										<div class="comments__title">
											<h4>Comments</h4>
											<span>{catalog.comname}</span>
										</div>

										<ul class="comments__list">
											<li class="comments__item">
												<div class="comments__autor">
													<img class="comments__avatar" src="{catalog.avatar}" alt="">
													<span class="comments__name">{catalog.com1}</span>
													<span class="comments__time">{catalog.comdate}</span>
												</div>
												<p class="comments__text">{catalog.com}</p>
												<div class="comments__actions">
													<div class="comments__rate">
														<button type="button"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M320,458.16S304,464,256,464s-74-16-96-32H96a64,64,0,0,1-64-64V320a64,64,0,0,1,64-64h30a32.34,32.34,0,0,0,27.37-15.4S162,221.81,188,176.78,264,64,272,48c29,0,43,22,34,47.71-10.28,29.39-23.71,54.38-27.46,87.09-.54,4.78,3.14,12,7.95,12L416,205' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M416,271l-80-2c-20-1.84-32-12.4-32-30h0c0-17.6,14-28.84,32-30l80-4c17.6,0,32,16.4,32,34v.17A32,32,0,0,1,416,271Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><path d='M448,336l-112-2c-18-.84-32-12.41-32-30h0c0-17.61,14-28.86,32-30l112-2a32.1,32.1,0,0,1,32,32h0A32.1,32.1,0,0,1,448,336Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><path d='M400,464l-64-3c-21-1.84-32-11.4-32-29h0c0-17.6,14.4-30,32-30l64-2a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,400,464Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><path d='M432,400l-96-2c-19-.84-32-12.4-32-30h0c0-17.6,13-28.84,32-30l96-2a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,432,400Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/></svg>{catalog.like}</button>

														<button type="button">{catalog.dislike} <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M192,53.84S208,48,256,48s74,16,96,32h64a64,64,0,0,1,64,64v48a64,64,0,0,1-64,64H386a32.34,32.34,0,0,0-27.37,15.4S350,290.19,324,335.22,248,448,240,464c-29,0-43-22-34-47.71,10.28-29.39,23.71-54.38,27.46-87.09.54-4.78-3.14-12-8-12L96,307' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M96,241l80,2c20,1.84,32,12.4,32,30h0c0,17.6-14,28.84-32,30l-80,4c-17.6,0-32-16.4-32-34v-.17A32,32,0,0,1,96,241Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><path d='M64,176l112,2c18,.84,32,12.41,32,30h0c0,17.61-14,28.86-32,30L64,240a32.1,32.1,0,0,1-32-32h0A32.1,32.1,0,0,1,64,176Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><path d='M112,48l64,3c21,1.84,32,11.4,32,29h0c0,17.6-14.4,30-32,30l-64,2A32.09,32.09,0,0,1,80,80h0A32.09,32.09,0,0,1,112,48Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><path d='M80,112l96,2c19,.84,32,12.4,32,30h0c0,17.6-13,28.84-32,30l-96,2a32.09,32.09,0,0,1-32-32h0A32.09,32.09,0,0,1,80,112Z' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/></svg></button>
													</div>

													<button type="button"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><polyline points='400 160 464 224 400 288' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M448,224H154C95.24,224,48,273.33,48,332v20' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg><span>Reply</span></button>
													<button type="button"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><polyline points='320 120 368 168 320 216' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M352,168H144a80.24,80.24,0,0,0-80,80v16' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><polyline points='192 392 144 344 192 296' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M160,344H368a80.24,80.24,0,0,0,80-80V248' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg><span>Quote</span></button>
												</div>
											</li>

										
										</ul>

										<form action="#" class="form">
											<textarea id="text" name="text" class="form__textarea" placeholder="Add comment"></textarea>
											<button type="button" class="form__btn">Send</button>
										</form>
									</div>
									<!-- end comments -->
								</div>
							</div>
						</div>
					</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	
	</body>
	<!-- CSS -->
	
	<!-- Favicons -->
	
