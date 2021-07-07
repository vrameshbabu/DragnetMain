import React, { Component } from "react";
import { Link } from "react-router-dom";
class ViewOrganization extends Component {
  render() {
    return (
      <div>
        <div className="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div class="page-title-icon">
                  <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                </div>
                <div>
                  Organization Details
                  {/* <div class="page-title-subheading">
                    Tables are the backbone of almost all web applications.
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div classname="row" style={{marginBottom:"15px"}}>
            <div className="col-md-6">
              <div className="input-group">
                <input
                  placeholder="Search"
                  type="text"
                  class="mb-2 form-control-sm form-control"
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div class="row">
            <div class="col-lg-12">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">view Organization</h5>
                  <div class="col-md-6">
                    <div class="input-group">
                      <input
                        placeholder="Search"
                        type="text"
                        class="mb-2 form-control-sm form-control"
                      />
                      <div class="input-group-btn">
                        <button class="btn btn-default" type="submit">
                          <i class="pe-7s-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-6 col-md-4">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">Organization Details</h5>
                  <div class="table-responsive">
                    <table class="mb-0 table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Organization Name</th>
                          <th>Type</th>
                          <th>Short Name</th>
                          <th>Formation Date</th>
                          <th>Frontal Organization</th>
                          <th>Address</th>
                          <th>Created by</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <a>Aam Aadmi Party</a>
                          </td>
                          <td>Political</td>
                          <td>AAP</td>
                          <td></td>
                          <td></td>
                          <td>Hyderabad</td>
                          <td>Admin</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Adima Girijana Kolam Seva Sangham</td>
                          <td>Caste </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>intadbd</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                          <td className="">
                            <div className="row">
                              <div className="col-md-6">
                                <Link className="edit" data-toggle="modal">
                                  <i
                                    class="fa fa-edit"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  ></i>
                                </Link>
                              </div>
                              <div className="col-md-6">
                                <Link className="delete" data-toggle="modal">
                                  <i
                                    class="fa fa-trash"
                                    data-toggle="tooltip"
                                    title="Delete"
                                    style={{ color: "#c52828d1" }}
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewOrganization;
