import React from 'react'
import "./footer.css"
import footerpic from "./../../images/shop/footer-pic.png"
export default function Footer() {
  return (
    <div>
      <footer class="site-footer back-main style-1">
		{/* <!-- Footer Top --> */}
			<div class="footer-top">
				<div class="container">
					<div class="footer-bg-img">
						<img src={footerpic} alt="/"/>
					</div>
					<div class="row">
						<div class="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" >
							<div class="widget widget_about me-2">
							<div class="footer-logo logo-white">
								<a href="index.html"><img src="images/shop/2nd-logo.png" alt=""/></a> 
							</div>
							<ul class="widget-address">
								<li>
									<p class="title">Address : 451 Wall Street, UK, London</p>
								</li>
								<li>
									<p class="title">E-mail: example@info.com</p>
								</li>
								<li>
									<p class="title">Phone : (064) 332-1233</p>
								</li>
							</ul>
							<div class="subscribe_widget">
								<h6 class="title fw-medium text-capitalize">subscribe to our newsletter</h6>	
								<div class="dzSubscribe" >
									<div class="dzSubscribeMsg"></div>
									<div class="form-group">
										<div class="input-group mb-0">
											<input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email Address"/>
											<div class="input-group-addon">
												<button name="submit" value="Submit" type="submit" class="btn">
													<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M4.16667 10.5576H15.8333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M10 4.72412L15.8333 10.5575L10 16.3908" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div class="col-xl-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
							<div class="widget widget_post">
							<h5 class="footer-title">Recent Posts</h5>
							<ul>
								<li>
									<div class="dz-media">
										<img src="images/shop/sm-1.png" alt=""/>
									</div>
									<div class="dz-content">
										<h6 class="name"><a href="post-standard.html" target="_blank">Dog Harness Body Belt</a></h6>
										<span class="time">July 23, 2023</span>
									</div>
								</li>
								<li>
									<div class="dz-media">
										<img src="images/shop/sm-2.png" alt=""/>
									</div>
									<div class="dz-content">
										<h6 class="name"><a href="post-standard.html" target="_blank">Pet Beds for Small</a></h6>
										<span class="time">July 23, 2023</span>
									</div>
								</li>
								<li>
									<div class="dz-media">
										<img src="images/shop/sm-3.png" alt=""/>
									</div>
									<div class="dz-content">
										<h6 class="name"><a href="post-standard.html" target="_blank">Goofy Tails Wood Dog</a></h6>
										<span class="time">July 23, 2023</span>
									</div>
								</li>
							</ul>
						</div>
						</div>
						<div class="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp mt-4 mt-md-0" data-wow-delay="0.3s" >
						<div class="widget widget_services">
							<h5 class="footer-title">Our Stores</h5>
							<ul>
								<li><a href="javascript:void(0);">New York</a></li>
								<li><a href="javascript:void(0);">London SF</a></li>
								<li><a href="javascript:void(0);">Edinburgh</a></li>
								<li><a href="javascript:void(0);">Los Angeles</a></li>
								<li><a href="javascript:void(0);">Chicago</a></li>
								<li><a href="javascript:void(0);">Las Vegas</a></li>
							</ul>   
						</div>
					</div>
						<div class="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp mt-4 mt-xl-0" data-wow-delay="0.4s" >
						<div class="widget widget_services">
							<h5 class="footer-title">Useful Links</h5>
							<ul>
								<li><a href="javascript:void(0);">Privacy Policy</a></li>
								<li><a href="javascript:void(0);">Returns</a></li>
								<li><a href="javascript:void(0);">Terms &amp; Conditions</a></li>
								<li><a href="javascript:void(0);">Contact Us</a></li>
								<li><a href="javascript:void(0);">Latest News</a></li>
								<li><a href="javascript:void(0);">Our Sitemap</a></li>
							</ul>
						</div>
					</div>
						<div class="col-xl-2 col-md-3 col-sm-4 wow fadeInUp mt-4 mt-xl-0" data-wow-delay="0.5s">
							<div class="widget widget_services">
								<h5 class="footer-title">Footer Menu</h5>
								<ul>
									<li><a href="javascript:void(0);">Instagram profile</a></li>
									<li><a href="javascript:void(0);">New Collection</a></li>
									<li><a href="javascript:void(0);">Woman Dress</a></li>
									<li><a href="javascript:void(0);">Contact Us</a></li>
									<li><a href="javascript:void(0);">Latest News</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/* <!-- Footer Top End --> */}
		

			<div class="footer-bottom">
				<div class="container">
					
				</div>
			</div>
	
		
		</footer>
    </div>
  )
}
