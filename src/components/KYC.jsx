import React from 'react'

export default function KYC() {
  return (
      <div style={{marginTop:"100px"}}>
      <section className="wizard-section">
		<div className="row no-gutters">

			<div className="col-lg-10 col-md-10">
				<div className="form-wizard">
					<form action="" method="post" role="form">
						<div className="form-wizard-header">
							<ul className="list-unstyled form-wizard-steps clearfix">
								<li className="active"><span>1</span></li>
								<li><span>2</span></li>
								<li><span>3</span></li>
								<li><span>4</span></li>
							</ul>
						</div>
						<fieldset className="wizard-fieldset show" style={{width:"80%",marginLeft:"10%"}}>
							<h5>Personal Information</h5>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="fname" />
								<label for="fname" className="wizard-form-text-label">First Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="lname" />
								<label for="lname" className="wizard-form-text-label">Last Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								Gender
								<div className="wizard-form-radio">
									<input name="radio-name" id="radio1" type="radio" />
									<label for="radio1">Male</label>
								</div>
								<div className="wizard-form-radio">
									<input name="radio-name" id="radio2" type="radio" />
									<label for="radio2">Female</label>
								</div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="zcode" />
								<label for="zcode" className="wizard-form-text-label">Zip Code*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group clearfix">
								<a href="javascript:;" className="form-wizard-next-btn float-right">Next</a>
							</div>
						</fieldset>	
						<fieldset className="wizard-fieldset">
							<h5>Account Information</h5>
							<div className="form-group">
								<input type="email" className="form-control wizard-required" id="email" />
								<label for="email" className="wizard-form-text-label">Email*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="username" />
								<label for="username" className="wizard-form-text-label">User Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								<input type="password" className="form-control wizard-required" id="pwd" />
								<label for="pwd" className="wizard-form-text-label">Password*</label>
								<div className="wizard-form-error"></div>
								<span className="wizard-password-eye"><i className="far fa-eye"></i></span>
							</div>
							<div className="form-group">
								<input type="password" className="form-control wizard-required" id="cpwd" />
								<label for="cpwd" className="wizard-form-text-label">Confirm Password*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group clearfix">
								<a href="javascript:;" className="form-wizard-previous-btn float-left">Previous</a>
								<a href="javascript:;" className="form-wizard-next-btn float-right">Next</a>
							</div>
						</fieldset>	
						<fieldset className="wizard-fieldset">
							<h5>Bank Information</h5>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="bname" />
								<label for="bname" className="wizard-form-text-label">Bank Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="brname" />
								<label for="brname" className="wizard-form-text-label">Branch Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="acname" />
								<label for="acname" className="wizard-form-text-label">Account Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="acon" />
								<label for="acon" className="wizard-form-text-label">Account Number*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="form-group clearfix">
								<a href="javascript:;" className="form-wizard-previous-btn float-left">Previous</a>
								<a href="javascript:;" className="form-wizard-next-btn float-right">Next</a>
							</div>
						</fieldset>	
						<fieldset className="wizard-fieldset">
							<h5>Payment Information</h5>
							<div className="form-group">
								Payment Type
								<div className="wizard-form-radio">
									<input name="radio-name" id="mastercard" type="radio" />
									<label for="mastercard">Master Card</label>
								</div>
								<div className="wizard-form-radio">
									<input name="radio-name" id="visacard" type="radio" />
									<label for="visacard">Visa Card</label>
								</div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control wizard-required" id="honame" />
								<label for="honame" className="wizard-form-text-label">Holder Name*</label>
								<div className="wizard-form-error"></div>
							</div>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="form-group">
										<input type="text" className="form-control wizard-required" id="cardname" />
										<label for="cardname" className="wizard-form-text-label">Card Number*</label>
										<div className="wizard-form-error"></div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="form-group">
										<input type="text" className="form-control wizard-required" id="cvc" />
										<label for="cvc" className="wizard-form-text-label">CVC*</label>
										<div className="wizard-form-error"></div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">Expiry Date</div>
								<div className="col-lg-4 col-md-4 col-sm-4">
									<div className="form-group">
										<select className="form-control">
											<option value="">Date</option>
											<option value="">1</option>
											<option value="">2</option>
											<option value="">3</option>
											<option value="">4</option>
											<option value="">5</option>
											<option value="">6</option>
											<option value="">7</option>
											<option value="">8</option>
											<option value="">9</option>
											<option value="">10</option>
											<option value="">11</option>
											<option value="">12</option>
											<option value="">13</option>
											<option value="">14</option>
											<option value="">15</option>
											<option value="">16</option>
											<option value="">17</option>
											<option value="">18</option>
											<option value="">19</option>
											<option value="">20</option>
											<option value="">21</option>
											<option value="">22</option>
											<option value="">23</option>
											<option value="">24</option>
											<option value="">25</option>
											<option value="">26</option>
											<option value="">27</option>
											<option value="">28</option>
											<option value="">29</option>
											<option value="">30</option>
											<option value="">31</option>
										</select>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-4">
									<div className="form-group">
										<select className="form-control">
											<option value="">Month</option>
											<option value="">jan</option>
											<option value="">Feb</option>
											<option value="">March</option>
											<option value="">April</option>
											<option value="">May</option>
											<option value="">June</option>
											<option value="">Jully</option>
											<option value="">August</option>
											<option value="">Sept</option>
											<option value="">Oct</option>
											<option value="">Nov</option>
											<option value="">Dec</option>	
										</select>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-4">
									<div className="form-group">
										<select className="form-control">
											<option value="">Years</option>
											<option value="">2019</option>
											<option value="">2020</option>
											<option value="">2021</option>
											<option value="">2022</option>
											<option value="">2023</option>
											<option value="">2024</option>
											<option value="">2025</option>
											<option value="">2026</option>
											<option value="">2027</option>
											<option value="">2028</option>
											<option value="">2029</option>
											<option value="">2030</option>
											<option value="">2031</option>
											<option value="">2032</option>
											<option value="">2033</option>
											<option value="">2034</option>
											<option value="">2035</option>
											<option value="">2036</option>
											<option value="">2037</option>
											<option value="">2038</option>
											<option value="">2039</option>
											<option value="">2040</option>	
										</select>
									</div>
								</div>
							</div>
							<div className="form-group clearfix">
								<a href="javascript:;" className="form-wizard-previous-btn float-left">Previous</a>
								<a href="javascript:;" className="form-wizard-submit float-right">Submit</a>
							</div>
						</fieldset>	
					</form>
				</div>
			</div>
		</div>
	</section></div>
  )
}