import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";

const OperatorRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    operatorId: 0,
    name: "",
    contact: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    operatorId: yup.number().required("required").positive().integer(),
    name: yup.string().required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
  });

  useEffect(() => {
    const getDeviceData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/device/");
      setDeviceOption(res.data);
    };
    getDeviceData();
  }, []);

  return (
    <>
      {/* <Box m="76px 20px 20px 235px"> */}
      <Formik
        //onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(data, { resetForm }) => {
          data.counterId = Number(data.counterId);
          //console.log("golmal" + data.counterId);
          console.log(data);
          let formData = new FormData();
          formData.append("counterId", data.counterId);
          formData.append("deviceId", data.deviceId);
          formData.append("macId", data.macId);
          formData.append("deviceTypeId", data.deviceTypeId);

          axios({
            method: "POST",
            url: "http://192.168.29.5:8089/device/add",
            data: data,
          })
            .then(function (res) {
              console.log(res);
              alert("Successfully signed up!");
            })
            .catch(function (res) {
              console.log(res);
            });
          resetForm({ data: "" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ margin: "55px 20px 20px 20px" }}>
              <Grid
                container
                //rowSpacing={2}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ margin: "50px, 5px" }}
              >
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Operator Id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.operatorId}
                    name="operatorId"
                    error={!!touched.operatorId && !!errors.operatorId}
                    helperText={touched.operatorId && errors.operatorId}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Operator Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" justifyContent="end" mt="20px" mr="22px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "25%", borderRadius: "16px" }}
              >
                Create New Device
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {/* </Box> */}
    </>
  );
};

export default OperatorRegistration;
