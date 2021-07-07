import React, { Component } from "react";

export class AddOrganization extends Component {
  render() {
    return (
      <div className="app-main__inner">
        <div class="app-page-title">
          <div class="page-title-wrapper">
            <div class="page-title-heading">
              <div class="page-title-icon">
                <i class="lnr-picture text-danger"></i>
              </div>
              <div>
                Add Organization
                <div class="page-title-subheading">
                  Inline validation is very easy to implement using the
                  Architect Framework.
                </div>
              </div>
            </div>
            <div class="page-title-actions">
              <button
                type="button"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                class="btn-shadow mr-3 btn btn-dark"
                data-original-title="Example Tooltip"
              >
                <i class="fa fa-star"></i>
              </button>
              <div class="d-inline-block dropdown">
                <button
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="btn-shadow dropdown-toggle btn btn-info"
                >
                  <span class="btn-icon-wrapper pr-2 opacity-7">
                    <i class="fa fa-business-time fa-w-20"></i>
                  </span>
                  Buttons
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-inbox"></i>
                        <span>Inbox</span>
                        <div class="ml-auto badge badge-pill badge-secondary">
                          86
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-book"></i>
                        <span>Book</span>
                        <div class="ml-auto badge badge-pill badge-danger">
                          5
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-picture"></i>
                        <span>Picture</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        disabled=""
                        href="javascript:void(0);"
                        class="nav-link disabled"
                      >
                        <i class="nav-link-icon lnr-file-empty"></i>
                        <span>File Disabled</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h5 className="card-title">Bootstrap 4 Form Validation</h5>
            <form className="needs-validation" noValidate>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustomUsername">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom03">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    placeholder="City"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationCustom04">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom04"
                    placeholder="State"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationCustom05">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom05"
                    placeholder="Zip"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOrganization;
