"use client";
// import { ImageType, UploadedImageType } from "@/types/image";
import axios from "axios";
import Select from "react-select";
import SelectImage from "../../components/inputs/SelectImage";
import React, { useCallback, useEffect, useState } from "react";
import { LuAsterisk } from "react-icons/lu";
import toast from "react-hot-toast";
import firebaseApp from "../../../libs/firebase";
import geoData from "./geoData.json";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  FieldValues,
  SubmitHandler,
  Controller,
  useForm,
} from "react-hook-form";
import "../styles/styles.css";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import Container from "../../components/Container";
import { useRouter } from "next/navigation";

const ApplicationForm = () => {
  const [loanType, setLoanType] = useState("personal");
  const [isLoading, setIsLoading] = useState(false);
  const [isCustomerCreated, setIsCustomerCreated] = useState(false);
  const [cacDocument, setCacDocument] = useState();
  const [guarantorPassportImage2, setGuarantorPassportImage2] = useState();
  const [guarantorPassportImage1, setGuarantorPassportImage1] = useState();
  const [customerPassportImage, setCustomerPassportImage] = useState();
  const [customerIdentificationImage, setCustomerIdentificationImage] =
    useState();
  const [proofOfResidenceImage, setProofOfResidenceImage] = useState();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      alternatePhone: "",
      gender: "",
      dateOfBirth: "",
      nextOfKin: "",
      nextOfKinPhone: "",
      country: "",
      state: "",
      lga: "",
      address: "",
      netMonthlyIncome: "",
      purposeOfLoan: "",
      desiredLoanAmount: "",
      customerPassport: "",
      guarantorName1: "",
      guarantorPhone1: "",
      customerIdentification: "",
      proofOfResidence: "",
      guarantorPassport1: "",
      guarantorName2: "",
      guarantorPhone2: "",
      guarantorPassport2: "",
      cacDocument: "",
      comments: "",
      maritalStatus: "",
      businessName: "",
      businessType: "",
      businessPhone: "",
      businessAddress: "",
      businessEmail: "",
      cacNumber: "",
      howYouHeard: "",
      terms: "",
    },
  });
  const selectedCountry = watch("country");
  const selectedState = watch("state");

  useEffect(() => {
    setCustomValue("guarantorPassport1", guarantorPassportImage1);
  }, [guarantorPassportImage1]);

  useEffect(() => {
    setCustomValue("guarantorPassport2", guarantorPassportImage2);
  }, [guarantorPassportImage2]);
  useEffect(() => {
    setCustomValue("customerPassport", customerPassportImage);
  }, [customerPassportImage]);
  useEffect(() => {
    setCustomValue("cacDocument", cacDocument);
  }, [cacDocument]);
  useEffect(() => {
    setCustomValue("customerIdentification", customerIdentificationImage);
  }, [customerIdentificationImage]);
  useEffect(() => {
    setCustomValue("proofOfResidence", proofOfResidenceImage);
  }, [proofOfResidenceImage]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    let uploadedCustomerImage = "";
    let uploadedGuarantorImage1 = "";
    let uploadedGuarantorImage2 = "";
    let uploadedCacDocument = "";
    let uploadedCustomerIdentificationImage = "";
    let uploadedProofOfResidenceImage = "";

    console.log(data, "<<<<<<<<<<<<<<<<<<data");

    const handleImageUploads = async () => {
      toast("Sending your application, please wait...");
      try {
        // for (const item of data.images) {
        if (data.customerPassport) {
          const fileName =
            new Date().getTime() + "-" + data.customerPassport.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `customer/${fileName}`);
          const uploadTask = uploadBytesResumable(
            storageRef,
            data.customerPassport
          );

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log("Error uploading customer image", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedCustomerImage = downloadURL;

                    console.log("File available at", downloadURL);
                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    reject(error);
                  });
              }
            );
          });
        }

        if (data.guarantorPassport1) {
          const fileName =
            new Date().getTime() + "-" + data.guarantorPassport1.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `customer/${fileName}`);
          const uploadTask = uploadBytesResumable(
            storageRef,
            data.guarantorPassport1
          );

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log("Error uploading Guarantor Passport 1", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedGuarantorImage1 = downloadURL;

                    console.log("File available at", downloadURL);
                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    reject(error);
                  });
              }
            );
          });
        }

        if (data.guarantorPassport2) {
          const fileName =
            new Date().getTime() + "-" + data.guarantorPassport2.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `customer/${fileName}`);
          const uploadTask = uploadBytesResumable(
            storageRef,
            data.guarantorPassport2
          );

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log("Error uploading Guarantor Passport 2", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedGuarantorImage2 = downloadURL;

                    console.log("File available at", downloadURL);
                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    reject(error);
                  });
              }
            );
          });
        }

        if (data.customerIdentification) {
          const fileName =
            new Date().getTime() + "-" + data.customerIdentification.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `customer/${fileName}`);
          const uploadTask = uploadBytesResumable(
            storageRef,
            data.customerIdentification
          );

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log(
                  "Error uploading customer identification image",
                  error
                );
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedCustomerIdentificationImage = downloadURL;

                    console.log("File available at", downloadURL);
                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    reject(error);
                  });
              }
            );
          });
        }
        if (data.proofOfResidence) {
          const fileName =
            new Date().getTime() + "-" + data.proofOfResidence.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `customer/${fileName}`);
          const uploadTask = uploadBytesResumable(
            storageRef,
            data.proofOfResidence
          );

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log(
                  "Error uploading customer identification image",
                  error
                );
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedProofOfResidenceImage = downloadURL;

                    console.log("File available at", downloadURL);
                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    reject(error);
                  });
              }
            );
          });
        }

        if (data.cacDocument) {
          const fileName = new Date().getTime() + "-" + data.cacDocument.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `customer/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, data.cacDocument);

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log("Error uploading Cac Document", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                    uploadedCacDocument = downloadURL;

                    console.log("File available at", downloadURL);
                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    reject(error);
                  });
              }
            );
          });
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Error handling image uploads", error);
        return toast.error("Error handling image uploads");
      }
    };

    await handleImageUploads();

    const userData = {
      ...data,
      customerPassport: uploadedCustomerImage,
      guarantorPassport1: uploadedGuarantorImage1,
      guarantorPassport2: uploadedGuarantorImage2,
      cacDocument: uploadedCacDocument,
      customerIdentification: uploadedCustomerIdentificationImage,
      proofOfResidence: uploadedProofOfResidenceImage,
      role: "CUSTOMER",
      websiteReg: true,
    };

    console.log(userData, "<<<<<<<<<<<<<<<<user data");

    axios
      .post("/api/register-customer", userData)
      .then(() => {
        toast.success("Application successfully sent");
        setIsCustomerCreated(true);
        router.refresh();
      })
      .catch((error) => {
        console.error("Error sending application:", error);

        toast.error(
          "Something went wrong while sending your application. Try again!"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    if (isCustomerCreated) {
      reset();
      setGuarantorPassportImage2(null);
      setCustomerPassportImage(null);
      setGuarantorPassportImage1(null);
      setProofOfResidenceImage(null);
      setCustomerIdentificationImage(null);
      setCacDocument(null);
      setIsCustomerCreated(false);
    }
  }, [isCustomerCreated]);

  const newAccountOptions = {
    username: { required: "Username is required" },
    email: { required: "Email is required" },
    firstname: { required: "Firstname is required" },
    lastname: { required: "Lastname is required" },
    phone: { required: "Phone number is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  const addCustomerPassportToState = useCallback((value) => {
    setCustomerPassportImage(value);
  }, []);

  const removeCustomerPassportFromState = useCallback((value) => {
    setCustomerPassportImage(null);
  }, []);

  const addCustomerIdentificationToState = useCallback((value) => {
    setCustomerIdentificationImage(value);
  }, []);

  const removeCustomerIdentificationFromState = useCallback((value) => {
    setCustomerIdentificationImage(null);
  }, []);
  const addProofOfResidenceToState = useCallback((value) => {
    setProofOfResidenceImage(value);
  }, []);

  const removeProofOfResidenceFromState = useCallback((value) => {
    setProofOfResidenceImage(null);
  }, []);

  const addGuarantorPassport1ToState = useCallback((value) => {
    setGuarantorPassportImage1(value);
  }, []);

  const removeGuarantorPassport1FromState = useCallback((value) => {
    setGuarantorPassportImage1(null);
  }, []);
  const addGuarantorPassport2ToState = useCallback((value) => {
    setGuarantorPassportImage2(value);
  }, []);

  const removeGuarantorPassport2FromState = useCallback((value) => {
    setGuarantorPassportImage2(null);
  }, []);

  const addCacDocumentToState = useCallback((value) => {
    setCacDocument(value);
  }, []);

  const removeCacDocumentFromState = useCallback((value) => {
    setCacDocument(null);
  }, []);

  return (
    <div className="w-full my-8 md:my-16 lg:my-32">
      <Container>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 mb-8">
            <div className="relative">
              <button
                onClick={() => setLoanType("personal")}
                className={clsx(
                  "bg-[#FFB600] relative px-4 py-2 rounded-md font-medium ",
                  loanType === "personal" && "ring-2 ring-red-600 ring-inset"
                )}
              >
                Personal Application
              </button>
              {loanType === "personal" && (
                <span className="absolute flex h-3 w-3 top-[-5px] right-[-5px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setLoanType("business")}
                className={clsx(
                  "bg-[#201f1f] relative shadow text-[#f7f7f7] px-4 py-2 rounded-md font-medium  ",
                  loanType === "business" && "ring-2 ring-red-600 ring-inset"
                )}
              >
                Business Application
              </button>
              {loanType === "business" && (
                <span className="absolute flex h-3 w-3 top-[-5px] right-[-5px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>
          </div>
          <div className="w-full lg:w-[50%] h-[50rem] shadow-lg  py-6 rounded-lg">
            <div className="overflow-y-auto h-full flex flex-col gap-2  scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-green-500 scrollbar-track-gray-400">
              <form className="flex flex-col px-3 md:px-6 gap-4">
                <h3 className="text-xl font-medium ">Personal Information</h3>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Firstname</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="firstname"
                    disabled={isLoading}
                    {...register("firstname", newAccountOptions.firstname)}
                    type="text"
                    name="firstname"
                    required
                    placeholder="Firstname"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["firstname"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Lastname</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="lastname"
                    disabled={isLoading}
                    {...register("lastname", newAccountOptions.lastname)}
                    type="text"
                    name="lastname"
                    required
                    placeholder="Lastname"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["lastname"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Email</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="email"
                    disabled={isLoading}
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["email"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                  <em>{errors["email"] && "Email is required"}</em>
                </div>
                <div>
                  <label className="mb-1 text-sm flex items-center">
                    <span>Gender</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div>
                    <Controller
                      control={control}
                      name="gender"
                      rules={{ required: "Gender is required" }}
                      render={({ field }) => (
                        <div className="flex flex-col gap-1">
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="male"
                                aria-label="Male"
                              />
                              <span className="text-sm ">Male</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="female"
                                aria-label="Female"
                              />
                              <span className="text-sm ">Female</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="other"
                                aria-label="Other"
                              />
                              <span className="text-sm ">Other</span>
                            </label>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 text-sm flex items-center">
                    <span>Marital Status</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div>
                    <Controller
                      control={control}
                      name="maritalStatus"
                      rules={{ required: "Gender is required" }}
                      render={({ field }) => (
                        <div className="flex flex-col gap-1">
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="single"
                                aria-label="Single"
                              />
                              <span className="text-sm ">Single</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="married"
                                aria-label="Married"
                              />
                              <span className="text-sm ">Married</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="divorced"
                                aria-label="Divorced"
                              />
                              <span className="text-sm ">Divorced</span>
                            </label>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Primary Phone Number</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                      <Image
                        src="/nigeria.png"
                        alt="nigerian flag"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      <span className="text-sm">+234</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      id="phone"
                      disabled={isLoading}
                      {...register("phone", { required: true })}
                      type="text"
                      name="phone"
                      className={clsx(
                        "bg-white text-sm border-none outline-none h-8 w-full",
                        errors["phone"]
                          ? "border-rose-400 focus:border-rose-400"
                          : "border-slate-300 focus:border-slate-300"
                      )}
                      placeholder="Primary phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Alternate Phone Number</span>
                    {/* <LuAsterisk color="#D22B2B" /> */}
                  </label>
                  <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                      <Image
                        src="/nigeria.png"
                        alt="nigerian flag"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      <span className="text-sm">+234</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      id="alternatePhone"
                      disabled={isLoading}
                      {...register("alternatePhone", { required: false })}
                      type="text"
                      name="alternatePhone"
                      required
                      className={clsx(
                        "bg-white text-sm border-none outline-none h-8 w-full"
                      )}
                      placeholder="Alternate phone number"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="block">
                      <SelectImage
                        item={null}
                        addImageToState={addCustomerIdentificationToState}
                        removeImageFromState={
                          removeCustomerIdentificationFromState
                        }
                        isUserCreated={false}
                        label="Customer Identification"
                      />
                    </div>
                  </div>
                  <p className="text-xs">
                    NIN, Driver&apos;s licence or passport
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="block">
                      <SelectImage
                        item={null}
                        addImageToState={addProofOfResidenceToState}
                        removeImageFromState={removeProofOfResidenceFromState}
                        isUserCreated={false}
                        label="Proof of Residence"
                      />
                    </div>
                  </div>
                  <p className="text-xs">Utility bill or rent receipt</p>
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Date Of Birth</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="dateOfBirth"
                    disabled={isLoading}
                    {...register("dateOfBirth", { required: true })}
                    type="date"
                    name="dateOfBirth"
                    required
                    className={clsx(
                      "bg-white text-sm  border  w-60 border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["dateOfBirth"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Next of Kin name</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="nextOfKin"
                    disabled={isLoading}
                    {...register("nextOfKin", { required: true })}
                    name="nextOfKin"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["nextOfKin"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                    type="text"
                    placeholder="Next of kin name"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Next of Kin Phone Nnumber</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                      <Image
                        src="/nigeria.png"
                        alt="nigerian flag"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      <span className="text-sm">+234</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      id="nextOfKinPhone"
                      disabled={isLoading}
                      {...register("nextOfKinPhone", { required: true })}
                      name="nextOfKinPhone"
                      required
                      className={clsx(
                        "bg-white text-sm border-none outline-none h-8 w-full",
                        errors["nextOfKinPhone"]
                          ? "border-rose-400 focus:border-rose-400"
                          : "border-slate-300 focus:border-slate-300"
                      )}
                      type="text"
                      placeholder="Next of kin phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 text-sm flex items-center">
                    <span>How did you hear about us?</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div>
                    <Controller
                      control={control}
                      name="howYouHeard"
                      rules={{ required: "Select an option" }}
                      render={({ field }) => (
                        <div className="flex flex-col gap-1">
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="google"
                                aria-label="Google"
                              />
                              <span className="text-sm ">Google</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="instagram"
                                aria-label="instagram"
                              />
                              <span className="text-sm ">Instagram</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="facebook"
                                aria-label="Facebook"
                              />
                              <span className="text-sm ">Facebook</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="referral"
                                aria-label="Referral"
                              />
                              <span className="text-sm ">Referral</span>
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                {...field}
                                value="other"
                                aria-label="Other"
                              />
                              <span className="text-sm ">Other</span>
                            </label>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>
                {/* country */}

                <div>
                  <label className="text-sm flex items-center">
                    <span>Country</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={geoData.map((country) => ({
                          label: country.name,
                          value: country.iso2,
                        }))}
                        isClearable
                        placeholder="Select country"
                        onChange={(selectedOption) => {
                          setValue("country", selectedOption);
                          setValue("state", null); // Reset state on country change
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>State</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <Controller
                    name="state"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={
                          (
                            geoData.find(
                              (country) =>
                                country.iso2 === selectedCountry?.value
                            ) || {}
                          ).states?.map((state) => ({
                            label: state.name,
                            value: state.state_code,
                          })) || []
                        }
                        isClearable
                        placeholder="Select state"
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>LGA</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <Controller
                    name="lga"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={
                          (
                            geoData.find(
                              (country) =>
                                country.iso2 === selectedCountry?.value
                            ) || {}
                          ).states
                            ?.find(
                              (state) =>
                                state.state_code === selectedState?.value
                            )
                            ?.cities?.map((city) => ({
                              label: city.name,
                              value: city.id,
                            })) || []
                        }
                        isClearable
                        placeholder="Select LGA"
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>House Address</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="address"
                    disabled={isLoading}
                    {...register("address", { required: true })}
                    type="text"
                    name="address"
                    required
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["address"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                    placeholder="Address"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Net Monthly Income</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center justify-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1  px-4 bg-[#f7f7f7] ">
                      <span>₦</span>
                    </div>

                    <input
                      id="netMonthlyIncome"
                      disabled={isLoading}
                      {...register("netMonthlyIncome", { required: true })}
                      type="number"
                      name="netMonthlyIncome"
                      required
                      placeholder="Net Monthly Income"
                      className={clsx(
                        "bg-white text-sm border-none outline-none h-8 w-full",
                        errors["netMonthlyIncome"]
                          ? "border-rose-400 focus:border-rose-400"
                          : "border-slate-300 focus:border-slate-300"
                      )}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>How much would you like to borrow?</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center justify-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1  px-4 bg-[#f7f7f7] ">
                      <span>₦</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      id="desiredLoanAmount"
                      disabled={isLoading}
                      {...register("desiredLoanAmount", { required: true })}
                      type="number"
                      name="desiredLoanAmount"
                      required
                      className={clsx(
                        "bg-white text-sm border-none outline-none h-8 w-full",
                        errors["desiredLoanAmount"]
                          ? "border-rose-400 focus:border-rose-400"
                          : "border-slate-300 focus:border-slate-300"
                      )}
                      placeholder="How much would you like to borrow"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Purpose of Loan</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="purposeOfLoan"
                    disabled={isLoading}
                    {...register("purposeOfLoan", { required: true })}
                    type="text"
                    name="purposeOfLoan"
                    required
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["purposeOfLoan"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                    placeholder="Purpose of Loan"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="block">
                      <SelectImage
                        item={null}
                        addImageToState={addCustomerPassportToState}
                        removeImageFromState={removeCustomerPassportFromState}
                        isUserCreated={false}
                        label="Customer Passport"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Name of Guarantor 1</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="guarantorName1"
                    disabled={isLoading}
                    {...register("guarantorName1", { required: true })}
                    type="text"
                    name="guarantorName1"
                    placeholder="Guarantor Name 1"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["guarantorName1"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Phone number of Guarantor 1</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="guarantorPhone1"
                    disabled={isLoading}
                    {...register("guarantorPhone1", { required: true })}
                    type="text"
                    name="guarantorPhone1"
                    placeholder="Phone number of Guarantor 1"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["guarantorPhone1"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="block">
                      <SelectImage
                        item={null}
                        addImageToState={addGuarantorPassport1ToState}
                        removeImageFromState={removeGuarantorPassport1FromState}
                        isUserCreated={false}
                        label="Guarantor 1 Passport"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Name of Guarantor 2</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="guarantorName2"
                    disabled={isLoading}
                    {...register("guarantorName2", { required: true })}
                    type="text"
                    name="guarantorName2"
                    placeholder="Guarantor Name 2"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["guarantorName2"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Phone number of Guarantor 2</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    id="guarantorPhone2"
                    disabled={isLoading}
                    {...register("guarantorPhone2", { required: true })}
                    type="text"
                    name="guarantorPhone2"
                    placeholder="Phone number of Guarantor 2"
                    className={clsx(
                      "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                      errors["guarantorPhone2"]
                        ? "border-rose-400 focus:border-rose-400"
                        : "border-slate-300 focus:border-slate-300"
                    )}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="block">
                      <SelectImage
                        item={null}
                        addImageToState={addGuarantorPassport2ToState}
                        removeImageFromState={removeGuarantorPassport2FromState}
                        isUserCreated={false}
                        label="Guarantor 2 Passport"
                      />
                    </div>
                  </div>
                </div>

                {loanType === "business" && (
                  <>
                    <h3 className="text-xl font-medium ">
                      Business Information
                    </h3>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business name</span>

                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <input
                        id="businessName"
                        disabled={isLoading}
                        {...register("businessName", {
                          required: loanType === "business",
                        })}
                        type="text"
                        name="businessName"
                        required
                        placeholder="Business Name"
                        className={clsx(
                          "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                          errors["businessName"]
                            ? "border-rose-400 focus:border-rose-400"
                            : "border-slate-300 focus:border-slate-300"
                        )}
                      />
                    </div>

                    <div>
                      <label className="text-sm mb-3 flex items-center">
                        <span>Business type</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <div>
                        <Controller
                          control={control}
                          name="businessType"
                          rules={{ required: loanType === "business" }}
                          render={({ field }) => (
                            <>
                              <div>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    {...field}
                                    value="Sole Proprietorship"
                                  />
                                  <span className="text-sm ">
                                    Sole Proprietorship
                                  </span>
                                </label>
                              </div>
                              <div>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    {...field}
                                    value="Partnership"
                                  />
                                  <span className="text-sm ">Partnership</span>
                                </label>
                              </div>
                              <div>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    {...field}
                                    value="Limited liability company"
                                  />
                                  <span className="text-sm ">
                                    Limited liability company
                                  </span>
                                </label>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business Address</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <input
                        id="businessAddress"
                        disabled={isLoading}
                        {...register("businessAddress", {
                          required: loanType === "business",
                        })}
                        type="text"
                        name="businessAddress"
                        placeholder="Business address"
                        className={clsx(
                          "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                          errors["businessAddress"]
                            ? "border-rose-400 focus:border-rose-400"
                            : "border-slate-300 focus:border-slate-300"
                        )}
                      />
                    </div>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business Phone Number</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                        <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                          <Image
                            src="/nigeria.png"
                            alt="nigerian flag"
                            height={20}
                            width={20}
                            className="object-contain"
                          />
                          <span className="text-sm">+234</span>
                        </div>

                        {/* <MdOutlineEmail color="#979797" /> */}
                        <input
                          id="businessPhone"
                          disabled={isLoading}
                          {...register("businessPhone", {
                            required: loanType === "business",
                          })}
                          type="text"
                          name="businessPhone"
                          required
                          className={clsx(
                            "bg-white text-sm border-none outline-none h-8 w-full",
                            errors["businessPhone"]
                              ? "border-rose-400 focus:border-rose-400"
                              : "border-slate-300 focus:border-slate-300"
                          )}
                          placeholder="Business phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business Email</span>
                        {/* <LuAsterisk color="#D22B2B" /> */}
                      </label>
                      <input
                        id="businessEmail"
                        disabled={isLoading}
                        {...register("businessEmail", { required: false })}
                        type="email"
                        name="businessEmail"
                        required
                        placeholder="Business Email"
                        className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm flex items-center">
                        <span>CAC registration number</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <input
                        id="cacNumber"
                        disabled={isLoading}
                        {...register("cacNumber", {
                          required: loanType === "business",
                        })}
                        type="text"
                        name="cacNumber"
                        required
                        placeholder="CAC Number"
                        className={clsx(
                          "bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none",
                          errors["cacNumber"]
                            ? "border-rose-400 focus:border-rose-400"
                            : "border-slate-300 focus:border-slate-300"
                        )}
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div className="block">
                          <SelectImage
                            item={null}
                            addImageToState={addCacDocumentToState}
                            removeImageFromState={removeCacDocumentFromState}
                            isUserCreated={false}
                            label="CAC Document"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="text-sm flex items-center">
                    <span>Your Questions or Comments</span>
                  </label>
                  <textarea
                    id="comments"
                    disabled={isLoading}
                    {...register("comments", { required: false })}
                    name="comments"
                    className="bg-white text-sm h-20 border  w-full border-solid border-[#d9d9d980]  px-2 py-2 rounded-md outline-none"
                    type="text"
                    style={{
                      resize: "none",
                    }}
                    placeholder="Any questions or comments"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm flex items-center">
                    <span>Terms and Conditions</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>

                  <div className="flex  items-center gap-3 ">
                    <input
                      id="terms"
                      disabled={isLoading}
                      {...register("terms", {
                        required: true,
                      })}
                      name="terms"
                      type="checkbox"
                      className="w-4 h-4 rounded !text-[#FFB600]  border-2   hover:ring-0 focus:ring-0   "
                    />
                    <label htmlFor="terms" className="text-sm select-none">
                      I have read and accept the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <div>
                    {errors["terms"] && (
                      <em className="text-sm text-rose-400">
                        Read and agree to the terms and conditions
                      </em>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center my-4">
                  <button
                    disabled={isLoading}
                    onClick={handleSubmit(onSubmit)}
                    className="flex items-center font-semibold gap-3 px-8 py-2 border bg-[#FFB600] shadow rounded-3xl hover:bg-[#282e52] hover:border-[#282e52] hover:text-[#f7f7f7]"
                  >
                    {isLoading ? (
                      <span>Submitting...</span>
                    ) : (
                      <span>Apply</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplicationForm;
