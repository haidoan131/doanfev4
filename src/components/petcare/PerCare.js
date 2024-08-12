import React, { useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import "./petcare.css"
import ser1 from "./../../images/shop/ser-1.png"
import star from "./../../images/shop/star.jpg"
import ser2 from "./../../images/shop/ser-2.png"
import ser3 from "./../../images/shop/ser-3.png"
import ser4 from "./../../images/shop/ser-4.png"
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import sli2 from "./../../images/companies/sli-2.png"
import sli1 from "./../../images/companies/sli-1.png"
import sli3 from "./../../images/companies/sli-3.png"
import sli4 from "./../../images/companies/sli-4.png"
import sli5 from "./../../images/companies/sli-5.png"
import sli6 from "./../../images/companies/sli-6.png"
import sli7 from "./../../images/companies/sli-7.png"
export default function PerCare() {
	const [isOpen, setOpen] = useState(false);

	const handleOpenModal = () => {
		setOpen(true);
	};
	const spacing = 140; // Example value for marginRight

    const style = {
        width: '23.1429px',
        marginRight: `${spacing}px` // Using template literal to append 'px'
    };
	const style2 = {
		transitionDuration: '0ms',
		transform: 'translate3d(-978.857px, 0px, 0px)',
		transitionDelay: '0ms'
	  };
	return (
		<div className='bg-light pt-5'>
			<Container className="petcare">
				<div class="row">

					{/* <div class="col-4">

					</div>
					<div class="col-8">
						<div class="row">
							<div class="col-6">

							</div>
							<div class="col-6">

							</div>
						</div>
					</div> */}
					<div class="col-lg-4 col-md-12">
						<h2 class="mb-3 wow flipInX" data-aos="flip-left" data-aos-duration="1000"  >Our Pet Care Services</h2>
						<ul class="service-list me-3 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							<li>
								<a href="javascript:void(0);" class="" id="v-pills-service1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service1" role="tab" aria-controls="v-pills-service1" aria-selected="false" tabindex="-1">Pet Grooming
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.73437 16.9505H30.9174L24.2481 10.467C23.7384 9.9719 24.4943 9.18384 25.0107 9.68303C25.0107 9.68299 32.6469 17.1064 32.6469 17.1064C32.8698 17.3093 32.852 17.6756 32.6469 17.8904C32.6469 17.8904 25.0107 25.317 25.0107 25.317C24.4968 25.8102 23.7366 25.0368 24.2481 24.533C24.2481 24.533 30.9199 18.0442 30.9199 18.0442H2.73437C2.03551 18.0376 1.99952 16.9638 2.73437 16.9505Z" fill="black"></path>
								</svg>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" id="v-pills-service2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service2" role="tab" aria-controls="v-pills-service2" aria-selected="true" class="active">Dog Boarding Kennels
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.73437 16.9505H30.9174L24.2481 10.467C23.7384 9.9719 24.4943 9.18384 25.0107 9.68303C25.0107 9.68299 32.6469 17.1064 32.6469 17.1064C32.8698 17.3093 32.852 17.6756 32.6469 17.8904C32.6469 17.8904 25.0107 25.317 25.0107 25.317C24.4968 25.8102 23.7366 25.0368 24.2481 24.533C24.2481 24.533 30.9199 18.0442 30.9199 18.0442H2.73437C2.03551 18.0376 1.99952 16.9638 2.73437 16.9505Z" fill="black"></path>
								</svg>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" id="v-pills-service3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service3" role="tab" aria-controls="v-pills-service3" aria-selected="false" class="" tabindex="-1">Dog Training
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.73437 16.9505H30.9174L24.2481 10.467C23.7384 9.9719 24.4943 9.18384 25.0107 9.68303C25.0107 9.68299 32.6469 17.1064 32.6469 17.1064C32.8698 17.3093 32.852 17.6756 32.6469 17.8904C32.6469 17.8904 25.0107 25.317 25.0107 25.317C24.4968 25.8102 23.7366 25.0368 24.2481 24.533C24.2481 24.533 30.9199 18.0442 30.9199 18.0442H2.73437C2.03551 18.0376 1.99952 16.9638 2.73437 16.9505Z" fill="black"></path>
								</svg>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" id="v-pills-service4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service4" role="tab" aria-controls="v-pills-service4" aria-selected="false" class="" tabindex="-1">Dog Emergency Services
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.73437 16.9505H30.9174L24.2481 10.467C23.7384 9.9719 24.4943 9.18384 25.0107 9.68303C25.0107 9.68299 32.6469 17.1064 32.6469 17.1064C32.8698 17.3093 32.852 17.6756 32.6469 17.8904C32.6469 17.8904 25.0107 25.317 25.0107 25.317C24.4968 25.8102 23.7366 25.0368 24.2481 24.533C24.2481 24.533 30.9199 18.0442 30.9199 18.0442H2.73437C2.03551 18.0376 1.99952 16.9638 2.73437 16.9505Z" fill="black"></path>
								</svg>
								</a>
							</li>
							<li class="border-0 pb-0">
								<a href="javascript:void(0);" id="v-pills-service5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service5" role="tab" aria-controls="v-pills-service5" aria-selected="false" class="" tabindex="-1">Walking and sitting
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.73437 16.9505H30.9174L24.2481 10.467C23.7384 9.9719 24.4943 9.18384 25.0107 9.68303C25.0107 9.68299 32.6469 17.1064 32.6469 17.1064C32.8698 17.3093 32.852 17.6756 32.6469 17.8904C32.6469 17.8904 25.0107 25.317 25.0107 25.317C24.4968 25.8102 23.7366 25.0368 24.2481 24.533C24.2481 24.533 30.9199 18.0442 30.9199 18.0442H2.73437C2.03551 18.0376 1.99952 16.9638 2.73437 16.9505Z" fill="black"></path>
								</svg>
								</a>
							</li>
						</ul>
					</div>
					<div class="col-lg-8 col-md-12 mt-xl-0 mt-5 tab-content" id="v-pills-tabContent">
						<div class="tab-pane fade" id="v-pills-service1" role="tabpanel" aria-labelledby="v-pills-service1-tab" tabindex="0">
							<div class="row">
								<div class="col-lg-6 col-md-6 mb-md-0 mb-4">
									<div class="service-content-box">
										<div class="d-flex align-items-center mb-2">
											<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_0_369)">
												<path d="M15.8082 21.1336L2.44376 1.87134L2.06611 3.95966C1.45499 7.34642 2.19817 10.7687 4.15946 13.5949L11.2495 23.814C10.7055 25.1461 10.8176 26.716 11.697 27.9836C13.0765 29.9714 15.8178 30.4729 17.8125 29.0891C19.8029 27.708 20.2991 24.9641 18.918 22.9726C18.1698 21.8951 17.0199 21.2737 15.8082 21.1336ZM16.81 27.6455C15.6177 28.4729 13.9691 28.1767 13.1408 26.9811C12.3125 25.7872 12.6102 24.1409 13.8034 23.3118C14.9991 22.4835 16.6452 22.7813 17.4744 23.9745C18.3025 25.1701 18.0048 26.8163 16.81 27.6455Z" fill="black"></path>
												<path d="M15.5406 13.6654C17.5026 10.8389 18.246 7.41692 17.634 4.02992L17.2563 1.94183L10.9442 11.0399L14.1534 15.6647L15.5406 13.6654Z" fill="black"></path>
												<path d="M5.59546 18.7486L3.89327 21.2018C2.52272 21.3597 1.48063 22.0386 0.782765 23.0431C-0.598995 25.0337 -0.103008 27.7776 1.88826 29.1595C3.87336 30.5381 6.62063 30.0471 8.00376 28.054C8.88335 26.7858 8.99482 25.2155 8.45054 23.8834L8.80416 23.3736L5.59546 18.7486ZM6.5602 27.0515C5.72936 28.2463 4.08141 28.5416 2.89008 27.7158C1.69509 26.8867 1.39823 25.2397 2.22655 24.0456C3.05602 22.8511 4.69619 22.5494 5.89576 23.3823C7.09052 24.2113 7.3883 25.8577 6.5602 27.0515Z" fill="black"></path>
												<path d="M27.3633 0H19.4531V1.75781H24.7266V3.51562H19.4531V5.27344H24.7266V7.03125H19.4531V8.78906H24.7266V10.5469H19.4531V12.3047H24.7266V14.0625H19.4531V15.8203H24.7266V17.5781H19.4531V19.3359H24.7266V27.3633C24.7266 28.8171 25.9094 30 27.3633 30C28.8174 30 30 28.8171 30 27.3633V2.63672C30 1.18286 28.8174 0 27.3633 0Z" fill="black"></path>
												</g>
												<defs>
												<clipPath id="clip0_0_369">
												<rect width="30" height="30" fill="white"></rect>
												</clipPath>
												</defs>
											</svg>
											<h5 class="ms-3 mb-0">Pet Grooming</h5>
										</div>	
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
										<a href="#" class="btn btn-secondary">Add Service  
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
												<path d="M15.0375 13.0662C14.217 12.2892 13.13 11.8562 12 11.8562C10.87 11.8562 9.78297 12.2892 8.9625 13.0662L5.29875 16.5312C3.19875 18.44 4.71375 22.0887 7.54875 21.9462C9.08625 21.905 10.335 21.1175 11.9962 21.1475C13.7175 21.1175 14.9962 21.8112 16.5412 21.9462C19.3275 22.01 20.7675 18.4025 18.6975 16.5312L15.0375 13.0662Z" fill="white"></path>
												<path d="M21.345 7.97375C19.9125 7.6925 18.8175 9.28625 18.5325 10.6587C17.6775 14.9075 21.795 15.7175 22.7588 11.5962C23.1525 9.83 22.53 8.23625 21.345 7.97375Z" fill="white"></path>
												<path d="M15.2737 10.2688C16.6987 10.2688 17.8575 8.64876 17.8575 6.66126C17.715 1.87626 12.8325 1.87626 12.6937 6.66126C12.6937 8.64876 13.8525 10.2688 15.2737 10.2688Z" fill="white"></path>
												<path d="M5.4675 10.6587C5.18625 9.28625 4.0875 7.6925 2.655 7.97375C-8.34465e-07 8.645 1.125 14.3037 3.72 14.3187C5.19 14.27 5.86875 12.5637 5.4675 10.6587Z" fill="white"></path>
												<path d="M8.72625 10.2688C10.1475 10.2688 11.3063 8.64876 11.3063 6.66126C11.1675 1.87626 6.285 1.87626 6.1425 6.66126C6.1425 8.64876 7.30125 10.2688 8.72625 10.2688Z" fill="white"></path>
											</svg>
										</a>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="row">
										<div class="col-lg-12 col-md-12 mt-md-0 mt-5">
											<div class="offer-card">
												<img src={ser1} alt="/"/>
												<div class="offer-content">
													<span class="title">50%<br/>Sale</span>
													<img src={star} class="rounded-0" alt="/"/>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">			
											<div class="dz-media video-bx1 mt-4">
												<img src={ser2} alt="/"/>
												<a  onClick={handleOpenModal} class="popup-youtube">
													<div class=" video-btn">
														<svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0.709318 2.07991C0.703817 0.454314 2.53706 -0.498418 3.86423 0.440304L24.3738 14.947C25.4952 15.7401 25.5017 17.4016 24.3866 18.2035L3.97574 32.8813C2.65517 33.8309 0.813587 32.8908 0.808083 31.2643L0.709318 2.07991Z" fill="black"></path>
														</svg>
													</div>
													<span class="title">PLAY VIDEO</span>
												</a>	
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade active show" id="v-pills-service2" role="tabpanel" aria-labelledby="v-pills-service2-tab" tabindex="0">
							<div class="row">
								<div class="col-lg-6 col-md-6 mb-md-0 mb-4">
									<div class="service-content-box">
										<div class="d-flex align-items-center mb-2">
											<svg height="30" viewBox="-2 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m254.230469 237.660156c2.320312 0 8-5.976562 8-17.054687 0-11.074219-5.679688-17.050781-8-17.050781-2.324219 0-8.003907 5.976562-8.003907 17.050781 0 11.078125 5.679688 17.054687 8.003907 17.054687zm0 0"></path><path d="m255.234375 321.429688c-.335937-.003907-.671875-.007813-1.007813-.007813-18.984374 0-36.832031 7.3125-50.359374 20.65625-13.769532 13.585937-21.355469 31.71875-21.355469 51.0625 0 .820313.015625 1.636719.042969 2.453125.089843 2.707031 1.917968 3.945312 3.003906 4.441406 1.0625.492188 3.15625 1.066406 5.226562-.59375 17.921875-14.339844 40.453125-22.238281 63.445313-22.238281 22.988281 0 45.519531 7.898437 63.4375 22.238281 2.0625 1.652344 4.144531 1.085938 5.199219.597656 1.097656-.503906 2.949218-1.765624 3.039062-4.535156l.023438-.910156c.386718-19.125-6.800782-37.328125-20.242188-51.230469-13.421875-13.882812-31.339844-21.671875-50.453125-21.933593zm0 0"></path><path d="m180.574219 251.789062c0-11.078124-5.679688-17.050781-8-17.050781-2.320313 0-8 5.972657-8 17.050781 0 11.078126 5.679687 17.050782 8 17.050782 2.320312 0 8-5.972656 8-17.050782zm0 0"></path><path d="m489.363281 227.539062 18.515625-23.453124-81.949218-64.695313.253906-139.390625h-104.644532v56.976562l-68.773437-54.292968-252.765625 204.339844 18.785156 23.238281 41.886719-33.863281v285.71875h-30.554687v29.882812h456.191406v-29.882812h-36.175782v-285.550782zm-235.132812-53.867187c21.242187 0 37.882812 20.617187 37.882812 46.933594 0 26.320312-16.640625 46.933593-37.882812 46.933593-21.246094 0-37.882813-20.613281-37.882813-46.933593 0-26.316407 16.636719-46.933594 37.882813-46.933594zm-119.539063 78.117187c0-26.316406 16.640625-46.933593 37.882813-46.933593 21.242187 0 37.882812 20.617187 37.882812 46.933593 0 26.316407-16.640625 46.933594-37.882812 46.933594-21.242188 0-37.882813-20.617187-37.882813-46.933594zm221.117188 143.429688c-.011719.4375-.023438.847656-.035156 1.257812-.429688 13.335938-8.25 25.101563-20.402344 30.703126-12.082032 5.566406-26.019532 3.878906-36.375-4.410157-12.820313-10.261719-28.300782-15.683593-44.765625-15.683593-16.464844 0-31.949219 5.421874-44.769531 15.6875-6.308594 5.046874-13.957032 7.648437-21.703126 7.648437-4.960937 0-9.964843-1.066406-14.6875-3.238281-12.125-5.574219-19.933593-17.296875-20.378906-30.585938-.039062-1.144531-.058594-2.300781-.058594-3.457031 0-27.402344 10.742188-53.089844 30.25-72.332031 19.507813-19.242188 45.351563-29.65625 72.761719-29.257813 27.128907.371094 52.53125 11.394531 71.527344 31.042969 19.011719 19.667969 29.183594 45.460938 28.636719 72.625zm-19.921875-96.496094c-21.242188 0-37.882813-20.617187-37.882813-46.933594 0-26.316406 16.640625-46.933593 37.882813-46.933593 21.242187 0 37.882812 20.617187 37.882812 46.933593 0 26.316407-16.640625 46.933594-37.882812 46.933594zm0 0"></path><path d="m335.886719 234.738281c-2.324219 0-8.003907 5.972657-8.003907 17.050781 0 11.078126 5.679688 17.050782 8.003907 17.050782 2.320312 0 8-5.972656 8-17.050782 0-11.078124-5.679688-17.050781-8-17.050781zm0 0"></path></svg>
											<h5 class="ms-3 mb-0">Dog Boarding Kennels</h5>
										</div>	
										<p>In addition to our extensive collection, we're equally devoted to ensuring your shopping experience is seamless and enjoyable. Our website is designed with your convenience in mind, offering secure transactions and a responsive customer support team to assist you every step of the way.</p>
										<a href="#" class="btn btn-secondary">Add Service  
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
												<path d="M15.0375 13.0662C14.217 12.2892 13.13 11.8562 12 11.8562C10.87 11.8562 9.78297 12.2892 8.9625 13.0662L5.29875 16.5312C3.19875 18.44 4.71375 22.0887 7.54875 21.9462C9.08625 21.905 10.335 21.1175 11.9962 21.1475C13.7175 21.1175 14.9962 21.8112 16.5412 21.9462C19.3275 22.01 20.7675 18.4025 18.6975 16.5312L15.0375 13.0662Z" fill="white"></path>
												<path d="M21.345 7.97375C19.9125 7.6925 18.8175 9.28625 18.5325 10.6587C17.6775 14.9075 21.795 15.7175 22.7588 11.5962C23.1525 9.83 22.53 8.23625 21.345 7.97375Z" fill="white"></path>
												<path d="M15.2737 10.2688C16.6987 10.2688 17.8575 8.64876 17.8575 6.66126C17.715 1.87626 12.8325 1.87626 12.6937 6.66126C12.6937 8.64876 13.8525 10.2688 15.2737 10.2688Z" fill="white"></path>
												<path d="M5.4675 10.6587C5.18625 9.28625 4.0875 7.6925 2.655 7.97375C-8.34465e-07 8.645 1.125 14.3037 3.72 14.3187C5.19 14.27 5.86875 12.5637 5.4675 10.6587Z" fill="white"></path>
												<path d="M8.72625 10.2688C10.1475 10.2688 11.3063 8.64876 11.3063 6.66126C11.1675 1.87626 6.285 1.87626 6.1425 6.66126C6.1425 8.64876 7.30125 10.2688 8.72625 10.2688Z" fill="white"></path>
											</svg>
										</a>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="row">
										<div class="col-lg-12 col-md-12 mt-md-0 mt-5">
											<div class="offer-card">
												<img src={ser3} alt="/"/>
												<div class="offer-content">
													<span class="title">50%<br/>Sale</span>
													<img src={star} class="rounded-0" alt="/"/>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">			
											<div class="dz-media video-bx1 mt-4">
												<img src={ser2} alt="/"/>
												<a  onClick={handleOpenModal} class="popup-youtube">
													<div class=" video-btn">
														<svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0.709318 2.07991C0.703817 0.454314 2.53706 -0.498418 3.86423 0.440304L24.3738 14.947C25.4952 15.7401 25.5017 17.4016 24.3866 18.2035L3.97574 32.8813C2.65517 33.8309 0.813587 32.8908 0.808083 31.2643L0.709318 2.07991Z" fill="black"></path>
														</svg>
													</div>
													<span class="title">PLAY VIDEO</span>
												</a>	
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-service3" role="tabpanel" aria-labelledby="v-pills-service3-tab" tabindex="0">
							<div class="row">
								<div class="col-lg-6 col-md-6 mb-md-0 mb-4">
									<div class="service-content-box">
										<div class="d-flex align-items-center mb-2">	
											<svg xmlns="http://www.w3.org/2000/svg" id="Icons" viewBox="0 0 60 60" width="30" height="30"><path d="M30.036,32.328a2.56,2.56,0,0,0,.949-1.647A2.4,2.4,0,0,0,28.59,28H23.41a2.4,2.4,0,0,0-2.395,2.681,2.558,2.558,0,0,0,.948,1.646l2.564,2.14a2.3,2.3,0,0,0,2.947,0Z"></path><path d="M23.313,43.74A12.439,12.439,0,0,0,26,44c.192,0,.366-.01.547-.017l1.2-1.2L26,40.6l-1.8,2.251A5.766,5.766,0,0,1,23.313,43.74Z"></path><path d="M22.641,41.6,25,38.65V36.867A4.268,4.268,0,0,1,23.246,36l-2.563-2.14a4.512,4.512,0,0,1-1.658-2.973A4.4,4.4,0,0,1,23.41,26h5.18a4.4,4.4,0,0,1,4.385,4.89,4.516,4.516,0,0,1-1.658,2.974L28.754,36A4.258,4.258,0,0,1,27,36.867V38.65l2.168,2.714,6.045-6.042c.253-.253.519-.484.787-.713V29a1,1,0,0,1,2,0v4.19a13.576,13.576,0,0,1,2.059-.977C40.023,31.808,40,31.4,40,30.99a26.449,26.449,0,0,1,1.111-7.464A19.927,19.927,0,0,0,42,18c0-5.4-1.7-7.287-1.719-7.3a1.007,1.007,0,0,1,.031-1.408.994.994,0,0,1,1.4.006C41.942,9.527,44,11.766,44,18a21.878,21.878,0,0,1-.956,6.041A24.418,24.418,0,0,0,42,30.99c0,.214.012.425.023.636a13.514,13.514,0,0,1,1.873-.248,11.559,11.559,0,0,1,1.383-1.86A16.809,16.809,0,0,0,50,18.14V18A13.015,13.015,0,0,0,37,5a1,1,0,0,1-.832-.445A4.876,4.876,0,0,0,34.46,3.407C33.065,2.766,30.464,2,26,2,17.9,2,15.849,4.529,15.832,4.555A1,1,0,0,1,15,5,13,13,0,0,0,2,18v.14A16.81,16.81,0,0,0,6.722,29.519a12.258,12.258,0,0,1,2.767,4.907,12.551,12.551,0,0,0,.454-2.3A11.257,11.257,0,0,0,10,30.99a24.418,24.418,0,0,0-1.044-6.949A21.878,21.878,0,0,1,8,18c0-6.234,2.058-8.473,2.293-8.707a1,1,0,0,1,1.425,1.4C11.662,10.759,10,12.664,10,18a19.927,19.927,0,0,0,.889,5.526A26.449,26.449,0,0,1,12,30.99c0,.305-.025.6-.044.888A19.729,19.729,0,0,0,14,33.953V29a1,1,0,0,1,2,0V39.27A3.745,3.745,0,0,0,19.73,43,3.721,3.721,0,0,0,22.641,41.6Zm8.7-24.7h0c.729-1.083,2.239-2.9,4.162-2.9s3.433,1.817,4.162,2.9a1.965,1.965,0,0,1,0,2.2c-.73,1.084-2.24,2.9-4.163,2.9s-3.433-1.817-4.162-2.9A1.965,1.965,0,0,1,31.337,16.9ZM16.5,22c-1.923,0-3.433-1.817-4.162-2.9a1.965,1.965,0,0,1,0-2.2c.73-1.084,2.24-2.9,4.163-2.9s3.433,1.817,4.162,2.9h0a1.965,1.965,0,0,1,0,2.2C19.933,20.183,18.423,22,16.5,22Z"></path><path d="M16.5,16c-.717,0-1.653.754-2.5,2.018C14.847,19.246,15.783,20,16.5,20s1.645-.747,2.491-2C18.145,16.747,17.214,16,16.5,16Z"></path><path d="M44.815,33.328a11.592,11.592,0,0,0-8.188,3.408l-9.741,9.736,1.821,1.821a1,1,0,1,1-1.414,1.414l-1.821-1.822-6.955,6.951a1,1,0,0,0,0,1.416l1.468,1.457a1.006,1.006,0,0,0,1.382.033c7-6.1,12.99-4.733,18.274-3.526,4.635,1.058,8.64,1.972,12.822-2.2a11,11,0,0,0-.147-15.7A10.727,10.727,0,0,0,44.815,33.328Zm5.522,16.559a7.934,7.934,0,0,1-5.646,2.347h-.007a8.015,8.015,0,1,1,5.653-2.347Z"></path><path d="M57.413,34.331a2,2,0,0,0-2.829,0,1.975,1.975,0,0,0-.52.922,12.977,12.977,0,0,1,1.88,2.485,1.994,1.994,0,0,0,1.469-3.407Z"></path><path d="M35.5,20c.717,0,1.653-.754,2.5-2.018C37.153,16.754,36.217,16,35.5,16s-1.653.754-2.5,2.017h0C33.847,19.246,34.783,20,35.5,20Z"></path><path d="M44.684,38.235a6,6,0,1,0,0,12h.005a5.945,5.945,0,0,0,4.232-1.76l0,0a5.995,5.995,0,0,0-4.24-10.237Z"></path></svg>

										<h5 class="ms-3 mb-0">Dog Training</h5>
										</div>	
										<p>At PetPerks, we're dedicated to creating an exclusive fashion destination that transcends the ordinary. Our passion for style, quality, and individuality drives our mission. Our collection is a carefully blend of timeless classics &amp; the latest trends</p>
										<a href="#" class="btn btn-secondary">Add Service  
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
												<path d="M15.0375 13.0662C14.217 12.2892 13.13 11.8562 12 11.8562C10.87 11.8562 9.78297 12.2892 8.9625 13.0662L5.29875 16.5312C3.19875 18.44 4.71375 22.0887 7.54875 21.9462C9.08625 21.905 10.335 21.1175 11.9962 21.1475C13.7175 21.1175 14.9962 21.8112 16.5412 21.9462C19.3275 22.01 20.7675 18.4025 18.6975 16.5312L15.0375 13.0662Z" fill="white"></path>
												<path d="M21.345 7.97375C19.9125 7.6925 18.8175 9.28625 18.5325 10.6587C17.6775 14.9075 21.795 15.7175 22.7588 11.5962C23.1525 9.83 22.53 8.23625 21.345 7.97375Z" fill="white"></path>
												<path d="M15.2737 10.2688C16.6987 10.2688 17.8575 8.64876 17.8575 6.66126C17.715 1.87626 12.8325 1.87626 12.6937 6.66126C12.6937 8.64876 13.8525 10.2688 15.2737 10.2688Z" fill="white"></path>
												<path d="M5.4675 10.6587C5.18625 9.28625 4.0875 7.6925 2.655 7.97375C-8.34465e-07 8.645 1.125 14.3037 3.72 14.3187C5.19 14.27 5.86875 12.5637 5.4675 10.6587Z" fill="white"></path>
												<path d="M8.72625 10.2688C10.1475 10.2688 11.3063 8.64876 11.3063 6.66126C11.1675 1.87626 6.285 1.87626 6.1425 6.66126C6.1425 8.64876 7.30125 10.2688 8.72625 10.2688Z" fill="white"></path>
											</svg>
										</a>
									</div>	
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="row">
										<div class="col-lg-12 col-md-12 mt-md-0 mt-5">
											<div class="offer-card">
												<img src={ser4}alt="/"/>
												<div class="offer-content">
													<span class="title">50%<br/>Sale</span>
													<img src={star} class="rounded-0" alt="/"/>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">			
											<div class="dz-media video-bx1 mt-4">
												<img src={ser2} alt="/"/>
												<a  onClick={handleOpenModal} class="popup-youtube">
													<div class=" video-btn">
														<svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0.709318 2.07991C0.703817 0.454314 2.53706 -0.498418 3.86423 0.440304L24.3738 14.947C25.4952 15.7401 25.5017 17.4016 24.3866 18.2035L3.97574 32.8813C2.65517 33.8309 0.813587 32.8908 0.808083 31.2643L0.709318 2.07991Z" fill="black"></path>
														</svg>
													</div>
													<span class="title">PLAY VIDEO</span>
												</a>	
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-service4" role="tabpanel" aria-labelledby="v-pills-service4-tab" tabindex="0">
							<div class="row">
								<div class="col-lg-6 col-md-6 mb-md-0 mb-4">
									<div class="service-content-box">
										<div class="d-flex align-items-center mb-2">
											<svg id="Capa_1" enable-background="new 0 0 512.001 512.001" height="30" viewBox="0 0 512.001 512.001" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m90.724 241.811c-27.018 5.496-90.723 29.516-90.723 133.191 0 8.284 6.716 15 15 15s15-6.716 15-15c0-49.92 17.012-76.161 35.342-89.951-2.82 9.492-4.342 19.543-4.342 29.951v182c0 8.28 6.72 15 15 15h59.57c8.08 0 15.03-6.2 15.41-14.27.41-8.61-6.46-15.73-14.98-15.73h-9.33l20.49-62.83c.71-.11 1.42-.22 2.12-.35 27.16-4.86 46.66-28.96 46.7-56.55l.02-17.27c0-8.52 7.12-15.39 15.73-14.98 8.07.38 14.27 7.33 14.27 15.41v44.57h48.29l-45-180h-63.29c-29.526-.001-56.199 12.191-75.277 31.809z"></path><path d="m260.161 209.812 45.05 180.19h25.79v107c0 8.28 6.72 15 15 15h59.57c8.08 0 15.03-6.2 15.41-14.27.41-8.61-6.46-15.73-14.98-15.73h-10.86l25.43-103.42c.28-1.17.43-2.37.43-3.58v-91.97l-131.68-87.79c-7.35 8.099-17.63 13.509-29.16 14.57z"></path><path d="m497.001 150.001h-31c-8.22 0-15.03-6.61-15-14.83.09-24.89-20.13-45.17-45-45.17h-15v-15c0-8.23-6.64-14.99-14.87-15-41.42-.07-75.13 33.61-75.13 75 0 0-.01 31.3-.04 31.94l120.04 80.03v-6.97h46c24.85 0 45-20.15 45-45v-30c0-8.28-6.72-15-15-15z"></path><path d="m148.001 6.001c-4.97-6.63-14.37-7.97-21-3s-7.97 14.37-3 21l88.176 117.565 17.114 68.435h26.71c1.4 0 2.79-.06 4.16-.19l-10.2-40.81 39.36 26.24c6.85-7.54 11.18-17.43 11.64-28.3l-64.5-43z"></path></g></svg>
										<h5 class="ms-3 mb-0">Dog Emergency Services</h5>
										</div>	
										<p>Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
										<a href="#" class="btn btn-secondary">Add Service  
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
												<path d="M15.0375 13.0662C14.217 12.2892 13.13 11.8562 12 11.8562C10.87 11.8562 9.78297 12.2892 8.9625 13.0662L5.29875 16.5312C3.19875 18.44 4.71375 22.0887 7.54875 21.9462C9.08625 21.905 10.335 21.1175 11.9962 21.1475C13.7175 21.1175 14.9962 21.8112 16.5412 21.9462C19.3275 22.01 20.7675 18.4025 18.6975 16.5312L15.0375 13.0662Z" fill="white"></path>
												<path d="M21.345 7.97375C19.9125 7.6925 18.8175 9.28625 18.5325 10.6587C17.6775 14.9075 21.795 15.7175 22.7588 11.5962C23.1525 9.83 22.53 8.23625 21.345 7.97375Z" fill="white"></path>
												<path d="M15.2737 10.2688C16.6987 10.2688 17.8575 8.64876 17.8575 6.66126C17.715 1.87626 12.8325 1.87626 12.6937 6.66126C12.6937 8.64876 13.8525 10.2688 15.2737 10.2688Z" fill="white"></path>
												<path d="M5.4675 10.6587C5.18625 9.28625 4.0875 7.6925 2.655 7.97375C-8.34465e-07 8.645 1.125 14.3037 3.72 14.3187C5.19 14.27 5.86875 12.5637 5.4675 10.6587Z" fill="white"></path>
												<path d="M8.72625 10.2688C10.1475 10.2688 11.3063 8.64876 11.3063 6.66126C11.1675 1.87626 6.285 1.87626 6.1425 6.66126C6.1425 8.64876 7.30125 10.2688 8.72625 10.2688Z" fill="white"></path>
											</svg>
										</a>
									</div>			
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="row">
										<div class="col-lg-12 col-md-12 mt-md-0 mt-5">
											<div class="offer-card">
												<img src={ser1} alt="/"/>
												<div class="offer-content">
													<span class="title">50%<br/>Sale</span>
													<img src={star} class="rounded-0" alt="/"/>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">			
											<div class="dz-media video-bx1 mt-4">
												<img src={ser2} alt="/"/>
												<a  onClick={handleOpenModal} class="popup-youtube">
													<div class=" video-btn">
														<svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0.709318 2.07991C0.703817 0.454314 2.53706 -0.498418 3.86423 0.440304L24.3738 14.947C25.4952 15.7401 25.5017 17.4016 24.3866 18.2035L3.97574 32.8813C2.65517 33.8309 0.813587 32.8908 0.808083 31.2643L0.709318 2.07991Z" fill="black"></path>
														</svg>
													</div>
													<span class="title">PLAY VIDEO</span>
												</a>	
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-service5" role="tabpanel" aria-labelledby="v-pills-service5-tab" tabindex="0">
							<div class="row">
								<div class="col-lg-6 col-md-6 mb-md-0 mb-4">
									<div class="service-content-box">
										<div class="d-flex align-items-center mb-2">
											<svg id="Capa_1" enable-background="new 0 0 512.001 512.001" height="30" viewBox="0 0 512.001 512.001" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m90.724 241.811c-27.018 5.496-90.723 29.516-90.723 133.191 0 8.284 6.716 15 15 15s15-6.716 15-15c0-49.92 17.012-76.161 35.342-89.951-2.82 9.492-4.342 19.543-4.342 29.951v182c0 8.28 6.72 15 15 15h59.57c8.08 0 15.03-6.2 15.41-14.27.41-8.61-6.46-15.73-14.98-15.73h-9.33l20.49-62.83c.71-.11 1.42-.22 2.12-.35 27.16-4.86 46.66-28.96 46.7-56.55l.02-17.27c0-8.52 7.12-15.39 15.73-14.98 8.07.38 14.27 7.33 14.27 15.41v44.57h48.29l-45-180h-63.29c-29.526-.001-56.199 12.191-75.277 31.809z"></path><path d="m260.161 209.812 45.05 180.19h25.79v107c0 8.28 6.72 15 15 15h59.57c8.08 0 15.03-6.2 15.41-14.27.41-8.61-6.46-15.73-14.98-15.73h-10.86l25.43-103.42c.28-1.17.43-2.37.43-3.58v-91.97l-131.68-87.79c-7.35 8.099-17.63 13.509-29.16 14.57z"></path><path d="m497.001 150.001h-31c-8.22 0-15.03-6.61-15-14.83.09-24.89-20.13-45.17-45-45.17h-15v-15c0-8.23-6.64-14.99-14.87-15-41.42-.07-75.13 33.61-75.13 75 0 0-.01 31.3-.04 31.94l120.04 80.03v-6.97h46c24.85 0 45-20.15 45-45v-30c0-8.28-6.72-15-15-15z"></path><path d="m148.001 6.001c-4.97-6.63-14.37-7.97-21-3s-7.97 14.37-3 21l88.176 117.565 17.114 68.435h26.71c1.4 0 2.79-.06 4.16-.19l-10.2-40.81 39.36 26.24c6.85-7.54 11.18-17.43 11.64-28.3l-64.5-43z"></path></g></svg>
										<h5 class="ms-3 mb-0">Dog Emergency Services55555</h5>
										</div>	
										<p>Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
										<a href="#" class="btn btn-secondary">Add Service  
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
												<path d="M15.0375 13.0662C14.217 12.2892 13.13 11.8562 12 11.8562C10.87 11.8562 9.78297 12.2892 8.9625 13.0662L5.29875 16.5312C3.19875 18.44 4.71375 22.0887 7.54875 21.9462C9.08625 21.905 10.335 21.1175 11.9962 21.1475C13.7175 21.1175 14.9962 21.8112 16.5412 21.9462C19.3275 22.01 20.7675 18.4025 18.6975 16.5312L15.0375 13.0662Z" fill="white"></path>
												<path d="M21.345 7.97375C19.9125 7.6925 18.8175 9.28625 18.5325 10.6587C17.6775 14.9075 21.795 15.7175 22.7588 11.5962C23.1525 9.83 22.53 8.23625 21.345 7.97375Z" fill="white"></path>
												<path d="M15.2737 10.2688C16.6987 10.2688 17.8575 8.64876 17.8575 6.66126C17.715 1.87626 12.8325 1.87626 12.6937 6.66126C12.6937 8.64876 13.8525 10.2688 15.2737 10.2688Z" fill="white"></path>
												<path d="M5.4675 10.6587C5.18625 9.28625 4.0875 7.6925 2.655 7.97375C-8.34465e-07 8.645 1.125 14.3037 3.72 14.3187C5.19 14.27 5.86875 12.5637 5.4675 10.6587Z" fill="white"></path>
												<path d="M8.72625 10.2688C10.1475 10.2688 11.3063 8.64876 11.3063 6.66126C11.1675 1.87626 6.285 1.87626 6.1425 6.66126C6.1425 8.64876 7.30125 10.2688 8.72625 10.2688Z" fill="white"></path>
											</svg>
										</a>
									</div>			
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="row">
										<div class="col-lg-12 col-md-12 mt-md-0 mt-5">
											<div class="offer-card">
												<img src={ser1} alt="/"/>
												<div class="offer-content">
													<span class="title">50%<br/>Sale</span>
													<img src={star} class="rounded-0" alt="/"/>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">			
											<div class="dz-media video-bx1 mt-4">
												<img src={ser2} alt="/"/>
												<a   onClick={handleOpenModal} 	class="popup-youtube">
													<div class=" video-btn">
														<svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0.709318 2.07991C0.703817 0.454314 2.53706 -0.498418 3.86423 0.440304L24.3738 14.947C25.4952 15.7401 25.5017 17.4016 24.3866 18.2035L3.97574 32.8813C2.65517 33.8309 0.813587 32.8908 0.808083 31.2643L0.709318 2.07991Z" fill="black"></path>
														</svg>
													</div>
													<span class="title">PLAY VIDEO</span>
												</a>	
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ModalVideo 
          channel='youtube' 
          isOpen={isOpen} 
          videoId='ymU8htqPUoc' 
          onClose={() => setOpen(false)} 
        />
			</Container>
			
		</div>
		
	)
}
