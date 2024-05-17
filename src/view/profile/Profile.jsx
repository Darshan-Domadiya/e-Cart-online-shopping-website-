import React, { useEffect, useState } from "react";
import "./profile.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import profileImage from "/Images/profileImage.png";
import editLogo from "/Images/editLogo.png";
import axios from "axios";
import { updateProfileApi, userDetailApi } from "../../api/Constant";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  const [profileDetail, setProfileDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getProfileDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(userDetailApi, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.status === 200) {
        setProfileDetail(response.data.result);
        // console.log("Successfull user details", response.data.result);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error in profile details", error);
    }
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.post(
        updateProfileApi,
        {
          name: profileDetail.name,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        toast.success("Your profile has been updated successfully!", {
          position: "top-right",
        });
        // console.log("Successfull updated profile", response.data.result);
      }
    } catch (error) {
      console.log("Error while updating profile", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        profileDetail && (
          <>
            <Container className="mt-3 ">
              <div className=" d-flex align-items-center justify-content-center">
                <span className="fs-1 fw-medium ">Your Profile</span>
              </div>
              <hr className="horizontal-line" />
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
              <Row className="profile-row">
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <div className="profileImage-div ">
                    <img
                      src={profileDetail.avatar_url}
                      className="img-fluid profileImage"
                    />
                    <div className="editIcon">
                      <img src={editLogo} height="15px" width="15px" />
                    </div>
                  </div>
                </div>
                {profileDetail && (
                  <div className="mt-4">
                    <Form>
                      <Form.Label className="fw-bold mx-2 ">
                        Full Name<sup className="text-danger mx-1">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="profile-input px-3"
                        type="text"
                        name="fullName"
                        value={profileDetail.name}
                        onChange={(e) =>
                          setProfileDetail({
                            ...profileDetail,
                            name: e.target.value,
                          })
                        }
                        autoComplete="off"
                      />

                      <Form.Label className="fw-bold mt-3 mx-2 ">
                        Phone<sup className="text-danger mx-1">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="profile-input px-3"
                        type="text"
                        name="phone"
                        value={profileDetail.mobile}
                        autoComplete="off"
                        disabled
                      />
                      <Form.Label className="fw-bold mt-3 mx-2">
                        Email<sup className="text-danger mx-1">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="profile-input px-3"
                        type="text"
                        name="email"
                        value={profileDetail.email}
                        autoComplete="off"
                        disabled
                      />
                    </Form>
                    <button
                      className="btn profile-button w-100 mt-4 fw-bold"
                      onClick={handleUpdateProfile}
                    >
                      Update & Save
                    </button>

                    <div className=" mt-4 d-flex align-items-center justify-content-center gap-3">
                      <span className="manage-address fw-bold fs-6">
                        Manage Addresses
                      </span>
                      |
                      <span className="fw-medium deleteAccount-button">
                        Delete Account
                      </span>
                    </div>
                  </div>
                )}
              </Row>
            </Container>
          </>
        )
      )}
    </>
  );
};

export default Profile;
